import React from "react";
import { render } from "@testing-library/react";
import Homepage from "./Homepage";

describe("Homepage",()=>
{
    it("pizza shop renders text properly",()=>{
        const {getByTestId}=render(<Homepage/>);
        const result= getByTestId("pizza-shop-home");
        expect(result).toBeInTheDocument();
    });

    // this will return a element that has given alttext
    it("pizza shop renders image properly",()=>{
        const {getByAltText}=render(<Homepage/>);
        const resultimg= getByAltText('pizza-logo-image');
        expect(resultimg.src).toContain("http://localhost/pizzaLogo.png")
        expect(resultimg).toBeInTheDocument();
    })

    //check for input field
    it("pizza shop name input field render properly", ()=>
    {
        const {getByPlaceholderText}=render(<Homepage/>);
        const resultname= getByPlaceholderText("name");
        expect(resultname).toBeInTheDocument();
    })

    it("pizza shop email input field render properly", ()=>
    {
        const {getByPlaceholderText}=render(<Homepage/>);
        const resultemail= getByPlaceholderText("email");
        expect(resultemail).toBeInTheDocument();
    })

    it("pizza shop message input field render properly", ()=>
    {
        const {getByPlaceholderText}=render(<Homepage/>);
        const resultmessage= getByPlaceholderText("message");
        expect(resultmessage).toBeInTheDocument();
    })

    it("pizza shop submit render properly", ()=>
    {
        const {getByRole}=render(<Homepage/>);
        const resultsubmit= getByRole('button', { name: 'Submit' });
        expect(resultsubmit).toBeInTheDocument();
    })
})