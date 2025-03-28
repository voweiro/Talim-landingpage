export default function Footer() {
    return (
      <footer className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
          {/* Left Section */}
          <div className="bg-[#003366] text-white p-8 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold">Bringing Africa’s Education Online</h2>
            <p className="mt-2 text-sm">
              We help West African schools manage classes, follow curriculum, and keep parents updated.
            </p>
            <a href="#" className="inline-block mt-4 text-white font-medium">
              Get Started →
            </a>
          </div>
  
          {/* Right Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-gray-800 w-full md:w-auto">
            {/* Product Links */}
            <div>
              <h4 className="text-sm font-bold text-[#003366]">Product</h4>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Watch Demo</a></li>
              </ul>
            </div>
  
            {/* Community Links */}
            <div>
              <h4 className="text-sm font-bold text-[#003366]">Community</h4>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Help Center</a></li>
              </ul>
            </div>
  
            {/* Logo */}
            <div className="flex flex-col items-start md:items-end">
              <div className="flex items-center space-x-2">
                <div className="bg-[#003366] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-6-6l6 6 6-6M6 9l6-6 6 6" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-[#003366]">Talim</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
          <p className="mt-4 md:mt-0">© 2025 TALIM</p>
        </div>
      </footer>
    );
  }
  