import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import UserStore from '@components/User/UserStore';
import UserDormant from '@components/User/UserDormant';
import UserPacer from '@components/User/UserPacer';

interface MatchParams {
  postId: string;
}
const User: React.SFC<RouteComponentProps<MatchParams>> = ({ match }): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path={`${match.url}/pacer`} component={UserPacer} />
        <Route exact path={`${match.url}/store`} component={UserStore} />
        <Route exact path={`${match.url}/dormant`} component={UserDormant} />
      </Switch>
    </>
  );
};
export default User;
