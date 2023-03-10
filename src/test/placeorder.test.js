import {render,waitfor,screen,fireEvent,getByText,findByText,findAllByTestId,findByTestId,getByTestId,findAll} from '@testing-library/react';
import React from 'react';
import PlaceOrderForm from '../components/placeorder';
import { Button } from '@mui/material';
describe("test place order form",()=>{
    test("test case 1", async()=>{
    render(
    <PlaceOrderForm />
    )
    //const medicinename=screen.getByTestId("medicinename")
    const quantity=screen.getByTestId("quantity")
     const orderplace =screen.getByTestId("Orderplaced")
    // fireEvent.change(medicinename,"Dolo")
      fireEvent.change(quantity,42)
       fireEvent.click(orderplace)
        const message=screen.getByTestId("res");
         expect(message).toBeInTheDocument
         }
         )
        }
        )

