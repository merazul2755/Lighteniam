import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Page/Login";
import SignUp from "./components/Page/SignUp";
import RecoverPass from "./components/Page/RecoverPass";
import User from "./components/Page/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/recoverPass" element={<RecoverPass />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
