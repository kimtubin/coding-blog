export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-item contact">
          <h2>CONTACT</h2>
          <p>kimtubin@gmail.com</p>
        </div>
        <div className="footer-item follow">
          <h2>FOLLOW ME</h2>
          <a href="#" target="_blank">
            Instagram
          </a>
        </div>
        <div className="footer-item support">
          <h2>SUPPORT ME</h2>
          <a href="#" target="_blank">
            Etsy
          </a>
          <a href="#" target="_blank">
            Fiverr
          </a>
          <a href="#" target="_blank">
            Website
          </a>
        </div>
        <div className="footer-item buy">
          <h2>BUY ME A COFFEE</h2>
          <a href="#" target="_blank">
            <div className="btn">BUY</div>
          </a>
        </div>
      </div>
    </div>
  )
}
