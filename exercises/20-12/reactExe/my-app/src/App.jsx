import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
  const [userDetail, setUserDetails] = useState(null);

  const getData = async () => {
    if (userId <= 0 || userId > 10) setError("not valid id min =1 , max =10");
    else {
      setError("");
      const getData = async () => {
        try {
          let response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${userId}`
          );
          console.log(response.data);
          setUserDetails(response.data);
        } catch (error) {
          setError(error.message);
        }
      };
      getData();
    }
  };

  useEffect(() => {
    setUserDetails(null);
    if (!userId) return;
    const timer = setTimeout(() => {
      getData();
    }, 500);

    return () => clearTimeout(timer);
  }, [userId]);

  const handleChange = (e) => setUserId(parseInt(e.target.value));
  return (
    <div className="App">
      <div className="div">
        <label>
          user ID:
          <input
            type="text"
            name="id"
            placeholder="type user id "
            onChange={handleChange}
          />
        </label>
        {error ? <div className="error">{error}</div> : null}
      </div>
      {userDetail ? (
        <div>
         <strong>name :</strong>  {userDetail.name} <br />
         <strong> email : </strong>{userDetail.email} <br />
         <strong> phone : </strong>{userDetail.phone} <br />
        </div>
      ) : null}
    </div>
  );
}

export default App;
