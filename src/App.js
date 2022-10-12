
import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import app from './firebase/firebase.init'
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
 const provider = new GoogleAuthProvider();
  const handalSignIn = () =>{
    signInWithPopup(auth, provider)
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
  }
  return (
    <div className="App">
      {/* Conditional REndering  */}

      { user.email ? 
        <button onClick={handalSignOut}>Sign Out</button> :
        <button onClick={handalSignIn}>Sign In With Google</button>
      }
      {  user.email && <div>
        <h2>UserName: {user.displayName}</h2>
        <p>Email Address: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
