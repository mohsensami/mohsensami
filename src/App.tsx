import { Routes, Route } from "react-router-dom";

import "./App.css";
import PageLayout from "./components/hoc/PageLayout";
import Home from "./page/Home";
import Portfolio from "./page/Portfolio";
import NotFound from "./page/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
