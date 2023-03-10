import{render,waitfor,screen,fireEvent,getByText,findByText,findAllByTestId,findByTestId,getByTestId,findAll} from '@testing-library/react';
import React from 'react';
import Reorder from '../components/reorder';
import { Button } from '@mui/material';
describe("test place order form",()=>{
    test("test case 1", async()=>{
    render(
    <Reorder />
    )
    //  const medicinename=screen.getByTestId("medicinename")
    const quantity=screen.getByTestId("quantity")
     //const reorderplace =screen.getByTestId("Reorderplaced")
    //  fireEvent.change(medicinename,"Dolo")
      fireEvent.change(quantity,45)
      //fireEvent.click(reorderplace)
        const message=screen.getByTestId("res");
         expect(message).toBeInTheDocument
         }
         )
        }
        )