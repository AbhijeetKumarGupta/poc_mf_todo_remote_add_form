import React from 'react';
import { useState } from "react";
import { AddButton, AddFormContainer, ErrorContainer, InputFieldWrapper, TodoInputField } from "./style";

function AddForm(props) {
    const { handleAdd } = props
    const [todoTitle, setTodoTitle] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setTodoTitle(e?.target?.value)
    }

    const handleAddClick = (e) => {
      handleAdd(e, todoTitle)
      setTodoTitle("")
    }

    return (
      <AddFormContainer onSubmit={()=>{}}>
          <h3>Add todo form</h3>
          <InputFieldWrapper>
            <TodoInputField
              type="text"
              value={todoTitle}
              placeholder="Enter Text Here"
              onChange={handleChange}
            />
            {
              error && 
              <ErrorContainer>
                {error}
              </ErrorContainer>
            }
          </InputFieldWrapper>
          <AddButton 
            onClick={handleAddClick}
          >
            Add
          </AddButton>
      </AddFormContainer>
    );
  }
  
  export default AddForm;
  