import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import useAxiosPublic from "../../Hook/useAxiosPublic";
export const AuthContext=createContext(null)


const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null)
 const [loading,setLoading]=useState(true)
 const googleProvider = new GoogleAuthProvider();

const axiosPublic=useAxiosPublic()

const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
}
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
         setUser(currentUser)
         if(currentUser){
            const userInfo={email:currentUser.email}
axiosPublic.post("/jwt",userInfo)
.then(res=>{
    if(res.data.token){
        localStorage.setItem("access-token",res.data.token)
    }
})
         }
         else{
          localStorage.removeItem("access-token")
         }
       setLoading(false)
  
     })
     return ()=>{
         return unsubscribe()
     }
 },[])

const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

const authInfo={
user,
loading ,
createUser,
signIn,
logOut,
updateUserProfile,
googleSignIn
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;