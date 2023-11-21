import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useRef } from "react";
import { addUser, getUser } from "./redux-toolkit/users/api/api";

function App() {
  const user = useSelector((state) => state.users);

  const titleData = useRef();
  const authorData = useRef();

  const handleSubmit = () => {
    const data = {
      title: titleData.current.value,
      author: authorData.current.value,
    };
    console.log(data);

    dispatch(addUser(data));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (user.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <input type="text" name="title" ref={titleData} />
      <input type="text" name="author" ref={authorData} />
      <button onClick={handleSubmit}>Add</button>

      <div>
        {user.data &&
          user.data.map((val, ind) => {
            return (
              <div key={ind}>
                <div>
                  <h1>{val.title}</h1>
                  <h4>{val.author}</h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
