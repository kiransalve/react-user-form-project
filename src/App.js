import { useState } from "react";
import User from "./components/User";
import UsersList from "./components/UsersList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserFunction = (userName, userAge, userCollege) => {
    setUserList((previous) => {
      return [
        ...previous,
        { name: userName, age: userAge, college:userCollege, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App">
      <User onAddUser={addUserFunction} />
      <UsersList users={userList} />
    </div>
  );
};

export default App;
