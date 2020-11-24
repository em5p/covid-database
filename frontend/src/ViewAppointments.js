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

// View appointments
class ViewAppointments extends React.Component  {
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
        header: 'Date',
    },
    {
        property: 'time',
        header: 'Time',
    },
    {
        property: 'test_site',
        header: 'Test Site',
    },
    {
        property: 'location',
        header: 'Location',
    },
    {
        property: 'user',
        header: 'User',
    }];

  const SAMPLE_DATA = [
    { date: '8/17/20', time: '10:00 AM', test_site: 'Bobby Dodd', location: 'East', user: 'student1'},
    { date: '8/17/20', time: '11:00 AM', test_site: 'Bobby Dodd', location: 'East', user: '--'},
    { date: '8/17/20', time: '12:00 PM', test_site: 'ECHO', location: 'East', user: 'student2'},
    { date: '8/17/20', time: '1:00 PM', test_site: 'North Pole', location: 'West', user: '--'},
  ];

  // Hard Coding Options
  const show_tests=['Show booked only', 'Show available Only', 'Show all']
  const testing_site_options = ['Fulton County Board of Health', 'CCBOH WIC Clinic', 'Kennesaw State University', 'Stamps Health Services', 'Bobby Dodd Stadium', 'Caddell Building', 'Coda Building', 'GT Catholic Center', 'West Village', 'GT Connector', 'Curran St Parking Deck', 'North Avenue (Centenial Room)'];

  return (
    <Box 
        direction='column'
        align="center" 
        alignContent="center" 
        justify="center"
        overflow={{ horizontal: 'hidden' }}>

        <Text margin={{top:'small'}} size='large' weight='bold'>View Appointments</Text>
            
        <Form onSubmit={({ value }) => {}}>
            {/* Top Row */}

            {/* Date Selection */}
            <Box 
            direction="row" 
            gap="medium"
            justify="center"  
            fill="horizontal">
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
            <FormField name="time-start" htmlfor="time-start" label="Time Start:">
                <MaskedInput
                mask={[
                    {
                    length: [1, 2],
                    options: Array.from({ length: 12 }, (v, k) => k + 1),
                    regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                    placeholder: 'hh',
                    },
                    { fixed: ':' },
                    {
                    length: 2,
                    options: ['00', '15', '30', '45'],
                    regexp: /^[0-5][0-9]$|^[0-9]$/,
                    placeholder: 'mm',
                    },
                    { fixed: ' ' },
                    {
                    length: 2,
                    options: ['am', 'pm'],
                    regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
                    placeholder: 'ap',
                    },
                ]}
                onChange={event => this.setState({ time: event.target.value })}
                id="time-start" 
                name="time-start" />
            </FormField>

            <FormField name="time-end" htmlfor="time-end" label="Time End:">
                <MaskedInput
                mask={[
                    {
                    length: [1, 2],
                    options: Array.from({ length: 12 }, (v, k) => k + 1),
                    regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                    placeholder: 'hh',
                    },
                    { fixed: ':' },
                    {
                    length: 2,
                    options: ['00', '15', '30', '45'],
                    regexp: /^[0-5][0-9]$|^[0-9]$/,
                    placeholder: 'mm',
                    },
                    { fixed: ' ' },
                    {
                    length: 2,
                    options: ['am', 'pm'],
                    regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
                    placeholder: 'ap',
                    },
                ]}
                onChange={event => this.setState({ time: event.target.value })}
                id="time-end" 
                name="time-end" />
            </FormField> 
            </Box>
            <Box 
            direction="row" 
            gap="medium"
            justify="center"  
            margin={{top: 'medium'}}>
            <FormField name="testing-select" htmlfor="testing-select" label="Testing Sites:">
                <Select options={testing_site_options} id="testing-select" name="testing-select" />
            </FormField>

            <FormField name="testing-select" htmlfor="testing-select" label="Availability:">
                <RadioButtonGroup
                    name='show-tests' 
                    options={show_tests} direction='horizontal'/>
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
            <Button 
                label="Go Home" 
                margin="medium"
                onClick={() => {this.props.onPageChange('Home Page')}}/>
            <Button type="submit" label="Filter" margin="medium"/>
            <Button type="reset" label="Reset" margin="medium"/>
            </Box>
        </Form>
    </Box>
  );
  }
  
}

export default ViewAppointments;