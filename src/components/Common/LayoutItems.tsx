import * as React from 'react';
import LayoutItem from './LayoutItem';

import {
  Home as HomeIcon,
  AccessibilityNew as AccessibilityNewIcon,
  CircleNotifications as CircleNotificationsIcon,
  CarRepair as CarRepairIcon,
  Calculate as CalculateIcon,
  Functions as FunctionsIcon,
  Gavel as GavelIcon,
  Signpost as SignpostIcon,
  ViewCarousel as ViewCarouselIcon,
  PrivacyTip as PrivacyTipIcon,
} from '@mui/icons-material';

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {/* #1 데시보드 */}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={HomeIcon}
        numver={1}
        name="데시보드"
        noChild
        path="/"
      />
      {/* #2 회원*/}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={AccessibilityNewIcon}
        numver={2}
        name="켈린더"
        noChild
        path="/calendar"
      />
      {/* #2 회원*/}
      {/* <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={AccessibilityNewIcon}
        numver={2}
        name="켈린더"
        child={[
          { name: '페이지 관리', path: '/user/pacer' },
          { name: '상점 관리', path: '/user/store' },
          { name: '휴면 관리', path: '/user/dormant' },
        ]}
      /> */}
    </>
  );
}
