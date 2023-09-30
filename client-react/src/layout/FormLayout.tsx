import React from "react";
import styled from "@emotion/styled";


interface PropsType {
  children: React.ReactNode;
  onSubmit: () => void;
}

const CustomForm = styled.form`
  min-width: 350px
`


const FormLayout: React.FC<PropsType> = ({ children, onSubmit }) => {

  return (
    <CustomForm onSubmit={onSubmit}>
      {children}
    </CustomForm>
    
  );
};

export default FormLayout;