import AddMed from "../components/addmed"
import { render,screen ,fireEvent} from "@testing-library/react"




describe("case 2",()=>{
    test("test 2",()=>{
        render(<AddMed/>)
        const name=screen.getByTestId("name")
        const description=screen.getByTestId("description")
        const stock=screen.getByTestId("stock")
        const price=screen.getByTestId("price")
        const minimum_stock=screen.getByTestId("minimum_stock")
        const btn=screen.getByTestId("addbtn")

        fireEvent.change(name, "Dolo");
        fireEvent.change(description,"Fever");
        fireEvent.change(stock,  "42");
        fireEvent.change(price,  "7");
        fireEvent.change(minimum_stock, "50" );
        fireEvent.click(btn);

    const message=screen.getByTestId("message")
    expect(message.textContent).toBe(" medicine added");


    }
    )
}
)