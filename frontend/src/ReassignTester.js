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

// Reassign Tester
class ReassignTester extends React.Component  {
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
      property: 'username',
      header: 'Username',
      primary: true,
    },
    {
      property: 'name',
      header: 'Name',
    },
    {
      property: 'phone_number',
      header: 'Phone Number',
    },
    {
      property: 'assigned_sites',
      header: 'Assigned Sites',
    }];

    // Hard Coding Options
  const testing_site_options = ['ALL', 'Fulton County Board of Health', 'CCBOH WIC Clinic', 'Kennesaw State University', 'Stamps Health Services', 'Bobby Dodd Stadium', 'Caddell Building', 'Coda Building', 'GT Catholic Center', 'West Village', 'GT Connector', 'Curran St Parking Deck', 'North Avenue (Centenial Room)'];

  const SAMPLE_DATA = [
    { username: 'dmcstuffins7', name: 'Doc McStuffins', phone_number: 1234567890, assigned_sites: [['Caddell', 'ECHO', 'Bobby Dodd'], <Select options={testing_site_options}/>]},
    { username: 'jdoe381', name: 'Jane Doe', phone_number: 9987654321, assigned_sites: [[], <Select options={testing_site_options}/>]},
    { username: 'akarev16', name: 'Alex Karev', phone_number: 9374629474, assigned_sites: [[], <Select options={testing_site_options}/>]},
    { username: 'sstranger11', name: 'Stephen Strange', phone_number: 1000000000, assigned_sites: [[], <Select options={testing_site_options}/>]},
  ];

  
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
                label="Go Home" 
                margin="medium"
                onClick={() => {this.props.onPageChange('Home Page')}}/>
                
                <Button 
                type="submit" 
                primary label="Update" 
                margin='medium'/>
            </Box>
            </Box>
          </Box>

        {/* Buttons */}
        
      </Form>
      

      
    </Box>
  );
  }
  
}

export default ReassignTester;