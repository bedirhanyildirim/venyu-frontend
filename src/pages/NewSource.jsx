import { useState } from "react"
import { addDoc } from "firebase/firestore"
import { setLoader } from "../stores/loader"
import { useNavigate } from "react-router-dom"
import { addNewSource } from "../stores/sources"
import { useDispatch, useSelector } from "react-redux"
import { sourcesCollection } from "../firebase/firebase.config"

export default function NewSource () {
  
  // title, description, capacity, sharedUsage, owner, date
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [capacity, setCapacity] = useState('')
  const [sharedUsage, setSharedUsage] = useState(false)
  const uid = useSelector(state => state.auth.user.uid)
  
  const createNewSource = async (e) => {
    e.preventDefault()
    try {
      dispatch(setLoader(true))
      const date = new Date().toISOString()
      const sourceObject = {
        title,
        description,
        capacity,
        sharedUsage,
        date,
        uid
      }
      await addDoc(sourcesCollection, sourceObject)
      dispatch(addNewSource(sourceObject))
      console.log('başarılı')
    } catch (e) {
      console.log(`an error occurred: ${e}`)
    } finally {
      dispatch(setLoader(false))
      navigate('/sources')
    }
  }
  
  return (
    <div className="content">
      <h1 className="text-3xl font-bold">Yeni Mekan Ekle</h1>
      <p className="mt-2">Bu sayfada size ait yeni bir mekan ekleyebilirsiniz</p>
      <div className="lg:w-1/2 mt-10">
        <form className="w-full" action="" onSubmit={createNewSource}>
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="mb-1 text-md">Mekan Adı:</label>
            <input className="bg-white py-1 px-2 rounded border" type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="description" className="mb-1 text-md">Açıklama:</label>
            <input className="bg-white py-1 px-2 rounded border" type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="capacity" className="mb-1 text-md">Misafir Sayısı:</label>
            <input className="bg-white py-1 px-2 rounded border" type="text" name="capacity" id="capacity" onChange={(e) => setCapacity(e.target.value)} />
          </div>
          <div className="flex flex-row items-center mb-6">
            <input className="bg-white rounded border mr-2" type="checkbox" name="sharedUsage" id="sharedUsage" onChange={(e) => setSharedUsage(e.target.value)} />
            <label htmlFor="sharedUsage" className="text-md">Ortak Kullanıma Uygun</label>
          </div>
          <div className="w-full flex flex-row justify-start">
            <input className="bg-emerald-700 text-white py-1 px-10 rounded border hover:cursor-pointer hover:bg-emerald-600" type="submit" value="Mekan Oluştur"/>
          </div>
        </form>
      </div>
    </div>
  )
}