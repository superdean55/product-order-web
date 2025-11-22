import React from 'react';
import { ROUTE_PATHS } from '../router/routes';
import { Link } from 'react-router-dom';

export const UnauthorizedPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-xl dark:bg-gray-800 max-w-md w-full">      
        <div className="text-red-500 mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-16 h-16" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-red-600 dark:text-red-400 mb-2">
          403
        </h1>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Pristup Zabranjen (Unauthorized)
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Žao nam je, nemate potrebne dozvole (ulogu) za pristup ovoj stranici. Molimo kontaktirajte administratora sustava.
        </p>
        <Link
          to={ROUTE_PATHS.HOME}
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out shadow-md"
        >
          Povratak na Početnu Stranicu
        </Link>
        
      </div>
    </div>
  );
};