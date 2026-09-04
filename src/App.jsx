import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Download from "./Download";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Download />} />
      </Routes>
    </Router>
  );
};

export default App;
