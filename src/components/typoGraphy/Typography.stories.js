import React from 'react';
import Typography from './Typograpghy';
import './Typography.css'; 


export default {
  title: 'Typography',
  component: Typography,
};

export const LeftAligned = () => (
  <Typography align="left">
    <div className="headline">Pedro's Pizaa</div>
    <div className="eyebrow">Cheesy outside soft inside </div>
    <div className="body">People's favourite pizza since 1995</div>
  </Typography>
);

export const CenterAligned = () => (
  <Typography align="center">
    <div className="headline">Make your own pizza</div>
    <div className="eyebrow">Any size Any toppings</div>
    <div className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit,adipiscing elit, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
  </Typography>
);

export const RightAligned = () => (
  <Typography align="right">
    <div className="headline">Right Aligned Headline</div>
    <div className="eyebrow">Right Aligned Eyebrow</div>
    <div className="body">Right Aligned Body Text</div>
  </Typography>
);