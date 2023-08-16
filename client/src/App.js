// import AdminPanel from "./pages/AdminDashboard";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  const Name = "TweetVerse";
  const token = useSelector(state=>state.token)
  const isAuth = Boolean(token);
  // const _id = "64d637d66922009c9a577597"; // Curious.khalasi
  // const _id = "64d4e50e5f4d7e6602c21355"; // Smit.khalasi
  // const _id = "64d768dc1ba3525e2764dc04" // curious.khalasi
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage plateformName={Name}/>} />
          <Route path="/home" element={isAuth ? <HomePage plateformName={Name}/> : <Navigate to={"/"}></Navigate>} />
          <Route path="/profile" element={isAuth ? <ProfilePage plateformName={Name}/> : <Navigate to={"/"}></Navigate>}></Route> 
          {/* <Route path="/Admin" element={<AdminPanel/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
