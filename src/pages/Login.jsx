import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setLoader } from "../stores/loader"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase.config"

export default function Login() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  
  const login = async (e) => {
    e.preventDefault()
    try {
      dispatch(setLoader(true))
      await signInWithEmailAndPassword(auth, emailInput, passwordInput)
    } catch (e) {
      console.log(`an error occurred: ${e}`)
    } finally {
      dispatch(setLoader(false))
      navigate('/')
    }
  }
  
  return (
    <div className="content">
      <h1 className="text-3xl font-bold">Giriş Yap</h1>
      <p className="text-xl mt-2">Lütfen giriş yapınız</p>
      <div className="lg:w-1/2 mt-10">
        <form className="w-full" onSubmit={login} action="">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-1 text-md">Email adresi:</label>
            <input className="bg-white py-1 px-2 rounded border" type="text" name="email" id="email" onChange={(e) => setEmailInput(e.target.value)}/>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="password" className="mb-1 text-md">Şifre:</label>
            <input className="bg-white py-1 px-2 rounded border" type="password" name="email" id="password" onChange={(e) => setPasswordInput(e.target.value)} />
          </div>
          <div className="w-full flex flex-row justify-start">
            <input className="bg-emerald-700 text-white py-1 px-10 rounded border hover:cursor-pointer hover:bg-emerald-600" type="submit" value="Giriş Yap"/>
          </div>
        </form>
      </div>
    </div>
  )
}