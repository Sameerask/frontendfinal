import {render,waitfor,screen,fireEvent,getByText,findByText,findAllByTestId,findByTestId,getByTestId,findAll} from '@testing-library/react';
import React from 'react';
import PayyForm from '../components/payment';
import { Button } from '@mui/material';
describe("test Payment form",()=>{
    test("test case 1", async()=>{
    render(
    <PayyForm />
    )
    const orderid=screen.getByTestId("orderid")
    const amount=screen.getByTestId("amount")
    const method=screen.getByTestId("method")
     const pay =screen.getByTestId("pay")
     fireEvent.change(orderid,1)
      fireEvent.change(amount,15)
      fireEvent.change(method,"cash on delivery")
       fireEvent.click(pay)
       const message=screen.getByTestId("res");
         expect(message).toBeInTheDocument
         }
         )
        }
        )

