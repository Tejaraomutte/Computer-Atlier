export const componentTranslations = {
  es: {
    "system-architecture": {
      name: "Arquitectura del Sistema",
      shortName: "Arq. Sistema",
      category: "Sistema",
      tagline: "El sistema informático completo",
      description: "Explora cómo el procesador, memoria, almacenamiento, gráficos, placa base y puertos de E/S se conectan en una computadora.",
      importance: "La arquitectura completa hace visibles las relaciones funcionales entre todos los subsistemas informáticos."
    },
    cpu: {
      name: "CPU (Unidad Central)",
      shortName: "CPU",
      category: "Procesador",
      tagline: "El cerebro del computador",
      description: "La CPU ejecuta instrucciones de programas, realiza cálculos matemáticos y lógicos, y coordina todos los subsistemas del ordenador.",
      importance: "La CPU gobierna la computación y controla el flujo de datos e instrucciones a través de la máquina.",
      parts: {
        "alu-cluster": { name: "Núcleos Aritmético-Lógicos (ALU)", role: "Motor de Cálculo Entero y Operaciones Lógicas", functioning: "Ejecuta sumas binarias, restas, rotaciones a nivel de bit y comparaciones directas en ciclos simples." },
        "fpu-vector": { name: "Unidad de Coma Flotante y SIMD", role: "Cálculo Matemático de Precisión IEEE-754", functioning: "Procesa vectores numéricos paralelos de 256/512 bits para gráficos 3D, física e inteligencia artificial." },
        "control-unit": { name: "Unidad de Control y Decodificador", role: "Secuenciador del Ciclo de Instrucción", functioning: "Extrae microcódigo, decodifica instrucciones de máquina y emite pulsos de reloj para coordinar los buses." },
        "l1-cache": { name: "Caché Interna de Datos e Instrucciones L1", role: "Buffer de Memoria SRAM de Ultra Baja Latencia", functioning: "Suministra instrucciones y datos a los registros en 1-4 ciclos de reloj, eliminando cuellos de botella." }
      }
    },
    control: {
      name: "Unidad de Control",
      shortName: "Unidad Control",
      category: "Control de Instrucciones",
      tagline: "Dirige y sincroniza operaciones",
      description: "La Unidad de Control busca y decodifica instrucciones de memoria, emitiendo señales que coordinan todo el procesador.",
      importance: "Determina qué partes del procesador deben activarse y en qué momento exacto del ciclo de reloj."
    },
    registers: {
      name: "Registros del Procesador",
      shortName: "Registros",
      category: "Memoria del Procesador",
      tagline: "Almacenamiento ultra veloz",
      description: "Almacenan operandos, direcciones de memoria y estados internos dentro de la CPU a máxima velocidad.",
      importance: "Proporcionan los datos inmediatos que la ALU y la Unidad de Control necesitan en cada ciclo."
    },
    alu: {
      name: "ALU (Unidad Aritmética Lógica)",
      shortName: "ALU",
      category: "Cálculo y Lógica",
      tagline: "El motor de cómputo",
      description: "Realiza todas las sumas, restas, operaciones lógicas AND/OR y comparaciones numéricas del computador.",
      importance: "Es el componente responsable de transformar datos sin procesar en resultados matemáticos calculados."
    },
    cache: {
      name: "Memoria Caché",
      shortName: "Caché",
      category: "Jerarquía de Memoria",
      tagline: "Puente de alta velocidad",
      description: "Almacena temporalmente datos e instrucciones frecuentemente utilizados para acelerar el acceso a la RAM.",
      importance: "Reduce drásticamente el tiempo que la CPU pasa esperando datos de la memoria principal."
    },
    bus: {
      name: "Buses del Sistema",
      shortName: "Bus",
      category: "Comunicación e Interconexión",
      tagline: "Las autopistas de información",
      description: "Líneas eléctricas conductoras que transportan datos, direcciones de memoria y señales de control entre componentes.",
      importance: "Sin buses coordinados, los componentes aislados no podrían comunicarse ni compartir datos."
    },
    memory: {
      name: "Memoria Principal (RAM)",
      shortName: "RAM",
      category: "Almacenamiento Volátil",
      tagline: "Espacio de trabajo activo",
      description: "Memoria de acceso aleatorio de alta velocidad donde residen el sistema operativo y las aplicaciones en ejecución.",
      importance: "Permite a la CPU acceder a cualquier celda de memoria en nanosegundos de forma independiente."
    },
    gpu: {
      name: "GPU (Procesador Gráfico)",
      shortName: "GPU",
      category: "Procesamiento Masivo",
      tagline: "Rendimiento masivamente paralelo",
      description: "Arquitectura especializada con miles de núcleos optimizados para procesar píxeles, matrices e IA.",
      importance: "Libera a la CPU de cálculos visuales complejos y acelera el aprendizaje profundo moderno."
    },
    motherboard: {
      name: "Placa Base",
      shortName: "Placa Base",
      category: "Plataforma e Interconexión",
      tagline: "El chasis central",
      description: "Circuito impreso multicapa que conecta eléctricamente procesadores, memoria, tarjetas de expansión y fuentes.",
      importance: "Garantiza la integridad de las señales eléctricas y la distribución estable de energía en todo el equipo."
    },
    storage: {
      name: "Almacenamiento (SSD / NVMe)",
      shortName: "Almacenamiento",
      category: "Memoria Secundaria",
      tagline: "Persistencia permanente",
      description: "Dispositivo de almacenamiento flash que conserva archivos, programas y el sistema operativo tras apagar la máquina.",
      importance: "Proporciona capacidad masiva no volátil esencial para almacenar los datos del usuario a largo plazo."
    },
    psu: {
      name: "Fuente de Alimentación (PSU)",
      shortName: "Fuente",
      category: "Energía y Regulación",
      tagline: "Conversión de energía limpia",
      description: "Convierte la corriente alterna del enchufe en voltajes directos seguros y estables de 12V, 5V y 3.3V.",
      importance: "Protege los microchips sensibles contra sobretensiones y fluctuaciones energéticas."
    }
  },
  fr: {
    "system-architecture": {
      name: "Architecture Système",
      shortName: "Système",
      category: "Système",
      tagline: "Le système informatique complet",
      description: "Découvrez comment le processeur, la mémoire, le stockage, les graphiques et la carte mère s'interconnectent.",
      importance: "Permet de visualiser les relations structurelles et les flux de données entre tous les composants d'un ordinateur."
    },
    cpu: {
      name: "Processeur (CPU)",
      shortName: "CPU",
      category: "Processeur",
      tagline: "Le cerveau de l'ordinateur",
      description: "L'unité centrale de traitement exécute les instructions logicielles et coordonne l'ensemble du système informatique.",
      importance: "La CPU orchestre les calculs et contrôle le flux d'instructions à travers tous les modules.",
      parts: {
        "alu-cluster": { name: "Unités de calcul ALU", role: "Calcul arithmétique et logique", functioning: "Exécute les additions binaires, soustractions et comparaisons logiques en cycles ultra-rapides." },
        "fpu-vector": { name: "Unité à virgule flottante FPU", role: "Mathématiques de précision IEEE-754", functioning: "Traite les données vectorielles 256/512 bits pour les graphismes 3D et le calcul scientifique." },
        "control-unit": { name: "Unité de contrôle", role: "Séquençage des instructions", functioning: "Décode les instructions machine et cadence les signaux d'horloge pour synchroniser les composants." },
        "l1-cache": { name: "Mémoire cache L1", role: "Tampon SRAM ultra-rapide", functioning: "Délivre les instructions et les données critiques aux registres en seulement 1 à 4 cycles d'horloge." }
      }
    },
    control: {
      name: "Unité de Contrôle",
      shortName: "Contrôle",
      category: "Contrôle des Instructions",
      tagline: "Pilote et coordonne les opérations",
      description: "Extrait et décode les instructions en mémoire puis génère les signaux de commande nécessaires au processeur.",
      importance: "Indique aux différentes parties du processeur les opérations à effectuer et le timing précis."
    },
    registers: {
      name: "Registres Internes",
      shortName: "Registres",
      category: "Mémoire Interne",
      tagline: "Stockage instantané",
      description: "Cases de mémoire ultra-rapides situées directement sur la puce du processeur pour les données immédiates.",
      importance: "Évite les temps d'attente de la mémoire externe lors de calculs séquentiels intensifs."
    },
    alu: {
      name: "ALU (Unité Arithmétique et Logique)",
      shortName: "ALU",
      category: "Calcul & Logique",
      tagline: "Le moteur de calcul",
      description: "Exécute les opérations mathématiques élémentaires, logiques et les comparaisons binaires.",
      importance: "Élément clé transformant les données brutes en informations calculées."
    },
    cache: {
      name: "Mémoire Cache",
      shortName: "Cache",
      category: "Hiérarchie Mémoire",
      tagline: "Tampon haute vitesse",
      description: "Mémoire intermédiaire très rapide conservant les données fréquemment utilisées par le processeur.",
      importance: "Évite les ralentissements causés par les temps d'accès plus longs de la mémoire vive principale."
    },
    bus: {
      name: "Bus Système",
      shortName: "Bus",
      category: "Interconnexion",
      tagline: "Voies de communication",
      description: "Ensemble de lignes de communication acheminant les données, les adresses et les signaux de contrôle.",
      importance: "Sans bus coordonnés, les composants ne pourraient échanger aucune information."
    },
    memory: {
      name: "Mémoire Vive (RAM)",
      shortName: "RAM",
      category: "Stockage Volatil",
      tagline: "Espace de travail principal",
      description: "Mémoire de travail rapide où sont chargés le système d'exploitation et les logiciels en cours d'exécution.",
      importance: "Permet un accès aléatoire ultra-rapide à n'importe quel octet de données par le processeur."
    }
  },
  de: {
    "system-architecture": {
      name: "Systemarchitektur",
      shortName: "System",
      category: "System",
      tagline: "Das vollständige Computersystem",
      description: "Erkunden Sie das Zusammenspiel von Prozessor, Speicher, Grafik, Mainboard und Ein-/Ausgabesystemen.",
      importance: "Macht die strukturellen Beziehungen und Datenströme aller Hardware-Komponenten transparent."
    },
    cpu: {
      name: "Hauptprozessor (CPU)",
      shortName: "CPU",
      category: "Prozessor",
      tagline: "Das Gehirn des Computers",
      description: "Die Zentraleinheit führt Programmbefehle aus, führt Berechnungen durch und steuert das Gesamtsystem.",
      importance: "Koordiniert die Datenverarbeitung und steuert den gesamten Befehlsfluss im System.",
      parts: {
        "alu-cluster": { name: "ALU-Rechenwerke", role: "Ganzzahl- und Logikberechnung", functioning: "Führt binäre Additionen, Verschiebungen und Vergleiche in Höchstgeschwindigkeit aus." },
        "fpu-vector": { name: "FPU- und Vektoreinheit", role: "Präzisions-Gleitkommamathematik", functioning: "Verarbeitet 256/512-Bit-Vektoren für Physiksimulationen, 3D-Grafik und KI-Modelle." },
        "control-unit": { name: "Steuerwerk (Control Unit)", role: "Befehlssynchronisation", functioning: "Holt und dekodiert Befehle und steuert Taktsignale für alle internen Register und Busse." },
        "l1-cache": { name: "L1-Cache-Speicher", role: "Ultra-schneller SRAM-Puffer", functioning: "Liefert Befehle und Daten in 1 bis 4 Taktzyklen ohne Wartezeiten an die Register." }
      }
    },
    control: {
      name: "Steuerwerk (Control Unit)",
      shortName: "Steuerwerk",
      category: "Befehlssteuerung",
      tagline: "Steuert alle Operationen",
      description: "Liest Befehle aus dem Speicher, dekodiert sie und erzeugt Steuersignale für die übrigen Einheiten.",
      importance: "Bestimmt, welche Komponenten wann welche Operation ausführen."
    },
    registers: {
      name: "Prozessorregister",
      shortName: "Register",
      category: "Interner Speicher",
      tagline: "Ultraschneller Arbeitsspeicher",
      description: "Sehr schnelle Speicherzellen direkt im Rechenkern zur sofortigen Verarbeitung von Zwischenwerten.",
      importance: "Ermöglicht der CPU sofortigen Datenzugriff ohne Busverzögerungen."
    },
    alu: {
      name: "ALU (Rechenwerk)",
      shortName: "ALU",
      category: "Rechnen & Logik",
      tagline: "Der mathematische Kern",
      description: "Führt alle arithmetischen Operationen wie Addition und Subtraktion sowie logische Verknüpfungen aus.",
      importance: "Ist das Herzstück jeder rechnerischen Datenverarbeitung."
    },
    cache: {
      name: "Cache-Speicher",
      shortName: "Cache",
      category: "Speicherhierarchie",
      tagline: "Hochgeschwindigkeitspuffer",
      description: "Puffert häufig genutzte Programmbefehle und Daten zwischen CPU und langsamerem Hauptspeicher.",
      importance: "Verhindert teure Taktpausen bei der Speicherübertragung."
    },
    memory: {
      name: "Hauptspeicher (RAM)",
      shortName: "RAM",
      category: "Flüchtiger Speicher",
      tagline: "Der aktive Arbeitsbereich",
      description: "Direkt adressierbarer Arbeitsspeicher für Betriebssystem und aktuell laufende Programme.",
      importance: "Ermöglicht den schnellen, wahlfreien Zugriff auf alle aktiven Prozesse."
    }
  },
  hi: {
    "system-architecture": {
      name: "सिस्टम आर्किटेक्चर",
      shortName: "सिस्टम",
      category: "सिस्टम",
      tagline: "संपूर्ण कंप्यूटर प्रणाली",
      description: "देखें कि प्रोसेसर, मेमोरी, स्टोरेज, ग्राफिक्स और मदरबोर्ड एक पूर्ण कंप्यूटर के रूप में कैसे जुड़े हैं।",
      importance: "व्यक्तिगत घटकों के बीच संबंधों और डेटा प्रवाह को स्पष्ट रूप से समझने में मदद करता है।"
    },
    cpu: {
      name: "सीपीयू (केंद्रीय प्रसंस्करण इकाई)",
      shortName: "CPU",
      category: "प्रोसेसर",
      tagline: "कंप्यूटर का मस्तिष्क",
      description: "सीपीयू निर्देशों को निष्पादित करता है, गणना करता है और पूरे कंप्यूटर सिस्टम के संचालन को नियंत्रित करता है।",
      importance: "यह कंप्यूटर का मुख्य अंग है जो सभी कार्यों और डेटा संचलन का प्रबंधन करता है।",
      parts: {
        "alu-cluster": { name: "अंकगणितीय तर्क इकाई (ALU)", role: "गणना और तार्किक संचालन", functioning: "बाइनरी जोड़, घटाव, बिटवाइज़ और तुलनात्मक संचालन को अत्यंत तेजी से निष्पादित करता है।" },
        "fpu-vector": { name: "फ्लोटिंग-पॉइंट और वेक्टर यूनिट", role: "उच्च-सटीक गणितीय गणना", functioning: "ग्राफिक्स, सिमुलेशन और एआई के लिए 256/512-बिट फ्लोटिंग पॉइंट डेटा को प्रोसेस करता है।" },
        "control-unit": { name: "कंट्रोल यूनिट (CU)", role: "निर्देश डिकोडिंग और समय निर्धारण", functioning: "मशीन कोड को डिकोड करता है और घटकों को नियंत्रित करने के लिए क्लॉक पल्स भेजता है।" },
        "l1-cache": { name: "L1 कैश मेमोरी", role: "अल्ट्रा-फास्ट SRAM बफर", functioning: "सीपीयू कोर को केवल 1 से 4 क्लॉक साइकिल में महत्वपूर्ण डेटा और निर्देश प्रदान करता है।" }
      }
    },
    control: {
      name: "कंट्रोल यूनिट",
      shortName: "कंट्रोल यूनिट",
      category: "निर्देश नियंत्रण",
      tagline: "प्रक्रियाओं का निर्देशन",
      description: "कंट्रोल यूनिट निर्देशों को फेच और डिकोड करती है और अन्य घटकों के लिए नियंत्रण सिग्नल बनाती है।",
      importance: "यह तय करती है कि कब और कौन सा घटक कौन सा कार्य निष्पादित करेगा।"
    },
    registers: {
      name: "रजिस्टर",
      shortName: "रजिस्टर",
      category: "आंतरिक मेमोरी",
      tagline: "अत्यधिक तेज भंडारण",
      description: "सीपीयू के अंदर सबसे तेज मेमोरी जहां तत्काल गणना हेतु डेटा रखा जाता है।",
      importance: "यह बिना किसी देरी के तुरंत डेटा उपलब्ध कराकर सीपीयू को धीमा होने से बचाता है।"
    },
    alu: {
      name: "अंकगणितीय तर्क इकाई (ALU)",
      shortName: "ALU",
      category: "गणना और तर्क",
      tagline: "गणना का इंजन",
      description: "सभी बुनियादी गणितीय (जोड़, घटाव) और तार्किक (AND, OR) निर्णय लेता है।",
      importance: "यही वह भाग है जो कच्चे डेटा को गणितीय परिणामों में बदलता है।"
    },
    cache: {
      name: "कैश मेमोरी",
      shortName: "कैश",
      category: "मेमोरी पदानुक्रम",
      tagline: "तेज गति बफर",
      description: "अक्सर उपयोग किए जाने वाले डेटा को रैम से लाकर पास रखता है ताकि सीपीयू को इंतजार न करना पड़े।",
      importance: "यह रैम और सीपीयू के बीच गति के भारी अंतर को पाटने का काम करता है।"
    },
    memory: {
      name: "मुख्य मेमोरी (RAM)",
      shortName: "RAM",
      category: "अस्थायी भंडारण",
      tagline: "सक्रिय कार्यक्षेत्र",
      description: "चल रहे ऑपरेटिंग सिस्टम और सभी सक्रिय प्रोग्रामों को रखने वाली तेज रैंडम एक्सेस मेमोरी।",
      importance: "यह सीपीयू को किसी भी समय किसी भी डेटा सेल तक नैनोसेकंड में पहुंचने की अनुमति देती है।"
    }
  },
  ar: {
    "system-architecture": {
      name: "بنية النظام المتكامل",
      shortName: "بنية النظام",
      category: "النظام",
      tagline: "النظام الحاسوبي المتكامل",
      description: "استكشف كيف يتصل المعالج والذاكرة والتخزين واللوحة الأم كوحدة حاسوبية واحدة متناغمة.",
      importance: "يجعل العلاقات الهيكلية وتدفق البيانات بين جميع مكونات الحاسوب واضحة ومفهومة."
    },
    cpu: {
      name: "وحدة المعالجة المركزية (CPU)",
      shortName: "CPU",
      category: "المعالج",
      tagline: "عقل الكمبيوتر",
      description: "تنفذ وحدة المعالجة المركزية التعليمات وتجري الحسابات وتنسق عمل نظام الكمبيوتر بأكمله.",
      importance: "تنسق وحدة المعالجة الحوسبة وتتحكم في كيفية انتقال البيانات والتعليمات عبر الحاسوب.",
      parts: {
        "alu-cluster": { name: "وحدة الحساب والمنطق (ALU)", role: "تنفيذ العمليات الحسابية والمنطقية", functioning: "تجري عمليات الجمع والطرح الثنائي والمقارنات المنطقية في دورات سريعة جداً." },
        "fpu-vector": { name: "وحدة الفاصلة العائمة والمتجهات", role: "حسابات دقيقة للرسوميات والذكاء الاصطناعي", functioning: "تعالج المتجهات الرقمية عريضة النطاق لتطبيقات الرسومات والفيزياء المتقدمة." },
        "control-unit": { name: "وحدة التحكم (Control Unit)", role: "تفكيك التعليمات وإدارة التزامن", functioning: "تفكك شفرة التعليمات وترسل إشارات التزامن إلى كافة الأجزاء الداخلية للمعالج." },
        "l1-cache": { name: "ذاكرة التخزين المؤقت L1", role: "ذاكرة فائقة السرعة قريبة من النواة", functioning: "تزود المسجلات بالتعليمات والبيانات في 1 إلى 4 دورات ساعة فقط لتفادي التعطيل." }
      }
    },
    control: {
      name: "وحدة التحكم",
      shortName: "التحكم",
      category: "إدارة التعليمات",
      tagline: "توجه وتدير العمليات",
      description: "تسترجع التعليمات من الذاكرة وتفك تشفيرها وتولد إشارات التوجيه للمكونات الأخرى.",
      importance: "تحدد ما يجب على أجزاء المعالج تنفيذه وفي أي توقيت بالضبط."
    },
    registers: {
      name: "المسجلات",
      shortName: "المسجلات",
      category: "ذاكرة داخلية",
      tagline: "تخزين فوري فائق السرعة",
      description: "خلايا ذاكرة داخل المعالج تحتفظ بالبيانات الفورية اللازمة للحسابات الآنية.",
      importance: "توفر للمسارات الحسابية وصولاً لحظياً للبيانات بدون أي تأخير."
    },
    alu: {
      name: "وحدة الحساب والمنطق",
      shortName: "ALU",
      category: "الحساب والمنطق",
      tagline: "محرك العمليات الرياضية",
      description: "تنفذ كافة العمليات الحسابية من جمع وطرح إضافة إلى العمليات المنطقية والمقارنات.",
      importance: "هي المسؤولة المباشرة عن تحويل البيانات الأولية إلى نتائج حسابية دقيقة."
    },
    cache: {
      name: "الذاكرة المؤقتة (كاش)",
      shortName: "كاش",
      category: "هرم الذاكرة",
      tagline: "جسر سريع جداً",
      description: "تحتفظ بالبيانات الأكثر استخداماً لتسريع وصول المعالج إليها وتجنب بطء الذاكرة الرئيسية.",
      importance: "تمنع اختناق سرعة المعالج نتيجة أوقات استجابة الذاكرة العشوائية الأبطأ."
    },
    memory: {
      name: "الذاكرة العشوائية (RAM)",
      shortName: "RAM",
      category: "ذاكرة متطايرة",
      tagline: "مساحة العمل النشطة",
      description: "الذاكرة السريعة التي تحتضن نظام التشغيل والبرامج قيد التشغيل في الوقت الفعلي.",
      importance: "تتيح للمعالج الوصول العشوائي السريع إلى أي خانة بيانات في بضع نانو ثوانٍ."
    }
  },
  zh: {
    "system-architecture": {
      name: "系统体系结构",
      shortName: "系统架构",
      category: "系统",
      tagline: "完整的计算机整机系统",
      description: "探索处理器、内存、存储器、图形处理、主板与输入输出系统如何互联成为一台完整的计算机。",
      importance: "展示所有硬件模块之间的结构关系与高速数据通道。"
    },
    cpu: {
      name: "中央处理器 (CPU)",
      shortName: "CPU",
      category: "处理器",
      tagline: "计算机的核心大脑",
      description: "执行程序指令、进行算术与逻辑运算，并协调计算机各子系统的高效运行。",
      importance: "掌控全机运算流程，调控指令与数据在不同组件间的高速传输。",
      parts: {
        "alu-cluster": { name: "算术逻辑单元 (ALU)", role: "定点数算术与位运算引擎", functioning: "以单周期极速执行二进制加法、减法、移位以及逻辑条件比较。" },
        "fpu-vector": { name: "浮点与矢量运算单元 (FPU)", role: "高精度 IEEE-754 浮点数计算", functioning: "支持 256/512 位宽矢量并行计算，专门加速 3D 图形、物理模拟与人工智能模型。" },
        "control-unit": { name: "控制单元与指令译码器", role: "指令周期调度与微码分发", functioning: "抓取机器指令、进行译码并发出精准时钟脉冲，以驱动内部总线协调工作。" },
        "l1-cache": { name: "一级指令与数据高速缓存", role: "超低延迟 SRAM 缓冲池", functioning: "在 1-4 个时钟周期内为寄存器提供急需的数据与指令，彻底消解访存瓶颈。" }
      }
    },
    control: {
      name: "控制单元 (Control Unit)",
      shortName: "控制单元",
      category: "指令控制",
      tagline: "指令调度的总指挥",
      description: "从内存取指并进行译码，生成协调处理器各个模块运转的时序控制信号。",
      importance: "精确决定处理器的各个功能部件在何时执行何种具体操作。"
    },
    registers: {
      name: "寄存器堆 (Registers)",
      shortName: "寄存器",
      category: "核心存储",
      tagline: "极速临时存储空间",
      description: "置于处理器芯片核心内部的超高速小容量存储单元，用于存放立即操作数。",
      importance: "提供零等待周期的就绪数据，确保 ALU 满负荷高速吞吐。"
    },
    alu: {
      name: "算术逻辑单元 (ALU)",
      shortName: "ALU",
      category: "运算与逻辑",
      tagline: "算力核心引擎",
      description: "负责计算机中所有的定点加减、布尔逻辑（AND/OR）及条件比较运算。",
      importance: "是直接将原始输入数据变换为计算结果的核心执行部件。"
    },
    cache: {
      name: "高速缓冲存储器 (Cache)",
      shortName: "高速缓存",
      category: "存储器层次结构",
      tagline: "处理器与内存间的高速缓冲桥梁",
      description: "利用高速静态存储器暂存最频繁访问的代码与数据，极大地缩短访问延迟。",
      importance: "弥合了超高频 CPU 与相对低频主存之间的性能鸿沟。"
    },
    memory: {
      name: "主存储器 (RAM)",
      shortName: "内存",
      category: "易失性存储",
      tagline: "活跃程序的工作台",
      description: "用于在计算机运行时暂存操作系统、当前打开应用及活跃进程数据的随机存取内存。",
      importance: "赋予 CPU 在数十纳秒内任意直接寻址读写数据的关键工作空间。"
    }
  },
  ja: {
    "system-architecture": {
      name: "システムアーキテクチャ",
      shortName: "システム構成",
      category: "システム",
      tagline: "完全なコンピュータシステム",
      description: "プロセッサ、メインメモリ、ストレージ、GPU、マザーボードが一体となって動作する仕組みを学びます。",
      importance: "各ハードウェアコンポーネント間の相互接続とデータフローを視覚的に理解できます。"
    },
    cpu: {
      name: "CPU (中央演算処理装置)",
      shortName: "CPU",
      category: "プロセッサ",
      tagline: "コンピュータの頭脳",
      description: "プログラム命令の実行、算術論理演算、およびコンピュータシステム全体の協調制御を担います。",
      importance: "演算処理の中心として、命令とデータの流れ全体を精密に制御します。",
      parts: {
        "alu-cluster": { name: "ALU (算術論理演算装置)", role: "整数演算および論理判定", functioning: "2進数の加算、減算、ビット演算、比較を高クロックで即座に実行します。" },
        "fpu-vector": { name: "浮動小数点・ベクトル演算器", role: "高精度 IEEE-754 浮動小数点演算", functioning: "256/512ビットのベクトル演算を並列処理し、3DグラフィックスやAI計算を高速化します。" },
        "control-unit": { name: "制御装置 (Control Unit)", role: "命令デコードとクロック同期制御", functioning: "メモリから命令を読み出して解読し、各部に的確な制御パルス信号を供給します。" },
        "l1-cache": { name: "L1 キャッシュメモリ", role: "超低遅延 SRAM バッファ", functioning: "レジスタに必要な命令とデータを1〜4クロックサイクルで高速供給します。" }
      }
    },
    control: {
      name: "制御装置 (Control Unit)",
      shortName: "制御装置",
      category: "命令制御",
      tagline: "動作の総指揮",
      description: "命令をメモリから取得（フェッチ）して解読し、各コンポーネントを動かす制御信号を出力します。",
      importance: "どの回路がいつ動作すべきかをナノ秒単位で正確に指揮します。"
    },
    registers: {
      name: "レジスタ (Registers)",
      shortName: "レジスタ",
      category: "プロセッサ内メモリ",
      tagline: "最高速のデータ格納場所",
      description: "CPU内部に配置された小容量・最高速の記憶素子で、直前の演算結果やアドレスを保持します。",
      importance: "外部バスを経由せずに演算器へゼロ遅延でデータを提供します。"
    },
    alu: {
      name: "ALU (算術論理演算器)",
      shortName: "ALU",
      category: "計算と論理",
      tagline: "計算エンジンの心臓部",
      description: "四則演算（加算・減算）や論理演算（AND, OR, NOT）を直接実行する基本回路です。",
      importance: "未加工のバイナリデータを意味のある計算結果へと変換する核となります。"
    },
    cache: {
      name: "キャッシュメモリ (Cache)",
      shortName: "キャッシュ",
      category: "メモリ階層",
      tagline: "高速アクセスブリッジ",
      description: "頻繁にアクセスされるデータや命令を一時保存し、遅いメインメモリへの待機時間を解消します。",
      importance: "プロセッサとRAMの間の速度格差を埋める決定的な役割を果たします。"
    },
    memory: {
      name: "主記憶装置 (RAM)",
      shortName: "メインメモリ",
      category: "揮発性記憶",
      tagline: "プログラムの作業領域",
      description: "実行中のOSや各種アプリケーションコードを一時的に保持するランダムアクセスメモリです。",
      importance: "CPUが任意のメモリアドレスへ数ナノ秒でアクセスできる大容量作業空間です。"
    }
  }
};
