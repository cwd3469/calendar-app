import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function TodoInput() {
  const [inputAValue, setInputValue] = useState<string>('');

  return (
    <Grid item sx={{ marginTop: '20px' }}>
      <TextField
        fullWidth
        label="입력하세요"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          console.log(inputAValue);
        }}
      >
        Contained
      </Button>
    </Grid>
  );
}

export default TodoInput;
