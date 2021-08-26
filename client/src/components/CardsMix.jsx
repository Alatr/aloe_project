import { uniqueId } from 'lodash';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      height: theme.spacing(6),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'grab',
      border: 1,
      borderColor: 'black',
      borderStyle: 'solid',
    },
  },
}));

function prepareSentence(sentence) {
  return sentence.split(' ').map((word, i) => ({ word, order: i, id: uniqueId() }));
}

const SentencesMix = ({ value }) => {
  const classes = useStyles();
  function dragStartHandle() {}
  function dragEndHandle(e) {
    e.preventDefault();
  }
  function dragOverHandle(e) {
    e.preventDefault();
  }
  function droptHandle() {}
  return (
    <div className={classes.root}>
      {prepareSentence(value).map(({ word, id }) => (
        <div
          id={id}
          elevation={3}
          onDragStart={e => {
            dragStartHandle(e, word);
          }}
          onDragLeave={e => {
            dragEndHandle(e);
          }}
          onDragEnd={e => {
            dragEndHandle(e);
          }}
          onDragOver={e => {
            dragOverHandle(e);
            e.target.style.background = 'lightgray';
          }}
          onDrag={e => {
            droptHandle(e, word);
          }}>
          <span>{word}</span>
        </div>
      ))}
    </div>
  );
};

export default SentencesMix;
