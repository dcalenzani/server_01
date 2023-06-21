import { useEffect, useRef } from 'react';

const Gauge = ({ value, setGaugeValue }) => {
    const gaugeRef = useRef(null);
  
    useEffect(() => {
      const gauge = gaugeRef.current;
  
      const updateGaugeValue = (value) => {
        if (value < 0 || value > 1) {
          return;
        }
  
        gauge.querySelector('.gauge__fill').style.transform = `rotate(${value / 2}turn)`;
        gauge.querySelector('.gauge__data').textContent = `${Math.round(value * 100)}%`;
      };
  
      updateGaugeValue(value);
    }, [value]);

    return (
      <div className='p-10 flex flex-col items-center justify-between'>
        <div ref={gaugeRef} className="gauge w-[100%] max-w-[250px] text-[40px] font-bold">
            <div className="gauge__body w-[100%] h-[0px] pb-[50%] bg-neutral-400 relative rounded-t-full overflow-hidden">
                <div className="gauge__fill absolute top-[100%] left-0 w-full h-[100%] bg-green-800 origin-top rotate-[0.25turn] transition-transform ease-out duration-200"></div>
                <div className="gauge__cover w-3/4 h-[150%] bg-black absolute rounded-full border-r-[50%] top-1/4 left-1/2 translate-x-[-50%]">
                    <div className="gauge__data text-center text-inherit text-green-800 mt-10"/>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Gauge;