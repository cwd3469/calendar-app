import { rest } from 'msw';
import { pdfContent, userInfo } from './dummy';
import ListData from './mockTestData.json';
export const handlers = [
  rest.post('http://localhost:5000/users/signin', (req, res, ctx) => {
    return res(ctx.json(userInfo));
  }),
  rest.get('http://localhost:5000/test/admin', (req, res, ctx) => {
    return res(ctx.json({}));
  }),
  rest.get('http://localhost:5000/otp', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Insurance',
        },
        {
          name: 'Dinner',
        },
      ])
    );
  }),
  rest.post('http://localhost:5000/order/excel', (req, res, ctx) => {
    return res(ctx.json([{ contents: pdfContent }]));
  }),

  rest.get('http://localhost:5000/order/list', (req, res, ctx) => {
    return res(ctx.json(ListData));
  }),
];
