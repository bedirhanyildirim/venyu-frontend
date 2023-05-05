import { useSelector } from "react-redux";

export default function Login() {
  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  
  return (
    <div className="content">
      <h1 className="text-3xl font-bold">Giriş Yap</h1>
      <p className="text-xl mt-2">Lütfen giriş yapınız</p>
      <br/>
      <p>Is user logged in? {isLoggedIn ? 'Yes' : 'No'}</p>
    </div>
  )
}