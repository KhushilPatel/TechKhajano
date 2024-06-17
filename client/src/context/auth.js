import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie"; // Import js-cookie

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    Cookies.set("token", serverToken, { expires: 7 }); // Set cookie to expire in 7 days
    
  };

  const LogoutUser = () => {
    setToken("");
    Cookies.remove("token");
    // window.location.reload()
  };

  let isLoggedIn = !!token;

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data);
        setUser(data?.userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error fetching user Data");
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLs,
        LogoutUser,
        user,
        isLoading,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
