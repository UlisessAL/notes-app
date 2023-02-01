import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import NoteDetailContainer from './components/NoteDetailContainer/NoteDetailContainer';
import NoteContainer from './components/NoteListContainer/NoteContainer';
import { exportArray } from './services/Firebase';

const subir = () => {
  exportArray()
  console.log("subido");
}

function App() {
  return (
    <div className='app-dark'>
      <BrowserRouter>
        <button onClick={subir}>Click</button>
        <NavBar/>
            <Routes>

              <Route path="/"  element={<NoteContainer/>}/>

              <Route path="/note/:id"  element={<NoteDetailContainer/>}/>
              
              <Route path="/category/:categoryId"  element={<NoteContainer/>}/>

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
