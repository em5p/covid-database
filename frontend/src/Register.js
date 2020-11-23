import React from 'react';
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
    Grid,
    TextInput,
    Box,
    Button
  } from 'grommet';

// Login 
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.onPageChange = this.onPageChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
        
    }
    onPageChange() {
        this.props.onPageChange('Login');
    }

    onRegister() {
        this.props.onRegister('Login');
    }

    render() {
        
        const housing_options = ['Student Housing', 'Greek Housing', 'Off-Campus Housing', 'Off-Campus Apartments']
        const location_options = ['East', 'West']
        const role_options = ['Lab Technician', 'Site Tester', 'Lab Technician and Site Tester']
        return (
            <Box 
            direction='column'
            align="center" 
            alignContent="center" 
            justify="center"
            overflow={{ horizontal: 'hidden' }}>

                <Form
                value={() => {}}
                onChange={() => {this.props.onRegister()}}
                onSubmit={() => {this.props.onPageChange('Home')}}
                >
                <Grid
                rows={['small', 'small', 'small', 'small']}
                columns={['small', 'small', 'small', 'small']}
                border = {['black', 'xsmall', 'vertical', 'solid']}
                areas={[
                    { name: 'left', start: [0,0], end: [1, 2]},
                    { name: 'right', start: [2, 0], end: [3, 2]},
                    { name: 'bottom', start: [0, 3], end: [3, 3]},
                ]}>
                    <Box gridArea="left" 
                        pad={{ horizontal: 'medium', vertical: 'xsmall' }}>
                        <FormField Username="Username" htmlfor="text-input-id" label="Username"
                                    margin={{ top: 'large' }}>
                            <TextInput id="text-input-id" Username="Username" />
                        </FormField>

                        <FormField Email="Email" htmlfor="text-input-id" label="Email">
                            <TextInput id="text-input-id" Email="Email" />
                        </FormField>

                        <FormField Fname="First Name" htmlfor="text-input-id" label="First Name">
                            <TextInput id="text-input-id" Fname="Fname" />
                        </FormField>

                        <FormField Lname="Last Name" htmlfor="text-input-id" label="Last Name">
                            <TextInput id="text-input-id" Lname="Lname" />
                        </FormField>

                        <FormField Password="Password" htmlfor="text-input-id" label="Password">
                            <TextInput type = "password" id="text-input-id" Password="Password" />
                        </FormField>

                        <FormField ConfirmPassword="Confirm Password" htmlfor="text-input-id" label="Confirm Password">
                            <TextInput type = "password" id="text-input-id" ConfirmPassword="ConfirmPassword" />
                        </FormField>
                        
                    </Box>

                    <Box gridArea="right"
                        pad={{ horizontal: 'medium', vertical: 'xsmall' }}>
                        <Text weight="bold" margin={{ top: 'large' }}>Student Registration only:</Text>
                        <FormField housing-select="housing-select" htmlfor="housing-select" label="Housing:">
                            <Select options={housing_options} id="housing-select" housing-select="housing-select" />
                        </FormField>
                        <FormField location-select="location-select" htmlfor="location-select" label="Location:">
                            <Select options={location_options} id="location-select" location-select="location-select" />
                        </FormField>

                        <Button type="register" primary label="Student Register" 
                        onClick={() => {this.props.onPageChange('Login')}}
                        margin={{ vertical: 'medium' }}/>

                        <Text weight="bold">Employee Registration only:</Text>
                        <FormField Phone="Phone" htmlfor="text-input-id" label="Phone No.">
                            <TextInput id="text-input-id" Phone="Phone" />
                        </FormField>
                        <FormField role-select="role-select" htmlfor="role-select" label="Role:">
                            <Select options={role_options} id="role-select" role-select="role-select" />
                        </FormField>

                        <Button type="register" primary label="Employee Register" 
                        onClick={() => {this.props.onPageChange('Login')}}
                        margin={{ vertical: 'medium' }}/>
                    </Box>
                    <Box gridArea="bottom" align="center">
                        <Button type="login" primary label="Back to Login" 
                                onClick={() => {this.props.onPageChange('Login')}}
                                margin={{ vertical: 'medium' }}/>
                    </Box>
                </Grid>
                </Form>
            </Box>
          );
    }
}

export default Register