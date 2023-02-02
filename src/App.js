import './App.css';
import Log from './components/Log/Log';
import { AuthProvider } from './context/AuthContext';
import HomePage from './HomePage';






function App() {

  return (
    <AuthProvider>
      {/* <HomePage/>  */}
      <Log/>
    </AuthProvider>
  );
}

export default App;
