import { initializeApp } from "firebase/app";
import {addDoc, collection, doc, getDoc, getDocs,  getFirestore,  query, where} from "firebase/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAYGHeAj4QnMpShFHxlMBZ4AoRMs3iHhWU",
  authDomain: "notes-ex-b0039.firebaseapp.com",
  projectId: "notes-ex-b0039",
  storageBucket: "notes-ex-b0039.appspot.com",
  messagingSenderId: "1054454370671",
  appId: "1:1054454370671:web:5d6d0734c3ae69ac5cd89a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesRef = collection(db, "notes")

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