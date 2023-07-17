// "https://gauravgitacc.github.io/postAppData/posts.json"
import { useSelector, useDispatch } from "react-redux";
import { postFetchData } from "./redux/actions/postActions";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.data;
  });

  const loading = useSelector((state) => {
    return state.loading;
  });

  const error = useSelector((state) => {
    return state.error;
  });

  console.log(data, loading, error);

  useEffect(() => {
    dispatch(postFetchData());
  }, []);

  return (
    <div>
      {data.length > 0 &&
        data.map((obj) => {
          return (
            <div
              style={{
                border: "2px solid red",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h1>{obj.id}</h1>
              <h2>{obj.title}</h2>
              <p>{obj.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
