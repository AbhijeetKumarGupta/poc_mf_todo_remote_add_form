import styled from "styled-components";

export const AddFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    color: white;
    gap: 15px;
`

export const InputFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const TodoInputField = styled.input`
    padding: 10px;
    width: 50%;
`

export const ErrorContainer = styled.span`
    color: red;
`

export const AddButton = styled.button`
    text-align: center;
    padding: 10px;
    background-color: rgba(144, 238, 144, 0.6) ;
    border: 2px solid white;
    margin-left: 5px;
    width: 10%;
    min-width: 70px;
    cursor: pointer;
    border-radius: 5px;
    color: white;
`