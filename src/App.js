import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/DashBoard/Dashboard";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NoteFound from "./Components/NoteFound/NoteFound";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="*" element={<NoteFound></NoteFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
