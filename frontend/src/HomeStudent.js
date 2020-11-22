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
class HomeStudent extends React.Component {

  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);

  }

  onPageChange() {
    this.props.onPageChange('Home');
  }

  // Hard Coding Options

  render() {
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
          label="View My Results" 
          margin="large"
          onClick={() => {this.props.onPageChange('My Results')}} />

          <Button 
          label="Sign up For a Test" 
          margin="large"
          onClick={() => {this.props.onPageChange('Sign Up')}} />
          
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
          onClick={() => {this.props.onPageChange('Aggregate Results')}} />
          
          <Button 
          label="View Daily Results" 
          margin="large"
          onClick={() => {this.props.onPageChange('Daily Results')}} />
        </Box>
      </Box>
    );
  }
  
}

export default HomeStudent;