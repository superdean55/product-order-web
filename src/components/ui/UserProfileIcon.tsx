import React from 'react';
import { User } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../../router/routes';
import { useAuthStore } from '../../store/auth.store';

export const UserProfileIcon: React.FC = () => {
  const navigate = useNavigate();
  const imageUrl = useAuthStore((state) => state.user?.imageUrl || null);

  const handleProfileClick = () => {
    navigate(ROUTE_PATHS.PROFILE);
  };

  return (
    <button
      onClick={handleProfileClick}
      className="
        p-0.5 rounded-full border-2 border-gray-600 dark:border-gray-500 
        shadow-lg transition duration-150 ease-in-out 
        hover:border-gray-700 dark:hover:border-gray-300
        focus:outline-none focus:ring-2 focus:ring-gray-300
        w-10 h-10 overflow-hidden flex items-center justify-center
      "
      aria-label="Idi na profil korisnika"
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Korisnička slika"
          className="w-full h-full object-cover rounded-full"
        />
      ) : ( 
        <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
          <User className="w-5 h-5" />
        </div>
      )}
    </button>
  );
};