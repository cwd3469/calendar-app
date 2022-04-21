import React from 'react';
import {
  faHouse,
  faPerson,
  faArrowDownLong,
  faGenderless,
  faSignal5,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <ItemIcon Conponent={<FontAwesomeIcon icon={faHouse} />} />
        <span>마이페이지</span>
      </div>
      <div className="LayoutItems-item">
        <ItemIcon Conponent={<FontAwesomeIcon icon={faPerson} />} />
        <span>사용자</span>
      </div>
      <div className="LayoutItems-item">
        <ItemIcon Conponent={<FontAwesomeIcon icon={faArrowDownLong} />} />
        <span>주문</span>
      </div>
      <div className="LayoutItems-item">
        <ItemIcon Conponent={<FontAwesomeIcon icon={faGenderless} />} />
        <span>정산</span>
      </div>
      <div className="LayoutItems-item">
        <ItemIcon Conponent={<FontAwesomeIcon icon={faSignal5} />} />
        <span>통계</span>
      </div>
    </div>
  );
}
