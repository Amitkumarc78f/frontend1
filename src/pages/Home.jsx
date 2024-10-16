import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-screen">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Court Booking App</h1>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Call to Action */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Book your favorite courts easily</h2>
            <p className="text-gray-700 mb-6">
              Sign in or create an account to start booking courts near you.
            </p>
            <div className="space-x-4">
              <Link
                to="/signin"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div className="container mx-auto text-center bg-white shadow-md rounded-lg p-8 max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">About Us</h3>
            <p className="text-gray-600 mb-4">
            Our court booking app provides users with a hassle-free way to reserve sports courts, such as tennis,
             badminton, basketball, and more, across various cities. With a user-friendly interface, it offers quick access to available courts, secure booking, and flexible payment options for a smooth booking experience.
            </p>
           
          </div>
        </div>
      </main>

      
    </div>
  );
}

export default Home;
