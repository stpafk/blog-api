import { useState } from "react";
import Footer from "../UI/Footer";
import Header from "../UI/Header/Header";
import * as Form from "./Style";

export default function LoginForm(props) {

    const [value, setValues] = useState({
        "username": "",
        "password": "",
    });
    const handleSubmit = props.handleSubmit;
    const handleChange = (e) => {
        setValues({
            ...value,
            [e.target.id]: e.target.value
        });
    };

    return (
            <Form.StyledForm onSubmit={handleSubmit}>
                <Form.StyledFormContent id="username">
                    <Form.StyledLabel>Username</Form.StyledLabel>
                    <Form.StyledInput type="text" 
                    id="username"
                    value={value.username} onChange={handleChange}/>
                </Form.StyledFormContent>
                <Form.StyledFormContent id="password">
                    <Form.StyledLabel>Password</Form.StyledLabel>
                    <Form.StyledInput type="password"  
                    id="password"
                    value={value.password}
                    onChange={handleChange} />
                </Form.StyledFormContent>
                <Form.StyledButton type="submit">Submit</Form.StyledButton>
            </Form.StyledForm>          
    )

};