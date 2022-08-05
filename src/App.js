import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Footer } from "./components/footer/Footer";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>      
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
