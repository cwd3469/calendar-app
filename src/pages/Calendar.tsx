import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import UserStore from '@components/User/UserStore';
import UserDormant from '@components/User/UserDormant';
import UserPacer from '@components/User/UserPacer';

interface MatchParams {
  postId: string;
}
const Calendar: React.SFC<RouteComponentProps<MatchParams>> = ({ match }): JSX.Element => {
  return <>Calendar</>;
};
export default Calendar;
