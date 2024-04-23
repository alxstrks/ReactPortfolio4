import {AiFillGithub, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

export default function Socials() {
  return (
    <div className="flex space-x-8">
            <a
              href="localhost:3000"
              target="_blank"
              rel="noreferrer"
              className="text-subtleText text-4xl rounded-full transition ease-in-out hover:shadow-sm hover:shadow-accent duration-500 hover:text-white"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="localhost:3000"
              target="_blank"
              rel="noreferrer"
              className="text-subtleText text-4xl rounded-full transition ease-in-out hover:shadow-sm hover:shadow-accent duration-500 hover:text-white"
            >
              <AiFillGithub />
            </a>
            <a
              href="localhost:3000"
              target="_blank"
              rel="noreferrer"
              className="text-subtleText text-4xl rounded-full transition ease-in-out hover:shadow-sm hover:shadow-accent duration-500 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="localhost:3000"
              target="_blank"
              rel="noreferrer"
              className="text-subtleText text-4xl rounded-full transition ease-in-out hover:shadow-sm hover:shadow-accent duration-500 hover:text-white"
            >
              <AiFillInstagram />
            </a>
          </div>
  )
}