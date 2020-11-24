import React, {useState } from 'react';
import { Box, Button, DataTable } from 'grommet';
import {
  CheckBox,
  RadioButton,
  Text,
  TextInput,
  Form
} from 'grommet';

// Create Pool
class CreatePool extends React.Component  {
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
        property: 'test_id',
        header: 'Test ID#',
        },
        {
        property: 'date_tested',
        header: 'Date Tested',
        },
        {
        property: 'include_in_pool',
        header: 'Include in Pool'
        }];
    const SAMPLE_DATA = [
        {test_id: 1, date_tested: '8/17/20', include_in_pool: <CheckBox/>},
        {test_id: 2, date_tested: '8/17/20', include_in_pool: <CheckBox/>},
        {test_id: 3, date_tested: '8/18/20', include_in_pool: <CheckBox/>},
        {test_id: 4, date_tested: '8/20/20', include_in_pool: <CheckBox/>},
        {test_id: 5, date_tested: '8/24/20', include_in_pool: <CheckBox/>},
        {test_id: 6, date_tested: '8/28/20', include_in_pool: <CheckBox/>},
        {test_id: 7, date_tested: '9/1/20', include_in_pool: <CheckBox/>},
        {test_id: 8, date_tested: '9/2/20', include_in_pool: <CheckBox/>},
    ];

    return (

            <Box 
                direction='row'
                align="center" 
                alignContent="center" 
                justify="center"
                overflow={{ horizontal: 'hidden' }}
                margin={{ top: 'medium' }}>

                <Form onSubmit={({ value }) => {}}>
                <Box 
                    align='center'
                    alignContent='center'>

                    <Text size='xlarge' weight='bold' margin={{vertical:'medium'}}>Create a Pool</Text>
                    <Box fill='false' direction='row' >
                        <Text>Pool ID:</Text>
                        <TextInput placeholder='pool id must be unique'/>
                    </Box>

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
                    label="Back Home" 
                    margin="medium"
                    onClick={() => {this.props.onPageChange('Home Page')}}/>

                    <Button 
                    type="submit" 
                    label="Create Pool" 
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

    export default CreatePool;