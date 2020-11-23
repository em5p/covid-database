import React from 'react';
import {
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
        this.onLogin = this.onLogin.bind(this);
        
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
        
        return (
            <Grommet theme={customTheme}>
            <Box align="center" pad="large">
              <Table caption="Custom Theme Table">
                <TableHeader>
                  <TableRow>
                    {columns.map(c => (
                      <TableCell key={c.property} scope="col" align={c.align}>
                        <Text>{c.label}</Text>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map(datum => (
                    <TableRow key={datum.id}>
                      {columns.map(c => (
                        <TableCell key={c.property} scope={c.dataScope} align={c.align}>
                          <Text>{c.format ? c.format(datum) : datum[c.property]}</Text>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    {columns.map(c => (
                      <TableCell key={c.property} align={c.align}>
                        <Text>{c.footer}</Text>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableFooter>
              </Table>
            </Box>
          </Grommet>
          );
    }
}


export default ExploreTestResult