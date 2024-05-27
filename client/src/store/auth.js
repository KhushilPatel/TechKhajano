import { createContext} from "react"
import { useContext,useState ,useEffect} from "react"
import { toast } from "react-toastify"
export const AuthContext =createContext()


export const AuthProvider=({children})=>{
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const authorizationToken=`Bearer ${token}`;
    const storeTokenInLs=(serverToken)=>{
        setToken(serverToken)
        localStorage.setItem("token",serverToken)
    }

    let isLoggedIn=!!token;


    const LogoutUser=()=>{
        setToken("");
       return localStorage.removeItem("token")
    }

    //JWT Authentication :to get current user data
    const userAuthentication=async()=>{
        try {
            setIsLoading(true);
            const response=await fetch("http://localhost:4000/api/auth/user",{
                method:"GET",
                headers:{
                  AUthorization: authorizationToken
                }
            })
            if(response.ok){
                const data=await response.json()
                console.log("user data",data)
                setUser(data?.userData);
                setIsLoading(false)
            }
            else{
                setIsLoading(false)
                toast.error("You cannot access admin Page without Permissions")
            }
        } catch (error) {
            console.log("Error fetching user Data")
        }
    }


    useEffect(() => {
       
     userAuthentication()
    }, [])




    return(
        <AuthContext.Provider value={{isLoggedIn,storeTokenInLs,LogoutUser,user,isLoading,authorizationToken}}>
            {children}
        </AuthContext.Provider>
    )
    
}


export const useAuth=()=>{
    const authContextValue=useContext(AuthContext)
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue
}