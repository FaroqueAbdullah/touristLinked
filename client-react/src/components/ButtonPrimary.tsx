interface ButtonPrimaryProps {
  text: string;
  onClick?: () => void;
  type?: string;
}

function ButtonPrimary({ text, onClick, type }: ButtonPrimaryProps): React.ReactElement {
  return (
    <button
      onClick={onClick}
      className="border-solid border-2 border-green-primary text-dark-primary font-bold hover:shadow-2xl hover:bg-green-primary hover:text-white-primary rounded-lg mt-5 mb-5 p-1 w-full"
      type="submit"
    >
      {text}
    </button>
  );
}

export default ButtonPrimary;
