import {FiInstagram} from 'react-icons/fi'
import {VscGithubAlt} from 'react-icons/vsc'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div>
      <h1 className="covid">
        {/* COVID19 <span className="country">INDIA</span> */}
        COVID19INDIA
      </h1>

      <p className="tg">we stand with everyone fighting on the front lines</p>
      <div>
        <VscGithubAlt className="icon" />
        <FiInstagram className="icon" />
        <FaTwitter className="icon" />
      </div>
    </div>
  )
}
