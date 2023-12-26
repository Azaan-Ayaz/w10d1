import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

// const [auth, setAuth] = useState({
//     user:null
// })

const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        user:null
    })

    useEffect(() => {
        const data = localStorage.getItem("auth")
        if (data){
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parseData.user
            })
        }
        //eslint disable next line
    },[]) // auth

    return(
        <AuthContext.Provider value={[auth, setAuth]} > 
            {props.children}
        </AuthContext.Provider>
    )    
}

// custom hook

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }