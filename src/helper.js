import { useEffect, useRef, useState } from 'react'
import { LoadingManager } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
export function getFileExt(path) {
  return path.substring(path.lastIndexOf('/') + 1)
}

export function useMods({ pathList }) {
  const modList = useRef([])
  const loadingManager = useRef()
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count >= pathList.length) return
    loadingManager.current = new LoadingManager()
    return new Promise((ok, fail) => {
      new FBXLoader(loadingManager.current).load(
        pathList[count],
        (mod) => ok(mod),
        (evt) => {},
        (evt) => fail(evt)
      )
    }).then((mod) => {
      mod.name = `${mod.uuid}.${getFileExt(pathList[count])}`
      modList.current.push(mod)
      setCount(count + 1)
    })
  }, [count, pathList])
  return { modList }
}
