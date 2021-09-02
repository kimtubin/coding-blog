import React from "react"
import { useState } from "react"
import ToolsHeader from "../elements/tools-header.png"
import Notion from "../elements/notion.jpg"
import Pomodoro from "../elements/pomodoro.png"
import Lifeat from "../elements/lifeat.png"
import Popup from "./Popup"

export default function Tools() {
  const toolsData = [
    {
      id: "Notion",
      name: "Notion",
      img: Notion,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis voluptas doloribus unde. Aliquam, sunt tempora. Sit autem voluptas, facilis dicta quis libero dolorem aperiam ut numquam aut. Obcaecati, consequuntur?",
    },
    {
      id: "Pomodoro",
      name: "Pomodoro",
      img: Pomodoro,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis voluptas doloribus unde. Aliquam, sunt tempora. Sit autem voluptas, facilis dicta quis libero dolorem aperiam ut numquam aut. Obcaecati, consequuntur?",
    },
    {
      id: "Lifeat",
      name: "Lifeat",
      img: Lifeat,
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
        <div className="materials-header">
          <img src={ToolsHeader} alt="" />
        </div>
        <div className="materials-items">
          {toolsData.map((item, index) => (
            <div className="materials-item" onClick={() => handlePopup(item)}>
              <img className="tool-img" src={item.img} alt={item.name} />
              <caption>{item.name}</caption>
            </div>
          ))}
          <Popup showPopup={showPopup} setShowPopup={setShowPopup} header={header} content={content} />
        </div>
      </div>
    </div>
  )
}
