import React from "react";
import { styled } from '@mui/material/styles';


interface PropsType {
  children: React.ReactNode;
  onSubmit: (event: React.SyntheticEvent) => void;
}

const CustomForm = styled('form')(({ theme }) => ({
  minWidth: "350px"
}));


const FormLayout: React.FC<PropsType> = ({ children, onSubmit }) => {

  return (
    <CustomForm onSubmit={onSubmit}>
      {children}
    </CustomForm>
    
  );
};

export default FormLayout;