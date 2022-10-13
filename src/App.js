
import './App.css';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import app from './firebase/firebase.init'
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
 const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handalSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const user = result.user;
      setUser(user)
      console.log(user);
    })
    .catch(error =>{
      console.error('error', error);
    })
  };

  const handalSignOut = ()=>{
    signOut(auth)
    .then(()=>{
      setUser({});
    })
    .catch(()=>{
      setUser({});
    })
  };
  const handalGithubSignIn = ()=>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
      const user = result.user;
      console.log(user);
      setUser(user)
    })
    .catch(error=>{
      console.error(error)
    })
  }
  return (
    <div className="App">
      {/* Conditional REndering  */}

      {user.uid ? (
        <button onClick={handalSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handalSignIn}>Sign In With Google</button>
          <button onClick={handalGithubSignIn}>Sign in with Github</button>
        </>
      )}
      {user.uid && (
        <div>
          <h2>UserName: {user.displayName}</h2>
          <p>Email Address: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
