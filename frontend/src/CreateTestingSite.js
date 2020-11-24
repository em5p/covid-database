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

// Create testing site
class CreateTestingSite extends React.Component  {
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);

  }

  onPageChange() {
    this.props.onPageChange('Home');
  }

  render() {
    
    const state_options=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","MD","MA","MI","MN","MS","MO","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]
    const location_options=['East', 'West']
    return (
        <Box 
        direction='column'
        align="center" 
        alignContent="center" 
        justify="center"
        overflow={{ horizontal: 'hidden' }}>

        <Text margin={{top: 'small'}} size='large' weight='bold'>Create a Testing Site</Text>

        <Form onSubmit={({ value }) => {}}>
            {/* Top Row */}
            <Box 
            direction="row" 
            gap="medium"
            justify="center"  
            fill="horizontal"
            margin={{top: 'medium'}}>
            <FormField name="site-name" htmlfor="site-name" label="Site Name:">
                <TextInput placeholder='Enter site name'/>
            </FormField>
            <FormField name="street-address" htmlfor="street-address" label="Street Address:">
                <TextInput placeholder='Enter street address'/>
            </FormField>
          </Box>
          <Box 
            direction="row" 
            gap="medium"
            justify="center"  
            fill="horizontal"
            margin={{top: 'medium'}}>
                <FormField name="city" htmlfor="city" label="City:">
                    <TextInput placeholder='City'/>
                </FormField>
                <FormField name="state" htmlfor="state" label="State:">
                    <Select options={state_options} id='state' name='state'/>
                </FormField>
            </Box>
            <Box 
            direction="row" 
            gap="medium"
            justify="center"  
            fill="horizontal"
            margin={{top: 'medium'}}>
                <FormField name="zip-code" htmlfor="zip-code" label="Zip Code:">
                    <TextInput placeholder='Zip Code'/>
                </FormField>
                <FormField name="location" htmlfor="location" label="Location:">
                    <Select options={location_options} id='location' name='location'/>
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
            <Button type="submit" margin='medium' label="Create Site"/>
            </Box>
        </Form>
        </Box>
    );
    }
    
    }

export default CreateTestingSite;