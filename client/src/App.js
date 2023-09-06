// import AdminPanel from "./scenes/AdminDashboard";
import { useSelector } from "react-redux";
import Home from "./scenes/Home";
import Login from "./scenes/Login";
import Profile from "./scenes/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Search from "./scenes/Search";
function App() {
  const Name = "TweetVerse";
  const token = useSelector(state => state.token)
  const isAuth = Boolean(token);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <Navigate to={"/home"}></Navigate> : <Login plateformName={Name} />} />
          <Route path="/home" element={isAuth ? <Home plateformName={Name} /> : <Navigate to={"/"}></Navigate>} />
          <Route path="/profile" element={isAuth ? <Profile plateformName={Name} /> : <Navigate to={"/"}></Navigate>}></Route>
          <Route path="/search" element={isAuth ? <Search plateformName={Name} /> : <Navigate to={"/"}></Navigate>}></Route>
          {/* <Route path="/Admin" element={<AdminPanel/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
