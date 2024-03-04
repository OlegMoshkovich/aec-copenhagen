import * as React from 'react';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Accordion from './Accordian';

export default function PropertiesList() {
  return (
    <Stack>
      <List
      spacing={1}
      >
        {['Info 1','Info 2','Info 3'].map((text, index) => (
            <ListItem  key={`accordian ${index}`}>
              <Accordion key={text} title={text} content={'Properties table'}/>
            </ListItem>
        ))}
      </List>
  </Stack>
  );
}
