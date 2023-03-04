import React,{useState} from 'react';
import validator from 'validator';

const ReadEachContacts = (props) => {
  const [update, setUpdate] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (e.target[1].value.length!=0){
      if (! validator.isEmail(e.target[1].value)){alert("Invalid Email"); return}
    }
    if (e.target[2].value.length!=0){
      if (! validator.isMobilePhone(e.target[2].value, 'en-IN')){alert("Invalid Phone Number"); return}
    }
    
    props.updatecontact({id: props.index, value: {name: e.target[0].value || props.data.name, email: e.target[1].value || props.data.email, phno: +e.target[2].value || props.data.phno}})
    setUpdate(false);
  }
  return (
    <div className='border m-2 p-2 w-72 rounded-md border-cyan-500 hover:shadow-lg'>
      {update ? 
      <form onSubmit={(e)=>{handleSubmit(e)}} className='flex flex-col'>
        <label>Name: 
        <input className='focus:outline-none px-2' placeholder={props.data.name}/>
        </label>

        <label>Email: 
        <input type='email' className='focus:outline-none px-2' placeholder={props.data.email}/>
        </label>

        <label>Phone No.: 
        <input type='number' className='focus:outline-none w-[43%] pl-2' placeholder={props.data.phno}/>
        </label>
        <div>
        <button className='border p-1 px-2 m-1 rounded-md border-green-400 hover:bg-emerald-400 hover:text-white' type='submit'>ok</button>
        <button className='border p-1 m-1 rounded-md border-slate-400 hover:bg-slate-600 hover:text-white' type='button' onClick={()=>{setUpdate(false)}}>cancel</button>
        </div>
      </form> : 
      <div className='gap-2'>
      <div>Name: {props.data.name}</div>
      <div>Email: {props.data.email}</div>
      <div>Phone No.: {props.data.phno}</div>
      <div className=''>
      <button className='border p-1 m-1 rounded-md border-yellow-400 hover:bg-amber-300 hover:text-black' onClick={()=>{setUpdate(true)}}>update</button>
      <button className='border p-1 m-1 rounded-md border-red-400 hover:bg-rose-500 hover:text-white' onClick={()=>{props.deletecontact(props.data)}}>delete</button></div>
    </div>}
    </div>
    
  )
}

export default ReadEachContacts
