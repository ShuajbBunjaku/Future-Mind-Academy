import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Profile" element={<Profile></Profile>}></Route>
          <Route path="/Setting" element={<Setting></Setting>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
