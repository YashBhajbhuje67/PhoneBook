import { useEffect, useState } from 'react'
import AddContact from './components/AddContact'
import Navbar from './components/Navbar';
import ReadContact from './components/ReadContact'

function App() {
  let allcontact;
  if(localStorage.getItem("contacts")==null){
    allcontact = [];
  }
  else{
    allcontact = JSON.parse(localStorage.getItem("contacts"));
  }
  
  const validate = (val)=>{
    for (let i=0; i<contacts.length; i++){
      if (i==val.id){continue}
      if(contacts[i].name == val.value.name){
        alert("Name Already Exist !")
        return false;
      }
      if(contacts[i].email == val.value.email){
        alert("Email Already Exist !")
        return false;
      }
      if(contacts[i].phno == val.value.phno){
        alert("Phone Number Already Exist !")
        return false;
      }
    }
    return true
  }

  const addcontact = (e)=>{
    if (! validate({id: -1, value: e})){return}
    setContacts([...contacts, e]);
  }

  const updatecontact = (e) =>{
    if(! validate(e)){return}
    let cont = [...contacts];
    cont[e.id] = e.value;
    setContacts(cont);
  }

  const deletecontact = (contact)=>{
    setContacts(contacts.filter((e)=>{
      return e!==contact;
    }));
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  const [contacts, setContacts] = useState(allcontact)
  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
  },[contacts])


  return (
    <div className='font-[Cambria]'>
      <Navbar/>
      <AddContact addcontact={addcontact}/>
      <hr/>
      <ReadContact contacts={contacts} deletecontact={deletecontact} updatecontact={updatecontact}/>
    </div>
  )
}

export default App
