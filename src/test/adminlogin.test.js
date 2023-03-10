import { render, screen ,fireEvent} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import AdminLoginForm from '../components/auth/Login';
describe("test admin login form",()=>{
test("test case 1",async()=>{

render(<BrowserRouter><AdminLoginForm/></BrowserRouter>)


const username = screen.getByTestId("usernameTest");
    fireEvent.change(username, { target: { value: "ab" } });
const loginButton = screen.getByTestId('login', { name: 'Login' });
  fireEvent.click(loginButton);
 
  const errorMessage = screen.getByText(
    "user name is less than 3"
  );
  expect(errorMessage).toBeInTheDocument();
  
})

 
  test("shows error message if user name is not entered", () => {
    render(<BrowserRouter><AdminLoginForm/></BrowserRouter>)
    const loginButton = screen.getByTestId("login");
    fireEvent.click(loginButton);
    const errorMessage = screen.getByText("user name is blank");
    expect(errorMessage).toBeInTheDocument();
  });

  

  test('validating username and password', async () =>
{
  render(<BrowserRouter><AdminLoginForm/></BrowserRouter>)
  const username = screen.getByTestId('usernameTest');
  const password = screen.getByTestId('passwordTest');
  const submitButton = screen.getByTestId('login', { name: 'Login' });
  fireEvent.change(username, { target: { value: 'test@example.com' } });
  fireEvent.change(password, { target: { value: 'password123' } });
  fireEvent.click(submitButton);        

 
});
  



});