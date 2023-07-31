import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const Name = "TweetVerse"
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage plateformName={Name}/>}>
          </Route>
          <Route path="/home" element={<HomePage plateformName={Name}/>}>
          </Route>
          <Route path="/profile" element={<ProfilePage/>} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
