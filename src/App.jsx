import { Routes, Route, Navigate } from "react-router-dom";
import { ArchitectureProvider } from "./context/ArchitectureContext.jsx";
import { ViewerProvider } from "./context/ViewerContext.jsx";
import { LearningProvider } from "./context/LearningContext.jsx";
import PageContainer from "./components/layout/PageContainer.jsx";

import Home from "./pages/Home.jsx";
import Explorer from "./pages/Explorer.jsx";
import Systems from "./pages/Systems.jsx";
import Lessons from "./pages/Lessons.jsx";
import LessonDetail from "./pages/LessonDetail.jsx";
import Library from "./pages/Library.jsx";
import Notes from "./pages/Notes.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import SimulationPage from "./pages/SimulationPage.jsx";
import ComparisonPage from "./pages/ComparisonPage.jsx";

export default function App() {
  return (
    <ArchitectureProvider>
      <ViewerProvider>
        <LearningProvider>
          <PageContainer>
            <Routes>
              <Route path="/" element={<Navigate to="/en" replace />} />
              <Route path="/en" element={<Home />} />
              <Route path="/en/explore" element={<Explorer />} />
              <Route path="/en/systems" element={<Systems />} />
              <Route path="/en/lessons" element={<Lessons />} />
              <Route path="/en/lessons/:lessonId" element={<LessonDetail />} />
              <Route path="/en/library" element={<Library />} />
              <Route path="/en/notes" element={<Notes />} />
              <Route path="/en/quiz" element={<QuizPage />} />
              <Route path="/en/simulation" element={<SimulationPage />} />
              <Route path="/en/comparison" element={<ComparisonPage />} />
              <Route path="*" element={<Navigate to="/en" replace />} />
            </Routes>
          </PageContainer>
        </LearningProvider>
      </ViewerProvider>
    </ArchitectureProvider>
  );
}
