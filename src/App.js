import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Globalstyle } from "./style/Globalstyle";

function App() {
  return (
    <HelmetProvider>
      <Globalstyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
