import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.css';

import MyNavbar from './components/ui/navbar/MyNavbar';
import MyRouter from './router/MyRouter';
import { AuthContext } from './context';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  const contextValue = {
    isAuth,
    setIsAuth,
    isLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <BrowserRouter>
        <MyNavbar />
        <MyRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
