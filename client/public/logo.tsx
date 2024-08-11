interface classname {
  classname?: string;
}

const CoLearnify: React.FC<classname> = ({
  classname = "max-w-14 h-28 sm:max-w-52 sm:h-96",
}) => {
  return (
    <svg
      className={classname}
      viewBox="0 0 317 569"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M316.501 510.984C-315.998 764.984 399.502 -77.5156 289.502 6.98438C179.502 91.4843 -315.998 764.984 316.501 510.984Z"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export default CoLearnify;
