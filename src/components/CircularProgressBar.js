import React from 'react';
import './componentsStyles/CircularProgressBar.css'; 
import { useTheme } from '../context/ThemeContext';

const CircularProgressBar = ({ percentage }) => {
    const { theme } = useTheme();
    const radius = 50; 
    const stroke = 10; 
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
    return (
      <div className="circular-progress">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#e6e6e6" 
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
          strokeLinecap='round'
            stroke="#FFBB1A" 
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={circumference + ' ' + circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
          />
          <text 
            x="50%" 
            y="50%" 
            alignmentBaseline="middle" 
            textAnchor="middle" 
            fontSize="15" 
            fill={theme=="dark"?"#fff":"#000"}
            fontWeight="500"
            fontFamily="'Sora', sans-serif"
          >
            {percentage}%
          </text>
        </svg>
      </div>
    );
  };
  
  export default CircularProgressBar;