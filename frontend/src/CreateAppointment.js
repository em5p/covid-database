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

// Create Appointment
class CreateAppointment extends React.Component  {
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);

  }

  onPageChange() {
    this.props.onPageChange('Home');
  }

  render() {
    
    const testing_site_options = ['ALL', 'Fulton County Board of Health', 'CCBOH WIC Clinic', 'Kennesaw State University', 'Stamps Health Services', 'Bobby Dodd Stadium', 'Caddell Building', 'Coda Building', 'GT Catholic Center', 'West Village', 'GT Connector', 'Curran St Parking Deck', 'North Avenue (Centenial Room)'];

    return (
        <Box 
        direction='column'
        align="center" 
        alignContent="center" 
        justify="center"
        overflow={{ horizontal: 'hidden' }}>

        <Text margin={{top: 'small'}} size='large' weight='bold'>Create an Appointment</Text>

        <Form onSubmit={({ value }) => {}}>
            {/* Top Row */}
            <Box 
            direction="row" 
            gap="medium"
            justify="center"  
            fill="horizontal"
            margin={{top: 'medium'}}>
            <FormField name="site-name" htmlfor="site-name" label="Site Name:">
                <Select options={testing_site_options} id="site-name" name="site-name" />
            </FormField>

            {/* Date Selection */}
            <FormField name="date" htmlfor="date" label="Date:">
                <DateInput
                format="mm/dd/yyyy"
                value={(new Date()).toISOString()}
                onChange={({ value }) => {}}
                />
            </FormField>

            <FormField name="time" htmlfor="time" label="Time:">
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
              id="time" 
              name="time" />
          </FormField>
          </Box>
            
            {/* Buttons */}
            <Box 
            direction="row" 
            gap="medium"
            justify="center"  
            fill="horizontal">
            <Button type="reset" label="Back Home" margin="medium"
                onClick={() => {this.props.onPageChange('Home Page')}}/>
            <Button type="submit" margin='medium' label="Create Appointment"/>
            </Box>
        </Form>
        </Box>
    );
    }
    
    }

export default CreateAppointment;