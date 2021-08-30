import { Switch, Route, Redirect } from 'react-router-dom';

import About from '../components/pages/About';
import Posts from '../components/pages/Posts';
import PostDetail from '../components/PostDetail';
import Error from '../components/pages/Error';

export default function MyRouter() {
  return (
    <Switch>
      <Route path='/about' component={() => <About />} />
      <Route exact path='/posts' component={() => <Posts />} />
      <Route exact path='/posts/:id' component={() => <PostDetail />} />
      {/* <Route path='/error' component={() => <Error />} /> */}
      {/* <Redirect to='/error' /> */}
      <Redirect to='/posts' />
    </Switch>
  );
}
