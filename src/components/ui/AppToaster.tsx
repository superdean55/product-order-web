import { Toaster } from 'react-hot-toast';

export const AppToaster = () => {
  return (
    <Toaster 
      position="bottom-center" 
      containerStyle={{
        marginTop: '20px', 
      }}
      toastOptions={{
        duration: 3000,
        style: {
          padding: '16px',
          borderRadius: '8px',
          background: '#1F2937', 
          color: '#F9FAFB',   
        },
        success: {
          duration: 2500,
          style: {
            background: '#10B981',
          },
        },
        error: {
          duration: 4000,
          style: {
            background: '#EF4444',
          },
        },
      }}
    />
  );
};