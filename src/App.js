import { BrowserRouter } from 'react-router-dom';

import './styles/App.css';

import MyNavbar from './components/ui/navbar/MyNavbar';
import MyRouter from './router/MyRouter';

export default function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <MyRouter />
    </BrowserRouter>
  );
}
