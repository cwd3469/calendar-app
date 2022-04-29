import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

type TodoItemProps = {
  children: string;
};

const TodoItem = (props: TodoItemProps) => {
  const { children } = props;
  return (
    <Item>
      <Grid container direction="row" justifyContent="end" alignItems="center">
        <Typography
          variant="subtitle1"
          display="block"
          component="div"
          sx={{ marginRight: 'auto' }}
        >
          {children}
        </Typography>
        <IconButton aria-label="write">
          <DriveFileRenameOutlineIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Item>
  );
};

export default TodoItem;
