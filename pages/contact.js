import React, {useState} from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e)=>{
    if (e.target.name === 'name'){
      setName(e.target.value)
    }
    else if (e.target.name === 'email'){
      setEmail(e.target.value)
    }
    if (e.target.name === 'mobile'){
      setMobile(e.target.value)
    }
    if (e.target.name === 'message'){
      setMessage(e.target.value)
    }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const data = {name,email,mobile,message}
    let response = await fetch('http://localhost:3000/api/postcontact',{
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    if(response.status==200){
      alert('Successfully! submited the form.')
      setName('')
      setEmail('')
      setMobile('')
      setMessage('')
    }
    else{
      alert('Failed! to submit the form.')
    }
  }


  return (
    <>
    <form action="/contact" onSubmit={handleSubmit}>
      <div className="mx-auto w-1/2 flex flex-col justify-start items-start relative top-20 left-0">
        <h1 className="text-2xl">Contact us</h1>
        <div className="w-full mt-6">
          <label htmlFor="name" className='w-full'>Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} id="name" className='w-full border-2 ' />
          </div>
        <div className="w-full mt-6">
          <label htmlFor="email" className='w-full'>Email</label>
          <input type="email" name="email" id="email" value={email} onChange={handleChange} className='w-full border-2 ' />
          </div>
        <div className="w-full mt-6">
          <label htmlFor="mobile" className='w-full'>Mobile</label>
          <input type="number" name="mobile" id="mobile" value={mobile} onChange={handleChange} className='w-full border-2 ' />
          </div>
        <div className="w-full mt-6">
          <label htmlFor="message" className='w-full'>Message</label>
          <textarea type="text" name="message" value={message} id="message" onChange={handleChange} className='w-full border-2 '/>
          </div>
        <div className="w-full mt-6 flex items-center justify-center">
          <button type="submit" className='w-1/3 rounded mx-auto bg-blue-600 text-white py-2'>Submit</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Contact