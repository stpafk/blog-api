import Footer from "../UI/Footer";
import Header from "../UI/Header/Header";
import * as Form from "./Style";
// Idea: maybe have a parent element that handles login/register
export default function RegisterForm() {

    return (
        <>
            <h1>Register</h1>
            <Form.StyledForm method="POST" action="">
                <Form.StyledFormContent id="username">
                    <Form.StyledLabel>Username</Form.StyledLabel>
                    <Form.StyledInput type="text" id="username" />
                </Form.StyledFormContent>

                <Form.StyledFormContent id="email">
                    <Form.StyledLabel>Email</Form.StyledLabel>
                    <Form.StyledInput type="text" id="email" />
                </Form.StyledFormContent>                    

                <Form.StyledFormContent id="password">
                    <Form.StyledLabel>Password</Form.StyledLabel>
                    <Form.StyledInput type="password" id="password" value="" />
                </Form.StyledFormContent>

                <Form.StyledFormContent id="password_confirm">
                    <Form.StyledLabel>Confirm Password</Form.StyledLabel>
                    <Form.StyledInput type="password" id="password_confirm" value="" />
                </Form.StyledFormContent>

                <Form.StyledButton type="submit">Submit</Form.StyledButton>
            </Form.StyledForm>       
        </>
    )

};