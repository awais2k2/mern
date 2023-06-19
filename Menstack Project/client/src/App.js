import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Error from "./Components/Error";
import { Routes, Route } from "react-router-dom";
import Logout from "./Components/Logout";

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route element={<Error />}></Route>
    </Routes>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  );
};

export default App;
