import logo from '../assets/kunalChauhanLogo.jpg'
import hackerrank from '../assets/hackerrank.png'
import leetcode from '../assets/leetcode.png'
import codingNinjas from '../assets/CodingNinjas.jpeg'

import { FaLinkedin , FaGithub , FaTwitter , FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Logo" className='w-24 rounded-full'/>
        </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <Link to={`https://www.linkedin.com/in/bhudil-mallick-aa53672a4/`} target="_blank"><FaLinkedin/></Link>
                <Link to={`https://github.com/Bhudil`} target="_blank"><FaGithub/></Link>
                <Link to={`https://leetcode.com/u/bhudil/`} target="_blank"><img src={leetcode} alt="leetcode" className='w-6' /></Link>
            </div>
    </nav>
  )
}
export default NavBar