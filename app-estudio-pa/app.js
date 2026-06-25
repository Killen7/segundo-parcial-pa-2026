// Estado global de la app
const AppState = {
  currentView: 'dashboard',
  currentExam: null,
  flashcardIndex: 0,
  flashcardFlipped: false,
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  theme: localStorage.getItem('pa-theme') || 'light',
  checklist: JSON.parse(localStorage.getItem('pa-checklist') || '{}'),
  labState: {
    scenarioId: null,
    objects: [], // { name, x, y }
    messages: []
  },
  tutorialState: {
    selectedId: null,
    activeTab: 'letra', // 'letra' | 'solucion' | 'paso'
    sceneMode: false,
    currentStep: 0
  }
};

const content = document.getElementById('content');
const pageTitle = document.getElementById('pageTitle');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const themeToggle = document.getElementById('themeToggle');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  setupNavigation();
  setupMobileMenu();
  setupThemeToggle();
  renderView('dashboard');
});

function applyTheme() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
  themeToggle.textContent = AppState.theme === 'dark' ? '☀️' : '🌙';
}

function setupThemeToggle() {
  themeToggle.addEventListener('click', () => {
    AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('pa-theme', AppState.theme);
    applyTheme();
  });
}

function setupNavigation() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      setActiveNav(view);
      renderView(view);
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
      }
    });
  });
}

