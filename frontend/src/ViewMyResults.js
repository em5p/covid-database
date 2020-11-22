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
      property: 'test_id',
      header: <Text>Test ID#</Text>,
      primary: true,
    },
    {
      property: 'timeslot_date',
      header: 'Timeslot Date',
    },
    {
      property: 'process_date',
      header: 'Date Processed',
    },
    {
      property: 'pool_status',
      header: 'Pool Status',
    },
    {
      property: 'status',
      header: 'Status',
    }];

  const SAMPLE_DATA = [
    { test_id: 1, timeslot_date: '8/19/20', process_date: '8/20/20', pool_status: 'positive', status: 'negative'},
    { test_id: 2, timeslot_date: '8/19/20', process_date: '8/20/20', pool_status: 'positive', status: 'negative'},
    { test_id: 3, timeslot_date: '8/19/20', process_date: '8/20/20', pool_status: 'positive', status: 'negative'},
  ];

  // Hard Coding Options
  const status_options = ['All', 'Pending', 'Positive', 'Negative'];

  return (
    <Box 
      direction='column'
      align="center" 
      alignContent="center" 
      justify="center"
      overflow={{ horizontal: 'hidden' }}>

      <Form onSubmit={({ value }) => {}}>
        {/* Top Row */}
        <Box 
          direction="row" 
          gap="medium"
          justify="center"  
          fill="horizontal">
          <FormField name="location-select" htmlfor="location-select" label="Status:">
            <Select options={status_options} id="location-select" name="location-select" />
          </FormField>

          <FormField name="date-start" htmlfor="date-start" label="Date Processed Start:">
            <DateInput
              format="mm/dd/yyyy"
              value={(new Date()).toISOString()}
              onChange={({ value }) => {}}
            />
          </FormField>

          <FormField name="date-end" htmlfor="date-end" label="Date Processed End:">
            <DateInput
              format="mm/dd/yyyy"
              value={(new Date()).toISOString()}
              onChange={({ value }) => {}}
            />
          </FormField>  
        </Box>

        {/* Present Data */}
        <Box 
          direction="row" 
          gap="medium"
          justify="center"  
          fill="horizontal">
        
          <DataTable
            columns={columns}
            data={SAMPLE_DATA}
            step={10}
            onClickRow={event => alert(JSON.stringify(event.datum, null, 2))}
          />
        </Box>
        

        {/* Buttons */}
        <Box 
          direction="row" 
          gap="medium"
          justify="center"  
          fill="horizontal">
          <Button type="submit" primary label="Filter" />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>

      <Button 
        label="Go Home" 
        margin="large"
        onClick={() => {this.props.onPageChange('Home Page')}}/>
    </Box>
  );
  }
  
}

export default ViewMyResults;