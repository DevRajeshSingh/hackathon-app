import { Route, Routes } from "react-router-dom";
import "./App.css";
import HackthonProvider from "./context/HackathonContext";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Detail from "./pages/Detail";
import { Navbar } from "./components/Navbar";
import Edit from "./pages/Edit";

function App() {

  return (
    <HackthonProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="upload" element={<Upload />} />
          <Route exact path="upload" element={<Upload />} />
          <Route exact path="edit/:id" element={<Edit />} />
          <Route exact path="detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </HackthonProvider>
  );
}

export default App;
