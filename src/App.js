import logo from './logo.svg';
import './App.css';
import LoginAuth0 from './components/LoginAuth0';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import {useAuth0} from '@auth0/auth0-react'

function App() {
  const {isAuthenticated, isLoading} = useAuth0()
if(isLoading) return <h1>Loading...</h1>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Aplication</h1>
        { isAuthenticated ? <LogoutButton/> : <LoginAuth0/> }
        <Profile/>
      </header>
    </div>
  );
}

export default App;
