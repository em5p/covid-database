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

// Sign Up
class CreateSignUp extends React.Component  {
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);

  }

  onPageChange() {
    this.props.onPageChange('Home');
  }

  state = {}

  onSelectSingle = date => this.setState({ date })

  onSelectRange = (selectedDate) => {
    const { date, dates, previousSelectedDate } = this.state;
    if (!dates) {
      if (!date) {
        this.setState({ date: selectedDate });
      } else {
        const priorDate = new Date(date);
        const nextDate = new Date(selectedDate);
        if (priorDate.getTime() < nextDate.getTime()) {
          this.setState({ date: undefined, dates: [[date, selectedDate]] });
        } else if (priorDate.getTime() > nextDate.getTime()) {
          this.setState({ date: undefined, dates: [[selectedDate, date]] });
        }
      }
    } else {
      const priorDates = dates[0].map(d => new Date(d));
      const previousDate = new Date(previousSelectedDate);
      const nextDate = new Date(selectedDate);
      if (nextDate.getTime() < previousDate.getTime()) {
        if (nextDate.getTime() < priorDates[0].getTime()) {
          this.setState({ dates: [[selectedDate, dates[0][1]]] });
        } else if (nextDate.getTime() > priorDates[0].getTime()) {
          this.setState({ dates: [[dates[0][0], selectedDate]] });
        }
      } else if (nextDate.getTime() > previousDate.getTime()) {
        if (nextDate.getTime() > priorDates[1].getTime()) {
          this.setState({ dates: [[dates[0][0], selectedDate]] });
        } else if (nextDate.getTime() < priorDates[1].getTime()) {
          this.setState({ dates: [[selectedDate, dates[0][1]]] });
        }
      }
    }
    this.setState({ previousSelectedDate: selectedDate });
  }



  render() {
  const { date, dates } = this.state;
  const columns = [
    {
      property: 'date',
      header: <Text>Date</Text>,
      primary: true,
    },
    {
      property: 'time',
      header: 'Time',
    },
    {
      property: 'site_address',
      header: 'Site Address',
    },
    {
      property: 'test_site',
      header: 'Test Site',
    },
    {
      property: 'signup',
      header: 'Signup'
    }];
  const SAMPLE_DATA = [
    { date: '9/1/20', time: '10:00 AM', site_address: '169 5th Street', test_site: 'Bobby Dodd', signup: <RadioButton/>},
    { date: '9/2/20', time: '11:00 AM', site_address: '169 5th Street', test_site: 'Bobby Dodd', signup: <RadioButton/>},
    { date: '9/4/20', time: '10:00 AM', site_address: '1 Techwood Dr', test_site: 'ECHO', signup: <RadioButton/>},
    { date: '9/5/20', time: '10:00 AM', site_address: '543 Northpole', test_site: 'North Pole', signup: <RadioButton/>},
  ];

  // Hard Coding Options
  const testing_site_options = ['ALL', 'Fulton County Board of Health', 'CCBOH WIC Clinic', 'Kennesaw State University', 'Stamps Health Services', 'Bobby Dodd Stadium', 'Caddell Building', 'Coda Building', 'GT Catholic Center', 'West Village', 'GT Connector', 'Curran St Parking Deck', 'North Avenue (Centenial Room)'];

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
          <Box>
            <FormField name="location-select" htmlfor="location-select" label="Testing Site:">
              <Select options={testing_site_options} id="location-select" name="location-select" />
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
                    type="submit" 
                    primary label="Sign up" 
                    margin='medium'/>

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
              <Calendar
                size='small'
                date={date}
                dates={dates}
                onSelect={this.onSelectRange}
                margin={{left: 'medium'}}
              />

          </Box>

        {/* Buttons */}
        
      </Form>
      

      
    </Box>
  );
  }
  
}

export default CreateSignUp;