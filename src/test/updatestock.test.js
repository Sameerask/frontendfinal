import { render,screen ,fireEvent} from "@testing-library/react"
import Update from "../components/updatestock"




describe("case 2",()=>{
    test("test 2",()=>{
        render(<Update/>)
        const id=screen.getByTestId("id")
        const stock=screen.getByTestId("stock")
        const btn=screen.getByTestId("addbtn")

    fireEvent.change(id, "Dolo"  );
    fireEvent.change(stock,  "100" );
    fireEvent.click(btn);

    const message=screen.getByTestId("message")
    expect(message.textContent).toBe(" stock updated");


    }
    )
}
)