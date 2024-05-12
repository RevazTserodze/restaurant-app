type buttonProps = {
  buttons: string;
  filter: (category: string) => void;
};

const StoreButtons = ({ buttons, filter }: buttonProps) => {
  return (
    <button
      style={{ fontFamily: "serif" }}
      onClick={() => filter(buttons)}
      className="btn btn-success w-100"
    >
      {buttons}
    </button>
  );
};

export default StoreButtons;
