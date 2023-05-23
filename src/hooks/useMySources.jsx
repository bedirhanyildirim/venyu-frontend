import { useEffect, useState } from "react"
import { getMySources } from "../api"
import { setMySources } from "../stores/sources"
import { useDispatch, useSelector } from "react-redux"

const useMySources = () => {
  const dispatch = useDispatch()
  const uid = useSelector(state => state.auth.user.uid)
  const cachedMySources = useSelector(state => state.sources.mySources)
  const lastUpdateMySources = useSelector(state => state.sources.lastUpdateMySources)
  const [sources, setSources] = useState([])
  
  useEffect(() => {
    const now = new Date()
    now.setMinutes(now.getMinutes() - 5)
    if (lastUpdateMySources === undefined || lastUpdateMySources < now.toISOString()) {
      getMySources(uid).then(res => {
        dispatch(setMySources(res))
        setSources(res)
        console.log("my sources fetched")
      })
    } else {
      setSources(cachedMySources)
      console.log("cached my sources")
    }
  }, [lastUpdateMySources])
  
  return sources
}

export default useMySources