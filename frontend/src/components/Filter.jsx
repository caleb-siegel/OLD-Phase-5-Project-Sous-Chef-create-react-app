import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

function Filter() {
    const [filterType, setFilterType] = React.useState('include');
    const [filterBy, setFilterBy] = React.useState('recipeName');
    const [filterText, setFilterText] = React.useState('');

    const handleFilterTypeChange = (event) => {
        setFilterType(event.target.value);
      };
    
      const handleFilterByChange = (event) => {
        setFilterBy(event.target.value);
      };
    
      const handleFilterTextChange = (event) => {
        setFilterText(event.target.value);
      };
  
    return (
        <Paper elevation={3} sx={{ backgroundColor: '#D4D7D5', padding: '20px', width: '250px'}}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Filter:</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={filterType}
                onChange={handleFilterTypeChange}
            >
                <FormControlLabel value="include" control={<Radio />} label="Include" />
                <FormControlLabel value="exclude" control={<Radio />} label="Exclude" />
            </RadioGroup>
            </FormControl>
            <br />
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Filter by:</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={filterBy}
                    onChange={handleFilterByChange}
                >
                    <FormControlLabel value="recipeName" control={<Radio />} label="Recipe Name" />
                    <FormControlLabel value="tag" control={<Radio />} label="Tag" />
                    <FormControlLabel value="ingredients" control={<Radio />} label="Ingredients" />
                </RadioGroup>
                <TextField id="outlined-basic" label="Filter" variant="standard" value={filterText} onChange={handleFilterTextChange}/>
            </FormControl>
        </Paper>
    );
}

export default Filter;