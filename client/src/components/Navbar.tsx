import Login from "../pages/Login";

function Navbar() {
  return (
    <nav className="w-full bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold">
          TBP
        </h1>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <button className="bg-white text-black px-5 py-2 rounded-full">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;