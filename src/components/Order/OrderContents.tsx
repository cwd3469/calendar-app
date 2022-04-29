import React from 'react';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import mockapi from '@utils/mock';
import OrderPdfFrom from './OrderPdfFrom';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

const OrderContents = (): JSX.Element => {
  // const downloadPdf = async (): Promise<any> => {
  //   const res = await mockapi.get('/order');
  //   console.log(res);
  //   const data = res.data.contents;
  //   const form = OrderPdfFrom(data);
  //   pdfMake.createPdf(form).download();
  // };

  return (
    <Stack direction="row" spacing={2}>
      {/* <Button
        variant="outlined"
        onClick={() => {
          downloadPdf();
        }}
      >
        다운로드
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          console.log(`${process.env.REACT_APP_API_URL}`);
        }}
      >
        envsss
      </Button> */}
      {/* <Button
        variant="outlined"
        onClick={() => {
          pdfMake.createPdf(form).open()
        }}
      >
        오픈
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          pdfMake.createPdf(form).print()
        }}
      >
        프린트
      </Button> */}
    </Stack>
  );
};

export default OrderContents;
