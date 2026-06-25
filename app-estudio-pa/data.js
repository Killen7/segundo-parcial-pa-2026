const STUDY_DATA = {
  meta: {
    title: "Entrenador de Segundo Parcial - Programación Avanzada",
    subtitle: "Basado en parciales 2008-2025 del Tecnólogo Informático",
    version: "1.0",
  },
  stats: {
    totalExams: 8,
    totalPages: 69,
    yearRange: "2008-2025",
    mainTopics: [
      "Diagramas de Comunicación",
      "Diagramas de Clases de Diseño",
      "Patrones de Diseño",
      "Implementación en C++",
      "Criterios GRASP",
    ],
  },
  exams: [
    {
      id: "2025",
      year: 2025,
      title: "Segundo Parcial 2025",
      type: "examen",
      pages: 3,
      imageFolder: "Segundo Parcial 2025 -- PA",
      topics: [
        "Diagrama de Comunicación",
        "DCD",
        "Patrón State",
        "C++",
        "Modelo de Dominio",
      ],
      exercises: [
        {
          num: 1,
          points: 30,
          title: "Sistema de gestión de currículum para investigadores",
          skills: [
            "Leer modelo de dominio",
            "Diagrama de comunicación",
            "DCD",
            "DataTypes",
          ],
          keyIdea:
            "El sistema maneja CVs con entradas ordenadas por ID. Hay que identificar 'investigador principal' en publicaciones/proyectos/personales.",
        },
        {
          num: 2,
          points: 30,
          title: "Plataforma de viajes urbanos",
          skills: [
            "Identificar patrón State",
            "Implementar State en C++",
            "Máquina de estados",
          ],
          keyIdea:
            "Los estados de un viaje (Solicitado → EsperandoAuto → Viajando → Finalizado) se modelan con el patrón State.",
        },
      ],
    },
    {
      id: "2024",
      year: 2024,
      title: "Segundo Parcial 2024",
      type: "examen",
      pages: 4,
      imageFolder: "Segundo Parcial 2024 -- PA",
      topics: [
        "Diagrama de Comunicación",
        "DCD",
        "Patrón Observer",
        "C++",
        "Polimorfismo",
      ],
      exercises: [
        {
          num: 1,
          points: 30,
          title: "Sistema de estimación de horas de dedicación estudiantil",
          skills: [
            "Herencia/polimorfismo en MD",
            "Diagrama de comunicación con iteraciones",
            "DCD",
          ],
          keyIdea:
            "Las modalidades de dictado (presencial, virtual sincrónica, virtual asincrónica) requieren polimorfismo para calcular horas.",
        },
        {
          num: 2,
          points: 30,
          title: "Variante del patrón Observer con cancelación",
          skills: ["Patrón Observer", "Implementación C++", "Eventos"],
          keyIdea:
            "Observer donde el evento puede ser cancelado, interrumpiendo la notificación a los demás observers.",
        },
      ],
    },
    {
      id: "2023",
      year: 2023,
      title: "Segundo Parcial 2023",
      type: "examen",
      pages: 3,
      imageFolder: "Segundo Parcial 2023 -- PA",
      topics: [
        "Diagrama de Comunicación",
        "DCD",
        "Patrón Factory",
        "C++",
        "Herencia vs Composición",
      ],
      exercises: [
        {
          num: 1,
          points: 30,
          title: "Cadena de salas de cine",
          skills: [
            "Modelo de dominio",
            "Diagrama de comunicación con visibilidades",
            "DCD",
            "DataTypes",
          ],
          keyIdea:
            "Compra de entradas con pagos al contado/tarjeta. El id de pago es autogenerado secuencial.",
        },
        {
          num: 2,
          points: 30,
          title: "Cuentas bancarias: diferidas y con notificación",
          skills: ["Patrón Factory", "Herencia", "Composición", "Singleton"],
          keyIdea:
            "CuentaNotificacion hereda de CuentaBasica; CuentaDiferida usa composición (no es una cuenta básica).",
        },
      ],
    },
    {
      id: "2022",
      year: 2022,
      title: "Segundo Parcial 2022",
      type: "examen",
      pages: 3,
      imageFolder: "Segundo Parcial 2022 -- PA",
      topics: [
        "Diagrama de Comunicación",
        "DCD",
        "Composite",
        "Singleton",
        "C++",
      ],
      exercises: [
        {
          num: 1,
          points: 30,
          title: "Sistema de seguimiento de proyecto software",
          skills: [
            "Modelo de dominio iterativo/incremental",
            "Diagrama de comunicación",
            "DCD",
          ],
          keyIdea:
            "Etapa → Actividades → Iteraciones. Las actividades se asignan por iteración con responsable.",
        },
        {
          num: 2,
          points: 30,
          title: "Sistema de archivos (directorios y archivos)",
          skills: [
            "Patrón Composite",
            "Singleton",
            "C++",
            "IDictionary",
            "ICollection",
          ],
          keyIdea:
            "Elemento es abstracto; Archivo y Directorio heredan. Directorio contiene otros Elementos. Singleton para el Sistema.",
        },
      ],
    },
    {
      id: "2011",
      year: 2011,
      title: "Segundo Parcial 2011",
      type: "examen",
      pages: 3,
      imageFolder: "pa2011a-2parcial",
      topics: [
        "Diagrama de Comunicación",
        "DCD",
        "Singleton",
        "Herencia",
        "C++",
      ],
      exercises: [
        {
          num: 1,
          points: 30,
          title: "Sistema de archivos con permisos",
          skills: [
            "Modelo de dominio",
            "Diagrama de comunicación recursivo",
            "DCD",
          ],
          keyIdea:
            "Alta de permisos recursiva sobre directorios; consulta devuelve Set de DataPermiso.",
        },
        {
          num: 2,
          points: 30,
          title: "Tarjetas de puntos de supermercado",
          skills: ["Singleton", "Herencia", "Polimorfismo", "C++"],
          keyIdea:
            "CuentaComun y CuentaConvenio heredan de Cuenta; costo por punto resuelto polimórficamente.",
        },
      ],
    },
    {
      id: "2010",
      year: 2010,
      title: "Segundo Parcial 2010",
      type: "examen",
      pages: 4,
      imageFolder: "pa2010a_2parcial",
      topics: [
        "GRASP",
        "Diagrama de Comunicación",
        "Singleton",
        "Herencia",
        "C++",
      ],
      exercises: [
        {
          num: 1,
          points: 10,
          title: "Teórico: GRASP, colecciones, mapeo C++",
          skills: ["Definiciones GRASP", "Mapeo relaciones UML a C++"],
          keyIdea: "Preguntas conceptuales directas.",
        },
        {
          num: 2,
          points: 25,
          title: "Sistema de registro de ventas",
          skills: ["Diagrama de comunicación", "Controlador", "Visibilidades"],
          keyIdea:
            "Controlador/Fachada que maneja colecciones de Venta y EspecificacionDeProducto.",
        },
        {
          num: 3,
          points: 25,
          title: "Repositorio de documentos",
          skills: ["Singleton", "Herencia", "DataTypes", "C++"],
          keyIdea:
            "Documento abstracto; Binario y TextoPlano heredan. TextoPlano lleva historial de cambios.",
        },
      ],
    },
    {
      id: "2009",
      year: 2009,
      title: "Segundo Parcial 2009",
      type: "examen",
      pages: 6,
      imageFolder: "parcial_2_2009_letra",
      topics: [
        "C++ básico",
        "Constructores/Destructores",
        "Polimorfismo",
        "Diagrama de Comunicación",
        "DCD",
      ],
      exercises: [
        {
          num: 1,
          points: 18,
          title: "Multiple opción de C++",
          skills: ["Constructores privados", "Paso por referencia", "Herencia"],
          keyIdea:
            "Conceptos de C++: Singleton por constructor privado, paso por referencia no copia, herencia.",
        },
        {
          num: 2,
          points: 10,
          title: "Traza de ejecución C++",
          skills: [
            "Constructores/destructores",
            "Virtual vs no virtual",
            "Ligadura dinámica",
          ],
          keyIdea:
            "Seguir el orden de constructores/destructores y decidir qué método se ejecuta según el tipo estático/dinámico.",
        },
        {
          num: 3,
          points: 32,
          title: "Sistema de débito de transporte urbano (IMM)",
          skills: ["Diagrama de comunicación", "DCD", "Colecciones"],
          keyIdea:
            "Alta tickets de bus y consulta de recaudación por parada/línea.",
        },
      ],
    },
    {
      id: "2008",
      year: 2008,
      title: "Segundo Parcial 2008",
      type: "examen",
      pages: 4,
      imageFolder: "parcial_2_2008_letra",
      topics: [
        "GRASP",
        "Diagrama de Comunicación",
        "DCD",
        "C++ avanzado",
        "Polimorfismo",
      ],
      exercises: [
        {
          num: 1,
          points: 40,
          title: "Teórico: GRASP, visibilidades, controladores, DCD",
          skills: [
            "Criterios GRASP",
            "Visibilidades",
            "Controlador",
            "Mapeo C++",
          ],
          keyIdea: "Base teórica del diseño orientado a objetos.",
        },
        {
          num: 2,
          points: 40,
          title: "Sistema de gestión de inmuebles",
          skills: ["Diagrama de comunicación", "DCD", "Controlador", "C++"],
          keyIdea:
            "Alta de inmueble (casa/apartamento) con controlador que maneja colecciones.",
        },
        {
          num: 3,
          points: 20,
          title: "C++: constructores, sobrecarga y polimorfismo",
          skills: [
            "Sobrecarga de operadores",
            "Constructores de copia",
            "Resolución de métodos virtuales",
          ],
          keyIdea: "Análisis detallado de invocaciones en C++.",
        },
      ],
    },
  ],
  solutions: [
    {
      year: 2025,
      folder: "Solución Segundo Parcial 2025 -- PA",
      pages: 4,
    },
    {
      year: 2024,
      folder: "Solución Segundo Parcial 2024 -- PA",
      pages: 5,
    },
    {
      year: 2023,
      folder: "Solución Segundo Parcial 2023 -- PA",
      pages: 5,
    },
    {
      year: 2022,
      folder: "Solución Segundo Parcial 2022",
      pages: 4,
    },
    {
      year: 2011,
      folder: "pa2011a-2parcial-solucion",
      pages: 5,
    },
    {
      year: 2010,
      folder: "pa2010a_2parcial_solucion",
      pages: 6,
    },
    {
      year: 2009,
      folder: "parcial_2_2009_solucion",
      pages: 3,
    },
    {
      year: 2008,
      folder: "parcial_2_2008_solucion",
      pages: 7,
    },
  ],
  patterns: [
    {
      id: "dc-stepbystep",
      title: "Cómo armar un Diagrama de Comunicación",
      category: "Técnica",
      frequency: "100% de los exámenes",
      steps: [
        "Leer el contrato de la operación del sistema: entrada, salida, pre y postcondiciones.",
        "Identificar el objeto que recibe el mensaje inicial (típicamente :Sistema o :Fachada/Controlador).",
        "Buscar por ID usando un diccionario: crear IKey, invocar find(), verificar NULL y luego delete key.",
        "Delegar la lógica al objeto encontrado siguiendo el principio Expert.",
        "Si hay que crear objetos: usar Creator. Normalmente la clase que contiene la colección crea la instancia.",
        "Si hay que recorrer una colección: usar IIterator con while(hasCurrent()) { ... it->next(); }",
        "Si hay que acumular (sumas, conteos): inicializar acumulador antes del while y sumar dentro.",
        "Indicar visibilidades: <<association>> (atributo), <<parameter>> (parámetro), <<local>> (variable local), <<global>> (singleton).",
        "Verificar que las postcondiciones del contrato queden cumplidas.",
      ],
      tips: [
        "No olvidar eliminar la key con delete después del find.",
        "Los DataTypes/DataValues se crean y devuelven, no se persisten.",
        "Una operación de sistema puede necesitar varios diagramas si hay sub-operaciones complejas.",
      ],
      examples: [
        "2022 Ej.1 seguimiento de proyecto",
        "2023 Ej.1 cines",
        "2024 Ej.1 horas dedicación",
        "2025 Ej.1 currículum",
      ],
    },
    {
      id: "dcd-stepbystep",
      title: "Cómo armar un Diagrama de Clases de Diseño",
      category: "Técnica",
      frequency: "100% de los exámenes",
      steps: [
        "Partir del Modelo de Dominio y agregar clases de diseño: controladores, fachadas, sistemas.",
        "Agregar las operaciones que aparecen en los diagramas de comunicación.",
        "Definir atributos necesarios para las asociaciones navegables (normalmente IDictionary o ICollection).",
        "Mapear herencia del modelo a herencia pública en C++.",
        "Incluir interfaces ICollectible en las clases que se almacenan en colecciones.",
        "Agregar DataTypes/DataValues con sus atributos y getters.",
        "Indicar multiplicidades y navegabilidad.",
        "Verificar que las visibilidades usadas en DC tengan su contraparte en atributos/parámetros.",
      ],
      tips: [
        "El Sistema/Controlador suele ser Singleton (atributo estático + constructor privado).",
        "Las colecciones genéricas son IDictionary (búsqueda por clave) o ICollection (lista).",
        "No confundir herencia (es-un) con composición (tiene-un).",
      ],
      examples: ["Todos los ejercicios 1"],
    },
    {
      id: "singleton",
      title: "Patrón Singleton",
      category: "Patrón de Diseño",
      frequency: "Muy alto (2022, 2023, 2011, 2010)",
      description:
        "Garantiza una única instancia de una clase y proporciona un punto de acceso global.",
      whenToUse:
        "Cuando se necesita un único controlador, sistema o utilidad accesible desde cualquier lado.",
      codeTemplate:
        "class Sistema {\n    private:\n        static Sistema * instancia;\n        IDictionary * coleccion;\n        Sistema();\n    public:\n        static Sistema * getInstance();\n        // operaciones del sistema\n};\n\nSistema * Sistema::instancia = NULL;\n\nSistema * Sistema::getInstance() {\n    if (instancia == NULL) {\n        instancia = new Sistema();\n    }\n    return instancia;\n}",
      tips: [
        "Constructor privado.",
        "Puntero estático privado para la instancia.",
        "Método estático público getInstance().",
        "En C++ no olvidar inicializar el atributo estático fuera de la clase.",
      ],
      examples: [
        "Sistema de archivos 2022",
        "Utilidades 2023",
        "Sistema tarjetas 2011",
        "ControladorDocumentos 2010",
      ],
    },
    {
      id: "factory",
      title: "Patrón Factory",
      category: "Patrón de Diseño",
      frequency: "2023",
      description:
        "Un objeto factory tiene la responsabilidad de crear instancias que realizan una interfaz determinada, desacoplando al invocador de la clase concreta.",
      whenToUse:
        "Cuando se quiere reducir el acoplamiento evitando que el cliente conozca la clase concreta.",
      codeTemplate:
        "class Interfaz {\n    public:\n        virtual void oper() = 0;\n};\n\nclass Controlador : public Interfaz {\n    public:\n        void oper();\n};\n\nclass Factory {\n    public:\n        static Interfaz * getObjeto();\n};\n\nInterfaz * Factory::getObjeto() {\n    return new Controlador();\n}",
      tips: [
        "La fábrica devuelve un puntero a la interfaz.",
        "El cliente depende de la interfaz y de la factory, no de la clase concreta.",
        "Aplicado para reducir acoplamiento (GRASP: Protected Variations).",
      ],
      examples: ["2023 Ej.2 teoría Factory"],
    },
    {
      id: "observer",
      title: "Patrón Observer",
      category: "Patrón de Diseño",
      frequency: "2024",
      description:
        "Define una dependencia uno-a-muchos entre objetos, de modo que cuando uno cambia de estado, todos los dependientes son notificados automáticamente.",
      whenToUse:
        "Cuando un objeto debe notificar a múltiples observadores sin conocerlos directamente.",
      codeTemplate:
        "class Observer : public ICollectible {\n    public:\n        virtual void notify(Event * ev) = 0;\n};\n\nclass Subject {\n    private:\n        ICollection * observers;\n    public:\n        void addObserver(Observer * obs);\n        void removeObserver(Observer * obs);\n        void notifyObservers(Event * ev);\n};\n\nvoid Subject::notifyObservers(Event * ev) {\n    IIterator * it = observers->getIterator();\n    while (it->hasCurrent()) {\n        Observer * o = (Observer *) it->getCurrent();\n        o->notify(ev);\n        if (ev->isCancelled()) break;\n        it->next();\n    }\n    delete it;\n}",
      tips: [
        "Subject mantiene colección de Observer.",
        "Observer es abstracto; los observadores concretos implementan notify().",
        "En la variante 2024, el evento puede ser cancelado para cortar la notificación.",
      ],
      examples: ["2024 Ej.2 Observer con cancelación"],
    },
    {
      id: "state",
      title: "Patrón State",
      category: "Patrón de Diseño",
      frequency: "2025",
      description:
        "Permite que un objeto altere su comportamiento cuando su estado interno cambia, delegando el comportamiento estatal en clases de estado.",
      whenToUse:
        "Cuando un objeto tiene estados bien definidos y transiciones entre ellos, con comportamiento diferente en cada estado.",
      codeTemplate:
        "class Estado {\n    public:\n        virtual Estado * darSiguiente() = 0;\n        virtual void accion() = 0;\n};\n\nclass Viaje {\n    private:\n        Estado * estado;\n    public:\n        void cambiarEstado();\n};\n\nvoid Viaje::cambiarEstado() {\n    Estado * nuevo = estado->darSiguiente();\n    delete estado;\n    estado = nuevo;\n}",
      tips: [
        "El Contexto (Viaje) tiene un atributo Estado.",
        "Cada estado concreto implementa darSiguiente() y accion().",
        "Las transiciones se definen en los estados concretos.",
      ],
      examples: ["2025 Ej.2 estados de viaje"],
    },
    {
      id: "composite",
      title: "Patrón Composite",
      category: "Patrón de Diseño",
      frequency: "2022, 2011",
      description:
        "Compone objetos en estructuras de árbol para representar jerarquías todo-parte, permitiendo tratar objetos individuales y compuestos uniformemente.",
      whenToUse:
        "Cuando hay jerarquías recursivas: directorios con archivos, elementos compuestos de elementos, etc.",
      codeTemplate:
        "class Elemento : public ICollectible {\n    public:\n        virtual int calcularTamano() = 0;\n};\n\nclass Archivo : public Elemento {\n    private:\n        int tamano;\n    public:\n        int calcularTamano() { return tamano; }\n};\n\nclass Directorio : public Elemento {\n    private:\n        IDictionary * contenido;\n    public:\n        int calcularTamano() {\n            int total = 0;\n            IIterator * it = contenido->getIterator();\n            while (it->hasCurrent()) {\n                total += ((Elemento *)it->getCurrent())->calcularTamano();\n                it->next();\n            }\n            delete it;\n            return total;\n        }\n};",
      tips: [
        "Definir una interfaz/base común (Elemento).",
        "Las hojas (Archivo) y compuestos (Directorio) implementan la misma operación.",
        "En los compuestos, iterar recursivamente sobre los hijos.",
      ],
      examples: [
        "2022 Ej.2 sistema de archivos",
        "2011 Ej.1 permisos en directorios",
      ],
    },
    {
      id: "collections-cpp",
      title: "Receta: Iterar colecciones en C++",
      category: "C++",
      frequency: "100% de implementaciones",
      steps: [
        "Obtener iterador: IIterator * it = coleccion->getIterator();",
        "Inicializar acumuladores/flags antes del bucle.",
        "Recorrer: while (it->hasCurrent()) { ... it->next(); }",
        "Dentro del bucle, obtener el elemento actual y castear al tipo concreto.",
        "Eliminar iterador: delete it;",
      ],
      codeTemplate:
        "IIterator * it = coleccion->getIterator();\nTipo * elem;\nint total = 0;\nwhile (it->hasCurrent()) {\n    elem = (Tipo *) it->getCurrent();\n    total += elem->getValor();\n    it->next();\n}\ndelete it;",
      tips: [
        "Siempre eliminar el iterador al final.",
        "Si se eliminan elementos durante la iteración, usar removeCurrent() con cuidado.",
        "Para buscar por ID, preferir IDictionary en lugar de iterar.",
      ],
      examples: ["Todas las implementaciones con ICollection/IIterator"],
    },
    {
      id: "find-by-id",
      title: "Receta: Buscar por ID en un diccionario",
      category: "C++",
      frequency: "Muy alto",
      steps: [
        "Crear la clave: IKey * key = new KeyInteger(id);",
        "Buscar: Tipo * obj = (Tipo *) diccionario->find(key);",
        "Eliminar la clave: delete key;",
        "Verificar NULL antes de usar el objeto.",
        "Lanzar excepción si no existe: throw invalid_argument(...);",
      ],
      codeTemplate:
        'IKey * key = new KeyInteger(id);\nMiClase * obj = (MiClase *) diccionario->find(key);\ndelete key;\nif (obj == NULL) {\n    throw invalid_argument("No existe el objeto");\n}\n// usar obj...',
      tips: [
        "No olvidar el delete key; es un error común.",
        "El orden es importante: crear, find, delete key, verificar NULL.",
        "Si se usa el objeto solo dentro de un método, la visibilidad es local.",
      ],
      examples: [
        "Sistema::crearArchivo 2022",
        "Sistema::comprarPuntos 2011",
        "Sistema::comprar 2024",
      ],
    },
    {
      id: "inheritance-vs-composition",
      title: "Herencia vs Composición",
      category: "Diseño",
      frequency: "2023, 2024",
      description:
        "'Es-un' se modela con herencia pública; 'tiene-un' o comportamiento delegado se modela con composición.",
      whenToUse:
        "Usar herencia solo cuando la subclase realmente ES un tipo del padre. Si solo necesita usarlo, preferir composición.",
      examples: [
        "2023: CuentaNotificacion HEREDA de CuentaBasica; CuentaDiferida USA CuentaBasica por composición",
      ],
      tips: [
        "Preguntarse: ¿B es realmente un A? Si no, composición.",
        "Con composición se pueden exponer operaciones delegando: return cuenta->balance();",
        "Evita la herencia múltiple problemática.",
      ],
    },
  ],
  concepts: [
    {
      id: "grasp-expert",
      term: "GRASP: Expert",
      definition:
        "Asignar la responsabilidad a la clase que tiene la información necesaria para cumplirla.",
    },
    {
      id: "grasp-creator",
      term: "GRASP: Creator",
      definition:
        "Asignar a la clase B la responsabilidad de crear instancias de A si B contiene, registra, usa o es compuesta por A.",
    },
    {
      id: "grasp-low-coupling",
      term: "GRASP: Bajo Acoplamiento",
      definition:
        "Reducir las dependencias entre clases para que los cambios en una afecten lo menos posible a las demás.",
    },
    {
      id: "grasp-high-cohesion",
      term: "GRASP: Alta Cohesión",
      definition:
        "Mantener las responsabilidades de una clase relacionadas y enfocadas, evitando clases 'todo en uno'.",
    },
    {
      id: "grasp-controller",
      term: "GRASP: Controlador",
      definition:
        "Asignar la responsabilidad de manejar eventos de interfaz a una clase que represente al sistema, un dispositivo o un subsistema.",
    },
    {
      id: "visibility-association",
      term: "Visibilidad por Asociación",
      definition:
        "El objeto receptor conoce al objeto destino porque lo tiene como atributo. Se nota <<association>> en el DC.",
    },
    {
      id: "visibility-parameter",
      term: "Visibilidad por Parámetro",
      definition:
        "El objeto receptor conoce al objeto destino porque se lo pasaron como parámetro. Se nota <<parameter>>.",
    },
    {
      id: "visibility-local",
      term: "Visibilidad Local",
      definition:
        "El objeto destino es una variable local creada en el ámbito del mensaje. Se nota <<local>>.",
    },
    {
      id: "visibility-global",
      term: "Visibilidad Global",
      definition:
        "El objeto destino es globalmente accesible, típicamente un Singleton. Se nota <<global>>.",
    },
    {
      id: "uml-generalization",
      term: "Mapeo UML→C++: Generalización",
      definition:
        "Se implementa con herencia pública: class Hija : public Padre { ... };",
    },
    {
      id: "uml-realization",
      term: "Mapeo UML→C++: Realización",
      definition:
        "Se implementa con herencia pública de una clase abstracta (interface): class Clase : public IInterfaz { ... };",
    },
    {
      id: "uml-dependency",
      term: "Mapeo UML→C++: Dependencia",
      definition:
        "Se implementa con parámetros, variables locales o referencias temporales (visibilidad por parámetro/local).",
    },
    {
      id: "datatype",
      term: "DataType / DataValue",
      definition:
        "Objeto que solo transporta datos, sin identidad propia. Se crea, se devuelve y se destruye; no se persiste.",
    },
    {
      id: "icollectible",
      term: "ICollectible",
      definition:
        "Interfaz que deben implementar los objetos para poder ser almacenados en colecciones genéricas del curso.",
    },
  ],
  quiz: [
    {
      question:
        "¿Qué criterio GRASP recomienda asignar una responsabilidad a quien tiene la información necesaria?",
      options: ["Creator", "Expert", "Controller", "Low Coupling"],
      answer: 1,
      explanation:
        "Expert (Experto en Información) asigna la responsabilidad a la clase que posee la información necesaria.",
    },
    {
      question:
        "En un Diagrama de Comunicación, si un objeto recibe otro objeto como parámetro de un mensaje, ¿qué visibilidad se usa?",
      options: ["<<association>>", "<<local>>", "<<parameter>>", "<<global>>"],
      answer: 2,
      explanation:
        "Cuando el objeto es recibido como parámetro se indica <<parameter>>.",
    },
    {
      question:
        "¿Cuál es la receta correcta para buscar un objeto por ID en IDictionary?",
      options: [
        "Tipo* obj = dic->find(id);",
        "IKey* key = new KeyInteger(id); Tipo* obj = (Tipo*)dic->find(key); delete key;",
        "IIterator* it = dic->getIterator(id);",
        "Tipo* obj = dic->find(new KeyInteger(id));",
      ],
      answer: 1,
      explanation:
        "Se debe crear la key, buscar, eliminar la key y verificar NULL.",
    },
    {
      question:
        "¿Qué patrón garantiza una única instancia de una clase con acceso global?",
      options: ["Factory", "Observer", "Singleton", "State"],
      answer: 2,
      explanation: "Singleton restringe la instanciación a un único objeto.",
    },
    {
      question: "En C++, ¿cómo se mapea la generalización UML?",
      options: ["Composición", "Herencia pública", "Dependencia", "Agregación"],
      answer: 1,
      explanation:
        "La generalización se implementa con herencia pública: class Hija : public Padre.",
    },
    {
      question:
        "¿Cuál es la estructura correcta para recorrer una ICollection?",
      options: [
        "for (int i=0; i<coleccion->size(); i++) { ... }",
        "IIterator* it = coleccion->getIterator(); while (it->hasCurrent()) { ... it->next(); } delete it;",
        "while (!coleccion->isEmpty()) { ... }",
        "IIterator* it = coleccion; while (it != NULL) { ... }",
      ],
      answer: 1,
      explanation:
        "Se usa IIterator con hasCurrent(), getCurrent(), next() y al final delete it.",
    },
    {
      question:
        "Una CuentaDiferida que NO es una CuentaBasica pero usa una CuentaBasica interna es ejemplo de:",
      options: ["Herencia", "Composición", "Singleton", "Observer"],
      answer: 1,
      explanation:
        "Cuando B no es un A pero usa un A, se modela con composición/delegación.",
    },
    {
      question:
        "¿Qué patrón es adecuado cuando un objeto debe notificar a varios objetos sin conocerlos?",
      options: ["Factory", "State", "Observer", "Composite"],
      answer: 2,
      explanation:
        "Observer define una dependencia uno-a-muchos para notificación automática.",
    },
    {
      question:
        "¿Qué patrón permite modelar estados con comportamientos distintos y transiciones?",
      options: ["Singleton", "State", "Factory", "Composite"],
      answer: 1,
      explanation:
        "State encapsula estados como clases y delega el comportamiento al estado actual.",
    },
    {
      question:
        "¿Qué tipo de colección se usa para buscar objetos por una clave?",
      options: ["ICollection", "IIterator", "IDictionary", "IKey"],
      answer: 2,
      explanation: "IDictionary permite búsquedas por clave (IKey).",
    },
  ],
  dcScenarios: [
    {
      id: "alta-tickets-bus",
      title: "Alta tickets de bus (IMM 2009)",
      year: 2009,
      operation: "altaTicketsDeBus(dT:Set[DataTicket], bus:matricula)",
      description:
        "Se recibe un conjunto de DataTicket y la matrícula de un bus. Se debe dar de alta cada Ticket en el Bus, asociándolo a la Tarjeta y Parada correspondiente.",
      systemObject: ":Sistema",
      objects: [":Sistema", ":Bus", ":Ticket", ":Tarjeta", ":Parada"],
      modelMessages: [
        {
          id: "m1",
          num: "1",
          from: ":Sistema",
          to: ":Bus",
          text: "b := find(bus)",
          visibility: "association",
        },
        {
          id: "m2",
          num: "2*",
          from: ":Sistema",
          to: ":Tarjeta",
          text: "t := find(iDTarjeta)",
          visibility: "association",
          loop: "para cada DataTicket",
        },
        {
          id: "m3",
          num: "3*",
          from: ":Sistema",
          to: ":Bus",
          text: "altaTicket(dT_i, t)",
          visibility: "association",
          loop: "para cada DataTicket",
        },
        {
          id: "m4",
          num: "3*.1",
          from: ":Bus",
          to: ":Ticket",
          text: "create(dt_i)",
          visibility: "local",
        },
        {
          id: "m5",
          num: "3*.2",
          from: ":Bus",
          to: ":Ticket",
          text: "add(tic)",
          visibility: "association",
        },
        {
          id: "m6",
          num: "3*.3",
          from: ":Ticket",
          to: ":Ticket",
          text: "add(tic)",
          visibility: "local",
        },
        {
          id: "m7",
          num: "3*.4",
          from: ":Bus",
          to: ":Parada",
          text: "p := find(IDParada)",
          visibility: "association",
        },
        {
          id: "m8",
          num: "3*.4.1",
          from: ":Bus",
          to: ":Ticket",
          text: "addParada(p)",
          visibility: "parameter",
        },
      ],
      hints: [
        "Primero busca el Bus por matrícula.",
        "Itera sobre cada DataTicket: busca Tarjeta y crea Ticket.",
        "Asocia el Ticket al Bus y a la Parada correspondiente.",
        "La creación del Ticket es visibilidad local (create).",
      ],
    },
    {
      id: "seguimiento-proyecto",
      title: "Sistema de seguimiento de proyecto (2022)",
      year: 2022,
      operation:
        "altaActividadIteracion(nomE:string, nomA:string, nomI:string)",
      description:
        "Se reciben el nombre de una etapa, el nombre de una actividad y el nombre de un integrante. Se busca la etapa, la actividad y el integrante, y se da de alta una ActividadEnIteracion en la iteración actual.",
      systemObject: ":Sistema",
      objects: [
        {
          name: ":Sistema",
          x: 420,
          y: 30,
        },
        {
          name: ":Etapa",
          x: 700,
          y: 30,
        },
        {
          name: "e : Etapa",
          x: 560,
          y: 130,
        },
        {
          name: ":Actividad",
          x: 780,
          y: 130,
        },
        {
          name: ":Integrante",
          x: 80,
          y: 130,
        },
        {
          name: "i : Iteracion",
          x: 280,
          y: 230,
        },
        {
          name: ":Act-Iter",
          x: 700,
          y: 230,
        },
        {
          name: "ai : Act-Iter",
          x: 280,
          y: 350,
        },
        {
          name: "in : Integrante",
          x: 560,
          y: 350,
        },
      ],
      modelMessages: [
        {
          id: "m1",
          num: "1",
          from: ":Sistema",
          to: ":Etapa",
          text: "e := find(nomE)",
          visibility: "association",
        },
        {
          id: "m2",
          num: "2",
          from: ":Sistema",
          to: "e : Etapa",
          text: "ac := buscarActividad(nomA)",
          visibility: "association",
        },
        {
          id: "m3",
          num: "2.1",
          from: "e : Etapa",
          to: ":Actividad",
          text: "a := find(nomA)",
          visibility: "association",
        },
        {
          id: "m4",
          num: "3",
          from: ":Sistema",
          to: ":Integrante",
          text: "in := find(nomI)",
          visibility: "association",
        },
        {
          id: "m5",
          num: "4",
          from: ":Sistema",
          to: "i : Iteracion",
          text: "altaActividad(ac, in)",
          visibility: "association",
        },
        {
          id: "m6",
          num: "4.1",
          from: "i : Iteracion",
          to: "ai : Act-Iter",
          text: "create(ac, in)",
          visibility: "local",
          note: "Se asocia con el Integrante in y la Actividad ac",
        },
        {
          id: "m7",
          num: "4.1.1",
          from: "ai : Act-Iter",
          to: "in : Integrante",
          text: "agregarActIter(ai)",
          visibility: "parameter",
        },
        {
          id: "m8",
          num: "4.1.1.1",
          from: "in : Integrante",
          to: ":Act-Iter",
          text: "add(ai)",
          visibility: "association",
        },
        {
          id: "m9",
          num: "4.2",
          from: "i : Iteracion",
          to: ":Act-Iter",
          text: "add(ai)",
          visibility: "association",
        },
      ],
      hints: [
        "Busca Etapa, luego dentro de la etapa busca la Actividad.",
        "Busca el Integrante por nombre.",
        "La Iteración crea la Act-Iter (Creator) asociando actividad e integrante.",
        "Agrega la Act-Iter tanto a la Iteración como al Integrante.",
      ],
    },
    {
      id: "compra-cine",
      title: "Compra de entradas de cine (2023)",
      year: 2023,
      operation: "inicioCompra(idPeli:Integer, idFunc:Integer)",
      description:
        "Se inicia una compra para una película y función determinadas. Se crea un Pago con id autogenerado, se crean las entradas y se asocian a la función.",
      systemObject: ":Sistema",
      objects: [
        ":Sistema",
        ":Pelicula",
        ":Funcion",
        ":Pago",
        ":Entrada",
        ":Cliente",
      ],
      modelMessages: [
        {
          id: "m1",
          num: "1",
          from: ":Sistema",
          to: ":Pelicula",
          text: "p := find(idPeli)",
          visibility: "association",
        },
        {
          id: "m2",
          num: "2",
          from: ":Sistema",
          to: ":Funcion",
          text: "f := p.getFuncion(idFunc)",
          visibility: "association",
        },
        {
          id: "m3",
          num: "3",
          from: ":Sistema",
          to: ":Pago",
          text: "create()",
          visibility: "local",
        },
        {
          id: "m4",
          num: "4",
          from: ":Sistema",
          to: ":Pago",
          text: "setId(nuevoId)",
          visibility: "parameter",
        },
        {
          id: "m5",
          num: "5",
          from: ":Sistema",
          to: ":Funcion",
          text: "crearEntradas(pago)",
          visibility: "association",
        },
        {
          id: "m6",
          num: "5.1",
          from: ":Funcion",
          to: ":Entrada",
          text: "create()",
          visibility: "local",
        },
        {
          id: "m7",
          num: "5.2",
          from: ":Funcion",
          to: ":Entrada",
          text: "add(e)",
          visibility: "association",
        },
        {
          id: "m8",
          num: "5.3",
          from: ":Funcion",
          to: ":Pago",
          text: "addEntrada(e)",
          visibility: "parameter",
        },
      ],
      hints: [
        "El Pago tiene un id autogenerado; el Sistema conoce el contador.",
        "La Función crea las Entradas (Creator).",
        "Una Entrada se asocia tanto a la Función como al Pago.",
      ],
    },
    {
      id: "horas-dedicacion",
      title: "Estimación de horas de dedicación (2024)",
      year: 2024,
      operation:
        "calcularHorasDedicacion(ciEst:Integer, codAsig:String):Integer",
      description:
        "Se recibe la cédula de un estudiante y el código de una asignatura. Se debe calcular las horas semanales que dedica según la modalidad de dictado (presencial, virtual sincrónica o asincrónica).",
      systemObject: ":Sistema",
      objects: [
        ":Sistema",
        ":Estudiante",
        ":AsignaturaCursada",
        ":Asignatura",
        ":Modalidad",
      ],
      modelMessages: [
        {
          id: "m1",
          num: "1",
          from: ":Sistema",
          to: ":Estudiante",
          text: "e := find(ciEst)",
          visibility: "association",
        },
        {
          id: "m2",
          num: "2",
          from: ":Sistema",
          to: ":AsignaturaCursada",
          text: "ac := e.getAsignatura(codAsig)",
          visibility: "association",
        },
        {
          id: "m3",
          num: "3",
          from: ":Sistema",
          to: ":AsignaturaCursada",
          text: "horas := calcularHoras()",
          visibility: "parameter",
        },
        {
          id: "m4",
          num: "3.1",
          from: ":AsignaturaCursada",
          to: ":Asignatura",
          text: "a := getAsignatura()",
          visibility: "association",
        },
        {
          id: "m5",
          num: "3.2",
          from: ":Asignatura",
          to: ":Modalidad",
          text: "m := getModalidad()",
          visibility: "association",
        },
        {
          id: "m6",
          num: "3.3",
          from: ":Asignatura",
          to: ":Modalidad",
          text: "horas := calcularHoras()",
          visibility: "parameter",
        },
      ],
      hints: [
        "Delega el cálculo a la AsignaturaCursada y luego a la Modalidad.",
        "La Modalidad es polimórfica: cada subtipo calcula distinto.",
        "Usa Expert: la Modalidad conoce sus clases/sesiones/intervenciones.",
      ],
    },
    {
      id: "curriculum-investigadores",
      title: "Currículum de investigadores (2025)",
      year: 2025,
      operation:
        "obtenerInvestigadoresPrincipales(nomCV:String):Set[DataInvestigador]",
      description:
        "Se recibe el nombre de un currículum y se deben devolver los datos de los investigadores que son principales en alguna entrada del CV.",
      systemObject: ":Sistema",
      objects: [
        ":Sistema",
        ":CV",
        ":Entrada",
        ":Publicacion",
        ":Proyecto",
        ":Investigador",
      ],
      modelMessages: [
        {
          id: "m1",
          num: "1",
          from: ":Sistema",
          to: ":CV",
          text: "cv := find(nomCV)",
          visibility: "association",
        },
        {
          id: "m2",
          num: "2",
          from: ":Sistema",
          to: ":CV",
          text: "resultado := getPrincipales()",
          visibility: "association",
        },
        {
          id: "m3",
          num: "2.1*",
          from: ":CV",
          to: ":Entrada",
          text: "e := next()",
          visibility: "association",
          loop: "para cada entrada",
        },
        {
          id: "m4",
          num: "2.2*",
          from: ":Entrada",
          to: ":Entrada",
          text: "inv := getPrincipal()",
          visibility: "local",
        },
        {
          id: "m5",
          num: "2.3*",
          from: ":Entrada",
          to: ":Investigador",
          text: "di := getData()",
          visibility: "parameter",
        },
        {
          id: "m6",
          num: "2.4*",
          from: ":CV",
          to: ":CV",
          text: "add(di)",
          visibility: "local",
        },
      ],
      hints: [
        "Itera sobre las entradas del CV.",
        "Cada entrada sabe quién es su investigador principal (polimorfismo).",
        "Acumula DataInvestigador en un conjunto resultado.",
      ],
    },
    {
      id: "permisos-archivos",
      title: "Alta de permisos en sistema de archivos (2011)",
      year: 2011,
      operation: "altaDePermiso(idUsr:Integer, pathEl:String, tipoP:Integer)",
      description:
        "Se recibe un usuario, un path de elemento y un tipo de permiso. Se crea un Permiso asociado al Usuario y al Elemento. Si el elemento es Directorio, se crean permisos recursivamente para sus elementos.",
      systemObject: ":Sistema",
      objects: [
        ":Sistema",
        ":Usuario",
        ":Elemento",
        ":Permiso",
        ":Directorio",
        ":Archivo",
      ],
      modelMessages: [
        {
          id: "m1",
          num: "1",
          from: ":Sistema",
          to: ":Usuario",
          text: "usr := find(idUsr)",
          visibility: "association",
        },
        {
          id: "m2",
          num: "2",
          from: ":Sistema",
          to: ":Elemento",
          text: "e := find(pathEl)",
          visibility: "association",
        },
        {
          id: "m3",
          num: "3",
          from: ":Sistema",
          to: ":Elemento",
          text: "definirPermiso(usr, tipoP)",
          visibility: "parameter",
        },
        {
          id: "m4",
          num: "3.1",
          from: ":Elemento",
          to: ":Permiso",
          text: "create(e, tipoP)",
          visibility: "local",
        },
        {
          id: "m5",
          num: "3.2",
          from: ":Elemento",
          to: ":Elemento",
          text: "agregarPermiso(p)",
          visibility: "parameter",
        },
        {
          id: "m6",
          num: "3.3",
          from: ":Elemento",
          to: ":Usuario",
          text: "agregarPermiso(p)",
          visibility: "parameter",
        },
        {
          id: "m7",
          num: "4*",
          from: ":Directorio",
          to: ":Elemento",
          text: "definirPermiso(usr, tipoP)",
          visibility: "association",
          loop: "para cada hijo",
        },
      ],
      hints: [
        "Busca Usuario y Elemento por sus IDs/path.",
        "Delega la creación del permiso al Elemento.",
        "Si es Directorio, itera recursivamente sobre sus elementos hijos.",
      ],
    },
  ],
  tutorials: [
    {
      id: "2022-e1",
      examId: "2022",
      exerciseNum: 1,
      title:
        "Sistema de seguimiento de proyecto - Diagrama de Comunicación y DCD",
      type: "diagrama",
      intro:
        "Este ejercicio pide dos operaciones: alta de una actividad en una iteración y consulta de actividades de un integrante. Vamos a construir los diagramas objeto por objeto, justificando cada flecha.",
      steps: [
        {
          title: "Paso 1: Leer el contrato y detectar objetos",
          content:
            "Antes de dibujar, subrayá los sustantivos del enunciado: Etapa, Actividad, Iteración, Integrante y la clase nueva ActividadEnIteracion (Act-Iter). Estos son los objetos que van a aparecer en el Diagrama de Comunicación. El Sistema recibe todo por nombre (string), por lo que debe buscar por find().",
          highlight:
            "Si el parámetro es un nombre o ID, la primera flecha casi siempre es un find() sobre una colección del Sistema.",
          builds: [
            ":Sistema",
            ":Etapa",
            ":Actividad",
            ":Iteracion",
            ":Integrante",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: ":Etapa",
                x: 300,
                y: 100,
              },
              {
                name: ":Actividad",
                x: 550,
                y: 100,
              },
              {
                name: ":Iteracion",
                x: 300,
                y: 300,
              },
              {
                name: ":Integrante",
                x: 50,
                y: 300,
              },
            ],
            messages: [],
          },
        },
        {
          title: "Paso 2: Dibujar la primera búsqueda",
          content:
            "El Sistema conoce la colección de Etapas (asociación). Dibujamos la flecha 1: e := find(nomE) desde :Sistema hasta :Etapa. La visibilidad es <<association>> porque el Sistema tiene a las Etapas como atributo.",
          highlight: "<<association>> significa 'lo tengo como atributo'.",
          builds: ["1: e := find(nomE)  (:Sistema → :Etapa, association)"],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Etapa",
                x: 450,
                y: 200,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Etapa",
                text: "e := find(nomE)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 3: Buscar la Actividad dentro de la Etapa",
          content:
            "Una vez que tenemos la Etapa 'e', le pedimos que busque la Actividad. La flecha 2 ac := buscarActividad(nomA) va de :Sistema a e:Etapa (association, porque todavía lo conoce). Internamente la Etapa hace 2.1 a := find(nomA) sobre su colección de Actividades.",
          highlight:
            "¿Por qué no busca el Sistema la Actividad directamente? Porque solo la Etapa conoce sus Actividades (Expert).",
          builds: [
            "2: ac := buscarActividad(nomA)  (:Sistema → e:Etapa, association)",
            "2.1: a := find(nomA)  (e:Etapa → :Actividad, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: "e:Etapa",
                x: 350,
                y: 200,
              },
              {
                name: ":Actividad",
                x: 650,
                y: 200,
              },
            ],
            messages: [
              {
                num: "2",
                from: ":Sistema",
                to: "e:Etapa",
                text: "ac := buscarActividad(nomA)",
                visibility: "association",
              },
              {
                num: "2.1",
                from: "e:Etapa",
                to: ":Actividad",
                text: "a := find(nomA)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 4: Buscar el Integrante",
          content:
            "El Sistema también tiene una colección de Integrantes. Dibujamos 3: in := find(nomI) desde :Sistema hasta :Integrante, visibilidad association.",
          highlight:
            "Cada objeto fuerte del modelo de dominio suele estar en una colección del Sistema.",
          builds: [
            "3: in := find(nomI)  (:Sistema → :Integrante, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Integrante",
                x: 450,
                y: 200,
              },
            ],
            messages: [
              {
                num: "3",
                from: ":Sistema",
                to: ":Integrante",
                text: "in := find(nomI)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 5: Encontrar la iteración actual",
          content:
            "La operación habla de 'la iteración actual'. El Sistema itera sobre sus Iteraciones para obtener la activa: 4* [foreach]: i := next(). La visibilidad es association y el asterisco indica iteración.",
          highlight:
            "Cuando el enunciado dice 'la iteración actual' y no da un identificador, se recorre la colección hasta encontrarla.",
          builds: [
            "4* [foreach]: i := next()  (:Sistema → :Iteracion, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Iteracion",
                x: 450,
                y: 200,
              },
            ],
            messages: [
              {
                num: "4*",
                from: ":Sistema",
                to: ":Iteracion",
                text: "[foreach] i := next()",
                visibility: "association",
                loop: "buscar iteración actual",
              },
            ],
          },
        },
        {
          title: "Paso 6: Delegar la creación a la Iteración",
          content:
            "La nueva Act-Iter debe guardarse dentro de la Iteración. Por Creator, quien contiene la colección crea la instancia. Dibujamos 5*: altaActividad(ac, in) de :Sistema a i:Iteracion, y desde i:Iteracion la flecha 5.1 create(ac, in) a ai:Act-Iter con visibilidad <<local>>.",
          highlight:
            "Creator: la Iteración crea la Act-Iter porque va a almacenarla.",
          builds: [
            "5*: altaActividad(ac, in)  (:Sistema → i:Iteracion, association)",
            "5.1: create(ac, in)  (i:Iteracion → ai:Act-Iter, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: "i:Iteracion",
                x: 400,
                y: 200,
              },
              {
                name: "ai:Act-Iter",
                x: 750,
                y: 200,
              },
            ],
            messages: [
              {
                num: "5*",
                from: ":Sistema",
                to: "i:Iteracion",
                text: "altaActividad(ac, in)",
                visibility: "association",
              },
              {
                num: "5.1",
                from: "i:Iteracion",
                to: "ai:Act-Iter",
                text: "create(ac, in)",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 7: Asociar la Act-Iter al Integrante",
          content:
            "La Act-Iter también debe quedar asociada al Integrante. Desde ai:Act-Iter mandamos 5.1.1 agregarActIter(ai) a in:Integrante (parameter, porque se lo pasamos). El Integrante a su vez se agrega a sí mismo: 5.1.1.1 add(ai) a :Act-Iter (association).",
          highlight:
            "Parameter: el objeto que recibe el mensaje no lo tenía guardado, se lo pasamos justo ahora.",
          builds: [
            "5.1.1: agregarActIter(ai)  (ai:Act-Iter → in:Integrante, parameter)",
            "5.1.1.1: add(ai)  (in:Integrante → :Act-Iter, association)",
          ],
          diagramState: {
            objects: [
              {
                name: "ai:Act-Iter",
                x: 50,
                y: 200,
              },
              {
                name: "in:Integrante",
                x: 400,
                y: 200,
              },
              {
                name: ":Act-Iter",
                x: 750,
                y: 200,
              },
            ],
            messages: [
              {
                num: "5.1.1",
                from: "ai:Act-Iter",
                to: "in:Integrante",
                text: "agregarActIter(ai)",
                visibility: "parameter",
              },
              {
                num: "5.1.1.1",
                from: "in:Integrante",
                to: ":Act-Iter",
                text: "add(ai)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 8: Guardar la Act-Iter en la Iteración",
          content:
            "Finalmente la Iteración agrega la nueva instancia a su colección: 5.2: add(ai) desde i:Iteracion a :Act-Iter (association).",
          highlight:
            "Con este add se cumple la postcondición de que la Act-Iter queda registrada en la iteración.",
          builds: ["5.2: add(ai)  (i:Iteracion → :Act-Iter, association)"],
          diagramState: {
            objects: [
              {
                name: "i:Iteracion",
                x: 50,
                y: 200,
              },
              {
                name: ":Act-Iter",
                x: 450,
                y: 200,
              },
            ],
            messages: [
              {
                num: "5.2",
                from: "i:Iteracion",
                to: ":Act-Iter",
                text: "add(ai)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 9: Segundo diagrama - consulta de actividades",
          content:
            "Para consultaActividadIntegrante(nomI) se busca el Integrante (1: i := find(nomI)), se le pide sus datos (2: colDA := dataActividades()), el Integrante itera sus Act-Iter (2.1* [foreach]: ai := next()) y por cada una pide un DataActividad (2.2*: da := getDataActividad()).",
          highlight:
            "Una consulta siempre arma DataTypes; nunca devuelve objetos del dominio.",
          builds: [
            "1: i := find(nomI)",
            "2: colDA := dataActividades()",
            "2.1* [foreach]: ai := next()",
            "2.2*: da := getDataActividad()",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Integrante",
                x: 350,
                y: 100,
              },
              {
                name: "i:Integrante",
                x: 350,
                y: 300,
              },
              {
                name: ":Act-Iter",
                x: 650,
                y: 100,
              },
              {
                name: "ai:Act-Iter",
                x: 650,
                y: 300,
              },
              {
                name: ":Actividad",
                x: 950,
                y: 300,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Integrante",
                text: "i := find(nomI)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Sistema",
                to: "i:Integrante",
                text: "colDA := dataActividades()",
                visibility: "local",
              },
              {
                num: "2.1*",
                from: "i:Integrante",
                to: ":Act-Iter",
                text: "[foreach] ai := next()",
                visibility: "association",
              },
              {
                num: "2.2*",
                from: "i:Integrante",
                to: "ai:Act-Iter",
                text: "da := getDataActividad()",
                visibility: "local",
              },
              {
                num: "2.2.1",
                from: "ai:Act-Iter",
                to: ":Actividad",
                text: "nom := getNombre()",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 10: Armar el DCD",
          content:
            "Tomamos el modelo de dominio y agregamos: Sistema (con operaciones y colecciones), DataActividad como <<datatype>>, y las operaciones que aparecen en los diagramas (buscarActividad, altaActividad, dataActividades, getDataActividad, agregarActIter). Las flechas de association del DC se traducen en atributos IDictionary/ICollection.",
          highlight:
            "El DCD es el modelo de dominio + clases de diseño + DataTypes + operaciones descubiertas en el DC.",
          image:
            "../imagenes_pa2026/Solución Segundo Parcial 2022/Solución Segundo Parcial 2022_pagina_002.png",
          annotation: "DCD completo del ejercicio 1.",
        },
      ],
      commonMistakes: [
        "Poner find() sin eliminar la key (delete key).",
        "Crear la Act-Iter desde el Sistema en lugar de desde la Iteración.",
        "Olvidar que el Sistema es Singleton.",
        "Confundir visibilidad parameter con association cuando se pasa un objeto recién creado.",
        "Devolver objetos de dominio en lugar de DataTypes en la consulta.",
      ],
    },
    {
      id: "2022-e2",
      examId: "2022",
      exerciseNum: 2,
      title: "Sistema de archivos - Composite y Singleton",
      type: "codigo",
      steps: [
        {
          title: "Paso 1: Detectar el patrón Composite",
          content:
            "Tenemos Elemento (abstracto), Archivo (hoja) y Directorio (compuesto). Ambos implementan calcularTamano() de formas distintas. El Directorio suma recursivamente el tamaño de sus hijos.",
          highlight: "Composite: mismo mensaje para objeto simple y compuesto.",
        },
        {
          title: "Paso 2: Detectar el Singleton",
          content:
            "El SistemaDeArchivo debe tener una única instancia. Constructor privado, atributo estático instancia y método getInstance().",
          highlight: "Singleton: constructor privado + getInstance() estático.",
        },
        {
          title: "Paso 3: Escribir los .h",
          content:
            "Elemento hereda de ICollectible y tiene calcularTamano() virtual puro. Archivo y Directorio heredan de Elemento. Directorio tiene un IDictionary* contenido. El Sistema tiene IDictionary* elementos.",
          highlight:
            "No definas colecciones concretas; usá interfaces (IDictionary, ICollection).",
        },
        {
          title: "Paso 4: Implementar crearArchivo",
          content:
            "Buscar el Directorio por idDir con KeyInteger, pedirle que cree el archivo, y agregar el archivo al diccionario general de elementos. No te olvides de delete key.",
          highlight:
            "Receta find: KeyInteger → find → delete key → verificar NULL.",
        },
        {
          title: "Paso 5: Implementar calcularTamanoElemento",
          content:
            "Buscar el Elemento por id, llamar a calcularTamano() polimórficamente. Si es Directorio, iterará recursivamente; si es Archivo, devuelve su atributo.",
          highlight:
            "El polimorfismo resuelve si es Archivo o Directorio en tiempo de ejecución.",
        },
      ],
      commonMistakes: [
        "Olvidar inicializar el atributo estático del Singleton fuera de la clase.",
        "No hacer virtual la operación calcularTamano().",
        "No eliminar el iterador después de recorrer.",
      ],
    },
    {
      id: "2023-e1",
      examId: "2023",
      exerciseNum: 1,
      title: "Compra de entradas de cine - Diagrama de Comunicación y DCD",
      type: "diagrama",
      intro:
        "Este ejercicio tiene tres operaciones: iniciar una compra, agregar entradas y pagar al contado. Cada operación es un Diagrama de Comunicación separado. Vamos a ver cómo se construye cada uno y luego el DCD.",
      steps: [
        {
          title: "Paso 1: Analizar el modelo de dominio",
          content:
            "Las clases fuertes son Película, Función, Entrada y Pago. Además aparecen DataTypes Fecha, Hora y FechaHora. El Sistema es Singleton y mantiene colecciones de Películas, Entradas recordadas y el último id de Pago.",
          highlight:
            "Dibujá primero los objetos del modelo; el Sistema y los DataTypes se agregan al final.",
          builds: [":Sistema", ":Pelicula", ":Funcion", ":Entrada", ":Contado"],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Pelicula",
                x: 300,
                y: 100,
              },
              {
                name: ":Funcion",
                x: 300,
                y: 300,
              },
              {
                name: ":Entrada",
                x: 550,
                y: 100,
              },
              {
                name: ":Contado",
                x: 550,
                y: 300,
              },
            ],
            messages: [],
          },
        },
        {
          title: "Paso 2: inicioCompra - buscar la Película",
          content:
            "La operación recibe titPelicula, una fecha y una hora. El Sistema busca la Película por título: 1: p := find(titPelicula) desde :Sistema a :Pelicula, visibilidad association.",
          highlight:
            "find() siempre implica que el origen tiene una colección asociada.",
          builds: [
            "1: p := find(titPelicula)  (:Sistema → :Pelicula, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Pelicula",
                x: 450,
                y: 200,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Pelicula",
                text: "p := find(titPelicula)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 3: Obtener la Función",
          content:
            "La Película conoce sus Funciones. El Sistema le pide la función de esa fecha/hora: 2: func := obtenerFuncion(d,h) desde :Sistema a p:Pelicula (association, porque la película sigue siendo un atributo del Sistema). La Película busca internamente la función: 2.1: f := find(dh) desde p:Pelicula a :Funcion (association).",
          highlight: "Expert: la Película conoce sus Funciones, no el Sistema.",
          builds: [
            "2: func := obtenerFuncion(d,h)  (:Sistema → p:Pelicula, association)",
            "2.1: f := find(dh)  (p:Pelicula → :Funcion, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: "p:Pelicula",
                x: 350,
                y: 200,
              },
              {
                name: ":Funcion",
                x: 650,
                y: 200,
              },
            ],
            messages: [
              {
                num: "2",
                from: ":Sistema",
                to: "p:Pelicula",
                text: "func := obtenerFuncion(d,h)",
                visibility: "association",
              },
              {
                num: "2.1",
                from: "p:Pelicula",
                to: ":Funcion",
                text: "f := find(dh)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 4: Recordar el precio",
          content:
            "El Sistema necesita saber el precio de la entrada para después calcular el total. Dibujamos 3: p := getPrecio() desde :Sistema a p:Pelicula (association) y una nota: 'se recuerda precioTotal = 0, el valor de p y func'.",
          highlight:
            "Las variables locales del Sistema se representan con notas, no con objetos.",
          builds: [
            "3: p := getPrecio()  (:Sistema → p:Pelicula, association)",
            "nota: precioTotal = 0",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: "p:Pelicula",
                x: 450,
                y: 200,
              },
            ],
            messages: [
              {
                num: "3",
                from: ":Sistema",
                to: "p:Pelicula",
                text: "p := getPrecio()",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 5: agregarEntrada - crear la Entrada",
          content:
            "En el segundo diagrama, el Sistema crea una Entrada pasándole fila, butaca y la función recordada: 1: e := create(fila, butaca, func) desde :Sistema a :Entrada, visibilidad <<local>>. La función 'func' llega como parámetro al constructor.",
          highlight:
            "Creator: el Sistema crea la Entrada porque es quien inicia la operación y luego la recordará.",
          builds: [
            "1: e := create(fila, butaca, func)  (:Sistema → :Entrada, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Entrada",
                x: 450,
                y: 200,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Entrada",
                text: "e := create(fila, butaca, func)",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 6: Asociar la Entrada a la Función",
          content:
            "La Entrada debe quedar ligada a la Función. El Sistema le pide a la función que la agregue: 2: agregarEntrada(e) desde :Sistema a func:Funcion (association). La Función se la agrega a sí misma: 2.1: add(e) desde func:Funcion a :Entrada (association).",
          highlight:
            "La Entrada se asocia a la Función porque pertenece a esa función.",
          builds: [
            "2: agregarEntrada(e)  (:Sistema → func:Funcion, association)",
            "2.1: add(e)  (func:Funcion → :Entrada, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: "func:Funcion",
                x: 350,
                y: 200,
              },
              {
                name: ":Entrada",
                x: 650,
                y: 200,
              },
            ],
            messages: [
              {
                num: "2",
                from: ":Sistema",
                to: "func:Funcion",
                text: "agregarEntrada(e)",
                visibility: "association",
              },
              {
                num: "2.1",
                from: "func:Funcion",
                to: ":Entrada",
                text: "add(e)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 7: Recordar la Entrada y acumular el precio",
          content:
            "El Sistema guarda la Entrada en una colección temporal y suma su precio: 3: add(e) desde :Sistema a entr:Entrada (association). Nota: 'Se recuerda precioTotal = precioTotal + precioEntrada'.",
          highlight:
            "El Sistema acumula entradas porque luego, al pagar, las va a asociar al Pago.",
          builds: ["3: add(e)  (:Sistema → entr:Entrada, association)"],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: "entr:Entrada",
                x: 450,
                y: 200,
              },
            ],
            messages: [
              {
                num: "3",
                from: ":Sistema",
                to: "entr:Entrada",
                text: "add(e)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 8: pagarAlContado - crear el Pago",
          content:
            "El tercer diagrama crea un Pago al contado. El Sistema calcula el vuelto: 1: pago := create(pagoCliente - precioTotal, precioTotal) desde :Sistema a :Contado, visibilidad <<local>>. Al crearlo se asigna el id autogenerado (Pago.ultimoId +1).",
          highlight:
            "El id autogenerado lo controla la clase Pago o el Sistema; acá la nota indica que se incrementa Pago.ultimoId.",
          builds: [
            "1: pago := create(pagoCliente - precioTotal, precioTotal)  (:Sistema → :Contado, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Contado",
                x: 450,
                y: 200,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Contado",
                text: "pago := create(pagoCliente - precioTotal, precioTotal)",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 9: Asociar las entradas recordadas al Pago",
          content:
            "El Sistema itera sobre las entradas que había guardado: 2* [foreach]: e := next(). Por cada una le pide al Pago que la agregue: 3*: agregarEntrada(e) desde :Sistema a pago:Contado (parameter, porque se la pasamos), y el Pago se la agrega: 3.1*: add(e) desde pago:Contado a :Entrada (association).",
          highlight:
            "Parameter: la entrada no es un atributo del Pago, se la pasamos para asociarla.",
          builds: [
            "2* [foreach]: e := next()",
            "3*: agregarEntrada(e)  (:Sistema → pago:Contado, parameter)",
            "3.1*: add(e)  (pago:Contado → :Entrada, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: "pago:Contado",
                x: 400,
                y: 200,
              },
              {
                name: ":Entrada",
                x: 750,
                y: 200,
              },
            ],
            messages: [
              {
                num: "3*",
                from: ":Sistema",
                to: "pago:Contado",
                text: "agregarEntrada(e)",
                visibility: "parameter",
              },
              {
                num: "3.1*",
                from: "pago:Contado",
                to: ":Entrada",
                text: "add(e)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 10: Limpiar memoria",
          content:
            "Después de asociar las entradas al Pago, el Sistema destruye su colección temporal de entradas: 4*: destroy() desde :Sistema a entr:Entrada (association).",
          highlight:
            "Las colecciones temporales del Sistema se limpian cuando ya cumplieron su función.",
          builds: ["4*: destroy()  (:Sistema → entr:Entrada, association)"],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: "entr:Entrada",
                x: 450,
                y: 200,
              },
            ],
            messages: [
              {
                num: "4*",
                from: ":Sistema",
                to: "entr:Entrada",
                text: "destroy()",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 11: Armar el DCD",
          content:
            "El DCD incluye el modelo de dominio más: Sistema como Singleton (instancia, getInstancia, precioTotal, colecciones), Pago abstracto con subclase Contado, y DataTypes Fecha, Hora, FechaHora. Película tiene obtenerFuncion(d:Fecha, h:Hora):Funcion. Funcion tiene agregarEntrada(e:Entrada).",
          highlight:
            "El DCD hereda las clases del modelo y les agrega operaciones descubiertas en los DC.",
          image:
            "../imagenes_pa2026/Solución Segundo Parcial 2023 -- PA/Solución Segundo Parcial 2023 -- PA_pagina_002.png",
          annotation: "DCD completo del ejercicio 1.",
        },
      ],
      commonMistakes: [
        "No definir el id del Pago como autogenerado por el Sistema/Pago.",
        "Crear la Entrada desde la Función en lugar del Sistema.",
        "Olvidar las visibilidades en cada mensaje.",
        "No limpiar la colección temporal de entradas recordadas.",
        "Confundir 'pago al contado' con la clase Pago padre; en el DCD va como subclase Contado.",
      ],
    },
    {
      id: "2023-e2",
      examId: "2023",
      exerciseNum: 2,
      title: "Cuentas bancarias - Factory, herencia y composición",
      type: "codigo",
      steps: [
        {
          title: "Paso 1: Entender los dos nuevos tipos de cuenta",
          content:
            "CuentaNotificacion es una CuentaBasica que al retirar envía un mail si el balance queda bajo el umbral. CuentaDiferida NO es una CuentaBasica: no permite retiro, solo transferencia a otras cuentas básicas.",
          highlight: "Notificacion → herencia. Diferida → composición.",
        },
        {
          title: "Paso 2: CuentaNotificacion por herencia",
          content:
            "Hereda de CuentaBasica, redefine retiro(float). Dentro llama al retiro del padre y luego, si balance() < umbral, usa Utilidades::getInstance()->enviarNotificacion(...).",
          highlight:
            "Para invocar el método del padre: CuentaBasica::retiro(f).",
        },
        {
          title: "Paso 3: CuentaDiferida por composición",
          content:
            "Tiene un atributo CuentaBasica* cuenta y una colección de cuentas habilitadas. Los métodos getNumero, balance y deposito delegan en la cuenta interna. transferencia busca la cuenta destino y hace retiro/deposito.",
          highlight:
            "Composición: 'tiene-un' CuentaBasica, 'no es-un' CuentaBasica.",
        },
        {
          title: "Paso 4: Responder la teoría de Factory",
          content:
            "Factory desacopla al cliente de la clase concreta. Un objeto fábrica crea instancias que realizan una interfaz. El cliente depende de la fábrica y de la interfaz, no de la implementación.",
          highlight: "Factory reduce acoplamiento (Protected Variations).",
        },
      ],
      commonMistakes: [
        "Hacer que CuentaDiferida herede de CuentaBasica.",
        "Olvidar que Utilidades es Singleton.",
        "No delegar getNumero/balance/deposito en la cuenta interna.",
      ],
    },
    {
      id: "2024-e1",
      examId: "2024",
      exerciseNum: 1,
      title:
        "Estimación de horas de dedicación - Diagrama de Comunicación y DCD",
      type: "diagrama",
      intro:
        "Este ejercicio combina dos operaciones (inscribir y calcular horas) con una jerarquía polimórfica de modalidades de dictado. La clave es no poner if/else y dejar que cada subclase implemente su propio cálculo.",
      steps: [
        {
          title: "Paso 1: Identificar las clases y la jerarquía",
          content:
            "Del modelo extraemos: Estudiante, Curso (AsignaturaCursada), Asignatura, Dictado y sus subclases Presencial, Sincronico y Asincronico. También aparece Clase para el caso presencial. El polimorfismo está en darHoras().",
          highlight:
            "Cada modalidad calcula distinto: Presencial suma clases, Sincronico multiplica sesiones, Asincronico multiplica intervenciones.",
          builds: [
            ":Sistema",
            ":Estudiante",
            ":Curso",
            ":Asignatura",
            ":Dictado",
            ":Presencial",
            ":Sincronico",
            ":Asincronico",
            ":Clase",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: ":Estudiante",
                x: 300,
                y: 50,
              },
              {
                name: ":Curso",
                x: 300,
                y: 150,
              },
              {
                name: ":Asignatura",
                x: 300,
                y: 250,
              },
              {
                name: ":Dictado",
                x: 300,
                y: 350,
              },
              {
                name: ":Presencial",
                x: 550,
                y: 50,
              },
              {
                name: ":Sincronico",
                x: 550,
                y: 150,
              },
              {
                name: ":Asincronico",
                x: 550,
                y: 250,
              },
              {
                name: ":Clase",
                x: 550,
                y: 350,
              },
            ],
            messages: [],
          },
        },
        {
          title: "Paso 2: inscribir - buscar Estudiante y Asignatura",
          content:
            "El Sistema busca por CI y código: 1: e := find(ciE) a :Estudiante y 2: a := find(codA) a :Asignatura. Ambas visibilidades son association porque el Sistema tiene esas colecciones.",
          highlight:
            "Toda operación que reciba un ID comienza con un find() desde el Sistema.",
          builds: [
            "1: e := find(ciE)  (:Sistema → :Estudiante, association)",
            "2: a := find(codA)  (:Sistema → :Asignatura, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Estudiante",
                x: 450,
                y: 100,
              },
              {
                name: ":Asignatura",
                x: 450,
                y: 300,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Estudiante",
                text: "e := find(ciE)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Sistema",
                to: ":Asignatura",
                text: "a := find(codA)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 3: Determinar si es condicional",
          content:
            "El parámetro pends indica asignaturas pendientes. Si el set está vacío, cond = FALSE; si no, cond = TRUE. Esto es una decisión del Sistema antes de crear el Curso.",
          highlight:
            "Las condiciones simples se escriben como notas en el DC, no como objetos.",
          builds: ["nota: cond = (pends vacío ? FALSE : TRUE)"],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 200,
                y: 250,
              },
              {
                name: ":Estudiante",
                x: 550,
                y: 100,
              },
              {
                name: ":Asignatura",
                x: 550,
                y: 400,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Estudiante",
                text: "e := find(ciE)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Sistema",
                to: ":Asignatura",
                text: "a := find(codA)",
                visibility: "association",
                note: "cond = (pends vacío ? FALSE : TRUE)",
              },
            ],
          },
        },
        {
          title: "Paso 4: Crear el Curso",
          content:
            "El Sistema crea un Curso con la condición y la Asignatura: 3: c := create(cond, a) desde :Sistema a :Curso, visibilidad <<local>>. El Curso mantiene referencia a la Asignatura.",
          highlight:
            "Creator: el Sistema crea el Curso porque es quien lo va a asociar al Estudiante.",
          builds: ["3: c := create(cond, a)  (:Sistema → :Curso, local)"],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Asignatura",
                x: 450,
                y: 100,
              },
              {
                name: ":Curso",
                x: 450,
                y: 300,
              },
            ],
            messages: [
              {
                num: "3",
                from: ":Sistema",
                to: ":Curso",
                text: "c := create(cond, a)",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 5: Asociar asignaturas pendientes",
          content:
            "Para cada id en pends, el Sistema busca la Asignatura: 4* [foreach p in pends]: ap := find(p) desde :Sistema a :Asignatura (association). Luego le pide al Curso que la registre como pendiente: 5*: nuevaPend(ap) desde :Sistema a c:Curso (parameter), y el Curso la agrega: 5*.1: add(ap) desde c:Curso a :Asignatura (association).",
          highlight:
            "Parameter: el Curso no conoce la Asignatura pendiente hasta que se la pasamos.",
          builds: [
            "4* [foreach p in pends]: ap := find(p)  (:Sistema → :Asignatura, association)",
            "5*: nuevaPend(ap)  (:Sistema → c:Curso, parameter)",
            "5*.1: add(ap)  (c:Curso → :Asignatura, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Asignatura",
                x: 450,
                y: 100,
              },
              {
                name: "c:Curso",
                x: 450,
                y: 300,
              },
            ],
            messages: [
              {
                num: "4*",
                from: ":Sistema",
                to: ":Asignatura",
                text: "[foreach p in pends] ap := find(p)",
                visibility: "association",
                loop: "para cada p",
              },
              {
                num: "5*",
                from: ":Sistema",
                to: "c:Curso",
                text: "nuevaPend(ap)",
                visibility: "parameter",
              },
              {
                num: "5*.1",
                from: "c:Curso",
                to: ":Asignatura",
                text: "add(ap)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 6: Asociar el Curso al Estudiante",
          content:
            "Finalmente el Sistema le pide al Estudiante que registre el nuevo Curso: 6: nuevaAsig(c) desde :Sistema a e:Estudiante (parameter), y el Estudiante lo agrega: 6.1: add(c) desde e:Estudiante a :Curso (association).",
          highlight: "Con este add se cumple la postcondición de inscripción.",
          builds: [
            "6: nuevaAsig(c)  (:Sistema → e:Estudiante, parameter)",
            "6.1: add(c)  (e:Estudiante → :Curso, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: "e:Estudiante",
                x: 450,
                y: 100,
              },
              {
                name: ":Curso",
                x: 450,
                y: 300,
              },
            ],
            messages: [
              {
                num: "6",
                from: ":Sistema",
                to: "e:Estudiante",
                text: "nuevaAsig(c)",
                visibility: "parameter",
              },
              {
                num: "6.1",
                from: "e:Estudiante",
                to: ":Curso",
                text: "add(c)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 7: horasSemDedicacion - delegar en el Estudiante",
          content:
            "Para calcular las horas semanales de un estudiante, el Sistema busca al Estudiante (1: e := find(ciE)) y le delega: 2: hd := darHorasDed() desde :Sistema a e:Estudiante (local).",
          highlight:
            "Expert: el Estudiante conoce sus Cursos, así que es el experto para calcular sus horas totales.",
          builds: [
            "1: e := find(ciE)  (:Sistema → :Estudiante, association)",
            "2: hd := darHorasDed()  (:Sistema → e:Estudiante, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Estudiante",
                x: 450,
                y: 100,
              },
              {
                name: "e:Estudiante",
                x: 450,
                y: 300,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Estudiante",
                text: "e := find(ciE)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Sistema",
                to: "e:Estudiante",
                text: "hd := darHorasDed()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 8: Recorrer cursos y delegar a cada Curso",
          content:
            "El Estudiante itera sus Cursos: 2.1* [foreach]: c := next() desde e:Estudiante a :Curso (association). Por cada Curso pide las horas dedicadas de esa asignatura: 2.2*: hda := darHorasDedAsig() desde e:Estudiante a c:Curso (local).",
          highlight:
            "Se usa un acumulador 'hd' que se suma dentro del foreach.",
          builds: [
            "2.1* [foreach]: c := next()  (e:Estudiante → :Curso, association)",
            "2.2*: hda := darHorasDedAsig()  (e:Estudiante → c:Curso, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: "e:Estudiante",
                x: 350,
                y: 100,
              },
              {
                name: ":Curso",
                x: 700,
                y: 100,
              },
              {
                name: "c:Curso",
                x: 350,
                y: 300,
              },
            ],
            messages: [
              {
                num: "2.1*",
                from: "e:Estudiante",
                to: ":Curso",
                text: "[foreach] c := next()",
                visibility: "association",
                loop: "para cada curso",
              },
              {
                num: "2.2*",
                from: "e:Estudiante",
                to: "c:Curso",
                text: "hda := darHorasDedAsig()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title:
            "Paso 9: Delegar de Curso a Asignatura y de Asignatura a Dictado",
          content:
            "El Curso le pide horas a la Asignatura: 2.2.1: h := darHoras() desde c:Curso a :Asignatura (association). La Asignatura conoce su Dictado y le delega: 2.2.1.1: h := darHoras() desde :Asignatura a :Dictado (association).",
          highlight:
            "Expert en cadena: Curso → Asignatura → Dictado. Cada uno conoce el siguiente.",
          builds: [
            "2.2.1: h := darHoras()  (c:Curso → :Asignatura, association)",
            "2.2.1.1: h := darHoras()  (:Asignatura → :Dictado, association)",
          ],
          diagramState: {
            objects: [
              {
                name: "c:Curso",
                x: 50,
                y: 200,
              },
              {
                name: ":Asignatura",
                x: 400,
                y: 200,
              },
              {
                name: ":Dictado",
                x: 750,
                y: 200,
              },
            ],
            messages: [
              {
                num: "2.2.1",
                from: "c:Curso",
                to: ":Asignatura",
                text: "h := darHoras()",
                visibility: "association",
              },
              {
                num: "2.2.1.1",
                from: ":Asignatura",
                to: ":Dictado",
                text: "h := darHoras()",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 10: Polimorfismo en Dictado",
          content:
            "Presencial itera sus Clases y suma getDuracion(). Sincronico devuelve horasSesion * sesionesSemana. Asincronico devuelve intervSemana * valorInterv. En el DCD Dictado es abstracto con tres subclases.",
          highlight:
            "Cada subclase implementa darHoras() a su manera; no hay if/else.",
          image:
            "../imagenes_pa2026/Solución Segundo Parcial 2024 -- PA/Solución Segundo Parcial 2024 -- PA_pagina_002.png",
          annotation:
            "Los tres diagramas de darHoras() y el DCD con la jerarquía Dictado.",
          diagramState: {
            objects: [
              {
                name: ":Dictado",
                x: 50,
                y: 200,
              },
              {
                name: ":Presencial",
                x: 300,
                y: 100,
              },
              {
                name: ":Sincronico",
                x: 300,
                y: 200,
              },
              {
                name: ":Asincronico",
                x: 300,
                y: 300,
              },
              {
                name: ":Clase",
                x: 550,
                y: 100,
              },
            ],
            messages: [
              {
                num: "",
                from: ":Dictado",
                to: ":Presencial",
                text: "darHoras() → suma getDuracion()",
                visibility: "polymorphic",
              },
              {
                num: "",
                from: ":Dictado",
                to: ":Sincronico",
                text: "darHoras() → horasSesion * sesionesSemana",
                visibility: "polymorphic",
              },
              {
                num: "",
                from: ":Dictado",
                to: ":Asincronico",
                text: "darHoras() → intervSemana * valorInterv",
                visibility: "polymorphic",
              },
              {
                num: "",
                from: ":Presencial",
                to: ":Clase",
                text: "[foreach] getDuracion()",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 11: Armar el DCD",
          content:
            "El DCD agrega Sistema con las operaciones inscribir y horasSemDedicacion. Estudiante tiene cedula, nombreEstud, nuevaAsig(c:Curso) y darHorasDed(). Curso tiene condicional, pendientes (0..3 Asignaturas), nuevaPend() y darHorasDedAsig(). Asignatura conoce un Dictado y tiene darHoras(). Dictado es abstracto; Presencial, Sincronico y Asincronico heredan.",
          highlight:
            "Las flechas association del DC se convierten en atributos y asociaciones navegables en el DCD.",
          builds: [
            "Sistema (Singleton)",
            "DataTypes: no hay en este ejercicio, solo tipos básicos",
            "Jerarquía Dictado → Presencial / Sincronico / Asincronico",
          ],
          image:
            "../imagenes_pa2026/Solución Segundo Parcial 2024 -- PA/Solución Segundo Parcial 2024 -- PA_pagina_003.png",
          annotation:
            "DCD completo con Sistema, Estudiante, Curso, Asignatura y jerarquía Dictado.",
        },
      ],
      commonMistakes: [
        "Poner un if/else en lugar de polimorfismo.",
        "No marcar darHoras() como virtual en C++.",
        "Olvidar que Curso (AsignaturaCursada) es la que vincula Estudiante con Asignatura.",
        "Confundir la asociación de AsignaturaCursada con Asignatura (es una sola Asignatura, no una colección).",
        "No indicar la multiplicidad 0..3 de pendientes en el DCD.",
      ],
    },
    {
      id: "2024-e2",
      examId: "2024",
      exerciseNum: 2,
      title: "Variante del patrón Observer con cancelación",
      type: "codigo",
      steps: [
        {
          title: "Paso 1: Identificar los roles del Observer",
          content:
            "Subject mantiene una colección de Observer. Los observadores concretos (Tienda) implementan notify(Event*). Cuando ocurre un evento, Subject notifica secuencialmente.",
          highlight: "Subject: el que notifica. Observer: el que reacciona.",
        },
        {
          title: "Paso 2: Implementar notifyObservers",
          content:
            "Recorrer la colección de observers con IIterator. Por cada uno llamar notify(ev). Después, si ev->isCancelled(), invocar this->onCancel(o) y terminar el bucle.",
          highlight: "La cancelación corta la notificación al resto.",
        },
        {
          title: "Paso 3: Implementar Sistema y Tienda",
          content:
            "Sistema hereda de Subject. Tienda hereda de Observer. En Sistema::comprar se crea EventoCompra, se notifica, y si una tienda canceló el evento se devuelve su nombre; si no, se lanza invalid_argument.",
          highlight:
            "onCancel recibe el observer que canceló y guarda la tienda elegida.",
        },
        {
          title: "Paso 4: Tienda::notify",
          content:
            "La tienda busca el producto en su diccionario. Si tiene stock suficiente, reduce el stock y llama ev->cancel().",
          highlight: "La primera tienda con stock gana y cancela el evento.",
        },
      ],
      commonMistakes: [
        "No hacer onCancel abstracto en Subject.",
        "Olvidar el break al cancelar.",
        "No verificar stock antes de cancelar.",
      ],
    },
    {
      id: "2025-e1",
      examId: "2025",
      exerciseNum: 1,
      title: "Currículum de investigadores - Diagrama de Comunicación y DCD",
      type: "diagrama",
      intro:
        "Este ejercicio usa un Controlador en lugar de un Sistema Singleton. Tiene dos operaciones (crearCV y consultarPrincipales) y una jerarquía de Entradas donde cada subclase resuelve distinto quién es el investigador principal.",
      steps: [
        {
          title: "Paso 1: Identificar las claves del modelo",
          content:
            "Las clases son CV, Entrada (abstracta), Personal, Publicacion, Proyecto, Rol e Investigador. El Controlador tiene una colección de CVs. Cada Entrada implementa consultarPrincipal(cv:CV):DTR de forma polimórfica.",
          highlight:
            "El Controlador reemplaza al Sistema; sigue siendo el punto de entrada pero no necesariamente Singleton.",
          builds: [
            ":Controlador",
            ":CV",
            ":Entrada",
            ":Personal",
            ":Publicacion",
            ":Proyecto",
            ":Rol",
          ],
          diagramState: {
            objects: [
              {
                name: ":Controlador",
                x: 50,
                y: 200,
              },
              {
                name: ":CV",
                x: 350,
                y: 100,
              },
              {
                name: ":Entrada",
                x: 650,
                y: 100,
              },
              {
                name: ":Personal",
                x: 320,
                y: 320,
              },
              {
                name: ":Publicacion",
                x: 540,
                y: 320,
              },
              {
                name: ":Proyecto",
                x: 760,
                y: 320,
              },
              {
                name: ":Rol",
                x: 980,
                y: 320,
              },
            ],
            messages: [],
          },
        },
        {
          title: "Paso 2: crearCV - el Controlador crea el CV",
          content:
            "La operación recibe nom y desc. El Controlador crea el CV: 1: cv := create(nom, desc) desde :Controlador a :CV, visibilidad <<local>>. Inmediatamente lo agrega a su colección: 2: add(cv) desde :Controlador a :CV (association).",
          highlight:
            "Creator: el Controlador crea el CV porque lo va a registrar.",
          builds: [
            "1: cv := create(nom, desc)  (:Controlador → :CV, local)",
            "2: add(cv)  (:Controlador → :CV, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Controlador",
                x: 50,
                y: 100,
              },
              {
                name: ":CV",
                x: 420,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Controlador",
                to: ":CV",
                text: "cv := create(nom, desc)",
                visibility: "local",
              },
              {
                num: "2",
                from: ":Controlador",
                to: ":CV",
                text: "add(cv)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 3: Crear la entrada Personal inicial",
          content:
            "Al crear el CV, este crea automáticamente una entrada Personal con la descripción: 1.1: p := create(desc, 1) desde :CV a :Personal (local). Luego la agrega a sus entradas: 1.2: add(p) desde :CV a :Entrada (association).",
          highlight:
            "Creator anidado: el CV crea su primera Entrada porque la va a contener.",
          builds: [
            "1.1: p := create(desc, 1)  (:CV → :Personal, local)",
            "1.2: add(p)  (:CV → :Entrada, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Controlador",
                x: 50,
                y: 100,
              },
              {
                name: ":CV",
                x: 420,
                y: 100,
              },
              {
                name: ":Entrada",
                x: 790,
                y: 100,
              },
              {
                name: ":Personal",
                x: 370,
                y: 280,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Controlador",
                to: ":CV",
                text: "cv := create(nom, desc)",
                visibility: "local",
              },
              {
                num: "2",
                from: ":Controlador",
                to: ":CV",
                text: "add(cv)",
                visibility: "association",
              },
              {
                num: "1.1",
                from: ":CV",
                to: ":Personal",
                text: "p := create(desc, 1)",
                visibility: "local",
              },
              {
                num: "1.2",
                from: ":CV",
                to: ":Entrada",
                text: "add(p)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 4: consultarPrincipales - buscar el CV",
          content:
            "El Controlador busca el CV por nombre: 1: cv := find(nom) desde :Controlador a :CV (association).",
          highlight: "Association: el Controlador conoce la colección de CVs.",
          builds: ["1: cv := find(nom)  (:Controlador → :CV, association)"],
          diagramState: {
            objects: [
              {
                name: ":Controlador",
                x: 50,
                y: 100,
              },
              {
                name: ":CV",
                x: 420,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Controlador",
                to: ":CV",
                text: "cv := find(nom)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 5: Pedir los principales",
          content:
            "El Controlador le pide al CV que devuelva el set de DTR: 2: sdt := promoverInvestigador() [en la solución aparece con ese nombre] desde :Controlador a cv:CV (local).",
          highlight:
            "El Controlador delega el trabajo en el CV; no itera él mismo.",
          builds: [
            "2: sdt := promoverInvestigador()  (:Controlador → cv:CV, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Controlador",
                x: 50,
                y: 100,
              },
              {
                name: ":CV",
                x: 420,
                y: 100,
              },
              {
                name: "cv:CV",
                x: 420,
                y: 300,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Controlador",
                to: ":CV",
                text: "cv := find(nom)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Controlador",
                to: "cv:CV",
                text: "sdt := promoverInvestigador()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 6: El CV itera sus Entradas",
          content:
            "El CV recorre su colección: 2.1* [foreach]: e := next() desde cv:CV a :Entrada (association). Por cada entrada pide consultarPrincipal: 2.2*: dtr := consultarPrincipal(cv):DTR desde cv:CV a e:Entrada (local).",
          highlight: "Expert: el CV conoce sus Entradas, por eso itera.",
          builds: [
            "2.1* [foreach]: e := next()  (cv:CV → :Entrada, association)",
            "2.2*: dtr := consultarPrincipal(cv):DTR  (cv:CV → e:Entrada, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Controlador",
                x: 50,
                y: 100,
              },
              {
                name: ":CV",
                x: 420,
                y: 100,
              },
              {
                name: "cv:CV",
                x: 420,
                y: 300,
              },
              {
                name: ":Entrada",
                x: 790,
                y: 300,
              },
              {
                name: "e:Entrada",
                x: 790,
                y: 460,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Controlador",
                to: ":CV",
                text: "cv := find(nom)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Controlador",
                to: "cv:CV",
                text: "sdt := promoverInvestigador()",
                visibility: "local",
              },
              {
                num: "2.1*",
                from: "cv:CV",
                to: ":Entrada",
                text: "[foreach] e := next()",
                visibility: "association",
                loop: "para cada entrada",
              },
              {
                num: "2.2*",
                from: "cv:CV",
                to: "e:Entrada",
                text: "dtr := consultarPrincipal(cv)",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 7: Personal - el principal es el dueño del CV",
          content:
            "Para una entrada Personal, se obtiene el nombre del CV: 1: n := getNombre() desde e:Personal a cv:CV (association). Se devuelve un DTR con id, tipo Personal y el nombre.",
          highlight:
            "El dueño del CV siempre es el investigador principal de la entrada Personal.",
          builds: [
            "1: n := getNombre()  (e:Personal → cv:CV, association)",
            "retorna DTR(e.id, TipoEntrada.Personal, n)",
          ],
          diagramState: {
            objects: [
              {
                name: "cv:CV",
                x: 420,
                y: 100,
              },
              {
                name: "e:Personal",
                x: 790,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: "e:Personal",
                to: "cv:CV",
                text: "n := getNombre()",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 8: Publicacion - el principal es el primer autor",
          content:
            "Para una Publicacion, primero se obtiene el nombre del CV del primer autor: 1: n := getNombre() desde e:Publicacion a cvPr:CV (association). Luego 2: cvPr := getPrimerAutor() desde e:Publicacion (local). Se devuelve DTR tipo Publicacion.",
          highlight:
            "Publicacion conoce su primer autor (un CV), por eso le pide el nombre a él.",
          builds: [
            "1: n := getNombre()  (e:Publicacion → cvPr:CV, association)",
            "2: cvPr := getPrimerAutor()  (e:Publicacion, local)",
            "retorna DTR(e.id, TipoEntrada.Publicacion, n)",
          ],
          diagramState: {
            objects: [
              {
                name: "e:Publicacion",
                x: 350,
                y: 100,
              },
              {
                name: "cvPr:CV",
                x: 790,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: "e:Publicacion",
                to: "cvPr:CV",
                text: "n := getNombre()",
                visibility: "association",
              },
              {
                num: "2",
                from: "e:Publicacion",
                to: "e:Publicacion",
                text: "cvPr := getPrimerAutor()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 9: Proyecto - buscar el rol responsable",
          content:
            "Proyecto tiene varios Roles. Itera: 1* [foreach]: r := next() desde e:Proyecto a :Rol (association). Pregunta si es responsable: 2*: ok := getResponsable(). Si ok, pide el nombre del responsable: 3*: [ok] n := getNombreResponsable(), que internamente hace 3.1: n := getNombre() desde r:Rol a cv2:CV.",
          highlight:
            "Proyecto no tiene un único investigador; debe buscar entre sus Roles quién es responsable.",
          builds: [
            "1* [foreach]: r := next()  (e:Proyecto → :Rol, association)",
            "2*: ok := getResponsable()  (e:Proyecto → r:Rol, local)",
            "3*: [ok] n := getNombreResponsable()  (e:Proyecto → r:Rol, local)",
            "3.1: n := getNombre()  (r:Rol → cv2:CV, association)",
          ],
          diagramState: {
            objects: [
              {
                name: "e:Proyecto",
                x: 300,
                y: 100,
              },
              {
                name: ":Rol",
                x: 700,
                y: 100,
              },
              {
                name: "r:Rol",
                x: 700,
                y: 300,
              },
              {
                name: "cv2:CV",
                x: 1050,
                y: 300,
              },
            ],
            messages: [
              {
                num: "1*",
                from: "e:Proyecto",
                to: ":Rol",
                text: "[foreach] r := next()",
                visibility: "association",
                loop: "para cada rol",
              },
              {
                num: "2*",
                from: "e:Proyecto",
                to: "r:Rol",
                text: "ok := getResponsable()",
                visibility: "local",
              },
              {
                num: "3*",
                from: "e:Proyecto",
                to: "r:Rol",
                text: "[ok] n := getNombreResponsable()",
                visibility: "local",
              },
              {
                num: "3.1",
                from: "r:Rol",
                to: "cv2:CV",
                text: "n := getNombre()",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 10: Armar el DCD",
          content:
            "El DCD muestra: Controlador con colección de CVs y operaciones crearCV/consultarPrincipales; CV con nombre y colección de Entradas; Entrada abstracta con subclases Personal, Publicacion, Proyecto; cada subclase implementa consultarPrincipal(cv:CV):DTR; Proyecto con colección de Roles; DataType DTR y enumeración TipoEntrada.",
          highlight:
            "La jerarquía de Entrada y la operación polimórfica son el corazón del diseño.",
          image:
            "../imagenes_pa2026/Solución Segundo Parcial 2025 -- PA/Solución Segundo Parcial 2025 -- PA_pagina_002.png",
          annotation:
            "DCD completo con Controlador, CV, jerarquía Entrada y DataType DTR.",
        },
      ],
      commonMistakes: [
        "Resolver el 'principal' con if/else en lugar de polimorfismo.",
        "Olvidar que Personal siempre tiene como principal al dueño del CV.",
        "Devolver el Investigador/CV en lugar de un DTR.",
        "No modelar Proyecto con Roles; intentar poner un único responsable directamente.",
        "Confundir el Controlador con un Sistema Singleton.",
      ],
    },
    {
      id: "2025-e2",
      examId: "2025",
      exerciseNum: 2,
      title: "Viajes urbanos - Patrón State",
      type: "codigo",
      steps: [
        {
          title: "Paso 1: Identificar el patrón State",
          content:
            "El Viaje tiene estados: Solicitado → EsperandoAuto → Viajando → Finalizado. Cada estado tiene comportamiento distinto (accion()) y sabe cuál es el siguiente (darSiguiente()).",
          highlight:
            "State: el contexto (Viaje) delega el comportamiento al estado actual.",
        },
        {
          title: "Paso 2: Definir la interfaz Estado",
          content:
            "Estado tiene darSiguiente() y accion() ambos virtuales puros. También suele tener setViaje() para que el estado conozca su contexto.",
          highlight:
            "darSiguiente() devuelve una nueva instancia del siguiente estado.",
        },
        {
          title: "Paso 3: Implementar estados concretos",
          content:
            "Solicitado.darSiguiente() devuelve new EsperandoAuto(). EsperandoAuto.accion() reserva el pago. Viajando.accion() efectúa el pago. Finalizado.accion() no hace nada.",
          highlight: "Cada estado conoce solo su transición y su acción.",
        },
        {
          title: "Paso 4: Implementar Viaje y CtldViajes",
          content:
            "CtldViajes crea el viaje con estado Solicitado y lo guarda. Viaje::cambiarEstado() pide el siguiente estado al actual, borra el anterior y asigna el nuevo.",
          highlight:
            "El Viaje no sabe los detalles de cada estado; solo delega.",
        },
      ],
      commonMistakes: [
        "Usar if/else o switch para los estados en lugar del patrón State.",
        "Olvidar eliminar el estado anterior con delete.",
        "No pasar el Viaje al estado mediante setViaje().",
      ],
    },
    {
      id: "2008-e2",
      examId: "2008",
      exerciseNum: 2,
      title: "Sistema de gestión de inmuebles - Diagrama de Comunicación y DCD",
      type: "diagrama",
      intro:
        "Este ejercicio usa un controlador de caso de uso (CAltaInmueble) que recuerda datos temporales entre mensajes del DSS. Hay tres diagramas de comunicación (datosInmueble, datosCasa/datosApto y confirmar) y un DCD que agrega la interfaz del controlador.",
      steps: [
        {
          title: "Paso 1: Entender el flujo del DSS",
          content:
            "El caso de uso Alta Inmueble tiene tres mensajes de sistema: datosInmueble(id, año, direccion, CI), datosCasa(mFrente) o datosApto(piso), y confirmar(). El controlador debe recordar los datos entre mensajes porque el DSS no envía todo junto.",
          highlight:
            "Cuando la información llega en varios mensajes, el controlador usa atributos de memoria (memId, memAño, memDir, memProp, memInm).",
          builds: [
            ":CAltaInmueble",
            ":Propietario",
            ":Inmueble",
            ":Casa",
            ":Apartamento",
          ],
          diagramState: {
            objects: [
              {
                name: ":CAltaInmueble",
                x: 50,
                y: 200,
              },
              {
                name: ":Propietario",
                x: 350,
                y: 100,
              },
              {
                name: ":Inmueble",
                x: 350,
                y: 300,
              },
              {
                name: ":Casa",
                x: 650,
                y: 200,
              },
              {
                name: ":Apartamento",
                x: 650,
                y: 350,
              },
            ],
            messages: [],
          },
        },
        {
          title: "Paso 2: datosInmueble - buscar el propietario",
          content:
            "El controlador recibe id, año, dirección y CI. Primero busca el propietario: 1: p := find(CI) desde :CAltaInmueble a :Propietario, visibilidad <<association>>. Luego recuerda id, año, dirección y p en atributos temporales.",
          highlight:
            "Association: el controlador tiene una colección de propietarios como atributo.",
          builds: [
            "1: p := find(CI)  (:CAltaInmueble → :Propietario, association)",
            "nota: recuerda id, año, direccion y p",
          ],
          diagramState: {
            objects: [
              {
                name: ":CAltaInmueble",
                x: 50,
                y: 100,
              },
              {
                name: ":Propietario",
                x: 420,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":CAltaInmueble",
                to: ":Propietario",
                text: "p := find(CI)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 3: datosCasa - crear la Casa",
          content:
            "Cuando llega datosCasa(mFrente), el controlador crea una Casa usando los datos recordados: 1: c := create(id, año, direccion, mFrente) desde :CAltaInmueble a :Casa, visibilidad <<local>>. Luego recuerda c como el inmueble a confirmar.",
          highlight:
            "Creator: el controlador crea la Casa porque tiene los datos necesarios y la va a registrar.",
          builds: [
            "1: c := create(id, año, direccion, mFrente)  (:CAltaInmueble → :Casa, local)",
            "nota: recuerda c como Inmueble i",
          ],
          diagramState: {
            objects: [
              {
                name: ":CAltaInmueble",
                x: 50,
                y: 100,
              },
              {
                name: ":Propietario",
                x: 420,
                y: 100,
              },
              {
                name: ":Casa",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":CAltaInmueble",
                to: ":Propietario",
                text: "p := find(CI)",
                visibility: "association",
              },
              {
                num: "1",
                from: ":CAltaInmueble",
                to: ":Casa",
                text: "c := create(id,año,dir,mFrente)",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 4: datosApto - crear el Apartamento",
          content:
            "La alternativa para apartamento es análoga: 1: a := create(id, año, direccion, piso) desde :CAltaInmueble a :Apartamento, local. También se recuerda como inmueble i.",
          highlight:
            "Casa y Apartamento son subclases de Inmueble; el controlador trata a ambos polimórficamente.",
          builds: [
            "1: a := create(id, año, direccion, piso)  (:CAltaInmueble → :Apartamento, local)",
            "nota: recuerda a como Inmueble i",
          ],
          diagramState: {
            objects: [
              {
                name: ":CAltaInmueble",
                x: 50,
                y: 100,
              },
              {
                name: ":Propietario",
                x: 420,
                y: 100,
              },
              {
                name: ":Apartamento",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":CAltaInmueble",
                to: ":Propietario",
                text: "p := find(CI)",
                visibility: "association",
              },
              {
                num: "1",
                from: ":CAltaInmueble",
                to: ":Apartamento",
                text: "a := create(id,año,dir,piso)",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 5: confirmar - asociar propietario e inmueble",
          content:
            "En confirmar() se usa el inmueble recordado i y el propietario recordado p. Se establece el propietario del inmueble: 1: setPropietario(p) desde :CAltaInmueble a i:Inmueble (local). Como consecuencia, internamente el inmueble se agrega al propietario: 1.1: addInmueble(i) desde p:Propietario a :Inmueble (association).",
          highlight:
            "El propietario es quien conoce la colección de inmuebles, por eso se le agrega desde él.",
          builds: [
            "1: setPropietario(p)  (:CAltaInmueble → i:Inmueble, local)",
            "1.1: addInmueble(i)  (p:Propietario → :Inmueble, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":CAltaInmueble",
                x: 50,
                y: 100,
              },
              {
                name: "i:Inmueble",
                x: 420,
                y: 100,
              },
              {
                name: "p:Propietario",
                x: 790,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":CAltaInmueble",
                to: "i:Inmueble",
                text: "setPropietario(p)",
                visibility: "local",
              },
              {
                num: "1.1",
                from: "p:Propietario",
                to: "i:Inmueble",
                text: "addInmueble(i)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 6: Guardar el inmueble en el sistema",
          content:
            "Finalmente el controlador agrega el inmueble a su colección: 2: add(i) desde :CAltaInmueble a :Inmueble (association). Con esto queda dado de alta.",
          highlight:
            "Con este add se cumple la postcondición de alta del inmueble.",
          builds: ["2: add(i)  (:CAltaInmueble → :Inmueble, association)"],
          diagramState: {
            objects: [
              {
                name: ":CAltaInmueble",
                x: 50,
                y: 100,
              },
              {
                name: "i:Inmueble",
                x: 420,
                y: 100,
              },
              {
                name: "p:Propietario",
                x: 790,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":CAltaInmueble",
                to: "i:Inmueble",
                text: "setPropietario(p)",
                visibility: "local",
              },
              {
                num: "1.1",
                from: "p:Propietario",
                to: "i:Inmueble",
                text: "addInmueble(i)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":CAltaInmueble",
                to: "i:Inmueble",
                text: "add(i)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 7: Armar el DCD",
          content:
            "El DCD incluye: la interfaz IAltaInmueble con las operaciones del sistema; CAltaInmueble que la implementa y es Singleton; atributos memId, memAño, memDir, memInm, memProp; colecciones inmuebles y propietarios (IDictionary); herencia de Inmueble → Casa/Apartamento; y asociación Propietario 1—* Inmueble.",
          highlight:
            "La interfaz del sistema separa el contrato de la implementación del controlador.",
          image:
            "../imagenes_pa2026/parcial_2_2008_solucion/parcial_2_2008_solucion_pagina_004.png",
          annotation:
            "DCD completo con IAltaInmueble, CAltaInmueble y el modelo de dominio.",
        },
      ],
      commonMistakes: [
        "No agregar la interfaz IAltaInmueble al DCD.",
        "Olvidar los atributos de memoria del controlador.",
        "Crear el Inmueble en datosInmueble en lugar de en datosCasa/datosApto.",
        "No marcar CAltaInmueble como Singleton.",
        "Confundir setPropietario con agregar el inmueble a la colección del sistema.",
      ],
    },
    {
      id: "2009-e3",
      examId: "2009",
      exerciseNum: 3,
      title:
        "Sistema de débito de transporte urbano (IMM) - Diagrama de Comunicación y DCD",
      type: "diagrama",
      intro:
        "Este ejercicio tiene dos operaciones: altaTicketsDeBus y consultarRecaudacion. La primera crea tickets asociados a bus, tarjeta y parada; la segunda acumula montos filtrando por parada a través de buses y líneas.",
      steps: [
        {
          title: "Paso 1: Identificar las clases",
          content:
            "Del modelo de dominio y el contrato surgen: Sistema, Línea, Bus, Ticket, Tarjeta, Parada y el DataType DataTicket. El Sistema es el punto de entrada y mantiene colecciones de Líneas (y posiblemente Buses/Tarjetas/Paradas).",
          highlight:
            "Los DataTicket vienen en un Set; cada uno tiene monto, fecha, idTarjeta e idParada.",
          builds: [
            ":Sistema",
            ":Linea",
            ":Bus",
            ":Ticket",
            ":Tarjeta",
            ":Parada",
            "DataTicket",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Linea",
                x: 300,
                y: 100,
              },
              {
                name: ":Bus",
                x: 300,
                y: 280,
              },
              {
                name: ":Ticket",
                x: 550,
                y: 100,
              },
              {
                name: ":Tarjeta",
                x: 550,
                y: 280,
              },
              {
                name: ":Parada",
                x: 800,
                y: 190,
              },
            ],
            messages: [],
          },
        },
        {
          title: "Paso 2: altaTicketsDeBus - buscar el Bus",
          content:
            "El Sistema busca el bus por matrícula: 1: b := find(bus) desde :Sistema a :Bus (association).",
          highlight:
            "Toda operación que reciba un identificador comienza con un find().",
          builds: ["1: b := find(bus)  (:Sistema → :Bus, association)"],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: ":Bus",
                x: 420,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Bus",
                text: "b := find(bus)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 3: Iterar sobre los DataTicket",
          content:
            "Para cada DataTicket dt_i del conjunto, el Sistema busca la Tarjeta: 2*: t := find(idTarjeta) desde :Sistema a :Tarjeta (association).",
          highlight:
            "El asterisco indica iteración sobre el conjunto recibido.",
          builds: [
            "2* [foreach dt_i]: t := find(idTarjeta)  (:Sistema → :Tarjeta, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: ":Bus",
                x: 420,
                y: 100,
              },
              {
                name: ":Tarjeta",
                x: 790,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Bus",
                text: "b := find(bus)",
                visibility: "association",
              },
              {
                num: "2*",
                from: ":Sistema",
                to: ":Tarjeta",
                text: "t := find(idTarjeta)",
                visibility: "association",
                loop: "para cada dt_i",
              },
            ],
          },
        },
        {
          title: "Paso 4: Delegar la creación del Ticket al Bus",
          content:
            "El Sistema le pide al Bus que dé de alta el ticket: 3*: altaTicket(dt_i, t) desde :Sistema a b:Bus (association). El Bus crea el Ticket: 3*.1: create(dt_i) desde b:Bus a :Ticket (local).",
          highlight:
            "Creator: el Bus crea el Ticket porque lo va a almacenar en su colección.",
          builds: [
            "3*: altaTicket(dt_i, t)  (:Sistema → b:Bus, association)",
            "3*.1: create(dt_i)  (b:Bus → :Ticket, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: "b:Bus",
                x: 420,
                y: 100,
              },
              {
                name: ":Tarjeta",
                x: 790,
                y: 100,
              },
              {
                name: ":Ticket",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Bus",
                text: "b := find(bus)",
                visibility: "association",
              },
              {
                num: "2*",
                from: ":Sistema",
                to: ":Tarjeta",
                text: "t := find(idTarjeta)",
                visibility: "association",
                loop: "para cada dt_i",
              },
              {
                num: "3*",
                from: ":Sistema",
                to: "b:Bus",
                text: "altaTicket(dt_i, t)",
                visibility: "association",
              },
              {
                num: "3*.1",
                from: "b:Bus",
                to: ":Ticket",
                text: "create(dt_i)",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 5: Asociar Ticket al Bus y a la Tarjeta",
          content:
            "El Bus agrega el Ticket a sí mismo: 3*.2: add(tic) desde b:Bus a :Ticket (association). Luego delega en el Ticket para asociar la Tarjeta: 3*.3: altaTicket(tic) desde b:Bus a t:Tarjeta (parameter), y la Tarjeta se lo agrega: 3*.3.1: add(tic) desde t:Tarjeta a :Ticket (association).",
          highlight:
            "Parameter: la Tarjeta no conoce el Ticket hasta que se lo pasamos.",
          builds: [
            "3*.2: add(tic)  (b:Bus → :Ticket, association)",
            "3*.3: altaTicket(tic)  (b:Bus → t:Tarjeta, parameter)",
            "3*.3.1: add(tic)  (t:Tarjeta → :Ticket, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: "b:Bus",
                x: 420,
                y: 100,
              },
              {
                name: "t:Tarjeta",
                x: 790,
                y: 100,
              },
              {
                name: ":Ticket",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "3*.2",
                from: "b:Bus",
                to: ":Ticket",
                text: "add(tic)",
                visibility: "association",
              },
              {
                num: "3*.3",
                from: "b:Bus",
                to: "t:Tarjeta",
                text: "altaTicket(tic)",
                visibility: "parameter",
              },
              {
                num: "3*.3.1",
                from: "t:Tarjeta",
                to: ":Ticket",
                text: "add(tic)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 6: Asociar el Ticket a la Parada",
          content:
            "El Bus busca la Parada dentro de su Línea: 3*.4: p := find(idParada) desde b:Bus a :Parada (association). Luego le pide al Ticket que registre la parada: 3*.4.1: addParada(p) desde b:Bus a tic:Ticket (parameter).",
          highlight:
            "Expert: el Bus conoce su Línea y ésta conoce las Paradas.",
          builds: [
            "3*.4: p := find(idParada)  (b:Bus → :Parada, association)",
            "3*.4.1: addParada(p)  (b:Bus → tic:Ticket, parameter)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: "b:Bus",
                x: 420,
                y: 100,
              },
              {
                name: ":Parada",
                x: 790,
                y: 100,
              },
              {
                name: "tic:Ticket",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "3*.4",
                from: "b:Bus",
                to: ":Parada",
                text: "p := find(idParada)",
                visibility: "association",
              },
              {
                num: "3*.4.1",
                from: "b:Bus",
                to: "tic:Ticket",
                text: "addParada(p)",
                visibility: "parameter",
              },
            ],
          },
        },
        {
          title: "Paso 7: consultarRecaudacion - buscar la Línea",
          content:
            "El Sistema busca la Línea por idL: 1: lin := find(idL) desde :Sistema a :Linea (association).",
          highlight: "La consulta arranca desde el Sistema buscando la Línea.",
          builds: ["1: lin := find(idL)  (:Sistema → :Linea, association)"],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: ":Linea",
                x: 420,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Linea",
                text: "lin := find(idL)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 8: Delegar el cálculo a la Línea",
          content:
            "El Sistema le pide a la Línea que calcule la recaudación para la parada: 2: monto := getRecaudacion(idP) desde :Sistema a lin:Linea (local). La Línea inicializa un acumulador y itera sus Buses.",
          highlight:
            "Expert: la Línea conoce sus Buses, así que es el experto para acumular.",
          builds: [
            "2: monto := getRecaudacion(idP)  (:Sistema → lin:Linea, local)",
            "nota: monto = suma de res",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: "lin:Linea",
                x: 420,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Linea",
                text: "lin := find(idL)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Sistema",
                to: "lin:Linea",
                text: "monto := getRecaudacion(idP)",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 9: La Línea itera Buses y Tickets",
          content:
            "La Línea recorre sus Buses: 2.1* [foreach]: b := next() desde lin:Linea a :Bus (association). Por cada Bus pide la recaudación parcial: 2.2*: res := getRecaudacion(idP) desde lin:Linea a b:Bus (local).",
          highlight:
            "Se delega a cada Bus la suma de montos de sus tickets en esa parada.",
          builds: [
            "2.1* [foreach]: b := next()  (lin:Linea → :Bus, association)",
            "2.2*: res := getRecaudacion(idP)  (lin:Linea → b:Bus, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: "lin:Linea",
                x: 420,
                y: 100,
              },
              {
                name: ":Bus",
                x: 790,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Linea",
                text: "lin := find(idL)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Sistema",
                to: "lin:Linea",
                text: "monto := getRecaudacion(idP)",
                visibility: "local",
              },
              {
                num: "2.1*",
                from: "lin:Linea",
                to: ":Bus",
                text: "b := next()",
                visibility: "association",
                loop: "para cada bus",
              },
              {
                num: "2.2*",
                from: "lin:Linea",
                to: "b:Bus",
                text: "res := getRecaudacion(idP)",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 10: El Bus filtra por parada y suma",
          content:
            "El Bus itera sus Tickets: 2.2.1* [foreach]: tic := next() desde b:Bus a :Ticket (association). Por cada Ticket pregunta si está en la parada: 2.2.2*: ok := enParada(idP) desde b:Bus a tic:Ticket (local). Si ok, obtiene el monto: 2.2.3*: [ok] res := getMonto() desde b:Bus a tic:Ticket (local).",
          highlight:
            "El Ticket conoce su Parada y su monto; el Bus solo filtra y acumula.",
          builds: [
            "2.2.1* [foreach]: tic := next()  (b:Bus → :Ticket, association)",
            "2.2.2*: ok := enParada(idP)  (b:Bus → tic:Ticket, local)",
            "2.2.3*: [ok] res := getMonto()  (b:Bus → tic:Ticket, local)",
          ],
          diagramState: {
            objects: [
              {
                name: "lin:Linea",
                x: 50,
                y: 100,
              },
              {
                name: "b:Bus",
                x: 420,
                y: 100,
              },
              {
                name: ":Ticket",
                x: 790,
                y: 100,
              },
              {
                name: "tic:Ticket",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "2.2.1*",
                from: "b:Bus",
                to: ":Ticket",
                text: "tic := next()",
                visibility: "association",
                loop: "para cada ticket",
              },
              {
                num: "2.2.2*",
                from: "b:Bus",
                to: "tic:Ticket",
                text: "ok := enParada(idP)",
                visibility: "local",
              },
              {
                num: "2.2.3*",
                from: "b:Bus",
                to: "tic:Ticket",
                text: "res := getMonto()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 11: Armar el DCD",
          content:
            "El DCD agrega Sistema con altaTicketDeBus() y consultarRecaudacion(); Línea con colección de Buses y getRecaudacion(); Bus con colección de Tickets, altaTicket() y getRecaudacion(); Ticket con monto, fecha, enParada() y getMonto(); Tarjeta con altaTicket(); Parada; y DataTicket como datatype con getters.",
          highlight:
            "Las flechas association del DC se convierten en atributos IDictionary/ICollection.",
          image:
            "../imagenes_pa2026/parcial_2_2009_solucion/parcial_2_2009_solucion_pagina_003.png",
          annotation:
            "DCD con Sistema, Línea, Bus, Ticket, Tarjeta, Parada y DataTicket.",
        },
      ],
      commonMistakes: [
        "No iterar sobre el conjunto de DataTicket.",
        "Crear el Ticket desde el Sistema en lugar del Bus.",
        "Olvidar que la recaudación se filtra por parada en el Bus.",
        "Devolver montos parciales sin acumular en la Línea.",
        "No indicar las visibilidades association/parameter/local.",
      ],
    },
    {
      id: "2010-e2",
      examId: "2010",
      exerciseNum: 2,
      title: "Sistema de registro de ventas - Diagrama de Comunicación y DCD",
      type: "diagrama",
      intro:
        "Este ejercicio usa una Fachada como controlador y tiene tres operaciones: calcular total de venta, obtener información de un producto y borrar una venta. La clave es notar que EspecificacionDeProducto conoce sus LíneasDeVenta y puede calcular cuántas se vendieron.",
      steps: [
        {
          title: "Paso 1: Identificar las clases",
          content:
            "Las clases fuertes son Venta y EspecificacionDeProducto. Además aparecen Fachada (controlador), LineaDeVenta y el DataType InfoEspecificacionDeProducto. La Fachada mantiene colecciones de Ventas y Productos.",
          highlight:
            "Una Fachada es un tipo de controlador que centraliza varios casos de uso.",
          builds: [
            ":Fachada",
            ":Venta",
            ":LineaDeVenta",
            ":EspecificacionDeProducto",
            "InfoEspecificacionDeProducto",
          ],
          diagramState: {
            objects: [
              {
                name: ":Fachada",
                x: 50,
                y: 200,
              },
              {
                name: ":Venta",
                x: 350,
                y: 100,
              },
              {
                name: ":LineaDeVenta",
                x: 650,
                y: 100,
              },
              {
                name: ":EspecificacionDeProducto",
                x: 350,
                y: 300,
              },
            ],
            messages: [],
          },
        },
        {
          title: "Paso 2: calcularTotalDeVenta - buscar la Venta",
          content:
            "La Fachada busca la venta por id: 1: v := find(idVenta) desde :Fachada a :Venta (association).",
          highlight: "Association: la Fachada conoce la colección de Ventas.",
          builds: ["1: v := find(idVenta)  (:Fachada → :Venta, association)"],
          diagramState: {
            objects: [
              {
                name: ":Fachada",
                x: 50,
                y: 100,
              },
              {
                name: ":Venta",
                x: 420,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Fachada",
                to: ":Venta",
                text: "v := find(idVenta)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 3: Delegar el cálculo a la Venta",
          content:
            "La Fachada le pide a la Venta que calcule su total: 2: tot := calcularTotal() desde :Fachada a v:Venta (local).",
          highlight:
            "Expert: la Venta conoce sus LíneasDeVenta, por eso calcula el total.",
          builds: ["2: tot := calcularTotal()  (:Fachada → v:Venta, local)"],
          diagramState: {
            objects: [
              {
                name: ":Fachada",
                x: 50,
                y: 100,
              },
              {
                name: "v:Venta",
                x: 420,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Fachada",
                to: ":Venta",
                text: "v := find(idVenta)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Fachada",
                to: "v:Venta",
                text: "tot := calcularTotal()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 4: La Venta itera sus líneas",
          content:
            "La Venta recorre sus LineaDeVenta: 1* [foreach]: lv := next() desde :Venta a :LineaDeVenta (association). Por cada línea pide el subtotal: 2*: subLV := calcularSubTotal() desde :Venta a lv:LineaDeVenta (local). El total es la suma de los subtotales.",
          highlight:
            "Se usa un acumulador tot que se incrementa dentro del foreach.",
          builds: [
            "1* [foreach]: lv := next()  (:Venta → :LineaDeVenta, association)",
            "2*: subLV := calcularSubTotal()  (:Venta → lv:LineaDeVenta, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Fachada",
                x: 50,
                y: 100,
              },
              {
                name: "v:Venta",
                x: 420,
                y: 100,
              },
              {
                name: ":LineaDeVenta",
                x: 790,
                y: 100,
              },
              {
                name: "lv:LineaDeVenta",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "1*",
                from: "v:Venta",
                to: ":LineaDeVenta",
                text: "lv := next()",
                visibility: "association",
                loop: "foreach",
              },
              {
                num: "2*",
                from: "v:Venta",
                to: "lv:LineaDeVenta",
                text: "subLV := calcularSubTotal()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 5: Calcular subtotal de una línea",
          content:
            "La LineaDeVenta obtiene el precio de la EspecificacionDeProducto: 1: precio := getPrecio() desde :LineaDeVenta a :EspecificacionDeProducto (association). Luego multiplica precio por cantidad.",
          highlight:
            "La LineaDeVenta conoce la cantidad y la EspecificacionDeProducto.",
          builds: [
            "1: precio := getPrecio()  (:LineaDeVenta → :EspecificacionDeProducto, association)",
            "nota: subLV = precio * cantidad",
          ],
          diagramState: {
            objects: [
              {
                name: ":LineaDeVenta",
                x: 50,
                y: 100,
              },
              {
                name: ":EspecificacionDeProducto",
                x: 420,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":LineaDeVenta",
                to: ":EspecificacionDeProducto",
                text: "precio := getPrecio()",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 6: obtenerInfoProducto - buscar el producto",
          content:
            "La Fachada busca la EspecificacionDeProducto por id: 1: prod := find(idEspProd) desde :Fachada a :EspecificacionDeProducto (association). Luego le pide su info: 2: prodInfo := obtenerInfoProducto() desde :Fachada a prod:EspecificacionDeProducto (local).",
          highlight:
            "La consulta devuelve un DataType, no el objeto de dominio.",
          builds: [
            "1: prod := find(idEspProd)  (:Fachada → :EspecificacionDeProducto, association)",
            "2: prodInfo := obtenerInfoProducto()  (:Fachada → prod:EspecificacionDeProducto, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Fachada",
                x: 50,
                y: 100,
              },
              {
                name: ":EspecificacionDeProducto",
                x: 420,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Fachada",
                to: ":EspecificacionDeProducto",
                text: "prod := find(idEspProd)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Fachada",
                to: ":EspecificacionDeProducto",
                text: "prodInfo := obtenerInfoProducto()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 7: Calcular cantidad vendida del producto",
          content:
            "La EspecificacionDeProducto itera sus LineaDeVenta: 1* [foreach]: lv := next() desde :EspecificacionDeProducto a :LineaDeVenta (association). Por cada línea suma la cantidad: 2*: cantidad := getCantidad() desde :EspecificacionDeProducto a lv:LineaDeVenta (local). Luego arma y devuelve InfoEspecificacionDeProducto.",
          highlight:
            "Expert: la EspecificacionDeProducto conoce todas las líneas que lo vendieron.",
          builds: [
            "1* [foreach]: lv := next()  (:EspecificacionDeProducto → :LineaDeVenta, association)",
            "2*: cantidad := getCantidad()  (:EspecificacionDeProducto → lv:LineaDeVenta, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":EspecificacionDeProducto",
                x: 50,
                y: 100,
              },
              {
                name: ":LineaDeVenta",
                x: 420,
                y: 100,
              },
              {
                name: "lv:LineaDeVenta",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "1*",
                from: ":EspecificacionDeProducto",
                to: ":LineaDeVenta",
                text: "lv := next()",
                visibility: "association",
                loop: "foreach",
              },
              {
                num: "2*",
                from: ":EspecificacionDeProducto",
                to: "lv:LineaDeVenta",
                text: "cantidad := getCantidad()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 8: borrarVenta - buscar y remover",
          content:
            "La Fachada busca la Venta: 1: v := find(idVenta) desde :Fachada a :Venta (association). Luego la remueve de la colección: 2: remove(v) desde :Fachada a :Venta (association). Finalmente la destruye: 3: destroy() desde :Fachada a v:Venta (local).",
          highlight:
            "Hay que remover antes de destruir para no dejar punteros colgados.",
          builds: [
            "1: v := find(idVenta)  (:Fachada → :Venta, association)",
            "2: remove(v)  (:Fachada → :Venta, association)",
            "3: destroy()  (:Fachada → v:Venta, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Fachada",
                x: 50,
                y: 100,
              },
              {
                name: ":Venta",
                x: 420,
                y: 100,
              },
              {
                name: "v:Venta",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Fachada",
                to: ":Venta",
                text: "v := find(idVenta)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Fachada",
                to: ":Venta",
                text: "remove(v)",
                visibility: "association",
              },
              {
                num: "3",
                from: ":Fachada",
                to: "v:Venta",
                text: "destroy()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 9: Desasociar líneas de venta y productos",
          content:
            "Antes de destruir la Venta, ésta itera sus líneas y por cada una le pide a la EspecificacionDeProducto que la remueva: 1* [foreach]: removerLineaDeVenta(this) desde :Venta a :EspecificacionDeProducto (association), y la especificación remueve: 1.1*: remove(lv) desde :EspecificacionDeProducto a :LineaDeVenta (association). Luego la Venta destruye cada línea.",
          highlight:
            "Al borrar una venta hay que mantener la consistencia de las asociaciones.",
          builds: [
            "1* [foreach]: removerLineaDeVenta(this)  (:Venta → :EspecificacionDeProducto, association)",
            "1.1*: remove(lv)  (:EspecificacionDeProducto → :LineaDeVenta, association)",
            "2*: destroy()  (:Venta → lv:LineaDeVenta, local)",
          ],
          diagramState: {
            objects: [
              {
                name: "v:Venta",
                x: 50,
                y: 100,
              },
              {
                name: ":EspecificacionDeProducto",
                x: 420,
                y: 100,
              },
              {
                name: ":LineaDeVenta",
                x: 790,
                y: 100,
              },
              {
                name: "lv:LineaDeVenta",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "1*",
                from: "v:Venta",
                to: ":EspecificacionDeProducto",
                text: "removerLineaDeVenta(this)",
                visibility: "association",
              },
              {
                num: "1.1*",
                from: ":EspecificacionDeProducto",
                to: ":LineaDeVenta",
                text: "remove(lv)",
                visibility: "association",
              },
              {
                num: "2*",
                from: "v:Venta",
                to: "lv:LineaDeVenta",
                text: "destroy()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 10: Armar el DCD",
          content:
            "El DCD incluye: Fachada (controlador) con colecciones de Ventas y Productos; Venta con colección de LineaDeVenta y operaciones calcularTotal(), removerLineaDeVenta(); LineaDeVenta con cantidad, precio, calcularSubTotal(), getCantidad(); EspecificacionDeProducto con colección de LineaDeVenta, obtenerInfoProducto(), removerLineaDeVenta(); y el DataType InfoEspecificacionDeProducto.",
          highlight:
            "El DCD es el modelo de dominio + Fachada + operaciones descubiertas + DataType.",
          image:
            "../imagenes_pa2026/pa2010a_2parcial_solucion/pa2010a_2parcial_solucion_pagina_002.png",
          annotation: "Diagramas de comunicación de las tres operaciones.",
        },
      ],
      commonMistakes: [
        "Calcular el total en la Fachada en lugar de delegar en la Venta.",
        "No devolver un DataType en obtenerInfoProducto.",
        "Destruir la Venta sin removerla de la colección primero.",
        "Olvidar remover las líneas de la EspecificacionDeProducto al borrar la venta.",
        "No indicar que EspecificacionDeProducto conoce sus LineaDeVenta.",
      ],
    },
    {
      id: "2011-e1",
      examId: "2011",
      exerciseNum: 1,
      title:
        "Sistema de archivos con permisos - Diagrama de Comunicación y DCD",
      type: "diagrama",
      intro:
        "Este ejercicio combina una jerarquía recursiva (Elemento → Archivo/Directorio) con polimorfismo. La operación altaDePermiso debe actuar recursivamente sobre directorios, mientras que consultarPermisos arma un Set de DataPermiso.",
      steps: [
        {
          title: "Paso 1: Identificar las clases",
          content:
            "Las clases son Sistema, Usuario, Elemento (abstracto), Archivo, Directorio, Permiso y el DataType DataPermiso. Elemento se identifica por path; Usuario por id. Directorio contiene otros Elementos.",
          highlight:
            "Archivo y Directorio heredan de Elemento; solo Directorio es recursivo.",
          builds: [
            ":Sistema",
            ":Usuario",
            ":Elemento",
            ":Archivo",
            ":Directorio",
            ":Permiso",
            "DataPermiso",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 200,
              },
              {
                name: ":Usuario",
                x: 350,
                y: 100,
              },
              {
                name: ":Elemento",
                x: 350,
                y: 280,
              },
              {
                name: ":Archivo",
                x: 600,
                y: 180,
              },
              {
                name: ":Directorio",
                x: 600,
                y: 320,
              },
              {
                name: ":Permiso",
                x: 850,
                y: 250,
              },
            ],
            messages: [],
          },
        },
        {
          title: "Paso 2: altaDePermiso - buscar Usuario y Elemento",
          content:
            "El Sistema busca Usuario por idUsr: 1: usr := find(idUsr) desde :Sistema a :Usuario (association). Y el Elemento por path: 2: e := find(pathEl) desde :Sistema a :Elemento (association).",
          highlight:
            "Ambas búsquedas son association porque el Sistema mantiene esas colecciones.",
          builds: [
            "1: usr := find(idUsr)  (:Sistema → :Usuario, association)",
            "2: e := find(pathEl)  (:Sistema → :Elemento, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: ":Usuario",
                x: 420,
                y: 100,
              },
              {
                name: ":Elemento",
                x: 790,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Usuario",
                text: "usr := find(idUsr)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Sistema",
                to: ":Elemento",
                text: "e := find(pathEl)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 3: Delegar la definición al Elemento",
          content:
            "El Sistema le pide al Elemento que defina el permiso: 3: definirPermiso(usr, tipoP) desde :Sistema a e:Elemento (parameter, porque acabamos de buscarlo). El Elemento crea el Permiso: 3.1: create(e, tipoP) desde e:Elemento a :Permiso (local).",
          highlight:
            "Creator: el Elemento crea el Permiso porque lo va a asociar consigo mismo y con el Usuario.",
          builds: [
            "3: definirPermiso(usr, tipoP)  (:Sistema → e:Elemento, parameter)",
            "3.1: create(e, tipoP)  (e:Elemento → :Permiso, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: "e:Elemento",
                x: 420,
                y: 100,
              },
              {
                name: ":Permiso",
                x: 790,
                y: 100,
              },
            ],
            messages: [
              {
                num: "3",
                from: ":Sistema",
                to: "e:Elemento",
                text: "definirPermiso(usr, tipoP)",
                visibility: "parameter",
              },
              {
                num: "3.1",
                from: "e:Elemento",
                to: ":Permiso",
                text: "create(e, tipoP)",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 4: Asociar Permiso a Elemento y Usuario",
          content:
            "El Elemento se agrega el Permiso a sí mismo: 3.2: agregarPermiso(p) desde e:Elemento a :Permiso (parameter). También le pide al Usuario que lo agregue: 3.3: agregarPermiso(usr, tipoP) desde e:Elemento a usr:Usuario (parameter), y el Usuario se lo agrega: 3.2.1: add(p) desde usr:Usuario a :Permiso (association).",
          highlight:
            "Parameter cuando pasamos el permiso recién creado; association cuando lo guardamos.",
          builds: [
            "3.2: agregarPermiso(p)  (e:Elemento → :Permiso, parameter)",
            "3.3: agregarPermiso(usr, tipoP)  (e:Elemento → usr:Usuario, parameter)",
            "3.2.1: add(p)  (usr:Usuario → :Permiso, association)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: "e:Elemento",
                x: 420,
                y: 100,
              },
              {
                name: "usr:Usuario",
                x: 790,
                y: 100,
              },
              {
                name: ":Permiso",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "3",
                from: ":Sistema",
                to: "e:Elemento",
                text: "definirPermiso(usr, tipoP)",
                visibility: "parameter",
              },
              {
                num: "3.1",
                from: "e:Elemento",
                to: ":Permiso",
                text: "create(e, tipoP)",
                visibility: "local",
              },
              {
                num: "3.2",
                from: "e:Elemento",
                to: ":Permiso",
                text: "agregarPermiso(p)",
                visibility: "parameter",
              },
              {
                num: "3.3",
                from: "e:Elemento",
                to: "usr:Usuario",
                text: "agregarPermiso(usr, tipoP)",
                visibility: "parameter",
              },
              {
                num: "3.2.1",
                from: "usr:Usuario",
                to: ":Permiso",
                text: "add(p)",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 5: Archivo no hace nada más",
          content:
            "Para un Archivo, la operación agregarPermiso termina. Se representa con una nota 'No hace nada'.",
          highlight:
            "El comportamiento base de Elemento ya crea el permiso; Archivo no redefine nada más.",
          builds: ["nota: Archivo.agregarPermiso() no hace nada más"],
          diagramState: {
            objects: [
              {
                name: ":Archivo",
                x: 200,
                y: 150,
              },
            ],
            messages: [
              {
                num: "",
                from: ":Archivo",
                to: ":Archivo",
                text: "agregarPermiso()",
                visibility: "local",
                note: "No hace nada más. El permiso ya fue creado y asociado en los pasos anteriores.",
              },
            ],
          },
        },
        {
          title: "Paso 6: Directorio - recursión sobre elementos hijos",
          content:
            "Para un Directorio, la operación agregarPermiso itera sus elementos hijos: 1* [foreach]: e := next() desde :Directorio a :Elemento (association). Por cada hijo vuelve a definir el permiso: 2*: definirPermiso(usr, tipoP) desde :Directorio a e:Elemento (parameter).",
          highlight:
            "La recursión es polimórfica: si el hijo es Directorio, vuelve a iterar; si es Archivo, termina.",
          builds: [
            "1* [foreach]: e := next()  (:Directorio → :Elemento, association)",
            "2*: definirPermiso(usr, tipoP)  (:Directorio → e:Elemento, parameter)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Directorio",
                x: 50,
                y: 100,
              },
              {
                name: ":Elemento",
                x: 420,
                y: 100,
              },
              {
                name: "e:Elemento",
                x: 420,
                y: 280,
              },
            ],
            messages: [
              {
                num: "1*",
                from: ":Directorio",
                to: ":Elemento",
                text: "e := next()",
                visibility: "association",
                loop: "foreach",
              },
              {
                num: "2*",
                from: ":Directorio",
                to: "e:Elemento",
                text: "definirPermiso(usr, tipoP)",
                visibility: "parameter",
              },
            ],
          },
        },
        {
          title: "Paso 7: consultarPermisos - buscar Usuario",
          content:
            "El Sistema busca el Usuario: 1: usr := find(idUsr) desde :Sistema a :Usuario (association). Luego le pide los permisos: 2: sdp := consultarPermisos() desde :Sistema a usr:Usuario (local).",
          highlight:
            "El Usuario conoce sus Permisos, por eso es el experto para consultarlos.",
          builds: [
            "1: usr := find(idUsr)  (:Sistema → :Usuario, association)",
            "2: sdp := consultarPermisos()  (:Sistema → usr:Usuario, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: ":Usuario",
                x: 420,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Usuario",
                text: "usr := find(idUsr)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Sistema",
                to: ":Usuario",
                text: "sdp := consultarPermisos()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 8: El Usuario itera sus Permisos",
          content:
            "El Usuario recorre sus Permisos: 2.1* [foreach]: p := next() desde usr:Usuario a :Permiso (association). Por cada Permiso pide un DataPermiso: 2.2*: dp := getDataPermiso() desde usr:Usuario a p:Permiso (local).",
          highlight:
            "La consulta arma DataTypes; nunca devuelve objetos de dominio.",
          builds: [
            "2.1* [foreach]: p := next()  (usr:Usuario → :Permiso, association)",
            "2.2*: dp := getDataPermiso()  (usr:Usuario → p:Permiso, local)",
          ],
          diagramState: {
            objects: [
              {
                name: ":Sistema",
                x: 50,
                y: 100,
              },
              {
                name: "usr:Usuario",
                x: 420,
                y: 100,
              },
              {
                name: ":Permiso",
                x: 790,
                y: 100,
              },
            ],
            messages: [
              {
                num: "1",
                from: ":Sistema",
                to: ":Usuario",
                text: "usr := find(idUsr)",
                visibility: "association",
              },
              {
                num: "2",
                from: ":Sistema",
                to: "usr:Usuario",
                text: "sdp := consultarPermisos()",
                visibility: "local",
              },
              {
                num: "2.1*",
                from: "usr:Usuario",
                to: ":Permiso",
                text: "p := next()",
                visibility: "association",
                loop: "foreach",
              },
              {
                num: "2.2*",
                from: "usr:Usuario",
                to: ":Permiso",
                text: "dp := getDataPermiso()",
                visibility: "local",
              },
            ],
          },
        },
        {
          title: "Paso 9: Armar el DataPermiso",
          content:
            "El Permiso conoce su tipo y su Elemento. Para armar el DataPermiso pide el path: 2.2.1: path := getPath() desde p:Permiso a :Elemento (association). Luego devuelve un DataPermiso con tipo y path.",
          highlight:
            "DataPermiso es un DataType con elemento (string) y tipo (int).",
          builds: [
            "2.2.1: path := getPath()  (p:Permiso → :Elemento, association)",
            "retorna DataPermiso(path, tipo)",
          ],
          diagramState: {
            objects: [
              {
                name: "usr:Usuario",
                x: 50,
                y: 100,
              },
              {
                name: "p:Permiso",
                x: 420,
                y: 100,
              },
              {
                name: ":Elemento",
                x: 790,
                y: 100,
              },
            ],
            messages: [
              {
                num: "2.2*",
                from: "usr:Usuario",
                to: "p:Permiso",
                text: "dp := getDataPermiso()",
                visibility: "local",
              },
              {
                num: "2.2.1",
                from: "p:Permiso",
                to: ":Elemento",
                text: "path := getPath()",
                visibility: "association",
              },
            ],
          },
        },
        {
          title: "Paso 10: Armar el DCD",
          content:
            "El DCD incluye: Sistema con altaDePermiso() y consultarPermisos(); Usuario con id, agregarPermiso(), consultarPermisos() y colección de Permisos; Elemento abstracto con path, definirPermiso(), agregarPermiso(); Archivo y Directorio heredan de Elemento; Directorio con colección de Elementos; Permiso con tipo, getDataPermiso(); y DataPermiso como datatype.",
          highlight:
            "La jerarquía Elemento/Archivo/Directorio y el polimorfismo son clave.",
          image:
            "../imagenes_pa2026/pa2011a-2parcial-solucion/pa2011a-2parcial-solucion_pagina_002.png",
          annotation:
            "DCD completo con jerarquía Elemento, Permiso y DataPermiso.",
        },
      ],
      commonMistakes: [
        "No usar polimorfismo y poner if/else para Archivo/Directorio.",
        "Olvidar la recursión en Directorio.altaDePermiso().",
        "No asociar el Permiso tanto al Usuario como al Elemento.",
        "Devolver Permisos en lugar de DataPermiso en la consulta.",
        "No marcar Elemento como abstracto en el DCD.",
      ],
    },
  ],
  checklist: [
    {
      id: "c1",
      text: "Sé identificar las clases fuertes en un modelo de dominio",
      category: "Análisis",
    },
    {
      id: "c2",
      text: "Puedo leer un contrato de operación del sistema",
      category: "Análisis",
    },
    {
      id: "c3",
      text: "Dibujo Diagramas de Comunicación con visibilidades",
      category: "Diseño",
    },
    {
      id: "c4",
      text: "Armo Diagramas de Clases de Diseño completos",
      category: "Diseño",
    },
    {
      id: "c5",
      text: "Conozco los criterios GRASP y cuándo aplicarlos",
      category: "Teoría",
    },
    {
      id: "c6",
      text: "Identifico Singleton, Factory, Observer, State y Composite",
      category: "Patrones",
    },
    {
      id: "c7",
      text: "Implemento Singleton en C++",
      category: "C++",
    },
    {
      id: "c8",
      text: "Implemento herencia y polimorfismo en C++",
      category: "C++",
    },
    {
      id: "c9",
      text: "Manejo ICollection, IIterator e IDictionary en C++",
      category: "C++",
    },
    {
      id: "c10",
      text: "Sé cuándo usar herencia vs composición",
      category: "Diseño",
    },
    {
      id: "c11",
      text: "Entiendo la diferencia entre DataType y clase de dominio",
      category: "Diseño",
    },
    {
      id: "c12",
      text: "Puedo trazar constructores/destructores y métodos virtuales",
      category: "C++",
    },
  ],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = STUDY_DATA;
}
