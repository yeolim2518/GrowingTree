import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="center">
        <div>
          <div className="logo">
            <img src="/images/main/20241012_임시로고.png" />
          </div>
          <div className="info">
            <div>
              <span className="title">Company.</span><span>Kor-reno & painting</span>
            </div>
            <div>
              <div>
                <span className="title">president.</span><span>David Kim</span>
              </div>
              <div>
                <span className="title">Business Number.</span><span>111-22-33333</span>
              </div>
            </div>
            <div>
              <div>
                <span className="title">TEL.</span><span>647-453-2542</span>
              </div>
              {/* <div>
                <span className="title">FAX.</span><span>031-624-0824</span>
              </div> */}
              <div>
                <span className="title">E-Mail.</span><span>dkpainting25@gmail.com</span>
              </div>
            </div>
            <div>
              <span className="title">주소.</span><span>68 wedgewood dr. North york. ON. Canada</span>
            </div>
          </div>
          <div className="customer">
            <div>Customer Service</div>
            <div>
              <span>Reference Number</span>
              <span>647-453-2542</span>
            </div>
            <div>
              <span>Business Hours</span>
              <span>09:30~18:00(Mon to Fri)</span>
            </div>
          </div>
        </div>

        <div>
          <span>COPYRIGHT © 2024 Kor-reno & painting ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
