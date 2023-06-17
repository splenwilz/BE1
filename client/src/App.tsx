import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
// import Homepage from './pages/Homepage';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

interface AppProps {}


const App: React.FunctionComponent<AppProps> = () => {
  return ( 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/terms-and-conditions" element={<Terms/>} />

        <Route path="/privacy-policy" element={<Privacy/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/:id" element={<Post />} />
      </Routes>
  );
}

export default App;
