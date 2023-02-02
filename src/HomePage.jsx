import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadFailPage from './components/error404/LoadFailPage';
import NavBar from './components/NavBar/NavBar';
import NoteDetailContainer from './components/NoteDetailContainer/NoteDetailContainer';
import NoteContainer from './components/NoteListContainer/NoteContainer';
import PushNoteContainer from './components/PushNote/PushNoteContainer';
import {exportArray } from './services/Firebase';
// const subir = () => {
//     exportArray()
//     console.log("subido");
// }

const HomePage = (props) => {
    return (
        <div className='app-dark'>
        <BrowserRouter>
            {/* <button onClick={subir}>Click</button> */}
            <NavBar handleLogOut={props.handleLogOut} />
                <Routes>

                <Route path="/"  element={<NoteContainer/>}/>

                <Route path="/note/:id"  element={<NoteDetailContainer/>}/>
                
                <Route path="/category/:categoryId"  element={<NoteContainer/>}/>

                <Route path="/newNote"  element={<PushNoteContainer/>}/>

                <Route path="*"  element={<LoadFailPage/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default HomePage