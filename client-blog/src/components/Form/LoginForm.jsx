import Footer from "../UI/Footer";
import Header from "../UI/Header/Header";
import * as Form from "./Style";

export default function LoginForm() {

    return (
        <>
            <Form.StyledForm method="POST" action="">
                <Form.StyledFormContent id="username">
                    <Form.StyledLabel>Username</Form.StyledLabel>
                    <Form.StyledInput type="text" id="username" />
                </Form.StyledFormContent>
                <Form.StyledFormContent id="password">
                    <Form.StyledLabel>Password</Form.StyledLabel>
                    <Form.StyledInput type="password" id="password" value="" />
                </Form.StyledFormContent>
                <Form.StyledButton type="submit">Submit</Form.StyledButton>
            </Form.StyledForm>          
        </>
    )

};