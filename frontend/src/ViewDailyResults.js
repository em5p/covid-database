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
class ViewMyResults extends React.Component  {
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);

  }

  onPageChange() {
    this.props.onPageChange('Home');
  }

  render() {
    const columns = [
    {
      property: 'date',
      header: <Text>Date</Text>,
      primary: true,
    },
    {
      property: 'tests_processed',
      header: 'Tests Processed',
    },
    {
      property: 'positive_count',
      header: 'Positive Count',
    },
    {
      property: 'positive_percent',
      header: 'Positive Percent',
    }];

  const SAMPLE_DATA = [
    { date: '9/1/20', tests_processed: 100, positive_count: 5, positive_percent: 5.00},
    { date: '9/2/20', tests_processed: 200, positive_count: 10, positive_percent: 5.00},
    { date: '9/3/20', tests_processed: 100, positive_count: 10, positive_percent: 10.00},
    { date: '9/7/20', tests_processed: 400, positive_count: 20, positive_percent: 5.00},
    { date: '9/10/20', tests_processed: 100, positive_count: 8, positive_percent: 8.00},
  ];


  return (
    <Box 
      direction='column'
      align="center" 
      alignContent="center" 
      justify="center"
      overflow={{ horizontal: 'hidden' }}>



        {/* Present Data */}
        <DataTable
          columns={columns}
          data={SAMPLE_DATA}
          step={10}
          onClickRow={event => alert(JSON.stringify(event.datum, null, 2))}
        />

      <Button 
        label="Go Home" 
        margin="large"
        onClick={() => {this.props.onPageChange('Home Page')}}/>
    </Box>
  );
  }
  
}

export default ViewMyResults;