import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage'
import Login from "./pages/Login";
import Register from "./pages/Register";
interface AppProps {
  
}
 
const App: React.FunctionComponent<AppProps> = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
   );
}
 
export default App;