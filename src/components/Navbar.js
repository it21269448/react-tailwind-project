import logo from '../assets/Logo.png'; 

function Navbar() {
  return (
    <nav className="flex justify-between items-center h-16 px-10 bg-bluish-purple text-white">
      <img src={logo} alt="AT Digital" className="h-8" />
     
      <div className="space-x-4">
        {}
        <a href="/services">SERVICES</a>
        <a href="/about">ABOUT US</a>
        <a href="/contact">CONTACT US</a>
        <a href="/careers">CAREERS</a>
      </div>
    </nav>
  );
}

export default Navbar;
