import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null);

  function handleLogin() {
    setUser({ name: "Roman", email: "any@mail.com" });
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}
