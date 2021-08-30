import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import PostService from '../api/PostsService';
import MyLoader from './ui/loader/MyLoader';

export default function PostDetail() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostDetail, postDetailLoading, postDetailError] = useFetch(
    async id => {
      const res = await PostService.getPostById(id);
      setPost(res.data);
    }
  );

  const [fetchComments, commentsLoading, commentsError] = useFetch(async id => {
    const res = await PostService.getCommentsById(id);
    setComments(res.data);
  });

  useEffect(() => {
    fetchPostDetail(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Post Detail Page</h1>
      {postDetailLoading ? (
        <MyLoader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h2>Comments</h2>
      {commentsLoading ? (
        <MyLoader />
      ) : (
        <div>
          {comments.map(comment => (
            <div style={{ marginTop: 15 }}>
              <h5>{comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
