import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

export default function SingleEventComponent({data}) {
  const inputEmail = useRef();
  const router = useRouter();
  const [message,setMessage] = useState('');

  const onSubmit = async(e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please enter a valid email address');
    }

    try {
      const response = await fetch('/api/email-registration',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: emailValue, eventId: eventId})
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`)

      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';

    } catch(e) {
      console.log('Error',e)
    }
  }



  return (
    <div className='singleEventComponentContainer'>
        <h2>{data.title}</h2>
        <Image src={data.image} alt={data.title} height={500} width={750} />
        <p>{data.description}</p>
        <form className='registrationForm' onSubmit={onSubmit}>
          <h3 className='registrationFormTitle'>Get registered for this event!</h3>
          <input
            ref={inputEmail}
            type='email' 
            placeholder='Please enter your email'
            className='registrationFormInput'></input>
          <button className='registrationFormButton' type='submit'>Submit</button>
        </form>
        <p>{message}</p>
    </div>
  )
}
