import { useState, useEffect } from 'react';
import { usePosts } from '../../hooks/usePosts';
import { useFetch } from '../../hooks/useFetch';
import PostService from '../../api/PostsService';

import '../../styles/App.css';
// import { DUMMY_POSTS } from './data/dummyPosts';
import PostList from '../../components/PostList';

import PostForm from '../../components/PostForm';
import PostFilter from '../../components/PostFilter';
import MyModal from '../../components/ui/modal/MyModal';
import MyButton from '../../components/ui/button/MyButton';
import MyLoader from '../../components/ui/loader/MyLoader';
import MyError from '../../components/ui/error/MyError';
import MyPagination from '../../components/ui/pagination/MyPagination';

import { getPageCount } from '../../utils/pages';

export default function Posts() {
  // const [posts, setPosts] = useState(DUMMY_POSTS);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetch(
    async (limit, page) => {
      const res = await PostService.getAll(limit, page);
      setPosts(res.data);
      const totalCount = res.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  function addPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(id) {
    setPosts(posts.filter(post => post.id !== id));
  }

  function changePage(page) {
    setPage(page);
    fetchPosts(limit, page);
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
      <MyPagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}
