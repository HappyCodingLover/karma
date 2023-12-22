import { useState, useEffect, useRef } from "react";
import { Typography } from "../typography"
import { ArrowDownChevronIcon } from "../../assets/svgs";
import { twMerge } from "tailwind-merge";

const useOutsideAlerter = (ref, onClickOutside) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref]);
};

export const Dropdown = ({ ticker, tickerArr=[], onSelect }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    setOpenDropdown(false);
  });

  return (
    <div className="relative cursor-pointer w-full min-w-[200px]" ref={wrapperRef} onClick={() => setOpenDropdown(!openDropdown)}>
      <div className=" flex justify-center items-center gap-3">
        <Typography className="text-white text-[24px] xl:text-[40px]" variant="paragraph-medium">{ticker?.network}</Typography>
        <ArrowDownChevronIcon
              className={twMerge('transition-transform transform', openDropdown ? 'rotate-180' : '')}
            />
      </div>
      <div
        className={twMerge(
          'absolute w-full bg-[#333] max-h-[300px] shadow overflow-auto cursor-pointer pt-3.5 pb-2.5 px-0 rounded-[0_0_10px_10px] top-9 transition-all transform origin-top opacity-0 scale-95 pointer-events-none',
          openDropdown ? 'opacity-100 scale-100 pointer-events-auto' : ''
        )}
      >
        {tickerArr.map((item, i) => (
          <div
            className={twMerge(
              'bg-tertiary-bg px-4 py-3 hover:bg-midnight-blue-lighter/10 flex items-center justify-center transition-all duration-300 translate-y-[-1rem] opacity-0',
              openDropdown ? 'translate-y-0 opacity-100' : ''
            )}
            key={i}
            onClick={() => {
              onSelect(item);
              setOpenDropdown(false);
            }}
            style={tickerArr.length <= 10 ? { transitionDelay: `${i * 0.05}s` } : {}}
          >
            <Typography
              className="text-white text-[18px] xl:text-[32px]" variant="paragraph-medium"
            >
              {item?.network}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}