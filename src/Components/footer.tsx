import { FaShoppingCart, FaQuestionCircle, FaTruck, FaPhoneAlt, FaBlog, FaUsers } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-800">
          {/* Shop Column */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 flex items-center">
              <FaShoppingCart className="mr-2 text-gray-600 text-xl" />
              Shop
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaShoppingCart className="mr-2 text-gray-600" />
                <a href="#" className="hover:underline text-gray-700">Men</a>
              </li>
              <li className="flex items-center">
                <FaShoppingCart className="mr-2 text-gray-600" />
                <a href="#" className="hover:underline text-gray-700">Women</a>
              </li>
              <li className="flex items-center">
                <FaShoppingCart className="mr-2 text-gray-600" />
                <a href="#" className="hover:underline text-gray-700">Accessories</a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 flex items-center">
              <FaQuestionCircle className="mr-2 text-gray-600 text-xl" />
              Support
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaQuestionCircle className="mr-2 text-gray-600" />
                <a href="#" className="hover:underline text-gray-700">FAQs</a>
              </li>
              <li className="flex items-center">
                <FaTruck className="mr-2 text-gray-600" />
                <a href="#" className="hover:underline text-gray-700">Delivery</a>
              </li>
              <li className="flex items-center">
                <FaTruck className="mr-2 text-gray-600" />
                <a href="#" className="hover:underline text-gray-700">Warranty</a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-gray-600" />
                <a href="#" className="hover:underline text-gray-700">Contact</a>
              </li>
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 flex items-center">
              <FaUsers className="mr-2 text-gray-600 text-xl" />
              About Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaBlog className="mr-2 text-gray-600" />
                <a href="#" className="hover:underline text-gray-700">Stories</a>
              </li>
              <li className="flex items-center">
                <FaBlog className="mr-2 text-gray-600" />
                <a href="#" className="hover:underline text-gray-700">Blogs</a>
              </li>
              <li className="flex items-center">
                <FaUsers className="mr-2 text-gray-600" />
                <a href="#" className="hover:underline text-gray-700">Community</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-center text-gray-600">
          <p className="text-sm sm:text-base">
            &copy; 2024 WinterCollection. All rights reserved.
          </p>
          <div className="mt-4">
            <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-500 flex items-center justify-center space-x-2">
              <HiOutlinePhone className="text-xl" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
