interface Props {
  classname?: string;
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const BtnSm: React.FC<Props> = ({ classname, value = "Next", onClick }) => {
  classname =
    "bg-blue min-h-10 w-full @xs:max-w-24 rounded-md  " + " " + classname;
  return (
    <button className={classname} onClick={onClick}>
      {value}
    </button>
  );
};

export default BtnSm;
