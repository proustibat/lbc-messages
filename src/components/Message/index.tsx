import React, { useState, ChangeEvent } from 'react';
import {
  Accordion,
  Typography,
  createStyles,
  Theme,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { ExpandMore, Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      marginLeft: theme.spacing(1),
    },
    body: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

export type MessageProps = {
  id: string;
  title: string;
  body: string;
  isPrivate?: boolean;
};

export const Message = ({
  id,
  title,
  body,
  isPrivate = false,
}: MessageProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(true);

  const handleChange = (event: ChangeEvent<{}>, isExpanded: boolean) =>
    setExpanded(isExpanded);

  return (
    <Accordion expanded={expanded} onChange={handleChange} data-testid="message-accordion">
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        {isPrivate ? <VisibilityOff /> : <Visibility />}
        <Typography className={classes.heading} data-testid="title">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.body}>{body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Message;
