import { useHistory } from 'react-router-dom';
import MyButton from './ui/button/MyButton';

export default function PostItem(props) {
  const router = useHistory();

  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
          Read
        </MyButton>
        <MyButton onClick={() => props.removePost(props.post.id)}>
          Delete
        </MyButton>
      </div>
    </div>
  );
}
