import { uiTranslations } from "./translations/ui.js";
import { componentTranslations } from "./translations/components.js";

export const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "pt", name: "Português" },
  { code: "hi", name: "हिन्दी" },
  { code: "ar", name: "العربية" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "bn", name: "বাংলা" }
];

export function getTranslations(code = "en") {
  return uiTranslations[code] || uiTranslations.en;
}

const factLabelMap = {
  es: { Purpose: "Propósito", Components: "Componentes", Input: "Entrada", Output: "Salida", View: "Vista", Interaction: "Interacción", Speed: "Velocidad", Capacity: "Capacidad", Interface: "Interfaz", Includes: "Incluye" },
  fr: { Purpose: "Objectif", Components: "Composants", Input: "Entrée", Output: "Sortie", View: "Vue", Interaction: "Interaction", Speed: "Vitesse", Capacity: "Capacité", Interface: "Interface", Includes: "Comprend" },
  de: { Purpose: "Zweck", Components: "Komponenten", Input: "Eingabe", Output: "Ausgabe", View: "Ansicht", Interaction: "Interaktion", Speed: "Geschwindigkeit", Capacity: "Kapazität", Interface: "Schnittstelle", Includes: "Enthält" },
  pt: { Purpose: "Objetivo", Components: "Componentes", Input: "Entrada", Output: "Saída", View: "Visualização", Interaction: "Interação", Speed: "Velocidade", Capacity: "Capacidade", Interface: "Interface", Includes: "Inclui" },
  hi: { Purpose: "उद्देश्य", Components: "घटक", Input: "इनपुट", Output: "आउटपुट", View: "दृश्य", Interaction: "इंटरैक्शन", Speed: "गति", Capacity: "क्षमता", Interface: "इंटरफ़ेस", Includes: "शामिल है" },
  ar: { Purpose: "الغرض", Components: "المكونات", Input: "المدخلات", Output: "المخرجات", View: "العرض", Interaction: "التفاعل", Speed: "السرعة", Capacity: "السعة", Interface: "الواجهة", Includes: "يتضمن" },
  zh: { Purpose: "主要用途", Components: "组成部件", Input: "输入信号", Output: "输出信号", View: "呈现视图", Interaction: "交互方式", Speed: "运行速度", Capacity: "存储容量", Interface: "连接接口", Includes: "包含组成" },
  ja: { Purpose: "主な用途", Components: "構成要素", Input: "入力", Output: "出力", View: "表示", Interaction: "操作方法", Speed: "動作速度", Capacity: "容量", Interface: "インターフェース", Includes: "構成要素" },
  bn: { Purpose: "উদ্দেশ্য", Components: "উপাদানসমূহ", Input: "ইনপুট", Output: "আউটপুট", View: "ভিউ", Interaction: "ইন্টারঅ্যাকশন", Speed: "গতি", Capacity: "ধারণক্ষমতা", Interface: "ইন্টারফেস", Includes: "অন্তর্ভুক্ত" }
};

export function getLocalizedComponent(component, code = "en") {
  if (!component) return null;
  if (!code || code === "en") return component;

  const overrides = componentTranslations[code]?.[component.id];
  const labelDict = factLabelMap[code] || {};

  const localizedFacts = component.facts?.map(([label, value]) => [
    labelDict[label] || label,
    value
  ]) || component.facts;

  let localizedMedia = component.media;
  if (component.media?.parts && overrides?.parts) {
    localizedMedia = {
      ...component.media,
      parts: component.media.parts.map((part) => {
        const partOverride = overrides.parts[part.id];
        if (!partOverride) return part;
        return {
          ...part,
          name: partOverride.name || part.name,
          role: partOverride.role || part.role,
          functioning: partOverride.functioning || part.functioning
        };
      })
    };
  }

  if (!overrides) {
    return {
      ...component,
      facts: localizedFacts,
      media: localizedMedia
    };
  }

  return {
    ...component,
    name: overrides.name || component.name,
    shortName: overrides.shortName || component.shortName,
    category: overrides.category || component.category,
    tagline: overrides.tagline || component.tagline,
    description: overrides.description || component.description,
    importance: overrides.importance || component.importance,
    facts: localizedFacts,
    media: localizedMedia
  };
}

export function getLocalizedComponents(components = [], code = "en") {
  if (!code || code === "en") return components;
  return components.map((comp) => getLocalizedComponent(comp, code));
}
