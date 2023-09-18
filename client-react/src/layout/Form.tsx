import React, { useState } from "react";
import { FormControl, FormLabel } from '@mui/material';

interface Props {
  children: React.ReactNode;
  name: string;
  onSubmit: () => void;
}


const FormLayout: React.FC<Props> = ({ children, name, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>{ name }</FormLabel>
        {children}
      </FormControl>
    </form>
    
  );
};

export default FormLayout;