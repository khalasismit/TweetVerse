import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const Name = "TweetVerse";
  const _id = "64c7df92f5df807920c01479";
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage plateformName={Name} />} />
          <Route path="/home" element={<HomePage plateformName={Name} />} />
          <Route path="/profile" element={<ProfilePage plateformName={Name} userId={_id}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
