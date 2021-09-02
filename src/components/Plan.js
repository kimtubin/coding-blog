import planHeader from "../elements/plan-header.png"

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={planHeader} alt="Hello World text and image" />
      </div>
      <div className="about-body">
        <div className="about-nav">
          <ul className="about-nav-items">
            <a href="#daily">
              <li>Daily</li>
            </a>
            <a href="#monthly">
              <li>Monthly</li>
            </a>
          </ul>
        </div>
        <div className="about-content">
          <div id="daily">
            <h2>DAILY</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit expedita ad sunt nam minus aliquam, ex distinctio facilis! Corporis iusto debitis cumque culpa architecto! Nisi dicta accusantium magnam omnis aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit expedita ad sunt nam minus aliquam, ex distinctio facilis! Corporis iusto debitis cumque culpa architecto! Nisi dicta accusantium magnam omnis aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit expedita ad sunt nam minus aliquam, ex distinctio facilis! Corporis iusto debitis cumque culpa architecto! Nisi dicta accusantium magnam omnis aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit expedita ad sunt nam minus aliquam, ex distinctio facilis! Corporis iusto debitis cumque culpa architecto! Nisi dicta accusantium magnam omnis aliquam?</p>
          </div>
          <hr />
          <div id="monthly">
            <h2>MONTHLY</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at non atque! Debitis doloribus aliquid cumque dolor porro suscipit corporis, placeat dolores accusamus saepe iure, perspiciatis ducimus obcaecati tempore laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit expedita ad sunt nam minus aliquam, ex distinctio facilis! Corporis iusto debitis cumque culpa architecto! Nisi dicta accusantium magnam omnis aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit expedita ad sunt nam minus aliquam, ex distinctio facilis! Corporis iusto debitis cumque culpa architecto! Nisi dicta accusantium magnam omnis aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit expedita ad sunt nam minus aliquam, ex distinctio facilis! Corporis iusto debitis cumque culpa architecto! Nisi dicta accusantium magnam omnis aliquam?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
