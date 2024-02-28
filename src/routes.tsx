import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Cardapio from './pages/Cardapio';
import Menu from './components/Menu';
import Sobre from './pages/Sobre';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Prato from './pages/Prato';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
            <Menu />
                <Routes>
                    <Route path='/la-casa-di-carlos/'>
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                        <Route path='prato/:id' element={<Prato />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}