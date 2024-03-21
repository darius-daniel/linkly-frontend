import { useState } from 'react';
import GradientText from './GradientText';
import InputBar from './InputBar';
import LinkTable from './LinkTable';
import './styles/Main.css';

export default function Main() {
  const [remainder, setRemainder] = useState<number>(9);

  return (
    <section id="main">
      <div className="hero">
        <GradientText text="Shorten Your Looong Links :)" fontSize="60px" />
        <p className="p1 text-lite">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines
          <br /> your online experience
        </p>
        <div className="centered">
          <InputBar />
        </div>
        <p className="p2 text-lite">
          You can create <span className="text-primary-pink">0{remainder}</span>{' '}
          more links. Register now to enjoy unlimited usage.{' '}
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6875 7.75C12.6875 5.72656 11.5938 3.86719 9.84375 2.82812C8.06641 1.81641 5.90625 1.81641 4.15625 2.82812C2.37891 3.86719 1.3125 5.72656 1.3125 7.75C1.3125 9.80078 2.37891 11.6602 4.15625 12.6992C5.90625 13.7109 8.06641 13.7109 9.84375 12.6992C11.5938 11.6602 12.6875 9.80078 12.6875 7.75ZM0 7.75C0 5.26172 1.3125 2.96484 3.5 1.70703C5.66016 0.449219 8.3125 0.449219 10.5 1.70703C12.6602 2.96484 14 5.26172 14 7.75C14 10.2656 12.6602 12.5625 10.5 13.8203C8.3125 15.0781 5.66016 15.0781 3.5 13.8203C1.3125 12.5625 0 10.2656 0 7.75ZM4.62109 5.28906C4.83984 4.66016 5.41406 4.25 6.07031 4.25H7.65625C8.61328 4.25 9.40625 5.04297 9.40625 6C9.40625 6.60156 9.05078 7.17578 8.53125 7.47656L7.65625 7.99609C7.62891 8.35156 7.35547 8.625 7 8.625C6.61719 8.625 6.34375 8.35156 6.34375 7.96875V7.61328C6.34375 7.36719 6.45312 7.14844 6.67188 7.03906L7.875 6.35547C8.01172 6.27344 8.09375 6.13672 8.09375 6C8.09375 5.75391 7.90234 5.58984 7.65625 5.58984H6.07031C5.98828 5.58984 5.90625 5.64453 5.87891 5.72656L5.85156 5.75391C5.74219 6.10938 5.35938 6.27344 5.03125 6.16406C4.67578 6.02734 4.51172 5.64453 4.62109 5.31641V5.28906ZM6.125 10.375C6.125 9.91016 6.50781 9.5 7 9.5C7.46484 9.5 7.875 9.91016 7.875 10.375C7.875 10.8672 7.46484 11.25 7 11.25C6.50781 11.25 6.125 10.8672 6.125 10.375Z"
              fill="#C9CED6"
            />
          </svg>
        </p>
      </div>
      <LinkTable />
    </section>
  );
}
