import AdminPanel from "./pages/AdminDashboard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const Name = "TweetVerse";
  // const _id = "64d637d66922009c9a577597"; // Curious.khalasi
  const _id = "64d4e50e5f4d7e6602c21355"; // Smit.khalasi
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage plateformName={Name} />} />
          <Route path="/home" element={<HomePage plateformName={Name} userId={_id}/>} />
          <Route path="/profile" element={<ProfilePage plateformName={Name} userId={_id}/>} />
          <Route path="/Admin" element={<AdminPanel/>} />
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
