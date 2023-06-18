type ButtonProps = {
  loading?: boolean;
  onClick?: () => void;
  text?: string;
};

const Button = ({ loading = false, onClick, text = "Click" }: ButtonProps) => {
  return (
    <button
      className={loading ? "btn btn-loading" : "btn"}
      disabled={loading}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { Button };
