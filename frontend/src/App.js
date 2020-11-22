import React, {useState } from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext, DataTable } from 'grommet';
import {
  CheckBox,
  Form,
  FormField,
  MaskedInput,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea,
  TextInput,
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import { grommet } from 'grommet/themes';

/************** CONFIG and Input ********************/ 
const theme = {
  global: {
   colors: {
     brand: '#183256',
   },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};
/********************* Screens ***************************/ 
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

// Aggregate Test View
const AggTestView = (props) => {

  const columns = [];
  const DATA = [];

  return (
    <div>
      <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
      </Box>
      
      <DataTable
        columns={columns}
        data={DATA}
        step={10}
        onClickRow={event => alert(JSON.stringify(event.datum, null, 2))}
      />
    </div>
  );
}

/************** Global App ***************************/ 
class App extends React.Component {

  // App State
  // const [showSidebar, setShowSidebar] = useState(false);

  render() {
    return (
      <Grommet theme={grommet} full>
        {/* Title Bar */}
        <Box fill>
        <AppBar> 
          <Heading level='3' margin='none'>COVID Dashboard</Heading>
        </AppBar>

        {/* Main Body */}
        <AggTestView>
        </AggTestView>


      </Box>
    </Grommet>
    );
  }
}

export default App;
