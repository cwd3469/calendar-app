import React, { useRef, useState } from 'react';
import '@assets/scss/Layout.scss';

import classnames from 'classnames';

import LayoutItems from './LayoutItems';
type PropsTypeLayout = {
  readonly children: JSX.Element;
};

const Layout = (props: PropsTypeLayout) => {
  const [showTab, setShowTab] = useState(false);
  const { children }: PropsTypeLayout = props;

  const sideTabBtnClick = () => setShowTab(!showTab);

  return (
    <div className="Layout">
      <div className={classnames('SideTab', showTab ? 'showMenu' : '')}>
        <div
          className={classnames('SideTab-btn', showTab ? 'showMenu' : '')}
          onClick={sideTabBtnClick}
        ></div>
        <div className="SideTab-nav">
          <LayoutItems />
        </div>
      </div>
      <div className={classnames('Layout-contents', showTab ? 'showMenu' : '')}>
        <div className="Layout-contents-topTab">Layout-topTab</div>
        <div className="LayoutBody">
          <div className="LayoutBody-page">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
