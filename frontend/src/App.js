
const App = () => {

  // App State
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar> 
          <Heading level='3' margin='none'>COVID Dashboard</Heading>
          <Button
            icon={<Notification />}
            onClick={() => setShowSidebar(!showSidebar)}/>
        </AppBar>
        {/* Main Body */}
        
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            app body
          </Box>
          <Collapsible direction="horizontal">
            <Box
              flex
              width='medium'
              background='light-2'
              elevation='small'
              align='center'
              justify='center'>
              sidebar
            </Box>
          </Collapsible>
          
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
