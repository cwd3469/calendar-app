import React from 'react';
import { Button } from '@mui/material';
import instance from '@api/index';
import Grid from '@mui/material/Grid';
import Cookies from 'js-cookie';
import Pmodal from '@components/Common/Pmodal';
import PtableModal from '@components/Common/PtableModal';
import { userAdminDispatch } from '@store/modules/user';
import { useAppDispatch } from '@store/hooks';

const TodoList = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [tabelOpen, setTableOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const clickpPrmissions = () => {
    const cookie = Cookies.get('user_permissions');
    const res = JSON.parse(cookie as string);
    console.log(res);
  };

  const clickEvent1 = async () => {
    console.log('click1');
    const res = await instance.get('test/permitAll');
    console.log(res);
  };

  const clickEvent2 = async () => {
    console.log('click2');
    const res = await instance.get('test/seller');
    console.log(res);
  };

  const clickEvent3 = async () => {
    console.log('click3');
    dispatch(userAdminDispatch());
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setTableOpen(true);
  const handleClose2 = () => setTableOpen(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        TEST Button
      </Grid>
      <Grid item xs={5}>
        {' '}
        <Button variant="contained" onClick={clickEvent1}>
          Contained
        </Button>
      </Grid>
      <Grid item xs={5}>
        {' '}
        <Button variant="contained" onClick={clickEvent2}>
          test/seller
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Button variant="contained" onClick={clickEvent3}>
          test/admin
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Button variant="contained" onClick={clickpPrmissions}>
          user_permissions
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Button onClick={handleOpen}>Open modal</Button>
        <Pmodal open={open} handleClose={handleClose}>
          <>로그인 하셨습니다.</>
        </Pmodal>
      </Grid>
      <Grid item xs={5}>
        <Button onClick={handleOpen2}>Open ListModal</Button>
        <PtableModal open={tabelOpen} handleClose={handleClose2} />
      </Grid>
    </Grid>
  );
};
export default TodoList;
