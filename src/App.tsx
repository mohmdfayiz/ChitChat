import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import Page404 from "./pages/Page404";
import { Toaster } from "react-hot-toast";
// import { refreshToken, logout } from "./services/refreshToken";
// import { useEffect } from "react";

const App = () => {

  // useEffect(() => {
  //   function newToken() {
  //     refreshToken()
  //       .then((res) => {
  //         localStorage.setItem("token", res.token);
  //       })
  //       .catch(() => {
  //         logout();
  //       });
  //   }
  //   setInterval(newToken, 1 * 60000);
  // }, []);

  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
