import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CartPage } from './pages/CartPage';




function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout/>}>
        <Route index element={ <HomePage/>} />
        <Route path="/catalog" element={ <CatalogPage/>} />
        <Route path="/about" element={ <AboutPage/>} />
        <Route path="/contacts" element={ <ContactsPage/>} />
        <Route path="/cart" element={ <CartPage/>} />
        <Route path='*' element={ <NotFoundPage/>} />
        {/* <Route path="/films/:id" element={ <FilmDetailViewPage/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;