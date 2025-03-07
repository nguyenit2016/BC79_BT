import React from 'react'
import { useSelector } from 'react-redux'
import { ScaleLoader } from 'react-spinners'

export default function Loading() {
  let { isLoading } = useSelector((state) => {
    return state.loadingSlice
  })

  if (!isLoading) return <></>
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "white",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ScaleLoader color='blue' size={150} />
    </div>
  )
}
