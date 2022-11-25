import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { ThemeProvider } from "@emotion/react";
import CssBaseline from '@mui/material/CssBaseline';

import React, { forwardRef } from 'react'


export const TextInput = forwardRef((props, ref) => {
    return (
        <TextField
            variant="outlined"
            fullWidth
            autoComplete='off'
            {...ref}
            {...props}
        />
    )
})

export const SelectInput = forwardRef((props, ref) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
})