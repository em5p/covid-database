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
class CreateSignUp extends React.Component  {
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
      property: 'status',
      header: <Text>Test Status</Text>,
      primary: true,
    },
    {property: 'total_tests',
    header: 'Number of Total Tests',
    },
    {property: 'cases_percent',
    header: 'Percent of Total Cases',
    render: datum => (
        <Box pad={{ vertical: 'xsmall' }}>
          <Meter
            values={[{ value: datum.percent }]}
            thickness="small"
            size="small"
          />
        </Box>
      ),
    },
    {property: 'percent',
    header: 'Percent of Total Cases',
    }];

  const SAMPLE_DATA = [
    { status: 'Total', total_tests: 7000, percent: 100},
    { status: 'Positive', total_tests: 450, percent: 6.43},
    { status: 'Negative', total_tests: 6550, percent: 93.57},
    { status: 'Pending', total_tests: 0, percent: 0},
  ];

  // Hard Coding Options
  const testing_site_options = ['Fulton County Board of Health', 'CCBOH WIC Clinic', 'Kennesaw State University', 'Stamps Health Services', 'Bobby Dodd Stadium', 'Caddell Building', 'Coda Building', 'GT Catholic Center', 'West Village', 'GT Connector', 'Curran St Parking Deck', 'North Avenue (Centenial Room)'];

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
          <FormField name="location-select" htmlfor="location-select" label="Testing Site:">
            <Select options={testing_site_options} id="location-select" name="location-select" />
          </FormField>

          <FormField name="date-start" htmlfor="date-start" label="Date:">
            <DateInput
              format="mm/dd/yyyy"
              value={(new Date()).toISOString()}
              onChange={({ value }) => {}}
            />
          </FormField>

          <FormField name="testing-select" htmlfor="testing-select" label="Testing Sites:">
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
              onChange={() => {}}
              id="testing-select" 
              name="testing-select" />
          </FormField>
        </Box>

        {/* Buttons */}
        <Box 
          direction="row" 
          gap="medium"
          justify="center"  
          fill="horizontal">
          <Button type="submit" primary label="Create Appointment" />

          <Button 
            label="Go Home" 
            margin="large"
            onClick={() => {this.props.onPageChange('Home Page')}}/>
        </Box>
      </Form>

      
    </Box>
  );
  }
  
}

export default CreateSignUp;