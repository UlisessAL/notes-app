import Log from './components/Log/Log';
import {  AuthProvider } from './context/AuthContext';
import "./App.css"



function App() {

  return (
    <AuthProvider>
      <Log/>
    </AuthProvider>
  );
}

export default App;
