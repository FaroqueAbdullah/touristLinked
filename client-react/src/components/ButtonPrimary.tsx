interface ButtonPrimaryProps {
  text: string;
  onClick?: () => void;
}

function ButtonPrimary({ text, onClick }: ButtonPrimaryProps) {
  return (
    <button
      onClick={onClick}
      className="border-solid border-2 border-green-primary text-dark-primary font-bold hover:shadow-2xl hover:bg-green-primary hover:text-white-primary rounded-lg mt-5 mb-5 p-1 w-full"
    >
      {text}
    </button>
  );
}

export default ButtonPrimary;
