import React from "react";
import Image from "./Image";
import logo from "../../assets/pizzaLogo.png"
import largeImage from "../../assets/pizza.jpeg"
import verticalimage from "../../assets/panpizza.jpg"
import horizontalimage from "../../assets/pizza5.jpg"
import './Image.css';

export default{
    title: "Image",
    component: Image
}

export const LogoImage=()=> <Image variant='logo'>
    <img src={logo} alt='pizza-logo-image' className="img-fluid"/>
</Image>

export const LargeImage=()=> <Image variant='largeimage'>
    <img src={largeImage} alt='pizza-large-image'/>
</Image>

export const VerticalImage=()=> <Image variant='verticalimage'>
    <img src={verticalimage} alt='pizza-vertical-image' className="card-img-top"/>
</Image>

export const HorizontalImage=()=> <Image variant='horizontalimage'>
    <img src={horizontalimage} alt='pizza-horizontal-image' className="hi"/>
</Image>