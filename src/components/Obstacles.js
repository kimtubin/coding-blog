import React from "react"
import { useState } from "react"
import ObstaclesHeader from "../elements/obstacles-header.png"
import Mountain from "../elements/mountain.png"
import img1 from "../elements/1.png"
import img2 from "../elements/2.png"
import img3 from "../elements/3.png"
import img4 from "../elements/4.png"
import img5 from "../elements/5.png"
import img6 from "../elements/6.png"
import Popup from "./Popup"

export default function Obstacles() {
  const obstacleData = [
    {
      id: "img1",
      img: img1,
    },
    {
      id: "img2",
      img: img2,
    },
    {
      id: "img3",
      img: img3,
    },
    {
      id: "img4",
      img: img4,
    },
    {
      id: "img5",
      img: img5,
    },
    {
      id: "img6",
      img: img6,
    },
  ]

  const [showPopup, setShowPopup] = useState(false)
  const [header, setHeader] = useState("")
  const [content, setContent] = useState("")

  const handlePopup = (item) => {
    setHeader(item.name)
    setContent(item.content)
    return setShowPopup((pre) => !pre)
  }

  return (
    <div className="materials-container" id="obstacle-container">
      <div className="materials-header">
        <img className="obstacles-header" src={ObstaclesHeader} alt="" />
      </div>
      <div className="obstacles-body">
        <img className="obstacles-mountain" src={Mountain} alt="" />
        {obstacleData.map((item) => (
          <img className="obstacle-item" id={item.id} src={item.img} alt="" onClick={() => handlePopup(item)} />
        ))}
      </div>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} header={header} content={content} />
    </div>
  )
}
