import React from 'react';
import { Route, Routes } from 'react-router-dom';

import '../src/scss/app.scss';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { NoteFoundBlock } from './pages/NotFound';
import { CartPage } from './pages/CartPage';
import { FullPizza } from './components/Home/FullPizza';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<CartPage />}></Route>
            <Route path='/pizza/:id' element={<FullPizza />}></Route>
            <Route path='*' element={<NoteFoundBlock />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
