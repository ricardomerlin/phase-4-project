import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function CreateProfile() {

  function handleProfileSubmit() {

  }

  return (
    <div className='profileCard'>
      <input 
          type = 'text' 
          name = 'username'
          placeholder = 'Enter desired username'
          class-name = 'username-input'
      />
      <input
          type = 'dropdown'
          name = 'Genres'
          placeholder = 'Share your thoughts!'
          classname = 'thoughts-input'
      />
      <input
          type = 'button'
          name = 'submit'
          value = 'Create new profile'
      />
  </div>
  )
}

export default CreateProfile
