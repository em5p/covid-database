import React, {useState } from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext, DataTable } from 'grommet';
import {
  CheckBox,
  DateInput,
  Form,
  FormField,
  MaskedInput,
  Meter,
  RadioButtonGroup,
  RangeInput,
  Select,
  Text,
  TextArea,
  TextInput,
} from 'grommet';

// Aggregate Test View
const HomeTester = (props) => {


  const [value, setValue] = React.useState({});

  // Hard Coding Options

  return (
    <Box 
      direction='row'
      align="center" 
      alignContent="center" 
      justify="center"
      overflow={{ horizontal: 'hidden' }}>

      
      <Box
        direction='column'
        align="center" 
        alignContent="center" 
        justify="center"
        overflow={{ horizontal: 'hidden' }}>
        
        <Button 
        label="Change Testing Site" 
        margin="large"
        onClick={() => {}} />

        <Button 
        label="View Appointments" 
        margin="large"
        onClick={() => {}} />

        <Button 
        label="Create Appointments" 
        margin="large"
        onClick={() => {}} />
        
      </Box>
      
      <Box
        direction='column'
        align="center" 
        alignContent="center" 
        justify="center"
        overflow={{ horizontal: 'hidden' }}>

        <Button 
        label="View Aggregate Results" 
        margin="large"
        onClick={() => {}} />
        
        <Button 
        label="View Daily Results" 
        margin="large"
        onClick={() => {}} />
      </Box>
    </Box>
  );
}

export default HomeTester;