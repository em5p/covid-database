// import React from 'react';
// import {
//     CheckBox,
//     DateInput,
//     Form,
//     FormField,
//     MaskedInput,
//     Meter,
//     RadioButtonGroup,
//     RangeInput,
//     Select,
//     Text,
//     TextArea,
//     Grid,
//     TextInput,
//     Box,
//     Button
//   } from 'grommet';

// // Login 
// class Register1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.onPageChange = this.onPageChange.bind(this);
//         this.onRegister = this.onRegister.bind(this);
        
//     }
//     onPageChange() {
//         this.props.onPageChange('Login');
//     }

//     onRegister() {
//         this.props.onRegister('Login');
//     }

//     render() {
        
//         const housing_options = ['Student Housing', 'Greek Housing', 'Off-Campus Housing', 'Off-Campus Apartments']
//         const location_options = ['East', 'West']
//         const role_options = ['Lab Technician', 'Site Tester', 'Lab Technician and Site Tester']
//         return (
//             <Box 
//             direction='column'
//             align="center" 
//             alignContent="center" 
//             justify="center"
//             overflow={{ horizontal: 'hidden' }}>
//             <p>works</p>

//                 <Form
//                 value={() => {}}
//                 onChange={() => {this.props.onRegister()}}
//                 onSubmit={() => {this.props.onPageChange('Home')}}
//                 >
//                     <Grid
//                         rows={['large']}
//                         columns={['large', 'large']}
//                         border = {['black', 'xsmall', 'vertical', 'solid']}
//                         gap="large"
//                         areas={[
//                             { name: 'left', start: [0, 0]},
//                             { name: 'right', start: [1, 0]},
//                         ]}>
//                             <Box gridArea='left'>
//                                 <Grid
//                                     rows={['medium', 'medium', 'medium']}
//                                     columns={['medium', 'medium']}
//                                     areas={[
//                                         { name: 'username', start: [0,0]},
//                                         { name: 'email', start: [1,0]},
//                                         { name: 'fname', start: [0,1]},
//                                         { name: 'lname', start: [1,1]},
//                                         { name: 'password', start: [0,2]},
//                                         { name: 'confirmPass', start: [1,2]},

//                                     ]}>
//                                          <Box gridArea="username">
//                                             <FormField Username="Username" htmlfor="text-input-id" label="Username">
//                                                 <TextInput id="text-input-id" Username="Username" />
//                                             </FormField>
//                                         </Box> 
//                                         <Box gridArea="email">
//                                             <FormField Email="Email" htmlfor="text-input-id" label="Email">
//                                                 <TextInput id="text-input-id" Email="Email" />
//                                             </FormField>
//                                         </Box> 
//                                         <Box gridArea="fname">
//                                             <FormField Fname="First Name" htmlfor="text-input-id" label="First Name">
//                                                 <TextInput id="text-input-id" Fname="Fname" />
//                                             </FormField>
//                                         </Box> 
//                                         <Box gridArea="lname">
//                                             <FormField Lname="Last Name" htmlfor="text-input-id" label="Last Name">
//                                                 <TextInput id="text-input-id" Lname="Lname" />
//                                             </FormField>
//                                         </Box> 
//                                         <Box gridArea="password">
//                                             <FormField Password="Password" htmlfor="text-input-id" label="Password">
//                                                 <TextInput type = "password" id="text-input-id" Password="Password" />
//                                             </FormField>
//                                         </Box> 
//                                         <Box gridArea="confirmPass">
//                                             <FormField ConfirmPassword="Confirm Password" htmlfor="text-input-id" label="Confirm Password">
//                                                 <TextInput type = "password" id="text-input-id" ConfirmPassword="ConfirmPassword" />
//                                             </FormField>
//                                         </Box> 
//                                 </Grid>
//                             </Box>
//                             <Box gridArea = "right">
//                                 <p>Student Registration only:</p>
//                                 <FormField housing-select="housing-select" htmlfor="housing-select" label="Housing:">
//                                     <Select options={housing_options} id="housing-select" housing-select="housing-select" />
//                                 </FormField>
//                                 <FormField location-select="location-select" htmlfor="location-select" label="Location:">
//                                     <Select options={location_options} id="location-select" location-select="location-select" />
//                                 </FormField>

//                                 <p>Employee Registration only:</p>
//                                 <FormField Phone="Phone" htmlfor="text-input-id" label="Phone No.">
//                                     <TextInput id="text-input-id" Phone="Phone" />
//                                 </FormField>
//                                 <FormField role-select="role-select" htmlfor="role-select" label="Role:">
//                                     <Select options={role_options} id="role-select" role-select="role-select" />
//                                 </FormField>
//                             </Box>
//                         </Grid>
//                 </Form>
//             </Box>
//         );
//     }
// }

// export default Register1