import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const signupUser = (newUser) => {
    const userExists = users.find((user) => user.email === newUser.email);
    if (!userExists) {
      setUsers([...users, newUser]);
      alert("Successfully signed up");
    } else {
      alert("User already exists");
    }
  };

  const loginUser = (userData) => {
    const user = users.filter(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );
    if (user.length > 0) {
      setCurrentUser(user[0]);
    } else {
      alert("User not found");
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
    alert("Successfully logged out");
  };

  return (
    <UserContext.Provider
      value={{ currentUser, signupUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
