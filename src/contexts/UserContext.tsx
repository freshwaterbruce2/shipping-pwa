import React, { createContext, useState, useContext, useEffect } from "react";

interface User {
  id: string;
  username: string;
  displayName: string;
  role: string;
}

interface UserContextType {
  currentUser: User;
  updateUser: (user: User) => void;
}

const defaultUser: User = {
  id: "1",
  username: "user1",
  displayName: "Warehouse Manager",
  role: "manager",
};

const UserContext = createContext<UserContextType>({
  currentUser: defaultUser,
  updateUser: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User>(defaultUser);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const updateUser = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
