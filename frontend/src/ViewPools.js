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

// View Pools
class ViewPools extends React.Component  {
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
        property: 'pool_id',
        header: 'Pool ID',
    },
    {
        property: 'test_IDs',
        header: 'Test ID',
    },
    {
        property: 'date_processed',
        header: 'Date Processed',
    },
    {
        property: 'processed_by',
        header: 'Processed By',
    }, 
    {
        property: 'pool_status',
        header: 'Pool Status',
    }];
  const SAMPLE_DATA = [
    { pool_id: 22332, test_IDs: [1,2,3], date_processed: '8/18/20', processed_by: 'jim132', pool_status: 'Negative'},
    { pool_id: 33443, test_IDs: [4,5,6], date_processed: '8/25/20', processed_by: 'gburdell1', pool_status: 'Negative'},
    { pool_id: 45678, test_IDs: [10,11], date_processed: '8/28/20', processed_by: 'sasha10', pool_status: 'Positive'},
    { pool_id: 54321, test_IDs: [12], date_processed: 'NULL', processed_by: 'NULL', pool_status: 'Pending'}
  ];

  // Hard Coding Options
  const pool_status_options=['ALL', 'positive','negative']

  return (
    <Box 
      direction='column'
      align="center" 
      alignContent="center" 
      justify="center"
      overflow={{ horizontal: 'hidden' }}>

        <Text margin={{top: 'small'}} size='large' weight='bold'>View Pools</Text>

        <Form onSubmit={({ value }) => {}}>
            {/* Top Row */}
            <Box 
            direction="row" 
            gap="medium"
            justify="center"  
            margin={{top: 'small'}}>

            <FormField name="pool-status" htmlfor="pool-status" label="Pool Status:">
            <Select options={pool_status_options} id="pool-status" name="pool-status" />
            </FormField>

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

export default ViewPools;