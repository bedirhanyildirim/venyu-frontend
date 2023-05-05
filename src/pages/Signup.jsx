import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setLoader } from '../stores/loader'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'

export default function Signup() {
  
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  
  const signUp = async (e) => {
    e.preventDefault()
    
    try {
      dispatch(setLoader(true))
      const userCredentials = await createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      const user = userCredentials.user
      console.log(user)
    } catch (e) {
      console.log(`an error occurred: ${e}`)
    } finally {
      dispatch(setLoader(false))
    }
  }
  
  return (
    <div className="content">
      <h1 className="text-3xl font-bold">Üye Ol</h1>
      <p className="text-xl mt-2">Lütfen üye olunuz</p>
      <br/>
      <div className="lg:w-1/2">
        <form className="w-full" onSubmit={signUp} action="">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-1 text-md">Email adresi:</label>
            <input className="bg-white py-1 px-2 rounded border" type="text" name="email" id="email" onChange={(e) => setEmailInput(e.target.value)}/>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="password" className="mb-1 text-md">Şifre:</label>
            <input className="bg-white py-1 px-2 rounded border" type="password" name="email" id="password" onChange={(e) => setPasswordInput(e.target.value)} />
          </div>
          <div className="w-full flex flex-row justify-start">
            <input className="bg-emerald-700 text-white py-1 px-10 rounded border hover:cursor-pointer hover:bg-emerald-600" type="submit" value="Üye Ol"/>
          </div>
        </form>
      </div>
      <br/>
      <p>Is user logged in? {isLoggedIn ? 'Yes' : 'No'}</p>
    </div>
  )
}