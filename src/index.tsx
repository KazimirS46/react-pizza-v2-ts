import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './redux/mainStore';
import { ModalState } from './context/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ModalState>
        <App />
      </ModalState>
    </Provider>
  </BrowserRouter>
);
