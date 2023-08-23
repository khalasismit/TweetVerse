// import AdminPanel from "./pages/AdminDashboard";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
function App() {
  const Name = "TweetVerse";
  const token = useSelector(state => state.token)
  const isAuth = Boolean(token);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <Navigate to={"/home"}></Navigate> : <LoginPage plateformName={Name} />} />
          <Route path="/home" element={isAuth ? <HomePage plateformName={Name} /> : <Navigate to={"/"}></Navigate>} />
          <Route path="/profile" element={isAuth ? <ProfilePage plateformName={Name} /> : <Navigate to={"/"}></Navigate>}></Route>
          <Route path="/search" element={isAuth ? <SearchPage plateformName={Name} /> : <Navigate to={"/"}></Navigate>}></Route>
          {/* <Route path="/Admin" element={<AdminPanel/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
