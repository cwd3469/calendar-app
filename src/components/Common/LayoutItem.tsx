import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ListItemButton, SvgIconTypeMap } from '@mui/material';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '5px 0',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface TextProp {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  name: string;
  path: string;
}

interface Child {
  name: string;
  path: string;
}

interface Props extends TextProp {
  expanded: string | false;
  handleChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
  numver: number;
  noChild: boolean;
  child: Child[];
}

const LayoutText = (props: TextProp) => {
  const { Icon, name, path } = props;
  const history = useHistory();
  const ClickHistory = () => {
    history.push(`${path}`);
  };
  return (
    <ListItemButton onClick={ClickHistory}>
      <Typography
        variant="caption"
        display="flex"
        gutterBottom
        sx={{
          alignItems: 'center',
          lineHeight: 1,
          fontSize: '12px',
          marginBottom: 0,
        }}
      >
        <Icon fontSize="small" sx={{ marginRight: '10px' }} />
        <div>{name}</div>
      </Typography>
    </ListItemButton>
  );
};

const LayoutItem = (props: Props) => {
  const { expanded, handleChange, Icon, numver, name, noChild, child, path } = props;
  const history = useHistory();
  const LinkClick = () => {
    return noChild ? history.push(`${path}`) : false;
  };
  return (
    <div onClick={LinkClick}>
      <Accordion
        expanded={noChild ? false : expanded === `panel${numver}`}
        onChange={handleChange(`panel${numver}`)}
      >
        <AccordionSummary
          expandIcon={noChild ? false : <ArrowForwardIosSharpIcon sx={{ fontSize: '0.6rem' }} />}
          sx={{
            minHeight: '38px',
          }}
          aria-controls={`panel${numver}d-content`}
          id={`panel${numver}d-header`}
        >
          <Typography
            variant="caption"
            display="flex"
            gutterBottom
            sx={{
              alignItems: 'center',
              lineHeight: 1,
              fontSize: '12px',
              marginBottom: 0,
            }}
          >
            <Icon fontSize="small" sx={{ marginRight: '10px' }} />
            <div>{name}</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {child.map((item, inx) => {
            return <LayoutText key={inx} Icon={Icon} name={item.name} path={item.path} />;
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
LayoutItem.defaultProps = {
  noChild: false,
  path: '/',
  child: [],
};
export default LayoutItem;
