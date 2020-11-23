import React from 'react';
import {
    DataTable,
    Grommet,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHeader,
    TableRow,
    Text,
    TextArea,
    TextInput,
    Box,
    Button
  } from 'grommet';

// Explore Test Results 
class ExploreTestResult extends React.Component {
    constructor(props) {
        super(props);
        this.onPageChange = this.onPageChange.bind(this);  
    }
    onPageChange() {
        this.props.onPageChange('Home Page');
    }

    render() {
        const customTheme = {
            global: {
              font: {
                family: 'Helvetica',
              },
            },
            table: {
              body: {
                align: 'center',
                pad: { horizontal: 'large', vertical: 'xsmall' },
                border: 'horizontal',
              },
              extend: () => `font-family: Arial`,
              footer: {
                align: 'start',
                border: undefined,
                pad: { horizontal: 'large', vertical: 'small' },
                verticalAlign: 'bottom',
              },
              header: {
                align: 'center',
                border: 'bottom',
                fill: 'horizontal',
                pad: { horizontal: 'large', vertical: 'xsmall' },
                verticalAlign: 'bottom',
                background: {
                  color: 'accent-1',
                  opacity: 'strong',
                },
              },
            },
          };
          const sample_data = [
            { col1: 'Test ID #', col2: 1},
            { col1: 'Date Tested', col2: '8/19/20'},
            { col1: 'Timeslot', col2: '2:00 PM'},
            { col1: 'Testing Location', col2: 'West Campus'},
            { col1: 'Date Processed', col2: '8/20/20'},
            { col1: 'Pooled Result', col2: 'Positive'},
            { col1: 'Individual Result', col2: 'Negative'}, 
            { col1: 'Processed By', col2: 'Bob Waters'}
          ]

          const columns = [
            { property: 'col1'}, { property: 'col2'}
          ]
    
                        
        
        return (
            <Grommet theme={customTheme}>
            <Box align="center" pad="large">
              <Text weight='bold'>Explore Test Results</Text>
              {/* <Table caption="Explore Test Results"> */}
              <Table>
                <TableBody>

                {sample_data.map(datum => (
                  <TableRow key={datum.id}>
                    {columns.map(c => (
                      <TableCell key={c.property} scope={c.dataScope} align={c.align}>
                        <Text>{c.format ? c.format(datum) : datum[c.property]}</Text>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                  {/* {sample_results.map(datum => (
                    <TableRow key={datum.id}>
                      <Text>hi</Text>
                      {rows.map(row => (
                        <TableCell key={row.property} scope={row.dataScope} align={row.align}>
                          <Text>{sample_results[{row}]}</Text>
                          <Text>{row.property}</Text>
                          <Text>{row.format ? row.format(datum) : datum[row.property]}</Text>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))} */}
                  
                </TableBody>
              </Table>
              <Button
                label="Back(Home)" 
                margin="large"
                onClick={() => {this.props.onPageChange('Home Page')}}/>
            </Box>
          </Grommet>
          );
    }
}


export default ExploreTestResult