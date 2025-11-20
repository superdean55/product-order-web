import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <Navbar />
      <main className="px-6 flex-1 bg-gray-100 dark:bg-gray-800">
        <Outlet />
      </main>
    </div>
  );
}
