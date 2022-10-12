
import './App.css';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from './firebase/firebase.init';
const auth = getAuth(app)

function App() {
  const provider = new GoogleAuthProvider();
  const handalGoogleSignIn = () =>{
    console.log('click');
  }
  return (
    <div className="App">
      <button onClick={handalGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
