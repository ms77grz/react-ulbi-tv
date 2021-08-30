import MyButton from './ui/button/MyButton';

export default function PostItem(props) {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post_btns'>
        <MyButton onClick={() => props.removePost(props.post.id)}>
          Delete
        </MyButton>
      </div>
    </div>
  );
}
