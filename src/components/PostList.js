import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

export default function PostList({ posts, title, removePost }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>No post found!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames='post'>
            <PostItem post={post} number={index + 1} removePost={removePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
