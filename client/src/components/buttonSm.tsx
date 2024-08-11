interface Props {
  classname?: string;
  value?: string;
}
const BtnSm: React.FC<Props> = ({ classname, value = "Next" }) => {
  classname =
    "bg-blue min-h-10 w-full @xs:max-w-24 rounded-md  " + " " + classname;
  return <button className={classname}>{value}</button>;
};

export default BtnSm;
