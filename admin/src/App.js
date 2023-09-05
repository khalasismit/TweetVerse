// import AdminPanel from "./pages/AdminDashboard";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
// import ProfilePage from "./pages/ProfilePage";
// import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  const Name = "TweetVerse";
  const token = useSelector(state => state.token)
  const isAuth = Boolean(token);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <Navigate to={"/AdminHome"}></Navigate> : <LoginPage plateformName={Name} />} />
          <Route path="/AdminHome" element={isAuth ? <HomePage plateformName={Name} /> : <Navigate to={"/"}></Navigate>} />
          {/* <Route path="/profile" element={isAuth ? <ProfilePage plateformName={Name} /> : <Navigate to={"/"}></Navigate>}></Route> */}
          {/* <Route path="/search" element={isAuth ? <SearchPage plateformName={Name} /> : <Navigate to={"/"}></Navigate>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
