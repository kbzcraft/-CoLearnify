interface Props {
  classname?: string;
  value?: string;
  onClickFn?: VoidFunction;
}
const BtnSm: React.FC<Props> = ({
  classname,
  value = "Next",
  onClickFn = () => {
    console.log("sup wolf");
  },
}) => {
  classname =
    "bg-blue min-h-10 w-full @xs:max-w-24 rounded-md  " + " " + classname;
  return (
    <button className={classname} onClick={onClickFn}>
      {value}
    </button>
  );
};

export default BtnSm;
