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

const english = {
  explore: "Explore", systems: "Systems", lessons: "Lessons", library: "Library", notes: "Notes",
  search: "Search components, topics...", architectureLibrary: "ARCHITECTURE LIBRARY", viewAll: "View all components",
  showFewer: "Show fewer components", noMatches: "No matching components.", componentView: "COMPONENT VIEW",
  architectureReference: "ARCHITECTURE REFERENCE", completeSystem: "Complete computer system", keyFacts: "KEY FACTS",
  whyMatters: "Why it matters", viewLesson: "View lesson", animate: "Animate", quiz: "Quiz", compare: "Compare",
  reset: "Reset", isolate: "Isolate", layers: "Layers", dataFlow: "Data Flow", zoom: "Zoom",
  threeFooter: "3D ARCHITECTURE · DRAG TO ROTATE · SCROLL TO ZOOM · CLICK TO EXPLORE",
  pointMarker: "Point to a marker to identify a part", backOverview: "Back to overview", overview: "Overview", detail: "Detail"
};

const translations = {
  en: english,
  es: { ...english, explore: "Explorar", systems: "Sistemas", lessons: "Lecciones", library: "Biblioteca", notes: "Notas", search: "Buscar componentes, temas...", architectureLibrary: "BIBLIOTECA DE ARQUITECTURA", viewAll: "Ver todos los componentes", showFewer: "Mostrar menos componentes", noMatches: "No hay componentes coincidentes.", componentView: "VISTA DEL COMPONENTE", keyFacts: "DATOS CLAVE", whyMatters: "Por qué importa", viewLesson: "Ver lección", animate: "Animar", quiz: "Cuestionario", compare: "Comparar", reset: "Restablecer", isolate: "Aislar", layers: "Capas", dataFlow: "Flujo de datos", zoom: "Zoom" },
  fr: { ...english, explore: "Explorer", systems: "Systèmes", lessons: "Leçons", library: "Bibliothèque", notes: "Notes", search: "Rechercher des composants, sujets...", architectureLibrary: "BIBLIOTHÈQUE D'ARCHITECTURE", viewAll: "Voir tous les composants", showFewer: "Afficher moins de composants", noMatches: "Aucun composant trouvé.", componentView: "VUE DU COMPOSANT", keyFacts: "FAITS CLÉS", whyMatters: "Pourquoi c'est important", viewLesson: "Voir la leçon", animate: "Animer", quiz: "Quiz", compare: "Comparer", reset: "Réinitialiser", isolate: "Isoler", layers: "Couches", dataFlow: "Flux de données", zoom: "Zoom" },
  de: { ...english, explore: "Erkunden", systems: "Systeme", lessons: "Lektionen", library: "Bibliothek", notes: "Notizen", search: "Komponenten, Themen suchen...", architectureLibrary: "ARCHITEKTURBIBLIOTHEK", viewAll: "Alle Komponenten anzeigen", showFewer: "Weniger Komponenten anzeigen", noMatches: "Keine passenden Komponenten.", componentView: "KOMPONENTENANSICHT", keyFacts: "WICHTIGE FAKTEN", whyMatters: "Warum es wichtig ist", viewLesson: "Lektion ansehen", animate: "Animieren", quiz: "Quiz", compare: "Vergleichen", reset: "Zurücksetzen", isolate: "Isolieren", layers: "Ebenen", dataFlow: "Datenfluss", zoom: "Zoom" },
  pt: { ...english, explore: "Explorar", systems: "Sistemas", lessons: "Lições", library: "Biblioteca", notes: "Notas", search: "Pesquisar componentes, tópicos...", architectureLibrary: "BIBLIOTECA DE ARQUITETURA", viewAll: "Ver todos os componentes", showFewer: "Mostrar menos componentes", noMatches: "Nenhum componente encontrado.", componentView: "VISTA DO COMPONENTE", keyFacts: "FATOS PRINCIPAIS", whyMatters: "Por que importa", viewLesson: "Ver lição", animate: "Animar", quiz: "Questionário", compare: "Comparar", reset: "Redefinir", isolate: "Isolar", layers: "Camadas", dataFlow: "Fluxo de dados", zoom: "Zoom" },
  hi: { ...english, explore: "अन्वेषण", systems: "सिस्टम", lessons: "पाठ", library: "पुस्तकालय", notes: "नोट्स", search: "घटक और विषय खोजें...", architectureLibrary: "आर्किटेक्चर लाइब्रेरी", viewAll: "सभी घटक देखें", showFewer: "कम घटक दिखाएं", noMatches: "कोई मिलान घटक नहीं।", componentView: "घटक दृश्य", keyFacts: "मुख्य तथ्य", whyMatters: "महत्व", viewLesson: "पाठ देखें", animate: "एनिमेट", quiz: "क्विज़", compare: "तुलना", reset: "रीसेट", isolate: "अलग करें", layers: "परतें", dataFlow: "डेटा प्रवाह", zoom: "ज़ूम" },
  ar: { ...english, explore: "استكشاف", systems: "الأنظمة", lessons: "الدروس", library: "المكتبة", notes: "الملاحظات", search: "البحث عن المكونات والمواضيع...", architectureLibrary: "مكتبة البنية", viewAll: "عرض جميع المكونات", showFewer: "عرض مكونات أقل", noMatches: "لا توجد مكونات مطابقة.", componentView: "عرض المكون", keyFacts: "حقائق أساسية", whyMatters: "لماذا يهم", viewLesson: "عرض الدرس", animate: "تحريك", quiz: "اختبار", compare: "مقارنة", reset: "إعادة ضبط", isolate: "عزل", layers: "الطبقات", dataFlow: "تدفق البيانات", zoom: "تكبير" },
  zh: { ...english, explore: "探索", systems: "系统", lessons: "课程", library: "资料库", notes: "笔记", search: "搜索组件、主题...", architectureLibrary: "体系结构库", viewAll: "查看所有组件", showFewer: "显示较少组件", noMatches: "没有匹配的组件。", componentView: "组件视图", keyFacts: "关键事实", whyMatters: "重要性", viewLesson: "查看课程", animate: "动画", quiz: "测验", compare: "比较", reset: "重置", isolate: "隔离", layers: "图层", dataFlow: "数据流", zoom: "缩放" },
  ja: { ...english, explore: "探索", systems: "システム", lessons: "レッスン", library: "ライブラリ", notes: "ノート", search: "コンポーネント、トピックを検索...", architectureLibrary: "アーキテクチャライブラリ", viewAll: "すべてのコンポーネントを表示", showFewer: "表示を減らす", noMatches: "一致するコンポーネントはありません。", componentView: "コンポーネント表示", keyFacts: "主な事実", whyMatters: "重要な理由", viewLesson: "レッスンを見る", animate: "アニメーション", quiz: "クイズ", compare: "比較", reset: "リセット", isolate: "分離", layers: "レイヤー", dataFlow: "データフロー", zoom: "ズーム" },
  bn: { ...english, explore: "অন্বেষণ", systems: "সিস্টেম", lessons: "পাঠ", library: "লাইব্রেরি", notes: "নোট", search: "কম্পোনেন্ট, বিষয় খুঁজুন...", architectureLibrary: "আর্কিটেকচার লাইব্রেরি", viewAll: "সব কম্পোনেন্ট দেখুন", showFewer: "কম্পোনেন্ট কম দেখান", noMatches: "কোনো মিল পাওয়া যায়নি।", componentView: "কম্পোনেন্ট ভিউ", keyFacts: "মূল তথ্য", whyMatters: "কেন গুরুত্বপূর্ণ", viewLesson: "পাঠ দেখুন", animate: "অ্যানিমেট", quiz: "কুইজ", compare: "তুলনা", reset: "রিসেট", isolate: "আলাদা করুন", layers: "স্তর", dataFlow: "ডেটা প্রবাহ", zoom: "জুম" }
};

export function getTranslations(code) {
  return translations[code] || english;
}
