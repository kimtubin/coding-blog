import React from "react"
import { useState } from "react"
import Popup from "./Popup"
import Time from "../elements/time.png"
import Relax from "../elements/relax.png"
import Chatting from "../elements/chatting.png"
import Hangout from "../elements/hangout.png"
import Inspiration from "../elements/inspiration.png"
import TipsTricksHeader from "../elements/tipstricks-header.png"

export default function TipsTricks() {
  const tipstricksData = [
    {
      id: "Hangout",
      name: "Hangout",
      img: Hangout,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis voluptas doloribus unde. Aliquam, sunt tempora. Sit autem voluptas, facilis dicta quis libero dolorem aperiam ut numquam aut. Obcaecati, consequuntur?",
    },
    {
      id: "Chatting",
      name: "Chatting",
      img: Chatting,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis voluptas doloribus unde. Aliquam, sunt tempora. Sit autem voluptas, facilis dicta quis libero dolorem aperiam ut numquam aut. Obcaecati, consequuntur?",
    },
    {
      id: "Relax",
      name: "Relax",
      img: Relax,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis voluptas doloribus unde. Aliquam, sunt tempora. Sit autem voluptas, facilis dicta quis libero dolorem aperiam ut numquam aut. Obcaecati, consequuntur?",
    },
    {
      id: "Time",
      name: "Time",
      img: Time,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis voluptas doloribus unde. Aliquam, sunt tempora. Sit autem voluptas, facilis dicta quis libero dolorem aperiam ut numquam aut. Obcaecati, consequuntur?",
    },
    {
      id: "Inspiration",
      name: "Inspiration",
      img: Inspiration,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis voluptas doloribus unde. Aliquam, sunt tempora. Sit autem voluptas, facilis dicta quis libero dolorem aperiam ut numquam aut. Obcaecati, consequuntur?",
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
    <div>
      <div className="materials-container">
        <div className="materials-header" id="tipstricks-header">
          <img src={TipsTricksHeader} alt="" />
        </div>
        <div className="tipstricks-items">
          {tipstricksData.map((item, index) => (
            <div className="tipstricks-item" onClick={() => handlePopup(item)}>
              <img className="tipstricks-img" id={item.id} src={item.img} alt={item.name} />
            </div>
          ))}
          <Popup showPopup={showPopup} setShowPopup={setShowPopup} header={header} content={content} />
        </div>
      </div>
    </div>
  )
}
