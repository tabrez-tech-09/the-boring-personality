import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex items-center justify-center px-6 py-20">
        
        <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-3xl p-10 shadow-2xl">
          
          <h1 className="text-4xl font-bold mb-2 text-center">
            Welcome Back
          </h1>

          <p className="text-gray-400 text-center mb-8">
            Login to continue your journey.
          </p>

          {/* Form */}
          <form className="space-y-6">
            
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-white transition duration-300"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-white transition duration-300"
              />
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Forgot Password?
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-300 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Signup */}
          <p className="text-center text-gray-400 mt-8">
            Don’t have an account?{" "}
            <span className="text-white cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;