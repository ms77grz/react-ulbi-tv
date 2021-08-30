import { useState } from 'react';
import MyInput from './ui/input/MyInput';
import MyButton from './ui/button/MyButton';

export default function PostForm({ addPost }) {
  const [post, setPost] = useState({ title: '', body: '' });

  function addNewPost(e) {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    // add new post to posts
    addPost(newPost);

    // reset inputs
    setPost({ title: '', body: '' });
  }

  return (
    <form>
      <MyInput
        type='text'
        placeholder='Post title'
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type='text'
        placeholder='Post body'
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>
    </form>
  );
}
