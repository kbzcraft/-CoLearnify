import { IconCaretDownFilled } from "@tabler/icons-react";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
interface YMD {
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
  month: number;
  setMonth: Dispatch<SetStateAction<number>>;
  setDay: Dispatch<SetStateAction<number>>;
}
const DobSelectList = ({ year, month, setYear, setMonth, setDay }: YMD) => {
  const [totalDays, setTotalDays] = useState(30);
  const dayRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);
  const yearRef = useRef<HTMLSelectElement>(null);
  const months = [
    "January",
    " February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const handleSelect = (ref: React.RefObject<HTMLSelectElement>) => {
    if (ref.current) {
      ref.current.focus();
    }
  };
  const handleYMDChange = (
    value: number,
    setFn: Dispatch<React.SetStateAction<number>>,
  ) => {
    setFn(value);
    console.log(value);
  };
  const validateDays = (year: number, month: number) => {
    if (!(year && month)) return;
    setTotalDays(new Date(year, month, 0).getDate());
  };
  useEffect(() => {
    validateDays(year, month);
  }, [year, month]);
  return (
    <section>
      <strong>Date of birth</strong>
      <div className="flex flex-row gap-2">
        <div className="border border-text p-1 rounded-md w-full">
          <div
            className="flex justify-between"
            onClick={() => {
              handleSelect(yearRef);
            }}
          >
            <p>Year</p>
            <IconCaretDownFilled />
          </div>
          <select
            ref={yearRef}
            className="bg-t w-full outline-t appearance-none"
            onChange={(e) => {
              handleYMDChange(Number(e.target.value), setYear);
            }}
          >
            {Array.from(
              { length: 80 },
              (_, i) => new Date().getFullYear() - i - 10,
            ).map((y) => (
              <option key={"year:" + y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="border border-text p-1 w-full rounded-md">
          <div
            className="flex justify-between"
            onClick={() => {
              handleSelect(monthRef);
            }}
          >
            <p>Month</p>
            <IconCaretDownFilled />
          </div>
          <select
            ref={monthRef}
            className="bg-t w-full outline-t appearance-none"
            onChange={(e) => {
              handleYMDChange(Number(e.target.value), setMonth);
            }}
          >
            {months.map((m, i) => (
              <option key={m} value={i + 1}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className="border border-text p-1 rounded-md w-full">
          <div
            className="flex justify-between"
            onClick={() => {
              handleSelect(dayRef);
            }}
          >
            <p>Day</p>
            <IconCaretDownFilled />
          </div>
          <select
            ref={dayRef}
            className="bg-t w-full outline-t appearance-none"
            onChange={(e) => {
              handleYMDChange(Number(e.target.value), setDay);
            }}
          >
            {Array.from({ length: totalDays }, (_, i) => i + 1).map((d) => (
              <option key={"day:" + d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default DobSelectList;
