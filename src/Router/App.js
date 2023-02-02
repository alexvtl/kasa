import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/index';
import Home from '../pages/Home/index';
import About from '../pages/About/index';
import Logement from '../pages/Logement/index';
import Error from '../pages/Error/index';
import Footer from '../components/Footer/index';
import '../utils/style/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
