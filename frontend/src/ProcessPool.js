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

// Process Pools
class ProcessPool extends React.Component  {
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
        header: 'Test ID#',
    },
    {
        property: 'date_tested',
        header: 'Date Tested',
    },
    {
        property: 'test_result',
        header: 'Test Result',
    }];

    const test_result_options=['Positive', 'Negative']

  const SAMPLE_DATA = [
    { test_id: 1, date_tested: '8/17/20', test_result: <Select options={test_result_options}/>},
    { test_id: 2, date_tested: '8/24/20', test_result: <Select options={test_result_options}/>},
    { test_id: 3, date_tested: '8/28/20', test_result: <Select options={test_result_options}/>},
    { test_id: 4, date_tested: '9/1/20', test_result: <Select options={test_result_options}/>},
  ];

  // Hard Coding Options
  const pool_status_options=['Positive', 'Negative']
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
          fill="horizontal"
          margin={{top: 'medium'}}>
          <FormField name="pool-id" htmlfor="pool-id" label="Pool ID:">
            <TextInput id="pool-id" name="pool-id" />
          </FormField>

          {/* Date Selection */}
          <FormField name="date-processed" htmlfor="date-processed" label="Date Processed:">
            <DateInput
              format="mm/dd/yyyy"
              value={(new Date()).toISOString()}
              onChange={({ value }) => {}}
            />
          </FormField>

          <FormField name="pool-status" htmlfor="pool-status" label="Pool Status:">
            <Select options={pool_status_options} id="pool-status" name="pool-status" />
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
            margin={{bottom: 'medium'}}
          />
        </Box>
        
        {/* Buttons */}
        <Box 
          direction="row" 
          gap="medium"
          justify="center"  
          fill="horizontal">
          <Button type="submit" margin='medium' label="Process Pool"/>
          <Button type="reset" label="Back Home" margin="medium"
            onClick={() => {this.props.onPageChange('Home Page')}}/>
        </Box>
      </Form>
    </Box>
  );
  }
  
}

export default ProcessPool;