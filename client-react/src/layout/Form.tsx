import React, { useState } from "react";
import { FormControl, FormLabel } from '@mui/material';

interface MyComponentProps {
  children: React.ReactNode;
}


const FormLayout: React.FC<MyComponentProps> = ({ children }) => {

  return (
    <FormControl>
      <FormLabel>Sign In</FormLabel>
      {children}
    </FormControl>
  );
};

export default FormLayout;