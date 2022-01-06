import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/SignIn/Firebase/firebase.init";
import { getAuth,GoogleAuthProvider , createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged, signInWithPopup } from "firebase/auth";

// firebase initialize
initializeFirebase()

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true)
    const [authError,setAuthError] = useState('');
    const auth = getAuth(); 
    
    const siginWithGoogle = ( ) => {
        const googleProvider = new GoogleAuthProvider()
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        }).finally(()=> setIsLoading(false));
    
    
    }

    // Register User
    const registerUser = (email,password,location,navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            navigate(destination)
            setAuthError("");
            
          })
          .catch((error) => {
            setAuthError(error.message);
          }).finally(()=> setIsLoading(false));
    };

    // login user 
    const logInUser = (email,password,location,navigate) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const destination = location?.state?.from || '/';
            navigate(destination)
            setAuthError("");
        })
        .catch((error)=> { 
            setAuthError(error.message);
            
        })
        .finally(()=> setIsLoading(false));
    }

    // signout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            // sign out
        }).catch((error)=>{
            // error
        })
        .finally(()=> setIsLoading(false));

    }

        // user state
        useEffect(()=>{
            
            const unsubscribed = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                } else {
                setUser({});
                }
                setIsLoading(false)
            });
            return () => unsubscribed;
        },[])
    return {
        user,
        registerUser,
        isLoading,
        logOut,
        logInUser,
        authError,
        siginWithGoogle
        
    }

};

export default useFirebase;