function setupMobileMenu() {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 &&
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

function setActiveNav(view) {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
}

function renderView(view) {
  AppState.currentView = view;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  switch (view) {
    case 'dashboard':
      pageTitle.textContent = 'Dashboard';
      renderDashboard();
      break;
    case 'exams':
      pageTitle.textContent = AppState.currentExam ? AppState.currentExam.title : 'Exámenes';
      renderExams();
      break;
    case 'patterns':
      pageTitle.textContent = 'Patrones Recurrentes';
      renderPatterns();
      break;
    case 'tutoriales':
      pageTitle.textContent = 'Paso a Paso';
      renderTutoriales();
      break;
    case 'flashcards':
      pageTitle.textContent = 'Flashcards';
      renderFlashcards();
      break;
    case 'quiz':
      pageTitle.textContent = 'Quiz';
      renderQuiz();
      break;
    case 'checklist':
      pageTitle.textContent = 'Checklist de Estudio';
      renderChecklist();
      break;
  }
}

// ---------- DASHBOARD ----------
function renderDashboard() {
  const checkedCount = Object.values(AppState.checklist).filter(Boolean).length;
  const totalCheck = STUDY_DATA.checklist.length;
  const progress = Math.round((checkedCount / totalCheck) * 100);

  content.innerHTML = `
    <div class="card-grid">
      <div class="card card-accent">
        <div class="card-title">Exámenes</div>
        <div class="card-value">${STUDY_DATA.stats.totalExams}</div>
      </div>
      <div class="card card-success">
        <div class="card-title">Páginas PDF</div>
        <div class="card-value">${STUDY_DATA.stats.totalPages}</div>
      </div>
      <div class="card card-warning">
        <div class="card-title">Años</div>
        <div class="card-value">${STUDY_DATA.stats.yearRange}</div>
      </div>
      <div class="card card-accent">
        <div class="card-title">Progreso Checklist</div>
        <div class="card-value">${progress}%</div>
      </div>
    </div>

    <h3 class="section-title">🎯 Temas principales del parcial</h3>
    <div class="card">
      <div class="exam-topics" style="margin:0">
        ${STUDY_DATA.stats.mainTopics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
      </div>
      <p style="margin-top:16px;color:var(--text-secondary)">
        La estructura típica del segundo parcial incluye un <strong>Ejercicio 1</strong> 
        de modelado/diagramas (30 pts) y un <strong>Ejercicio 2</strong> de patrones + C++ (30 pts).
      </p>
    </div>

    <h3 class="section-title">📚 Exámenes recientes</h3>
    <div class="exam-list">
      ${STUDY_DATA.exams.slice(0, 4).map(exam => renderExamCard(exam)).join('')}
    </div>

    <div style="text-align:center;margin-top:24px">
      <button class="btn btn-primary" onclick="renderView('exams')">Ver todos los exámenes</button>
    </div>

    <h3 class="section-title">🧩 Patrones más importantes</h3>
    <div class="card-grid">
      ${STUDY_DATA.patterns.slice(0, 4).map(p => `
        <div class="card" style="cursor:pointer" onclick="openPattern('${p.id}')">
          <div class="card-title">${p.category}</div>
          <div style="font-weight:600;margin-bottom:8px">${p.title}</div>
          <div style="font-size:0.85rem;color:var(--text-muted)">${p.frequency}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderExamCard(exam) {
  return `
    <div class="exam-card">
      <div class="exam-header">
        <div>
          <div class="exam-title">${exam.title}</div>
          <div class="exam-topics">
            ${exam.topics.slice(0, 4).map(t => `<span class="topic-tag">${t}</span>`).join('')}
          </div>
        </div>
        <span class="exam-year">${exam.year}</span>
      </div>
      <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:12px">
        ${exam.exercises.length} ejercicio(s) · ${exam.pages} página(s)
      </p>
      <button class="btn btn-primary btn-sm" onclick="openExam('${exam.id}')">Ver examen</button>
    </div>
  `;
}

function openExam(id) {
  AppState.currentExam = STUDY_DATA.exams.find(e => e.id === id);
  setActiveNav('exams');
  renderView('exams');
}

function openPattern(id) {
  setActiveNav('patterns');
  renderView('patterns');
  setTimeout(() => {
    const card = document.querySelector(`.pattern-card[data-id="${id}"]`);
    if (card) {
      card.classList.add('open');
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 50);
}

// ---------- EXÁMENES ----------
function renderExams() {
  if (AppState.currentExam) {
    renderExamDetail(AppState.currentExam);
    return;
  }

  content.innerHTML = `
    <div class="exam-list">
      ${STUDY_DATA.exams.map(exam => renderExamCard(exam)).join('')}
    </div>
  `;
}

function renderExamDetail(exam) {
  const solution = STUDY_DATA.solutions.find(s => s.year === exam.year);
  const basePath = `../imagenes_pa2026/${exam.imageFolder}`;
  const solPath = solution ? `../imagenes_pa2026/${solution.folder}` : null;

  content.innerHTML = `
    <div class="exam-detail">
      <div class="exam-detail-header">
        <div>
          <h2 style="margin-bottom:8px">${exam.title}</h2>
          <div class="exam-topics" style="margin:0">
            ${exam.topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
          </div>
        </div>
        <button class="btn btn-secondary" onclick="AppState.currentExam=null;renderView('exams')">← Volver</button>
      </div>

      <div class="card">
        <h3 style="margin-bottom:12px">Ejercicios</h3>
        <ol class="exercise-list">
          ${exam.exercises.map(e => `
            <li>
              <strong>Ejercicio ${e.num} (${e.points} pts):</strong> ${e.title}<br>
              <span style="font-size:0.85rem">Habilidades: ${e.skills.join(', ')}</span><br>
              <em style="font-size:0.85rem">Clave: ${e.keyIdea}</em>
            </li>
          `).join('')}
        </ol>
      </div>

      <h3 class="section-title">📄 Enunciado (${exam.pages} páginas)</h3>
      <div class="page-gallery">
        ${Array.from({ length: exam.pages }, (_, i) => i + 1)
          .map(n => `
            <div class="page-card">
              <img src="${basePath}/${exam.imageFolder}_pagina_${String(n).padStart(3, '0')}.png" 
                   alt="Página ${n}" loading="lazy"
                   onclick="openImageModal(this)"
                   onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
              <div class="page-card-caption">Página ${n}</div>
            </div>
          `).join('')}
      </div>

      ${solution ? `
        <h3 class="section-title">✅ Solución (${solution.pages} páginas)</h3>
        <div class="page-gallery">
          ${Array.from({ length: solution.pages }, (_, i) => i + 1)
            .map(n => `
              <div class="page-card">
                <img src="${solPath}/${solution.folder}_pagina_${String(n).padStart(3, '0')}.png" 
                     alt="Solución página ${n}" loading="lazy"
                     onclick="openImageModal(this)"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
                <div class="page-card-caption">Solución página ${n}</div>
              </div>
            `).join('')}
        </div>
      ` : '<div class="card">Solución no disponible en el dataset.</div>'}
    </div>
  `;
}

// ---------- PATRONES ----------
function renderPatterns() {
  content.innerHTML = `
    <div class="pattern-list">
      ${STUDY_DATA.patterns.map(p => `
        <div class="pattern-card" data-id="${p.id}">
          <div class="pattern-header" onclick="togglePattern('${p.id}')">
            <div>
              <div class="pattern-title">${p.title}</div>
              <div class="pattern-meta">
                <span class="pattern-category">${p.category}</span>
                <span class="pattern-frequency">${p.frequency}</span>
              </div>
            </div>
            <span class="pattern-toggle">▼</span>
          </div>
          <div class="pattern-body">
            <div class="pattern-content">
              ${p.description ? `<p class="pattern-description">${p.description}</p>` : ''}
              ${p.whenToUse ? `<p class="pattern-description"><strong>¿Cuándo usarlo?</strong> ${p.whenToUse}</p>` : ''}
              
              ${p.steps ? `
                <h4>Pasos para resolver</h4>
                <ol class="steps-list">
                  ${p.steps.map(s => `<li>${s}</li>`).join('')}
                </ol>
              ` : ''}
              
              ${p.codeTemplate ? `
                <h4>Plantilla de código</h4>
                <pre class="code-block"><code>${escapeHtml(p.codeTemplate)}</code></pre>
              ` : ''}
              
              ${p.tips ? `
                <h4>Tips clave</h4>
                <ul class="tips-list">
                  ${p.tips.map(t => `<li>${t}</li>`).join('')}
                </ul>
              ` : ''}
              
              ${p.examples ? `
                <div class="examples">
                  <strong>Ejemplos en parciales:</strong> ${p.examples.join(', ')}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function togglePattern(id) {
  const card = document.querySelector(`.pattern-card[data-id="${id}"]`);
  if (card) {
    card.classList.toggle('open');
  }
}

// ---------- FLASHCARDS ----------
function renderFlashcards() {
  const concepts = STUDY_DATA.concepts;
  const current = concepts[AppState.flashcardIndex];

  content.innerHTML = `
    <div class="flashcard-container">
      <div class="flashcard-progress">
        Tarjeta ${AppState.flashcardIndex + 1} de ${concepts.length}
      </div>
      
      <div class="flashcard ${AppState.flashcardFlipped ? 'flipped' : ''}" onclick="flipFlashcard()">
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <div class="flashcard-term">${current.term}</div>
            <div class="flashcard-hint">Toca para ver la definición</div>
          </div>
          <div class="flashcard-back">
            <div class="flashcard-definition">${current.definition}</div>
          </div>
        </div>
      </div>

      <div class="flashcard-controls">
        <button class="btn btn-secondary" onclick="prevFlashcard()">← Anterior</button>
        <button class="btn btn-primary" onclick="flipFlashcard()">${AppState.flashcardFlipped ? 'Ocultar' : 'Ver'} respuesta</button>
        <button class="btn btn-secondary" onclick="nextFlashcard()">Siguiente →</button>
      </div>

      <div style="margin-top:12px;color:var(--text-muted);font-size:0.9rem">
        Atajo: barra espaciadora para voltear, flechas para navegar
      </div>
    </div>
  `;
}

function flipFlashcard() {
  AppState.flashcardFlipped = !AppState.flashcardFlipped;
  renderFlashcards();
}

function nextFlashcard() {
  const concepts = STUDY_DATA.concepts;
  AppState.flashcardIndex = (AppState.flashcardIndex + 1) % concepts.length;
  AppState.flashcardFlipped = false;
  renderFlashcards();
}

function prevFlashcard() {
  const concepts = STUDY_DATA.concepts;
  AppState.flashcardIndex = (AppState.flashcardIndex - 1 + concepts.length) % concepts.length;
  AppState.flashcardFlipped = false;
  renderFlashcards();
}

document.addEventListener('keydown', (e) => {
  if (AppState.currentView !== 'flashcards') return;
  if (e.code === 'Space') {
    e.preventDefault();
    flipFlashcard();
  } else if (e.code === 'ArrowRight') {
    nextFlashcard();
  } else if (e.code === 'ArrowLeft') {
    prevFlashcard();
  }
});

// ---------- QUIZ ----------
function renderQuiz() {
  if (AppState.quizIndex >= STUDY_DATA.quiz.length) {
    renderQuizResult();
    return;
  }

  const q = STUDY_DATA.quiz[AppState.quizIndex];
  const progress = `Pregunta ${AppState.quizIndex + 1} de ${STUDY_DATA.quiz.length}`;

  content.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-progress">
        <span>${progress}</span>
        <span>Puntaje: ${AppState.quizScore}</span>
      </div>
      <div class="quiz-card">
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options" id="quizOptions">
          ${q.options.map((opt, i) => `
            <button class="quiz-option" onclick="answerQuiz(${i})" ${AppState.quizAnswered ? 'disabled' : ''}>
              ${opt}
            </button>
          `).join('')}
        </div>
        <div id="quizFeedback"></div>
      </div>
    </div>
  `;
}

function answerQuiz(selected) {
  if (AppState.quizAnswered) return;
  AppState.quizAnswered = true;

  const q = STUDY_DATA.quiz[AppState.quizIndex];
  const options = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quizFeedback');

  options.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) {
      btn.classList.add('correct');
    } else if (i === selected && i !== q.answer) {
      btn.classList.add('wrong');
    }
  });

  if (selected === q.answer) {
    AppState.quizScore++;
  }

  feedback.innerHTML = `
    <div class="quiz-explanation">
      <strong>${selected === q.answer ? '✅ Correcto' : '❌ Incorrecto'}</strong><br>
      ${q.explanation}
    </div>
    <div style="text-align:center;margin-top:16px">
      <button class="btn btn-primary" onclick="nextQuiz()">Siguiente →</button>
    </div>
  `;
}

function nextQuiz() {
  AppState.quizIndex++;
  AppState.quizAnswered = false;
  renderQuiz();
}

function renderQuizResult() {
  const total = STUDY_DATA.quiz.length;
  const score = AppState.quizScore;
  const percent = Math.round((score / total) * 100);

  content.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-card quiz-result">
        <div class="quiz-result-score">${score}/${total}</div>
        <h2 style="margin:16px 0">${percent >= 70 ? '¡Muy bien!' : 'Seguí practicando'}</h2>
        <p style="color:var(--text-secondary);margin-bottom:24px">
          Respondiste correctamente el ${percent}% de las preguntas.
        </p>
        <button class="btn btn-primary" onclick="restartQuiz()">Reintentar quiz</button>
      </div>
    </div>
  `;
}

function restartQuiz() {
  AppState.quizIndex = 0;
  AppState.quizScore = 0;
  AppState.quizAnswered = false;
  renderQuiz();
}

// ---------- CHECKLIST ----------
function renderChecklist() {
  const checkedCount = Object.values(AppState.checklist).filter(Boolean).length;
  const total = STUDY_DATA.checklist.length;
  const percent = Math.round((checkedCount / total) * 100);

  content.innerHTML = `
    <div class="checklist-container">
      <div class="checklist-stats">
        <div class="card card-accent" style="flex:1;min-width:120px">
          <div class="card-title">Completados</div>
          <div class="card-value">${checkedCount}/${total}</div>
        </div>
        <div class="card card-success" style="flex:1;min-width:120px">
          <div class="card-title">Progreso</div>
          <div class="card-value">${percent}%</div>
        </div>
      </div>

      <div class="card">
        ${STUDY_DATA.checklist.map(item => `
          <label class="checklist-item ${AppState.checklist[item.id] ? 'checked' : ''}">
            <input type="checkbox" 
                   ${AppState.checklist[item.id] ? 'checked' : ''} 
                   onchange="toggleChecklist('${item.id}')">
            <span class="checklist-text">${item.text}</span>
            <span class="checklist-category">${item.category}</span>
          </label>
        `).join('')}
      </div>

      <div style="text-align:center;margin-top:16px">
        <button class="btn btn-secondary" onclick="resetChecklist()">Resetear progreso</button>
      </div>
    </div>
  `;
}

function toggleChecklist(id) {
  AppState.checklist[id] = !AppState.checklist[id];
  localStorage.setItem('pa-checklist', JSON.stringify(AppState.checklist));
  renderChecklist();
}

function resetChecklist() {
  AppState.checklist = {};
  localStorage.setItem('pa-checklist', JSON.stringify(AppState.checklist));
  renderChecklist();
}

// ---------- LABORATORIO DE DIAGRAMAS DE COMUNICACIÓN ----------
function renderLaboratorio() {
  const scenarios = STUDY_DATA.dcScenarios;
  const state = AppState.labState;
  const scenario = scenarios.find(s => s.id === state.scenarioId);

  if (!scenario) {
    content.innerHTML = `
      <div class="card">
        <h3 style="margin-bottom:12px">🔬 Laboratorio de Diagramas de Comunicación</h3>
        <p style="color:var(--text-secondary);margin-bottom:16px">
          Acá podés practicar paso a paso cómo armar un Diagrama de Comunicación al estilo de los parciales:
          objetos posicionables en 2D, flechas directas entre ellos, notas y mensajes de retorno.
        </p>
        <div class="scenario-selector" style="max-width:500px">
          <label style="display:block;margin-bottom:8px;font-weight:600">Seleccionar escenario</label>
          <select onchange="loadLabScenario(this.value)">
            <option value="">-- Elegir --</option>
            ${scenarios.map(s => `<option value="${s.id}">${s.title}</option>`).join('')}
          </select>
        </div>
      </div>
    `;
    return;
  }

  const objectNames = state.objects.map(o => o.name);

  content.innerHTML = `
    <div class="scenario-selector" style="margin-bottom:16px">
      <select onchange="loadLabScenario(this.value)">
        ${scenarios.map(s => `<option value="${s.id}" ${s.id === scenario.id ? 'selected' : ''}>${s.title}</option>`).join('')}
      </select>
    </div>

    <div class="lab-layout">
      <div class="lab-panel">
        <div class="scenario-info">
          <strong>Operación:</strong> ${scenario.operation}<br>
          <strong>Descripción:</strong> ${scenario.description}
        </div>

        <div class="editor-section">
          <div class="editor-section-title">
            <span>Objetos (x, y, nombre)</span>
            <button class="btn btn-primary btn-sm" onclick="addLabObject()">+ Agregar</button>
          </div>
          <div class="editor-list">
            ${state.objects.map((obj, i) => `
              <div class="editor-item">
                <div class="object-input" style="display:grid;grid-template-columns:60px 60px 1fr auto;gap:6px;align-items:center;width:100%">
                  <input type="number" value="${obj.x}" title="x" 
                         onchange="updateLabObjectPosition(${i}, 'x', this.value)">
                  <input type="number" value="${obj.y}" title="y" 
                         onchange="updateLabObjectPosition(${i}, 'y', this.value)">
                  <input type="text" value="${escapeHtml(obj.name)}" 
                         onchange="updateLabObjectName(${i}, this.value)"
                         placeholder=":Nombre">
                </div>
                <button onclick="removeLabObject(${i})">✕</button>
              </div>
            `).join('')}
          </div>
          <button class="btn btn-secondary btn-sm" onclick="autoLayoutObjects(AppState.labState.objects);renderLaboratorio();" style="margin-top:8px">Reordenar automáticamente</button>
        </div>

        <div class="editor-section">
          <div class="editor-section-title">
            <span>Mensajes</span>
            <button class="btn btn-primary btn-sm" onclick="addLabMessage()">+ Agregar</button>
          </div>
          <div class="editor-list">
            ${state.messages.map((m, i) => `
              <div class="editor-item" style="display:block">
                <div class="message-editor" style="grid-template-columns:50px 1fr 1fr 1fr auto auto">
                  <input type="text" value="${escapeHtml(m.num)}" placeholder="#" 
                         onchange="updateLabMessage(${i}, 'num', this.value)">
                  <select onchange="updateLabMessage(${i}, 'from', this.value)">
                    ${objectNames.map(o => `<option value="${escapeHtml(o)}" ${o === m.from ? 'selected' : ''}>${escapeHtml(o)}</option>`).join('')}
                  </select>
                  <select onchange="updateLabMessage(${i}, 'to', this.value)">
                    ${objectNames.map(o => `<option value="${escapeHtml(o)}" ${o === m.to ? 'selected' : ''}>${escapeHtml(o)}</option>`).join('')}
                  </select>
                  <input type="text" value="${escapeHtml(m.text)}" placeholder="mensaje()" 
                         onchange="updateLabMessage(${i}, 'text', this.value)">
                  <select onchange="updateLabMessage(${i}, 'visibility', this.value)">
                    <option value="association" ${m.visibility === 'association' ? 'selected' : ''}>association</option>
                    <option value="parameter" ${m.visibility === 'parameter' ? 'selected' : ''}>parameter</option>
                    <option value="local" ${m.visibility === 'local' ? 'selected' : ''}>local</option>
                    <option value="global" ${m.visibility === 'global' ? 'selected' : ''}>global</option>
                  </select>
                  <label style="display:flex;align-items:center;gap:4px;font-size:0.8rem;white-space:nowrap">
                    <input type="checkbox" ${m.return ? 'checked' : ''} onchange="updateLabMessage(${i}, 'return', this.checked)"> ret
                  </label>
                </div>
                <div style="margin-top:6px;display:grid;grid-template-columns:1fr 1fr;gap:6px">
                  <input type="text" value="${escapeHtml(m.loop || '')}" placeholder="loop / condición (opcional)" 
                         onchange="updateLabMessage(${i}, 'loop', this.value)">
                  <input type="text" value="${escapeHtml(m.note || '')}" placeholder="nota (opcional)" 
                         onchange="updateLabMessage(${i}, 'note', this.value)">
                </div>
                <button onclick="removeLabMessage(${i})" style="position:absolute;top:10px;right:10px">✕</button>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">
          <button class="btn btn-secondary btn-sm" onclick="resetLabScenario()">Restaurar escenario</button>
          <button class="btn btn-primary btn-sm" onclick="validateLabDiagram()">Validar contra modelo</button>
        </div>

        <div class="hints-box">
          <strong>💡 Tips para este escenario</strong>
          <ul>
            ${scenario.hints.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <div id="labValidation"></div>
      </div>

      <div class="lab-diagram">
        <h3 style="margin-bottom:12px">Diagrama generado</h3>
        <div id="labDiagramSvg">
          ${renderLabDiagramSvg()}
        </div>
      </div>
    </div>
  `;
}

function loadLabScenario(id) {
  const scenario = STUDY_DATA.dcScenarios.find(s => s.id === id);
  if (!scenario) {
    AppState.labState = { scenarioId: null, objects: [], messages: [] };
    renderLaboratorio();
    return;
  }

  // Convert string objects to positioned objects if needed
  const objects = scenario.objects.map((o, i) => {
    if (typeof o === 'object' && o.name) return { ...o };
    return { name: o, x: 0, y: 0 };
  });
  autoLayoutObjects(objects);

  AppState.labState = {
    scenarioId: id,
    objects: objects,
    messages: scenario.modelMessages.map(m => ({
      id: m.id || ("m" + Math.random().toString(36).substr(2, 9)),
      num: m.num,
      from: m.from,
      to: m.to,
      text: m.text,
      visibility: m.visibility || 'association',
      loop: m.loop || '',
      note: m.note || '',
      return: m.return || false
    }))
  };
  renderLaboratorio();
}

function autoLayoutObjects(objects) {
  const perRow = objects.length <= 4 ? objects.length : 4;
  const gapX = 240;
  const gapY = 160;
  const startX = 80;
  const startY = 40;

  objects.forEach((obj, i) => {
    if (!obj.x && obj.x !== 0) obj.x = 0;
    if (!obj.y && obj.y !== 0) obj.y = 0;
    // Only auto-layout if position is 0,0 (default)
    if (obj.x === 0 && obj.y === 0) {
      obj.x = startX + (i % perRow) * gapX;
      obj.y = startY + Math.floor(i / perRow) * gapY;
    }
  });
}

function addLabObject() {
  const state = AppState.labState;
  const count = state.objects.length;
  const perRow = count <= 3 ? 4 : 4;
  state.objects.push({
    name: ":Nuevo",
    x: 80 + (count % perRow) * 180,
    y: 40 + Math.floor(count / perRow) * 140
  });
  renderLaboratorio();
}

function removeLabObject(index) {
  const removed = AppState.labState.objects[index].name;
  AppState.labState.objects.splice(index, 1);
  AppState.labState.messages = AppState.labState.messages.filter(
    m => m.from !== removed && m.to !== removed
  );
  renderLaboratorio();
}

function updateLabObjectName(index, value) {
  const old = AppState.labState.objects[index].name;
  AppState.labState.objects[index].name = value;
  AppState.labState.messages.forEach(m => {
    if (m.from === old) m.from = value;
    if (m.to === old) m.to = value;
  });
  renderLaboratorio();
}

function updateLabObjectPosition(index, axis, value) {
  AppState.labState.objects[index][axis] = parseInt(value) || 0;
  renderLaboratorio();
}

function addLabMessage() {
  const objects = AppState.labState.objects;
  AppState.labState.messages.push({
    id: "m" + Date.now(),
    num: String(AppState.labState.messages.length + 1),
    from: objects[0] ? objects[0].name : ":Sistema",
    to: objects[1] ? objects[1].name : ":Sistema",
    text: "nuevoMensaje()",
    visibility: "association",
    loop: "",
    note: "",
    return: false
  });
  renderLaboratorio();
}

function removeLabMessage(index) {
  AppState.labState.messages.splice(index, 1);
  renderLaboratorio();
}

function updateLabMessage(index, field, value) {
  AppState.labState.messages[index][field] = value;
  renderLaboratorio();
}

function resetLabScenario() {
  loadLabScenario(AppState.labState.scenarioId);
}

function renderLabDiagramSvg() {
  const state = AppState.labState;
  return renderDcSvg(state.objects, state.messages, { className: 'dc-svg' });
}

function _segIntersectsSeg(x1, y1, x2, y2, x3, y3, x4, y4) {
  const d1x = x2 - x1, d1y = y2 - y1;
  const d2x = x4 - x3, d2y = y4 - y3;
  const denom = d1x * d2y - d1y * d2x;
  if (Math.abs(denom) < 1e-9) return false;
  const t = ((x3 - x1) * d2y - (y3 - y1) * d2x) / denom;
  const u = ((x3 - x1) * d1y - (y3 - y1) * d1x) / denom;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

function _segIntersectsRect(x1, y1, x2, y2, rx, ry, rw, rh) {
  return (
    _segIntersectsSeg(x1, y1, x2, y2, rx, ry, rx + rw, ry) ||
    _segIntersectsSeg(x1, y1, x2, y2, rx, ry + rh, rx + rw, ry + rh) ||
    _segIntersectsSeg(x1, y1, x2, y2, rx, ry, rx, ry + rh) ||
    _segIntersectsSeg(x1, y1, x2, y2, rx + rw, ry, rx + rw, ry + rh)
  );
}

function renderDcSvg(objects, messages, options = {}) {
  if (objects.length === 0) {
    return `<div class="empty-state"><div class="empty-state-icon">📭</div>No hay objetos para dibujar.</div>`;
  }

  const objWidth = options.objWidth || 130;
  const objHeight = options.objHeight || 44;
  const padding = options.padding || 120;
  const svgClass = options.className || 'dc-svg';

  // Compute bounding box
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  objects.forEach(obj => {
    minX = Math.min(minX, obj.x);
    minY = Math.min(minY, obj.y);
    maxX = Math.max(maxX, obj.x + objWidth);
    maxY = Math.max(maxY, obj.y + objHeight);
  });

  const offsetX = minX > 0 ? 0 : padding - minX;
  const offsetY = minY > 0 ? 0 : padding - minY;

  const objPositions = {};
  objects.forEach(obj => {
    objPositions[obj.name] = {
      x: obj.x + offsetX,
      y: obj.y + offsetY,
      cx: obj.x + offsetX + objWidth / 2,
      cy: obj.y + offsetY + objHeight / 2
    };
  });

  // Adjust max with offset
  const svgWidth = maxX + offsetX + padding;
  const svgHeight = maxY + offsetY + padding + 40;

  // Unique marker ids to allow multiple SVGs on the same page
  const uid = 'dc' + Math.random().toString(36).substr(2, 9);

  let svg = `<svg class="${svgClass}" viewBox="0 0 ${svgWidth} ${svgHeight}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowhead-${uid}" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <path d="M0,0 L10,3.5 L0,7" fill="none" stroke="var(--text-primary)" stroke-width="1.2" />
      </marker>
      <marker id="arrowhead-return-${uid}" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <path d="M0,0 L10,3.5 L0,7" fill="none" stroke="var(--text-muted)" stroke-width="1.2" />
      </marker>
    </defs>`;

  // Track message counts per pair to alternate label offsets
  const pairCounts = {};

  // Messages first (under objects)
  messages.forEach((m, i) => {
    const fromP = objPositions[m.from];
    const toP = objPositions[m.to];
    if (!fromP || !toP) return;

    const pairKey = `${m.from}|${m.to}`;
    const pairIndex = pairCounts[pairKey] || 0;
    pairCounts[pairKey] = pairIndex + 1;

    const isReturn = m.return;
    const isSelf = m.from === m.to;

    let x1 = fromP.cx;
    let y1 = fromP.cy;
    let x2 = toP.cx;
    let y2 = toP.cy;

    // Compute angle and attach to box edges, spreading anchors for repeated pairs
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const anchorSpread = 8 + pairIndex * 8;
    const dx = (objWidth / 2 + anchorSpread) * Math.cos(angle);
    const dy = (objHeight / 2 + anchorSpread) * Math.sin(angle);

    const sx = x1 + dx;
    const sy = y1 + dy;
    const ex = x2 - dx;
    const ey = y2 - dy;

    // Check if the straight line crosses any non-endpoint object
    let crossesObject = false;
    let curveSide = 1;
    if (!isSelf) {
      objects.forEach(obj => {
        if (obj.name === m.from || obj.name === m.to) return;
        const op = objPositions[obj.name];
        if (_segIntersectsRect(sx, sy, ex, ey, op.x, op.y, objWidth, objHeight)) {
          crossesObject = true;
          const cross = (op.cx - sx) * (ey - sy) - (op.cy - sy) * (ex - sx);
          if (cross > 0) curveSide = -1;
        }
      });
    }

    let pathD;
    let midX, midY;
    if (isSelf) {
      pathD = `M ${sx + 20} ${sy - 10} L ${sx + 50} ${sy - 10} L ${sx + 50} ${sy + 25} L ${ex + 4} ${ey}`;
      midX = sx + 38;
      midY = sy - 18;
    } else if (crossesObject) {
      const lineAngle = Math.atan2(ey - sy, ex - sx);
      const perpAngle = lineAngle + Math.PI / 2;
      const curveAmount = 55 + pairIndex * 15;
      const cpX = (sx + ex) / 2 + Math.cos(perpAngle) * curveAmount * curveSide;
      const cpY = (sy + ey) / 2 + Math.sin(perpAngle) * curveAmount * curveSide;
      pathD = `M ${sx} ${sy} Q ${cpX.toFixed(1)} ${cpY.toFixed(1)} ${ex} ${ey}`;
      midX = 0.25 * sx + 0.5 * cpX + 0.25 * ex;
      midY = 0.25 * sy + 0.5 * cpY + 0.25 * ey;
    } else {
      pathD = `M ${sx} ${sy} L ${ex} ${ey}`;
      midX = (sx + ex) / 2;
      midY = (sy + ey) / 2;
    }

    const strokeColor = isReturn ? 'var(--text-muted)' : 'var(--text-primary)';
    const strokeDash = isReturn ? '5,5' : '0';
    const marker = isReturn ? `url(#arrowhead-return-${uid})` : `url(#arrowhead-${uid})`;

    svg += `<path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="1.5" stroke-dasharray="${strokeDash}" marker-end="${marker}" />`;

    // Label position: use midpoint (already computed for curves)
    let mx = midX;
    let my = midY;

    // Perpendicular offset to avoid overlapping labels (only for straight lines)
    if (!isSelf && !crossesObject) {
      const perpAngle = angle + Math.PI / 2;
      const offsetDir = pairIndex % 2 === 0 ? 1 : -1;
      const offsetDist = 25 + Math.floor(pairIndex / 2) * 20;

      // For same-pair messages, also offset along the line to avoid overlap
      const alongFrac = pairIndex === 0 ? 0.5 : (pairIndex % 2 === 0 ? 0.35 : 0.65);
      mx = sx + (ex - sx) * alongFrac;
      my = sy + (ey - sy) * alongFrac;

      mx += Math.cos(perpAngle) * offsetDist * offsetDir;
      my += Math.sin(perpAngle) * offsetDist * offsetDir;
    }

    // Shift label slightly above the line center
    if (!isSelf) my -= 4;

    const label = [];
    if (m.num) label.push(escapeHtml(m.num));
    if (m.text) label.push(escapeHtml(truncateText(m.text, 45)));

    const labelText = label.join(': ');
    const approxWidth = labelText.length * 6.5;

    // Background rect for label readability
    if (!isSelf) {
      svg += `<rect x="${mx - approxWidth / 2 - 4}" y="${my - 12}" width="${approxWidth + 8}" height="14" fill="var(--bg-secondary)" stroke="none" />`;
    }

    svg += `<text x="${mx}" y="${my}" text-anchor="middle" class="dc-message-text" style="font-weight:600">${labelText}</text>`;

    if (m.visibility) {
      svg += `<text x="${mx}" y="${my + 13}" text-anchor="middle" class="dc-visibility">«${escapeHtml(m.visibility)}»</text>`;
    }

    if (m.loop) {
      svg += `<text x="${mx}" y="${my + 26}" text-anchor="middle" class="dc-loop">[${escapeHtml(m.loop)}]</text>`;
    }

    // Note
    if (m.note) {
      const noteX = mx + 60;
      const noteY = my + 40;
      const noteWidth = 130;
      const noteHeight = 42;
      svg += `<rect x="${noteX}" y="${noteY}" width="${noteWidth}" height="${noteHeight}" fill="var(--bg-primary)" stroke="var(--text-muted)" stroke-dasharray="3,3" rx="4" />`;
      svg += `<line x1="${mx + 30}" y1="${my + 20}" x2="${noteX}" y2="${noteY + 10}" stroke="var(--text-muted)" stroke-dasharray="3,3" />`;
      const words = m.note.split(' ');
      let line = '';
      let lineY = noteY + 16;
      words.forEach(word => {
        if ((line + word).length > 22 && line) {
          svg += `<text x="${noteX + 6}" y="${lineY}" class="dc-visibility">${escapeHtml(line.trim())}</text>`;
          line = word + ' ';
          lineY += 12;
        } else {
          line += word + ' ';
        }
      });
      if (line.trim()) {
        svg += `<text x="${noteX + 6}" y="${lineY}" class="dc-visibility">${escapeHtml(line.trim())}</text>`;
      }
    }
  });

  // Object boxes (drawn on top)
  objects.forEach(obj => {
    const p = objPositions[obj.name];
    svg += `<rect x="${p.x}" y="${p.y}" width="${objWidth}" height="${objHeight}" rx="4" class="dc-object-box" />`;
    svg += `<text x="${p.cx}" y="${p.cy + 5}" text-anchor="middle" class="dc-message-text">${escapeHtml(obj.name)}</text>`;
  });

  svg += `</svg>`;
  return svg;
}

function truncateText(text, maxLen) {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 3) + '...';
}

function validateLabDiagram() {
  const state = AppState.labState;
  const scenario = STUDY_DATA.dcScenarios.find(s => s.id === state.scenarioId);
  if (!scenario) return;

  const model = scenario.modelMessages;
  const user = state.messages;

  let matches = 0;
  const missing = [];
  const extra = [];

  // Simple validation by text+from+to
  const userKeys = user.map(m => `${m.from}|${m.to}|${m.text}`);
  const modelKeys = model.map(m => `${m.from}|${m.to}|${m.text}`);

  model.forEach(m => {
    const key = `${m.from}|${m.to}|${m.text}`;
    if (userKeys.includes(key)) matches++;
    else missing.push(`${m.num}: ${m.from} → ${m.to}: ${m.text}`);
  });

  user.forEach(m => {
    const key = `${m.from}|${m.to}|${m.text}`;
    if (!modelKeys.includes(key)) extra.push(`${m.from} → ${m.to}: ${m.text}`);
  });

  const container = document.getElementById('labValidation');
  let html = `<div class="validation-result ${missing.length === 0 && extra.length === 0 ? 'success' : 'warning'}">`;
  html += `<strong>Coincidencias con el modelo: ${matches}/${model.length}</strong><br>`;

  if (missing.length > 0) {
    html += `<div style="margin-top:8px"><strong>Mensajes esperados que faltan:</strong><ul style="margin:4px 0 0 18px">`;
    html += missing.map(m => `<li>${escapeHtml(m)}</li>`).join('');
    html += `</ul></div>`;
  }

  if (extra.length > 0) {
    html += `<div style="margin-top:8px"><strong>Mensajes extra en tu diagrama:</strong><ul style="margin:4px 0 0 18px">`;
    html += extra.map(m => `<li>${escapeHtml(m)}</li>`).join('');
    html += `</ul></div>`;
  }

  if (missing.length === 0 && extra.length === 0) {
    html += `<div style="margin-top:8px">¡Excelente! Tu diagrama coincide con el modelo propuesto.</div>`;
  }

  html += `</div>`;
  container.innerHTML = html;
}

// ---------- TUTORIALES PASO A PASO ----------
function renderTutoriales() {
  const tutorials = STUDY_DATA.tutorials;
  const state = AppState.tutorialState;

  if (state.selectedId) {
    renderTutorialDetail(state.selectedId);
    return;
  }

  // Group tutorials by year
  const byYear = {};
  tutorials.forEach(t => {
    const exam = STUDY_DATA.exams.find(e => e.id === t.examId);
    const year = exam ? exam.year : t.examId;
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(t);
  });

  const years = Object.keys(byYear).sort((a, b) => b - a);

  content.innerHTML = `
    <div class="card" style="margin-bottom:20px">
      <h3 style="margin-bottom:8px">📖 Modo Paso a Paso</h3>
      <p style="color:var(--text-secondary)">
        Elegí un ejercicio para ver la letra, la solución final y una guía detallada
        de cómo resolverlo desde cero.
      </p>
    </div>

    ${years.map(year => `
      <h3 class="section-title">Segundo Parcial ${year}</h3>
      <div class="exam-list">
        ${byYear[year].map(t => {
          const exam = STUDY_DATA.exams.find(e => e.id === t.examId);
          const typeLabel = t.type === 'diagrama' ? '📊 Diagrama' : t.type === 'codigo' ? '💻 Código' : '📝 Teoría';
          return `
            <div class="exam-card" style="cursor:pointer" onclick="selectTutorial('${t.id}')">
              <div class="exam-header">
                <div>
                  <div class="exam-title">Ejercicio ${t.exerciseNum}: ${t.title}</div>
                  <div class="exam-topics" style="margin-top:8px">
                    <span class="topic-tag">${typeLabel}</span>
                  </div>
                </div>
                <span class="exam-year">${year}</span>
              </div>
              <p style="color:var(--text-secondary);font-size:0.9rem;margin-top:8px">
                ${t.steps.length} pasos · ${t.commonMistakes.length} errores comunes
              </p>
            </div>
          `;
        }).join('')}
      </div>
    `).join('')}
  `;
}

function selectTutorial(id) {
  AppState.tutorialState.selectedId = id;
  AppState.tutorialState.activeTab = 'letra';
  AppState.tutorialState.sceneMode = false;
  AppState.tutorialState.currentStep = 0;
  renderTutoriales();
}

function closeTutorial() {
  AppState.tutorialState.selectedId = null;
  AppState.tutorialState.activeTab = 'letra';
  AppState.tutorialState.sceneMode = false;
  AppState.tutorialState.currentStep = 0;
  renderTutoriales();
}

function setTutorialTab(tab) {
  AppState.tutorialState.activeTab = tab;
  renderTutoriales();
}

function toggleTutorialScene() {
  AppState.tutorialState.sceneMode = !AppState.tutorialState.sceneMode;
  AppState.tutorialState.currentStep = 0;
  renderTutoriales();
}

function setTutorialStep(index) {
  const tutorial = STUDY_DATA.tutorials.find(t => t.id === AppState.tutorialState.selectedId);
  if (!tutorial) return;
  AppState.tutorialState.currentStep = Math.max(0, Math.min(index, tutorial.steps.length - 1));
  renderTutoriales();
}

function nextTutorialStep() {
  setTutorialStep(AppState.tutorialState.currentStep + 1);
}

function prevTutorialStep() {
  setTutorialStep(AppState.tutorialState.currentStep - 1);
}

function renderTutorialDetail(id) {
  const tutorial = STUDY_DATA.tutorials.find(t => t.id === id);
  if (!tutorial) {
    closeTutorial();
    return;
  }

  const exam = STUDY_DATA.exams.find(e => e.id === tutorial.examId);
  const solution = STUDY_DATA.solutions.find(s => s.year === (exam ? exam.year : null));
  const activeTab = AppState.tutorialState.activeTab;

  const basePath = exam ? `../imagenes_pa2026/${exam.imageFolder}` : null;
  const solPath = solution ? `../imagenes_pa2026/${solution.folder}` : null;

  content.innerHTML = `
    <div class="card" style="margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
        <div>
          <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:4px">
            ${exam ? exam.title : ''} · Ejercicio ${tutorial.exerciseNum}
          </div>
          <h2 style="margin:0">${tutorial.title}</h2>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="closeTutorial()">← Volver a tutoriales</button>
      </div>
    </div>

    <div class="tutorial-tabs" style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${activeTab === 'letra' ? 'btn-primary' : 'btn-secondary'}" onclick="setTutorialTab('letra')">📄 Letra</button>
      <button class="btn ${activeTab === 'solucion' ? 'btn-primary' : 'btn-secondary'}" onclick="setTutorialTab('solucion')">✅ Solución final</button>
      <button class="btn ${activeTab === 'paso' ? 'btn-primary' : 'btn-secondary'}" onclick="setTutorialTab('paso')">🪜 Paso a paso</button>
    </div>

    ${activeTab === 'letra' ? renderTutorialLetter(basePath, exam) : ''}
    ${activeTab === 'solucion' ? renderTutorialSolution(solPath, solution) : ''}
    ${activeTab === 'paso' ? renderTutorialSteps(tutorial) : ''}
  `;
}

function renderTutorialLetter(basePath, exam) {
  if (!exam) return '<div class="card">No se encontró el examen.</div>';

  return `
    <div class="card">
      <h3 style="margin-bottom:12px">Enunciado del ejercicio</h3>
      <p style="color:var(--text-secondary);margin-bottom:16px">
        Estas son las páginas del enunciado. Buscá el <strong>Ejercicio ${AppState.tutorialState.exerciseNum || 1}</strong>.
      </p>
      <div class="page-gallery">
        ${Array.from({ length: exam.pages }, (_, i) => i + 1)
          .map(n => `
            <div class="page-card">
              <img src="${basePath}/${exam.imageFolder}_pagina_${String(n).padStart(3, '0')}.png" 
                   alt="Página ${n}" loading="lazy"
                   onclick="openImageModal(this)"
                   onerror="this.style.display='none'">
              <div class="page-card-caption">Página ${n}</div>
            </div>
          `).join('')}
      </div>
    </div>
  `;
}

function renderTutorialSolution(solPath, solution) {
  if (!solution) return '<div class="card">Solución no disponible.</div>';

  return `
    <div class="card">
      <h3 style="margin-bottom:12px">Solución final</h3>
      <p style="color:var(--text-secondary);margin-bottom:16px">
        Revisá las páginas de la solución oficial.
      </p>
      <div class="page-gallery">
        ${Array.from({ length: solution.pages }, (_, i) => i + 1)
          .map(n => `
            <div class="page-card">
              <img src="${solPath}/${solution.folder}_pagina_${String(n).padStart(3, '0')}.png" 
                   alt="Solución página ${n}" loading="lazy"
                   onclick="openImageModal(this)"
                   onerror="this.style.display='none'">
              <div class="page-card-caption">Solución página ${n}</div>
            </div>
          `).join('')}
      </div>
    </div>
  `;
}

function renderTutorialSteps(tutorial) {
  const state = AppState.tutorialState;
  const sceneMode = state.sceneMode;
  const current = state.currentStep;

  const stepCards = tutorial.steps.map((step, i) => renderStepCard(step, i, tutorial.steps.length));

  if (sceneMode) {
    return `
      <div class="tutorial-scene-controls">
        <button class="btn btn-secondary btn-sm" onclick="toggleTutorialScene()">📋 Ver todos los pasos</button>
      </div>
      <div class="tutorial-scene">
        ${renderStepCard(tutorial.steps[current], current, tutorial.steps.length, true)}
      </div>
      <div class="tutorial-scene-nav">
        <button class="btn btn-secondary" onclick="prevTutorialStep()" ${current === 0 ? 'disabled' : ''}>← Anterior</button>
        <span class="scene-counter">Paso ${current + 1} de ${tutorial.steps.length}</span>
        <button class="btn btn-primary" onclick="nextTutorialStep()" ${current === tutorial.steps.length - 1 ? 'disabled' : ''}>Siguiente →</button>
      </div>
      <div class="scene-dots">
        ${tutorial.steps.map((_, i) => `
          <button class="scene-dot ${i === current ? 'active' : ''}" onclick="setTutorialStep(${i})" title="Paso ${i + 1}"></button>
        `).join('')}
      </div>
      <div class="card" style="margin-top:20px;border-left:4px solid var(--danger)">
        <h3 style="margin-bottom:12px">⚠️ Errores comunes</h3>
        <ul class="tips-list">
          ${tutorial.commonMistakes.map(m => `<li>${m}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  return `
    <div class="tutorial-scene-controls">
      <button class="btn btn-secondary btn-sm" onclick="toggleTutorialScene()">🎬 Modo escena (paso a paso)</button>
    </div>
    <div class="tutorial-steps">
      ${stepCards.join('')}
    </div>

    <div class="card" style="margin-top:20px;border-left:4px solid var(--danger)">
      <h3 style="margin-bottom:12px">⚠️ Errores comunes</h3>
      <ul class="tips-list">
        ${tutorial.commonMistakes.map(m => `<li>${escapeHtml(m)}</li>`).join('')}
      </ul>
    </div>
  `;
}

function renderStepCard(step, index, total, isScene = false) {
  const decisions = step.decisions || [];
  const builds = step.builds || [];
  const diagramState = step.diagramState;
  const diagramSvg = diagramState && diagramState.objects && diagramState.objects.length
    ? renderDcSvg(diagramState.objects, diagramState.messages || [], { className: 'step-dc-svg', objWidth: 150 })
    : '';

  return `
    <div class="step-card ${isScene ? 'step-card-scene' : ''}" id="step-${index}">
      <div class="step-number">${index + 1}</div>
      <div class="step-content">
        <h4 class="step-title">${escapeHtml(step.title)}</h4>
        <p class="step-text">${escapeHtml(step.content)}</p>

        ${builds.length ? `
          <div class="step-builds">
            <div class="step-builds-title">🧱 En el diagrama agregamos:</div>
            <ul>
              ${builds.map(b => `<li>${escapeHtml(b)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        ${decisions.length ? `
          <div class="step-decisions">
            <div class="step-decisions-title">🧠 Decisiones de diseño:</div>
            <ul>
              ${decisions.map(d => `<li>${escapeHtml(d)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        ${diagramSvg ? `
          <div class="step-diagram">
            <div class="step-diagram-title">🎯 Así va quedando el diagrama</div>
            ${diagramSvg}
          </div>
        ` : ''}

        ${step.highlight ? `
          <div class="step-highlight">
            <strong>💡 Clave:</strong> ${escapeHtml(step.highlight)}
          </div>
        ` : ''}

        ${step.tip ? `
          <div class="step-tip">
            <strong>Tip:</strong> ${escapeHtml(step.tip)}
          </div>
        ` : ''}

        ${step.image ? `
          <div class="step-image-wrapper">
            ${step.annotation ? `<div class="step-image-caption">🔍 ${escapeHtml(step.annotation)}</div>` : ''}
             <img src="${step.image}" alt="Imagen del paso ${index + 1}" loading="lazy" class="step-image"
                  onclick="openImageModal(this)">
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function openImageModal(el) {
  const existing = document.querySelector('.image-modal');
  if (existing) existing.remove();

  const src = typeof el === 'string' ? el : el.src;

  const gallery = (el && el.closest)
    ? Array.from(el.closest('.page-gallery')?.querySelectorAll('img') || [el])
    : [el];

  const sources = gallery.map(img => img.src || img);
  let currentIndex = sources.indexOf(src);
  if (currentIndex === -1) currentIndex = 0;

  const hasGallery = sources.length > 1;

  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.innerHTML = `
    <div class="image-modal-backdrop"></div>
    <div class="image-modal-toolbar">
      <button class="image-modal-tool" data-action="zoom-out" title="Alejar">−</button>
      <span class="image-modal-zoom-label">100%</span>
      <button class="image-modal-tool" data-action="zoom-in" title="Acercar">+</button>
      <button class="image-modal-tool" data-action="reset" title="Restablecer">↺</button>
      ${hasGallery ? '<span class="image-modal-counter"></span>' : ''}
      <button class="image-modal-close" data-action="close" title="Cerrar">✕</button>
    </div>
    <div class="image-modal-content">
      <img src="${src}" alt="Vista ampliada" draggable="false">
    </div>
    ${hasGallery ? `
      <button class="image-modal-nav image-modal-nav-prev" data-action="prev" title="Anterior">‹</button>
      <button class="image-modal-nav image-modal-nav-next" data-action="next" title="Siguiente">›</button>
    ` : ''}
    <div class="image-modal-hint">${hasGallery ? '← → cambiar página · ' : ''}Rueda para zoom · Arrastrar para mover · ESC para cerrar</div>
  `;
  document.body.appendChild(modal);

  const img = modal.querySelector('img');
  const label = modal.querySelector('.image-modal-zoom-label');
  const counter = modal.querySelector('.image-modal-counter');
  const state = { zoom: 1, panX: 0, panY: 0 };

  function applyTransform() {
    img.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
    label.textContent = Math.round(state.zoom * 100) + '%';
    img.classList.toggle('zoomed', state.zoom > 1);
  }

  function setZoom(delta) {
    state.zoom = Math.max(0.5, Math.min(6, state.zoom + delta));
    applyTransform();
  }

  function resetZoom() {
    state.zoom = 1;
    state.panX = 0;
    state.panY = 0;
    applyTransform();
  }

  function loadImage(index) {
    currentIndex = (index + sources.length) % sources.length;
    img.src = sources[currentIndex];
    resetZoom();
    if (counter) counter.textContent = `${currentIndex + 1} / ${sources.length}`;
  }

  function navPrev() { loadImage(currentIndex - 1); }
  function navNext() { loadImage(currentIndex + 1); }

  if (counter) counter.textContent = `${currentIndex + 1} / ${sources.length}`;

  modal.addEventListener('click', (e) => {
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action === 'close' || e.target.classList.contains('image-modal-backdrop')) {
      cleanup();
      return;
    }
    if (action === 'zoom-in') setZoom(0.25);
    else if (action === 'zoom-out') setZoom(-0.25);
    else if (action === 'reset') resetZoom();
    else if (action === 'prev') navPrev();
    else if (action === 'next') navNext();
  });

  modal.addEventListener('wheel', (e) => {
    e.preventDefault();
    setZoom(e.deltaY > 0 ? -0.15 : 0.15);
  }, { passive: false });

  let dragging = false;
  let startX, startY, startPanX, startPanY;

  img.addEventListener('mousedown', (e) => {
    if (state.zoom <= 1) return;
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startPanX = state.panX;
    startPanY = state.panY;
    e.preventDefault();
  });

  function onMove(e) {
    if (!dragging) return;
    state.panX = startPanX + (e.clientX - startX);
    state.panY = startPanY + (e.clientY - startY);
    applyTransform();
  }

  function onUp() {
    dragging = false;
  }

  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);

  function onKey(e) {
    if (e.key === 'Escape') {
      cleanup();
    } else if (e.key === '+' || e.key === '=') {
      setZoom(0.25);
    } else if (e.key === '-') {
      setZoom(-0.25);
    } else if (e.key === '0') {
      resetZoom();
    } else if (e.key === 'ArrowLeft' && hasGallery) {
      navPrev();
    } else if (e.key === 'ArrowRight' && hasGallery) {
      navNext();
    }
  }

  document.addEventListener('keydown', onKey);

  function cleanup() {
    dragging = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
    document.removeEventListener('keydown', onKey);
    modal.remove();
  }
}

// ---------- UTILIDADES ----------
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
