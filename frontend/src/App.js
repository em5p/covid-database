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

import { FormClose, Home, Notification } from 'grommet-icons';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

// Login
import Login from './Login.js'
import Register from './Register.js'

// Views
import ViewAggregateResults from './ViewAggregateResults.js'
import ViewDailyResults from './ViewDailyResults.js'
import ViewMyResults from './ViewMyResults.js'

// Creation Pages
import CreateSignUp from './CreateSignUp.js'

// Homepages
import HomeStudent from './HomeStudent.js'
import HomeAdmin from './HomeAdmin.js'
import HomeTechnician from './HomeTechnician.js'
import HomeTester from './HomeTester.js'
import HomeTechTester from './HomeTechTester.js'
import ExploreTestResult from './ExploreTestResult.js';
import ViewLabTechTestsProcessed from './ViewLabTechTestsProcessed.js';

/************** CONFIG and Input ********************/ 


const customTheme = deepMerge(grommet, {
  global: {
   colors: {
     brand: '#183256',
    },
  },
});

/********************* Top Bar ***************************/ 
const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);


/************** Global App ***************************/ 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_type: 'Student',
      current_page: 'Lab Tech Tests Processed'
    }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handlePageChange(page) {
    this.setState({current_page: page})
  }
  
  handleLogin() {
    this.setState({
              // logged_in: True,
              userType: 'Student'
    })
  }
  
  handleRegister() {
    
  }
  

  render() {

    let homepage;

    switch (this.state.user_type) {
      case 'Student':
        homepage = <HomeStudent values={this.state} onPageChange={this.handlePageChange} />;
      case 'Technician':
        homepage = <HomeTechnician values={this.state} onPageChange={this.handlePageChange} />;
      case 'Admin':
        homepage = <HomeAdmin values={this.state} onPageChange={this.handlePageChange} />;
      case 'Tester':
        homepage = <HomeTester values={this.state} onPageChange={this.handlePageChange} />;
      case 'Techtester':
        homepage = <HomeTechTester values={this.state} onPageChange={this.handlePageChange} />;
      default:
        homepage = <HomeStudent values={this.state} onPageChange={this.handlePageChange} />;
    }
    


    return (
      <Grommet theme={customTheme} full>
        {/* Title Bar */}
        <Box fill>
        <AppBar> 
    <Heading level='3' margin='none'>COVID Dashboard | {this.state.user_type} | {this.state.current_page} </Heading>
        </AppBar>

        {/* Main Body */}
        <div>
          {this.state.current_page === 'Home Page' && homepage}

          {/* Possible For Students */}
          {this.state.current_page === 'Aggregate Results' && <ViewAggregateResults values={this.state} onPageChange={this.handlePageChange} />}
          {this.state.current_page === 'My Results' && <ViewMyResults values={this.state} onPageChange={this.handlePageChange} />}
          {this.state.current_page === 'Sign Up' && <CreateSignUp values={this.state} onPageChange={this.handlePageChange} />}
          {this.state.current_page === 'Daily Results' && <ViewDailyResults values={this.state} onPageChange={this.handlePageChange} />}
          {this.state.current_page === 'Login' && <Login values={this.state} onPageChange={this.handlePageChange} />}
          {this.state.current_page === 'Register' && <Register values={this.state} onPageChange={this.handlePageChange} />}
          {this.state.current_page === 'Explore Results' && <ExploreTestResult values={this.state} onPageChange={this.handlePageChange} />}
          {this.state.current_page === 'Lab Tech Tests Processed' && <ViewLabTechTestsProcessed values={this.state} onPageChange={this.handlePageChange} />}
        </div>
        
        


      </Box>
    </Grommet>
    );
  }
}

export default App;
