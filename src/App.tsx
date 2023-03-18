import { Route, Routes } from 'react-router-dom';

import '../src/scss/app.scss';

import { Home } from './pages/Home';
import { NoteFoundBlock } from './pages/NotFound';
import { CartPage } from './pages/CartPage';
import { FullPizza } from './components/Home/FullPizza';
import { FirstLayout } from './Layouts/FirstLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<FirstLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='cart' element={<CartPage />}></Route>
        <Route path='pizza/:id' element={<FullPizza />}></Route>
        <Route path='*' element={<NoteFoundBlock />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
