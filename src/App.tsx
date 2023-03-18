import { Route, Routes } from 'react-router-dom';
import './assets/styles/app.scss';
import { Pizzas } from './components/layout/pizza/Pizzas';
import { NoteFoundBlock } from './components/layout/common/NotFound';
import { CartPage } from './components/layout/cart/CartPage';
import { FullPizza } from './components/legacy/FullPizza';
import { FirstLayout } from './components/layout/common/FirstLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<FirstLayout />}>
        <Route index element={<Pizzas />}></Route>
        <Route path='cart' element={<CartPage />}></Route>
        <Route path='pizza/:id' element={<FullPizza />}></Route>
        <Route path='*' element={<NoteFoundBlock />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
