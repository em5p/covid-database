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
    TextInput,
    Box,
    Button
  } from 'grommet';

// Login 
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onPageChange = this.onPageChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        
    }
    onPageChange() {
        this.props.onPageChange('Register');
    }

    onLogin() {
        this.props.onLogin();
    }

    render() {
        
        return (
            <Box 
            direction='column'
            align="center" 
            alignContent="center" 
            justify="center"
            overflow={{ horizontal: 'hidden' }}>
                <p>Welcome to the GT Covid-19 Testing Portal</p>
                <Form
                value={() => {}}
                onChange={() => {this.props.onLogin()}}
                //   nextValue => setValue(nextValue)}
                //   onReset={() => setValue({})}
                onSubmit={() => {this.props.onPageChange('Home')}}
                >
                <FormField Username="Username" htmlfor="text-input-id" label="Username">
                    <TextInput id="text-input-id" Username="Username" />
                </FormField>
                <FormField Password="Password" htmlfor="text-input-id" label="Password">
                    <TextInput type = "password" id="text-input-id" Password="Password" />
                </FormField>
                <Box direction="row" gap="medium">
                    <Button type="login" primary label="Login" />
                    <Button type="register" label="Register" 
                    onClick={() => {this.props.onPageChange('Register')}}/>
                </Box>
                </Form>
            </Box>
          );
    }
}


export default Login