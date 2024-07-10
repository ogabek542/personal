import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import './posts.css'

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => (
    <article key={post.id} className="articel-border">
      <h3 className="text_title">{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section >
      <h2>Posts</h2>
      <div className="row_posta-div">
      {renderPosts}
      </div>
    </section>
  );
};

export default PostList;
