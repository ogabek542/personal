import "./App.css";
import PostsLIst from "./features/posts/PostsLIst";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <>
  <main className="App">
    <AddPostForm/>
    <PostsLIst/>
  </main>
    </>
  );
}

export default App;
