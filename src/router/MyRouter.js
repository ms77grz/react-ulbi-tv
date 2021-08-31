import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MyLoader from '../components/ui/loader/MyLoader';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from './MyRoutes';

export default function MyRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <MyLoader />;
  }

  return isAuth ? (
    <Switch>
      {privateRoutes.map(route => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to='/posts' />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(route => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to='/login' />
    </Switch>
  );
}
