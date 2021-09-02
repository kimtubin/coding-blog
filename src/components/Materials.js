import React from "react"
import { useState } from "react"
import MaterialsHeader from "../elements/materials-header.png"
import Freecodecamp from "../elements/freecodecamp.png"
import Educative from "../elements/educative.jpg"
import Codeacademy from "../elements/codeacademy.png"
import CodeWithMosh from "../elements/codewithmosh.jpg"
import Scrimba from "../elements/scrimba.png"
import Udemy from "../elements/udemy.png"
import Popup from "./Popup"

export default function Materials() {
  const materialsData = [
    {
      id: "Freecodecamp",
      name: "Freecodecamp",
      img: Freecodecamp,
      content: "FreeCodeCamp offers potential students a combination of two methods: a coding bootcamp and self-learning. This unique resource has become increasingly popular. freeCodeCamp members have gone on to work at companies like Google, Spotify, and Apple. As the name implies, this resource is completely free. Let’s see how it stacks up against other learning methods and find out if freeCodeCamp is right for you.",
    },
    {
      id: "Educative",
      name: "Educative",
      img: Educative,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis voluptas doloribus unde. Aliquam, sunt tempora. Sit autem voluptas, facilis dicta quis libero dolorem aperiam ut numquam aut. Obcaecati, consequuntur?",
    },
    {
      id: "Codeacademy",
      name: "Codeacademy",
      img: Codeacademy,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis voluptas doloribus unde. Aliquam, sunt tempora. Sit autem voluptas, facilis dicta quis libero dolorem aperiam ut numquam aut. Obcaecati, consequuntur?",
    },
    {
      id: "Mosh",
      name: "Code With Mosh",
      img: CodeWithMosh,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis voluptas doloribus unde. Aliquam, sunt tempora. Sit autem voluptas, facilis dicta quis libero dolorem aperiam ut numquam aut. Obcaecati, consequuntur?",
    },
    {
      id: "Scrimba",
      name: "Scrimba",
      img: Scrimba,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis voluptas doloribus unde. Aliquam, sunt tempora. Sit autem voluptas, facilis dicta quis libero dolorem aperiam ut numquam aut. Obcaecati, consequuntur?",
    },
    {
      id: "Udemy",
      name: "Udemy",
      img: Udemy,
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
          <img src={MaterialsHeader} alt="" />
        </div>
        <div className="materials-items">
          {materialsData.map((item, index) => (
            <div className="materials-item" onClick={() => handlePopup(item)}>
              <img src={item.img} alt={item.name} />
              <caption>{item.name}</caption>
            </div>
          ))}
          <Popup showPopup={showPopup} setShowPopup={setShowPopup} header={header} content={content} />
        </div>
      </div>
    </div>
  )
}
