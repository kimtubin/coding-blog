import img1 from "../elements/main-img1.svg"
import img2 from "../elements/main-img2.svg"

function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <img src={img1} alt="img1" className=" img img1" />
        <h1>LEARN CODING WITH ME</h1>
        <img src={img2} alt="img2" className="img img2" />
      </div>
      <hr />
      <p>Learning to code is hard, especially for a self-learner. It’s been an incredible five months since I’ve been taken this journey, and I can’t imagine I've made it this far. After all, I want to build this blog to save all the resources, materials and experiences I have been gaining along the way. I hope they can help you guys.</p>
    </div>
  )
}

export default Main
