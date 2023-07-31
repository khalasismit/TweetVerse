import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}>
          </Route>
          <Route path="/home" element={<HomePage/>}>
          </Route>
          <Route path="/profile" element={<ProfilePage/>} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
