import './assets/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddAbout from './pages/AddAbout';
import Interest from './pages/Interest';
import Register from './pages/Register';
import Personality from './pages/Personality';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/addinterest" element={<Interest />} />
        <Route path="/addabout" element={<AddAbout />} />
        <Route path="/addpersonality" element={<Personality />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
