import { Link } from "react-router-dom";
import images from '../assets/images.png'

const Header = () => {
  return (
    <header className="w-full flex fixed justify-between bg-gray-100 sm:px-8 px-2 py-2 border-b border-b-[#e6ebf4]">
        <div className="flex justify-start">
          <Link to="/">
            <img
              src="https://appstock.vidzai.com/static/media/sasya_logo.82957723b68c9aa5f1ca.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </Link>
          <span className="self-center text-2xl ml-3 font-semibold whitespace-nowrap text-gray-900">
            Advisory Control Center
          </span>
        </div>

        <div className="flex flex-start">
          <div
            type="button"
            className="flex text-sm bg-gray-300 rounded-full md:me-0 focus:ring-4 focus:ring-gray-600"
          >
            <img
              className="w-8 h-8 rounded-full"
              src={images}
              alt="user photo"
            />
          </div>
          <div className="flex justify-center items-center">
            <span className="text-sm text-gray-700 ml-2 align-middle">
              Admin
            </span>
          </div>
        </div>
      </header>
  )
}

export default Header