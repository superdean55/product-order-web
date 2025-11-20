type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, className = "", ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`w-full py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}

