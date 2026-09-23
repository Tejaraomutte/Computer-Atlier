import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { ArchitectureProvider } from "./context/ArchitectureContext.jsx";
import { ViewerProvider } from "./context/ViewerContext.jsx";
import { LearningProvider } from "./context/LearningContext.jsx";
import PageContainer from "./components/layout/PageContainer.jsx";

import Home from "./pages/Home.jsx";
import Explorer from "./pages/Explorer.jsx";
import ArchitectureSystems from "./pages/architecture/ArchitectureSystems.jsx";
import VonNeumannArchitecturePage from "./pages/architecture/VonNeumannArchitecturePage.jsx";
import HarvardArchitecturePage from "./pages/architecture/HarvardArchitecturePage.jsx";
import ProcessingSystemsPage from "./pages/architecture/ProcessingSystemsPage.jsx";
import Lessons from "./pages/Lessons.jsx";
import LessonDetail from "./pages/LessonDetail.jsx";
import MemoryHierarchyPage from "./pages/lessons/MemoryHierarchyPage.jsx";
import MainMemoryPage from "./pages/lessons/MainMemoryPage.jsx";
import VirtualMemoryPage from "./pages/lessons/VirtualMemoryPage.jsx";
import SecondaryMemoryPage from "./pages/lessons/SecondaryMemoryPage.jsx";
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
              <Route path="/en/architecture" element={<ArchitectureSystems />} />
              <Route path="/en/architecture/von-neumann" element={<VonNeumannArchitecturePage />} />
              <Route path="/en/architecture/harvard" element={<HarvardArchitecturePage />} />
              <Route path="/en/architecture/pipelined" element={<ProcessingSystemsPage />} />
              <Route path="/en/lessons" element={<Lessons />} />
              <Route path="/en/lessons/memory-hierarchy" element={<MemoryHierarchyPage />} />
              <Route path="/en/lessons/main-memory" element={<MainMemoryPage />} />
              <Route path="/en/lessons/virtual-memory" element={<VirtualMemoryPage />} />
              <Route path="/en/lessons/secondary-memory" element={<SecondaryMemoryPage />} />
              <Route path="/en/lessons/:lessonId" element={<LessonDetail />} />
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
