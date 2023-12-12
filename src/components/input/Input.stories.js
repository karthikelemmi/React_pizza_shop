import React from "react";
import Input from "./input";

export default{
    title: "Input",
    component: Input
}

export const Small=()=> <Input size='small' placeholder='small'></Input>
export const Medium=()=> <Input size='medium' type="text" className="form-control" id="name" placeholder='name'></Input>
export const Large=()=> <Input size='large' placeholder="large" ></Input>