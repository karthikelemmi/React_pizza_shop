import React from 'react';
import Button from './Button';

export default{
    title:'Button',
    component:Button
};

export const Primary=()=><Button variant='primary'>Add</Button>
export const Secondary=()=><Button variant='secondary'>Explore</Button>
export const Submit=()=><Button variant='submit' type='submit'>Submit</Button>
export const Danger=()=><Button variant='danger'>Danger</Button>
