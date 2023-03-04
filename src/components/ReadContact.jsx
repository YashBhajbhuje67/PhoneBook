import React from 'react'
import ReadEachContacts from './ReadEachContact'

const ReadContact = ({contacts, deletecontact, updatecontact}) => {

  return (
    <div>
      <div className='flex items-center justify-center m-2 p-1 underline'>All Contacts</div>
      <div className='flex flex-wrap place-content-evenly'>
      {contacts.length!==0 ? contacts.map((data, index)=>{
        return <ReadEachContacts key={index} data={data} index={index} deletecontact={deletecontact} updatecontact={updatecontact}/>
      }) : <>No Contacts Added !</>}
      </div>
      
    </div>
  )
}

export default ReadContact
