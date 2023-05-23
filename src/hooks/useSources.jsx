import { useEffect, useState } from "react"
import { getSharedSources } from "../api"
import { setSharedSources } from "../stores/sources"
import { useDispatch, useSelector } from "react-redux"

const useSources = () => {
  const dispatch = useDispatch()
  const cachedSources = useSelector(state => state.sources.sharedSources)
  const lastUpdateSharedSources = useSelector(state => state.sources.lastUpdateSharedSources)
  const [sources, setSources] = useState([])
  
  useEffect(() => {
    const now = new Date()
    now.setMinutes(now.getMinutes() - 5)
    if (lastUpdateSharedSources === undefined || lastUpdateSharedSources < now.toISOString()) {
      getSharedSources().then(res => {
        setSources(res)
        dispatch(setSharedSources(res))
        console.log("shared sources fetched")
      })
    } else {
      setSources(cachedSources)
      console.log("cached shared sources")
    }
  }, [lastUpdateSharedSources])
  
  return sources
}

export default useSources