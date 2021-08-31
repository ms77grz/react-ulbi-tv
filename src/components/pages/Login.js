import MyInput from '../ui/input/MyInput';
import MyButton from '../ui/button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../../context/index';

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <MyInput type='text' placeholder='username' />
        <MyInput type='password' placeholder='password' />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
}
