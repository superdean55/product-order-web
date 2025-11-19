type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
    >
      {children}
    </button>
  );
}
