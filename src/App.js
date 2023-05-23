import "./App.css";
import { useState } from "react";
import allContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState([
    allContacts[0],
    allContacts[1],
    allContacts[2],
    allContacts[5],
    allContacts[4],
  ]);

  const addContact = () => {
    if(allContacts.length === contacts.length){
      console.log("ya has añadido todos")
      return
  }


    const indexRandom = Math.floor(Math.random() * contacts.length);
    const randomContact = allContacts[indexRandom]
    console.log(indexRandom, randomContact);

/*     let isDuplicated = false;
    contacts.forEach((eachContact) =>{
        if(eachContact.id === randomContact.id){
            isDuplicated = true;
        }
    })

    if(isDuplicated === true){
      console.log("Duplicado, activado recursión")
      addContact();
      return
  } */

    const cloneContacts = JSON.parse(JSON.stringify(contacts))
    cloneContacts.push(randomContact)
    console.log(cloneContacts)

    setContacts(cloneContacts)
  }

  const orderContactsByName = () => {
    const cloneContacts = JSON.parse(JSON.stringify(contacts));
    cloneContacts.sort((contact2, contact1) => contact1.name < contact2.name ? 1 : -1)
    setContacts(cloneContacts)
  }

  const orderContactsByPopularity = () => {
    const cloneContacts = JSON.parse(JSON.stringify(contacts));
    cloneContacts.sort((contact2, contact1) => contact1.popularity < contact2.popularity ? 1 : -1)
    setContacts(cloneContacts)
  }

  const handleDeleteContact = (index) => {
    console.log("intentando borrar", index)
    //* puedo borrar por id o  por índice
    //* puedo usar splice, filter o slice para extraer del array
    const cloneContacts = JSON.parse(JSON.stringify(contacts))
    cloneContacts.splice( index, 1)

    //* setWizards(neuvo valor)
    setContacts(cloneContacts)
}

  return (
    <div className="App">

    <h1>IronContacts</h1>
    <button onClick={addContact}>Add Random Contact</button>
    <button onClick={orderContactsByName}>Sort by Name</button>
    <button onClick={orderContactsByPopularity}>Sort by Popularity</button>

      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
      {contacts.map((contacts, index)=> (
        <tr key={contacts.id}>
          <td><img src={contacts.pictureUrl} alt="img" width={"100px"} /></td>
          <td>{contacts.name}</td>
          <td>{contacts.popularity}</td>
          <td>{contacts.wonOscar ? "🏆" : ""}</td>
          <td>{contacts.wonEmmy ? "🏆" : ""}</td>
          <button onClick={() => handleDeleteContact (index)}>Delete</button>
        </tr>

        ))}
      </tbody>
      </table>
    </div>
  );
}

export default App;
