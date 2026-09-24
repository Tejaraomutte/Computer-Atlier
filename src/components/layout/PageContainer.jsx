import Header from "./Header.jsx";
import BottomNavigation from "./BottomNavigation.jsx";

export default function PageContainer({ children }) {
  return (
    <div className="app">
      <Header />
      {children}
      <BottomNavigation />
    </div>
  );
}
