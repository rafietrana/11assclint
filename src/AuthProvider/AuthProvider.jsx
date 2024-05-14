import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";



const googleProvider = new GoogleAuthProvider();
 
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

     const createUser=(email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password);
     }

     const updateUserInfo = (name, image) => {
      setLoading(true)
 
        return  updateProfile(auth.currentUser, {
              displayName: name,
               photoURL: image
            }) 
      }
      const loginUser =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
      }


      const logout =() =>{
        setLoading(true)
        return signOut(auth)
      }
      const googleLogin = () =>{
        setLoading(true)
        return  signInWithPopup(auth, googleProvider)
        }




      useEffect(() =>{
 
           const unSubcribe = onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser)
          setLoading(false)
          const userEmail = currentUser?.email || user?.email;
           
          const loggedUser = {email: userEmail};


          if(currentUser){



            axios.post('http://localhost:5000/jwt', loggedUser,{withCredentials: true})
            .then(res =>{
                console.log('token response is',res.data);
            })
        }
        else{
               axios.post('http://localhost:5000/logout', loggedUser,{withCredentials: true})
               .then(res =>{
                console.log(res.data);
               })
          }




        })
          return () =>unSubcribe();
      })


    const userInfo ={
        user,
        createUser,
        updateUserInfo,
        loginUser,
        logout,
        googleLogin,
        loading
    }
    return (
       <AuthContext.Provider value={userInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;