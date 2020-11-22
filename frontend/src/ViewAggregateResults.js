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
class ViewAggregateResults extends React.Component  {
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
  const location_options = ['Fulton County Board of Health', 'CCBOH WIC Clinic', 'Kennesaw State University', 'Stamps Health Services', 'Bobby Dodd Stadium', 'Caddell Building', 'Coda Building', 'GT Catholic Center', 'West Village', 'GT Connector', 'Curran St Parking Deck', 'North Avenue (Centenial Room)'];
  const housing_options = [];
  const testing_site_options = [];

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
          <FormField name="location-select" htmlfor="location-select" label="Location:">
            <Select options={location_options} id="location-select" name="location-select" />
          </FormField>

          <FormField name="housing-select" htmlfor="housing-select" label="Housing:">
            <Select options={housing_options} id="housing-select" name="housing-select" />
          </FormField>

          <FormField name="testing-select" htmlfor="testing-select" label="Testing Sites:">
            <Select options={testing_site_options} id="testing-select" name="testing-select" />
          </FormField>
        </Box>

        {/* Date Selection */}
        <Box 
          direction="row" 
          gap="medium"
          justify="center"  
          fill="horizontal">
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

export default ViewAggregateResults;