import React from 'react';
import validator from 'validator';

const Addcontact = ({addcontact}) => {

  const handlesubmit = (e)=>{
      e.preventDefault();
      
      if (! validator.isEmail(e.target[1].value)){alert("Invalid Email"); return}
      if (! validator.isMobilePhone(e.target[2].value, 'en-IN')){alert("Invalid Phone Number"); return}
      
      addcontact({name: e.target[0].value, email: e.target[1].value, phno: +e.target[2].value})
  }

  return (
    <div className='m-4 border-2 p-2 rounded-xl mx-[35%]'>
      <p className='flex items-center justify-center underline'>Add Contact</p>
      <form onSubmit={(e)=>{handlesubmit(e)}} className='flex flex-col m-2 p-4 items-center gap-4'>
      <label>Full Name: <input placeholder='Yash Bhajbhuje' className='px-1 border-b-2 rounded-md border-slate-300 hover:border-cyan-500 focus:outline-none focus:border-cyan-600' required/></label>

      <label>Email: <input type='email' placeholder='example@email.com' className='px-1 border-b-2 rounded-md border-slate-300 hover:border-cyan-500 focus:outline-none focus:border-cyan-600' required/></label>

      <label>Phone No.: <input placeholder='10 Digit Number' type='number' className='px-1 border-b-2 rounded-md border-slate-300 hover:border-cyan-500 focus:outline-none focus:border-cyan-600' required/></label>

      <button type='submit' className='border-2 p-4 py-1 border-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white' >Add</button>
      </form>
    </div>
    
  )
}

export default Addcontact
