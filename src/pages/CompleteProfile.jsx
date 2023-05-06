import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateProfile } from "firebase/auth"
import { auth } from "../firebase/firebase.config"
import { setLoader } from "../stores/loader"
import {useNavigate} from "react-router-dom"
import {setUser} from "../stores/auth.jsx";

export default function CompleteProfile() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [displayName, setDisplayName] = useState('')
  
  const complete = async (e) => {
    e.preventDefault()
    try {
      await updateProfile(auth.currentUser, {
        displayName
      })
      const userData = {
        email: auth.currentUser.email,
        displayName: auth.currentUser.displayName,
        emailVerified: auth.currentUser.emailVerified,
        phoneNumber: auth.currentUser.phoneNumber,
        photoURL: auth.currentUser.photoURL,
        providerId: auth.currentUser.providerId,
        uid: auth.currentUser.uid
      }
      dispatch(setUser(userData))
      navigate('/')
    } catch (e) {
      console.log(`an error occurred: ${e}`)
    } finally {
      dispatch(setLoader(false))
    }
  }
  
  return (
    <div className="content">
      <h1 className="text-3xl font-bold">Profilini Oluştur</h1>
      <p className="text-xl mt-2">Lorem ipsum falan filan</p>
      <div className="lg:w-1/2 mt-10">
        <form className="w-full" onSubmit={complete} action="">
          <div className="flex flex-col mb-4">
            <label htmlFor="displayName" className="mb-1 text-md">Ad Soyad:</label>
            <input className="bg-white py-1 px-2 rounded border" type="text" name="displayName" id="displayName" onChange={(e) => setDisplayName(e.target.value)}/>
          </div>
          <div className="w-full flex flex-row justify-start">
            <input className="bg-emerald-700 text-white py-1 px-10 rounded border hover:cursor-pointer hover:bg-emerald-600" type="submit" value="Kaydet"/>
          </div>
        </form>
      </div>
    </div>
  )
}