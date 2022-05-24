import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';

interface MatchParams {
  postId: string;
}
const Calendar: React.SFC<RouteComponentProps<MatchParams>> = ({ match }): JSX.Element => {
  return <>Calendar</>;
};
export default Calendar;
