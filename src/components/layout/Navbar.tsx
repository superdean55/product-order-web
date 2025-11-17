import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        ProductOrder
      </div>
      <div className="space-x-4">
        <Link to="/login" className="hover:text-blue-400">Login</Link>
        <Link to="/register" className="hover:text-blue-400">Register</Link>
      </div>
    </nav>
  );
}
