import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import "./postslist.css"
import ReactionButtons from "./ReactionButtons";

const PostsLIst = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id} className="section-style">
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="post-credit">
        <PostAuthor userId={post.userId}/>
        <TimeAgo timestamp={post.date}/>
      </p>
      <ReactionButtons post={post}/>
    </article>
  ));

  return (

    <section >
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsLIst;
