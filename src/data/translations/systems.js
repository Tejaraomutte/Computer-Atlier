export const systemsTranslations = {
  es: {
    "von-neumann": {
      title: "Arquitectura Von Neumann",
      shortDescription: "Las instrucciones y los datos comparten la misma memoria y el mismo bus.",
      kicker: "Modelo de programa almacenado",
      concept: "Instrucciones y datos comparten un modelo de memoria y una vía de comunicación."
    },
    harvard: {
      title: "Arquitectura Harvard",
      shortDescription: "Memorias separadas para instrucciones y datos con vías independientes.",
      kicker: "Vías de memoria separadas",
      concept: "La memoria de instrucciones y la de datos están físicamente separadas."
    },
    pipelined: {
      title: "Procesador Pipelined (Segmentado)",
      shortDescription: "Superpone etapas de instrucción para ejecutar múltiples pasos en paralelo.",
      kicker: "Ejecución segmentada",
      concept: "Un flujo de tubería que avanza múltiples instrucciones simultáneamente."
    }
  },
  fr: {
    "von-neumann": {
      title: "Architecture de Von Neumann",
      shortDescription: "Les instructions et les données partagent la même mémoire et le même bus.",
      kicker: "Programme enregistré",
      concept: "Instructions et données partagent un modèle de mémoire unique."
    },
    harvard: {
      title: "Architecture Harvard",
      shortDescription: "Mémoires et chemins indépendants pour les instructions et les données.",
      kicker: "Voies mémoires séparées",
      concept: "Mémoire d'instructions et mémoire de données physiquement dissociées."
    },
    pipelined: {
      title: "Processeur Pipelined (Pipeline)",
      shortDescription: "Superpose les étapes d'exécution pour traiter plusieurs instructions en parallèle.",
      kicker: "Exécution par pipeline",
      concept: "Flux continu augmentant le débit des instructions."
    }
  },
  de: {
    "von-neumann": {
      title: "Von-Neumann-Architektur",
      shortDescription: "Befehle und Daten teilen sich denselben Speicher und Buspfad.",
      kicker: "Speicherprogramm-Modell",
      concept: "Befehle und Daten nutzen ein einheitliches Speichermodell."
    },
    harvard: {
      title: "Harvard-Architektur",
      shortDescription: "Getrennte Speicher und Busse für Programmbefehle und Daten.",
      kicker: "Getrennte Speicherpfade",
      concept: "Befehls- und Datenspeicher sind physikalisch getrennt."
    },
    pipelined: {
      title: "Pipeline-Prozessor",
      shortDescription: "Überlappt Befehlsphasen für parallele Ausführung mehrerer Befehle.",
      kicker: "Pipeline-Verarbeitung",
      concept: "Mehrere Befehle durchlaufen gleichzeitig die Pipeline-Stufen."
    }
  },
  hi: {
    "von-neumann": {
      title: "वॉन न्यूमैन आर्किटेक्चर",
      shortDescription: "निर्देश और डेटा एक ही मेमोरी और बस मार्ग साझा करते हैं।",
      kicker: "संग्रहीत-कार्यक्रम मॉडल",
      concept: "निर्देश और डेटा एक ही संचार पथ साझा करते हैं।"
    },
    harvard: {
      title: "हार्वर्ड आर्किटेक्चर",
      shortDescription: "निर्देश और डेटा के लिए अलग-अलग मेमोरी और बस मार्ग।",
      kicker: "अलग मेमोरी पथ",
      concept: "निर्देश और डेटा मेमोरी भौतिक रूप से अलग-अलग हैं।"
    },
    pipelined: {
      title: "पाइपलाइन प्रोसेसर",
      shortDescription: "समानांतर में कई चरणों को निष्पादित करने के लिए निर्देशों को ओवरलैप करता है।",
      kicker: "पाइपलाइन निष्पादन",
      concept: "एक साथ कई निर्देश पाइपलाइन चरणों से गुजरते हैं।"
    }
  },
  ar: {
    "von-neumann": {
      title: "معمارية فون نيومان",
      shortDescription: "تتشارك التعليمات والبيانات في نفس الذاكرة والمسار.",
      kicker: "نموذج البرنامج المخزن",
      concept: "التعليمات والبيانات تشتركان في نموذج ذاكرة ومسار اتصال واحد."
    },
    harvard: {
      title: "معمارية هارفارد",
      shortDescription: "ذاكرة ومسارات منفصلة ومستقلة للتعليمات والبيانات.",
      kicker: "مسارات ذاكرة مستقلة",
      concept: "فصل مادي كامل بين مساحة تعليمات البرامج ومساحة البيانات."
    },
    pipelined: {
      title: "معالج خطوط الأنابيب (Pipelined)",
      shortDescription: "تداخل مراحل تنفيذ التعليمات لزيادة سرعة وكفاءة المعالجة.",
      kicker: "تنفيذ متتابع متوازي",
      concept: "تتقدم عدة تعليمات في نفس الوقت عبر خط الأنابيب."
    }
  },
  zh: {
    "von-neumann": {
      title: "冯·诺依曼体系结构",
      shortDescription: "指令与数据共享相同的存储空间和系统总线。",
      kicker: "存储程序模型",
      concept: "指令和数据共享单一存储模型与公共传输通道。"
    },
    harvard: {
      title: "哈佛体系结构",
      shortDescription: "指令存储器与数据存储器相互独立，拥有独立的物理总线。",
      kicker: "分离存储路径",
      concept: "程序指令存储与工作数据存储在物理层面上完全解耦。"
    },
    pipelined: {
      title: "流水线处理器",
      shortDescription: "重叠多个指令执行阶段，实现多条指令在流水线中并行推进。",
      kicker: "流水线并行执行",
      concept: "多条指令在不同的时钟周期阶段同时推进，极大提升吞吐率。"
    }
  },
  ja: {
    "von-neumann": {
      title: "フォン・ノイマン型アーキテクチャ",
      shortDescription: "プログラム命令とデータが同一のメモリおよびバスを共有します。",
      kicker: "プログラム内蔵方式",
      concept: "命令とデータが単一のメモリ空間と通信バスを共有します。"
    },
    harvard: {
      title: "ハーバード・アーキテクチャ",
      shortDescription: "命令用とデータ用に独立した分離メモリと専用バスを備えます。",
      kicker: "分離メモリパス",
      concept: "命令メモリとデータメモリが物理的に完全に分離されています。"
    },
    pipelined: {
      title: "パイプライン処理プロセッサ",
      shortDescription: "複数の命令実行ステージを重ね合わせ、並列に処理を実行します。",
      kicker: "パイプライン実行",
      concept: "複数の命令がパイプラインの各段を同時に進みます。"
    }
  }
};

export function getLocalizedSystems(systems = [], code = "en") {
  if (!code || code === "en") return systems;
  const dict = systemsTranslations[code];
  if (!dict) return systems;

  return systems.map((sys) => {
    const override = dict[sys.id];
    if (!override) return sys;
    return {
      ...sys,
      title: override.title || sys.title,
      shortDescription: override.shortDescription || sys.shortDescription,
      kicker: override.kicker || sys.kicker,
      concept: override.concept || sys.concept
    };
  });
}
