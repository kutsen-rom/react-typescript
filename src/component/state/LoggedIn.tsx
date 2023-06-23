import { useState } from "react";

export default function LoggedIn() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
    }
    
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is logged {isLoggedIn ? 'in' : 'out'}</div>
    </div>
  );
}
