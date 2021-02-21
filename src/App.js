import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Detail from './components/Detail'

import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
function App() {
  const user=useSelector(selectUser);
  return (
    <div className="App">
      {user ? <Detail/> : <Login/>}
    </div>
  );
}

export default App;
