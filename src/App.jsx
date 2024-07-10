import "./App.css";
import AddPostForm from "./features/counter/AddPostForm";
import PostList from "./features/counter/PostList";

function App() {
  return (
    <>
    <div className="add_post">
        <AddPostForm />
    </div>
      <div className="App">
        <PostList/>
      </div>
    </>
  );
}

export default App;
