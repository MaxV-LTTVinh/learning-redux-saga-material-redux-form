import { withStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import TaskItem from '../TaskItem';
import styles from './styles';

const TaskList = (props) => {
  const { tasks = [], status, classes } = props;
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  const rederTaskItem = () => {
    return tasks.filter((t) => t.status === status.value)
      .map((task, index) => {
        const { title } = task;
        return (<TaskItem title={title} status={status} key={index} task={task} />);
      });
  };
  return (
    <div>
      {rederTaskItem()}
    </div>
  );
};

export default withStyles(styles)(TaskList);
