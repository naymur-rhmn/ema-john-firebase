import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthentication;

/*
steps for authentication
-----------------
Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method

----------------
Step-2
1. Create Login
2. Create Login componetn
3. Create Register component
4. Create Route for Login and Register

-----------------
Step-3
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from firebase

-----------------------
Step-4
1. creater a auth context
2. create context provider
3. set context provider context value
3 use auth provider
4. create useAuth Hook
 */