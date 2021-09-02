import React from "react"
import { useRef } from "react"
import ClearIcon from "@material-ui/icons/Clear"

export default function Popup(props) {
  const popupRef = useRef()

  const handleClose = (event) => {
    if (!popupRef.current.contains(event.target)) {
      props.setShowPopup(false)
    }
  }

  const visual = (
    <div className="popup-container" onClick={handleClose}>
      <div ref={popupRef} className="popup">
        <div className="popup-header">
          <h2>{props.header}</h2>
          <ClearIcon onClick={() => props.setShowPopup((pre) => !pre)} />
        </div>
        <p>{props.content}</p>
      </div>
    </div>
  )

  return <div>{props.showPopup ? visual : null}</div>
}
