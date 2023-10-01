// import AdminPanel from "./pages/AdminDashboard";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./components/Users"
import Posts from "./components/Posts"
// import Navigation from "./components/Navigation"
// import ProfilePage from "./pages/ProfilePage";
// import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register"
function App() {
  const Name = "TweetVerse";
  const token = useSelector(state => state.token)
  const isAuth = Boolean(token);
  return (
      <div className="App">
        <BrowserRouter>
          {/* <Navigation plateformName={Name}></Navigation> */}
          <Routes>
            <Route path="/" element={isAuth ? <Navigate to={"/admin"}></Navigate> : <Login plateformName={Name} />} />
            <Route path="/admin" element={isAuth ? <Home plateformName={Name} /> : <Navigate to={"/"}></Navigate>} />
            <Route path="/users" element={isAuth ? <Users plateformName={Name} /> : <Navigate to={"/"}></Navigate>} />
            <Route path="/posts" element={isAuth ? <Posts plateformName={Name} /> : <Navigate to={"/"}></Navigate>} />
            <Route path="/register" element={isAuth ? <Register plateformName={Name} /> : <Navigate to={"/"}></Navigate>} />
            {/* <Route path="/profile" element={isAuth ? <ProfilePage plateformName={Name} /> : <Navigate to={"/"}></Navigate>}></Route> */}
            {/* <Route path="/search" element={isAuth ? <SearchPage plateformName={Name} /> : <Navigate to={"/"}></Navigate>}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
