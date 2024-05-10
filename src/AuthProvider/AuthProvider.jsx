import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase";

 
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

     const createUser=(email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password);
     }

     const updateUserInfo = (name, image) => {
 
        return  updateProfile(auth.currentUser, {
              displayName: name,
               photoURL: image
            }) 
      }


    const userInfo ={
        user,
        createUser,
        updateUserInfo
    }
    return (
       <AuthContext.Provider value={userInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;