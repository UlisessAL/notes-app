import { initializeApp } from "firebase/app";
import {addDoc, collection, doc, getDoc, getDocs,  getFirestore,  query, where} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesRef = collection(db, "notes")
export const auth = getAuth(app)

export async function getNotes(){
  const snapshot = await getDocs(notesRef)

  const notes = snapshot.docs.map((e) => {
    let note = e.data();
    note.id = e.id

    return note;
  })

  return notes
}

export async function getNote(idParams){
  const docRef = doc(notesRef, idParams)
  const snapshot = await getDoc(docRef)

  return {...snapshot.data(), id: snapshot.id}
}

export async function getNoteByCategory(categoryId){
  const q = query(notesRef, where("category", "==" , categoryId));
  const snapshot = await getDocs(q);
  const notes = snapshot.docs.map((e) => {
      let note = e.data()
      note.id = e.id;

      return note;
  });

  return notes;
}


export async function exportArray(){

    const notes = [{id:1, title:"Recordatorio", info:"jskdbgdjksahjkidjskljklsjdlkdjs", shortInfo:"esto es sobre tarea", category:"others"},
    {id:2, title:"Recordatorio2", info:"jskdbgdjksahjkidjskljklsjdlkdjs", shortInfo:"esto es sobre tarea", category:"homework"},
    {id:3, title:"Recordatorio3", info:"jskdbgdjksahjkidjskljklsjdlkdjs", shortInfo:"esto es sobre tarea", category:"others"},
    {id:4, title:"Recordatorio4", info:"jskdbgdjksahjkidjskljklsjdlkdjs", shortInfo:"esto es sobre tarea", category:"homework"}]

    for (let item of notes){
      delete item.id;
      addDoc(collection(db, "notes"), item);
  }

}

export async function exportOneNote(note){
  addDoc(collection(db, "notes"), note)
}

export default db;

export {app}