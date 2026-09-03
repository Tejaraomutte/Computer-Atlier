import Header from "./Header.jsx";

export default function PageContainer({ children }) {
  return (
    <div className="app">
      <Header />
      {children}
    </div>
  );
}
