interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${
        props.disabled ? "cursor-not-allowed opacity-50" : ""
      } w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-customBorderRadius text-lg font-semibold ${className}`}
    >
      {children}
    </button>
  );
}
