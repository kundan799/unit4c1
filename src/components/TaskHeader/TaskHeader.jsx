import React from "react";

import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask =`of  ${0} task complited` ;
  let unCompletedTask = `you have ${0}`;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
    <div className="top">
    <h1 >Todo List</h1>
    <div data-cy="task-header" className={styles.taskHeader}>
      <b data-cy="header-remaining-task">{unCompletedTask}</b>
      <b data-cy="header-total-task">{totalTask}</b>
    </div>
    </div>
    </>
  );
};

export default TaskHeader;
