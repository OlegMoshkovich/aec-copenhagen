import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'


export default function AutocompleteInput({title, elements=[
    { title: 'Option1'},
    { title: 'Option2'},
    { title: 'Option3' },
    { title: 'Option4' },
  ]
}) {
  const handleContentChange = (e) => {
    console.log('e from change', e)
  };
  return (
    <Stack spacing={3} sx={{minWidth:'250px'}}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={elements}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        size='small'
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={title}
            onChange={handleContentChange}
            size='small'
          />
        )}
      />
    </Stack>
  )
}


