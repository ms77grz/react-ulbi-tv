import { useState, useEffect } from 'react';
import { usePosts } from './hooks/usePosts';
import { useFetch } from './hooks/useFetch';
import PostService from './api/PostsService';
import './styles/App.css';
// import { DUMMY_POSTS } from './data/dummyPosts';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/ui/modal/MyModal';
import MyButton from './components/ui/button/MyButton';
import MyLoader from './components/ui/loader/MyLoader';
import MyError from './components/ui/error/MyError';

export default function App() {
  // const [posts, setPosts] = useState(DUMMY_POSTS);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  function addPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(id) {
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <div className='App'>
      {/* <MyButton onClick={fetchPosts}>Get Posts</MyButton> */}
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Add New Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm addPost={addPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <MyError error={postError} />}
      {isPostsLoading && <MyLoader />}
      {!postError && !isPostsLoading && (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title='Posts List JavaScript'
        />
      )}
    </div>
  );
}
