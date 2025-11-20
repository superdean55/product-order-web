export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
