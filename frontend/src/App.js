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
import { FormClose, Notification } from 'grommet-icons';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

import AggTestView from './AggTestView.js'
import HomeStudent from './HomeStudent.js'

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

  // App State
  // const [showSidebar, setShowSidebar] = useState(false);

  render() {
    return (
      <Grommet theme={customTheme} full>
        {/* Title Bar */}
        <Box fill>
        <AppBar> 
          <Heading level='3' margin='none'>COVID Dashboard | CS4400</Heading>
        </AppBar>

        {/* Main Body */}


        <AggTestView props={'state'}>
        </AggTestView>


      </Box>
    </Grommet>
    );
  }
}

export default App;
