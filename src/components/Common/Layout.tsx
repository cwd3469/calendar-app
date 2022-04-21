import React from 'react';

type PropsTypeLayout = {
  readonly children: JSX.Element;
};

function Layout(props: PropsTypeLayout) {
  const { children }: PropsTypeLayout = props;
  return <div>ssss{children}</div>;
}

export default Layout;
