import { Route, Routes, useLocation} from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Navbar from './pages/Navbar';
import Portfolio from "./pages/portfolio/Portfolio";


function App() {
  return (
    <div className="App relative">
      <Navbar />
      <Routes>
       <Route path='/' element={<HomePage />} />
        <Route path='/case-study' element={<Portfolio />} />
        </Routes>
    </div>
  );
}

export default App;
