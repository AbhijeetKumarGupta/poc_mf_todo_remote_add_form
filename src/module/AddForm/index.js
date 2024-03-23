import React from 'react';
import { useState } from "react";
import { AddButton, AddFormContainer, ErrorContainer, InputFieldWrapper, TodoInputField } from "./style";

function AddForm(props) {
    const { error, handleAdd } = props
    const [todoTitle, setTodoTitle] = useState("");

    const handleChange = (e) => {
        setTodoTitle(e?.target?.value)
    }

    const handleAddClick = (e) => {
      const newData = {
        userId: new Date().getTime(),
        id: new Date().getTime(),
        title: todoTitle,
        completed: false,
        isDummy: true
      }
      handleAdd(e, newData)
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
  