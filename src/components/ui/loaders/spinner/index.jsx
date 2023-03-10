import React, { useEffect } from "react";
import { Spin, Wrapper } from "./style";

const Spinner = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <Wrapper>
      <Spin>
        <svg
          class='pl'
          viewBox='0 0 128 128'
          width='128px'
          height='128px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='pl-grad' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='hsl(57, 100%, 54%)'></stop>
              <stop offset='100%' stopColor='hsl(0, 93%, 60%)'></stop>
            </linearGradient>
          </defs>
          <circle
            class='pl__ring'
            r='56'
            cx='64'
            cy='64'
            fill='none'
            stroke='hsla(0,10%,10%,0.1)'
            strokeWidth='16'
            strokeLinecap='round'
          ></circle>
          <path
            class='pl__worm'
            d='M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z'
            fill='none'
            stroke='url(#pl-grad)'
            strokeWidth='16'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeDasharray='44 1111'
            strokeDashoffset='10'
          ></path>
        </svg>
      </Spin>
    </Wrapper>
  );
};

export default Spinner;
