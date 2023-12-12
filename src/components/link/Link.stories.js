
import React from 'react';
import Link from './Link';
import {linkTo} from "@storybook/addon-links"
import "./Link.css"

export default {
  title: 'Link',
  component: Link,
};

export const Primary=()=><Link variant='secondary' onClick={linkTo('Link','primary')}>Explore</Link>
export const Default = () =><Link variant='primary'>Add</Link>