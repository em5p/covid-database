import React, {useState } from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext, DataTable } from 'grommet';
import {
  CheckBox,
  DateInput,
  Calendar,
  Form,
  FormField,
  MaskedInput,
  Meter,
  RadioButton,
  RadioButtonGroup,
  RangeInput,
  Select,
  Text,
  TextArea,
  TextInput,
} from 'grommet';
import { View } from 'grommet-icons';

// Lab Tech Tests Processed
class ViewLabTechTestsProcessed extends React.Component  {
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
      property: 'pool_id',
      header: 'Pool ID',
    },
    {
      property: 'date_tested',
      header: 'Date Tested',
    },
    {
      property: 'date_processed',
      header: 'Date Processed',
    }, 
    {
      property: 'result',
      header: 'Result',
    }];
  const SAMPLE_DATA = [
    { test_id: 1, pool_id: 22332, date_tested: '8/17/20', date_processed: '8/29/20', result: 'Negative'},
    { test_id: 2, pool_id: 22332, date_tested: '8/24/20', date_processed: '8/29/20', result: 'Positive'},
    { test_id: 3, pool_id: 22332, date_tested: '8/28/20', date_processed: '8/29/20', result: 'Positive'},
    { test_id: 4, pool_id: 44554, date_tested: '9/1/20', date_processed: '9/1/20', result: 'Positive'},
  ];

  // Hard Coding Options
  const test_results=['ALL', 'positive','negative']

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
          margin={{top: 'small'}}>

          <FormField name="date-start" htmlfor="date-start" label="Date Start:">
            <DateInput
              format="mm/dd/yyyy"
              value={(new Date()).toISOString()}
              onChange={({ value }) => {}}
            />
          </FormField>

          <FormField name="date-end" htmlfor="date-end" label="Date End:">
            <DateInput
              format="mm/dd/yyyy"
              value={(new Date()).toISOString()}
              onChange={({ value }) => {}}
            />
          </FormField>

          </Box>
          <Box>
            <FormField name="test-result" htmlfor="test-result" label="Test Result:">
              <Select options={test_results} id="test-result" name="test-result" />
            </FormField>
          </Box>

          <Box 
            direction='row'
            align="center" 
            alignContent="center" 
            justify="center"
            overflow={{ horizontal: 'hidden' }}
            margin={{ top: 'medium' }}>

              {/* Present Data */}
              <Box>
                <DataTable
                  columns={columns}
                  data={SAMPLE_DATA}
                  step={10}
                  onClickRow={event => alert(JSON.stringify(event.datum, null, 2))}
                />
                <Box 
                  direction="row" 
                  gap="medium"
                  justify="center"  
                  fill="horizontal">

                  <Button 
                    label="Reset" 
                    margin='medium'/>

                  <Button 
                    label="Filter" 
                    margin='medium'/>

                  <Button 
                    label="Go Home" 
                    margin="medium"
                    onClick={() => {this.props.onPageChange('Home Page')}}/>
                </Box>
              </Box>

          </Box>

        {/* Buttons */}
        
      </Form>
      

      
    </Box>
  );
  }
  
}

export default ViewLabTechTestsProcessed;