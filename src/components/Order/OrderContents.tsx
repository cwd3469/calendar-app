import React, { useEffect } from 'react';

import { Button, Box } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef, MuiEvent } from '@mui/x-data-grid';
// import * as pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import { orderDataGetData } from '@store/modules/order';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Ordertype } from './type';

const columns: GridColDef[] = [
  {
    field: 'creationDate',
    headerName: ' 계정생성일',
    width: 150,
    editable: false,
  },
  {
    field: 'ID',
    headerName: '아이디',
    width: 150,
    editable: false,
  },
  {
    field: 'phoneNumber',
    headerName: '휴대폰 뒷자리',
    width: 150,
    editable: false,
  },
  {
    field: 'area1',
    headerName: '지역1',
    width: 150,
    editable: false,
  },
  {
    field: 'area2',
    headerName: '지역2',
    width: 150,
    editable: false,
  },
  {
    field: 'optionalTerms',
    headerName: '선택약관',
    width: 150,
    editable: false,
  },
  {
    field: 'marketing',
    headerName: '마케팅',
    width: 150,
    editable: false,
  },
  {
    field: 'status',
    headerName: '상태',
    width: 150,
    editable: false,
  },
  {
    field: 'subscriptionStore',
    headerName: '구독 상점',
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          console.log(params);
        }}
      >
        구독 상점
      </Button>
    ),
  },
  {
    field: 'supportStatus',
    headerName: '지원  현황',
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          console.log(params);
        }}
      >
        지원현황
      </Button>
    ),
  },
  {
    field: 'contractStatus',
    headerName: '계약 현황',
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          console.log(params);
        }}
      >
        계약 현황
      </Button>
    ),
  },
  {
    field: 'viewProfiles',
    headerName: '프로필 보기',
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          console.log(params);
        }}
      >
        프로필 보기
      </Button>
    ),
  },
];

const OrderContents = (): JSX.Element => {
  // const [onSubStore, setOnSubStore] = React.useState(false);
  // const [onStatus, setOnStatus] = React.useState(false);
  // const [onContract, setOnContract] = React.useState(false);
  // const [onProfiles, setOnProfiles] = React.useState(false);
  const data = useAppSelector((state) => state.order.orderList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(orderDataGetData());
  }, [dispatch]);

  const rows = data;

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
      }}
    >
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Box>
  );
};

export default OrderContents;
