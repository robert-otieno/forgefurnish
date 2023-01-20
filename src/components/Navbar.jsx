const Navbar = () => {
    return (
      <nav className="absolute top-0 left-0 w-full p-12 flex z-10 justify-between items-center">
        <div className="">
          <a className="" href="">
            <img className="" src="https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/logo.png" alt="Logo" />
          </a>
        </div>
        <nav className="">
          <ul className="text-sm flex gap-10 uppercase font-medium font-poppins tracking-widest transition-all duration-150 ease-in-out">
            <li className=""><a href="" className="hover:border-b border-gray-900 border"><span>Home</span></a></li>
            <li className=""><a href="" className=""><span>About</span></a></li>
            <li className=""><a href="" className=""><span>Products</span></a></li>
            <li className=""><a href="" className=""><span>Contact</span></a></li>
          </ul>
        </nav>
        <div></div>
      </nav>
    )
  }
  
  export default Navbar