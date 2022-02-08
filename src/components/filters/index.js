import React, { useState } from 'react';
import { Autocomplete, Tab, Tabs, Box } from '@mui/material';
import { CustomTextField } from './styles';
import TabPanel from './tabPanel';
import { filterByParam } from 'src/utils';


export default function Filters({ movies }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return <Box sx={{ bgcolor: 'background.paper' }}>
        <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons
            allowScrollButtonsMobile
            aria-label='scrollable force tabs example'
        >
            <Tab label='Filter By Name' {...a11yProps(0)} />
            <Tab label='Filter By Category' {...a11yProps(1)} />
            <Tab label='Filter By Rating' {...a11yProps(2)} />
            <Tab label='Filter By Year' {...a11yProps(3)} />

        </Tabs>
        <TabPanel value={value} index={0}>
            <Autocomplete
                id='movie'
                disablePortal
                options={movies || ['Options not found']}
                getOptionLabel={option => option.title}
                renderInput={(params) => <CustomTextField {...params} label='Movie' />}
                value={selectedMovie}
                onChange={(_event, newMovie) => {
                    setSelectedMovie(newMovie);
                }}
            />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Autocomplete
                id='category'
                disablePortal
                options={filterByParam(movies, 'category') || ['Options not found']}
                getOptionLabel={option => option}
                renderInput={(params) => <CustomTextField  {...params} label='Category' />}
                value={selectedCategory}
                onChange={(_event, category) => {
                    setSelectedCategory(category);
                }}
            />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Autocomplete
                id='rating'
                disablePortal
                options={filterByParam(movies, 'rating') || ['Options not found']}
                getOptionLabel={option => `${option}⭐`}
                renderInput={(params) => <CustomTextField  {...params} label='Rating' />}
                value={selectedRating}
                onChange={(_event, newRating) => {
                    setSelectedRating(newRating);
                }}
            />
        </TabPanel>
        <TabPanel value={value} index={3}>
            <Autocomplete
                id='year'
                disablePortal
                options={filterByParam(movies, 'year') || ['Options not found']}
                getOptionLabel={option => option.toString()}
                renderInput={(params) => <CustomTextField  {...params} label='Year' />}
                value={selectedYear}
                onChange={(_event, newYear) => {
                    setSelectedYear(newYear);
                }}
            />
        </TabPanel>

    </Box>

}
