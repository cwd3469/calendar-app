import React from 'react';

type PropsTypeItem = {
  readonly Conponent: JSX.Element;
};

const ItemIcon = (props: PropsTypeItem) => {
  const { Conponent } = props;
  return <div className="IconBox">{Conponent}</div>;
};

export default function LayoutItems() {
  return (
    <div className="LayoutItems">
      <div className="LayoutItems-item">
        <span>마이페이지</span>
      </div>
      <div className="LayoutItems-item">
        <span>사용자</span>
      </div>
      <div className="LayoutItems-item">
        <span>주문</span>
      </div>
      <div className="LayoutItems-item">
        <span>정산</span>
      </div>
      <div className="LayoutItems-item">
        <span>통계</span>
      </div>
    </div>
  );
}
