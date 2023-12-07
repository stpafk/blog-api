import styled from 'styled-components';

const StyledForm = styled.form`
    margin: 0 30%;
    display: flex;
    flex-direction: column;
`;

const StyledFormContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
`;

const StyledLabel = styled.label`
    font-weight: 800;
    font-size: 18px;
    padding: 0 0 4px;
`;

const StyledInput = styled.input`
    font-size: 14px;
    padding: 4px;
`;

const StyledButton = styled.button`
    width: 15%;
    padding: 2px;
    font-size: 14px;
    margin: 0 auto;
`;

export {
    StyledForm, 
    StyledFormContent,
    StyledLabel,
    StyledInput,
    StyledButton,
}