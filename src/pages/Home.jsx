import { useSelector } from "react-redux"
import useSources from "../hooks/useSources"

export default function Home() {
  
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const sources = useSources()
  
  return (
    <div className="content">
      <h1 className="text-3xl font-bold">Hoşgeldiniz</h1>
      <p className="text-xl mt-2">Ev Kiralamanın En Güvenilir Yolu</p>
      <br/>
      {sources && (
        <ul>{
          sources.map((source, index) => {
            return (
              <li key={index}>
                {source.name}
              </li>
            )
          })
        }</ul>
      )}
      <br/>
      <p>Is user logged in? {isLoggedIn ? 'Yes' : 'No'}</p>
    </div>
  )
}