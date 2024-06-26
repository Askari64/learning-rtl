import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
import React from "react";

//grouped all tests in describe block
describe('Greet Tests',()=> {
    test("render correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
      });
      
      test("render Greet Without case sensitivity", () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
      });
      
      describe('Nested Describe Block',()=> {
        test("render Greet with prop", () => {
            render(<Greet name={"Askari"} />);
            const textElement = screen.getByText("Hello Askari");
            expect(textElement).toBeInTheDocument();
          });
      })
      
      
})


/*This will run ONLY this test in this file
test.only('render Greet with prop', () => { 
    render(<Greet name={'Askari'}/>)
    const textElement = screen.getByText('Hello Askari')
    expect(textElement).toBeInTheDocument()
})
*/

/* This will skip this test
test.skip('render Greet with prop', () => { 
    render(<Greet name={'Askari'}/>)
    const textElement = screen.getByText('Hello Askari')
    expect(textElement).toBeInTheDocument()
})
*/
