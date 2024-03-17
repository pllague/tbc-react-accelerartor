import Header from "./components/header/Header"
import Content from "./components/Content"
import Footer from "./components/footer/Footer"

import "./App.css";

function App() {
  return (
    <div className="bg-primary text-white min-h-screen flex flex-col justify-between">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
