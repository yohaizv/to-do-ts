import { Button, DatePicker } from "antd";
import * as moment from "moment";
import { Moment } from 'moment';
import * as React from "react";
import { ISimpleDate } from 'src/models/ISimpleDate';
import styled from "styled-components";

interface IToDoCreatorProps {
  taskDescription: string;
  onTaskDescriptionChange: (e: any) => void;
  taskDueDate: ISimpleDate;
  onTaskDueDateChange: (newDate: ISimpleDate) => void;
  onSave: () => void;
  onCancel: () => void;
  saveButtonText: string;
}

const ToDoCreator: React.SFC<IToDoCreatorProps> = props => {

  const onDateChange = (momentDate:Moment)=>{
    const newDate:ISimpleDate = {
      day : momentDate.date(),
      month : momentDate.month(),
      year: momentDate.year(),

    }    
    props.onTaskDueDateChange(newDate);
  };

  return (
    <div>
      <TaskContainer>
        <TaskDescriptionContainer>
          <TaskDescriptionInput
            onChange={props.onTaskDescriptionChange}
            type="text"
            value={props.taskDescription}
          />
        </TaskDescriptionContainer>
        <div>
          <DatePicker
            value={moment(props.taskDueDate)}
            onChange={onDateChange}
          />
        </div>
      </TaskContainer>
      <ButtonsContainer>
        <Button type="primary" style={{ marginRight: 10 }} onClick={props.onSave}>
          {props.saveButtonText}
        </Button>
        <a href="#" onClick={props.onCancel}>Cancel</a>
      </ButtonsContainer>
    </div>
  );
};

export default ToDoCreator;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 5px 0 5px 0;
  padding: 5px;
`;

const TaskDescriptionContainer = styled.div`
  border-right: 1px solid #ddd;
  padding-right: 10px;
  margin-right: 10px;
  width: 70%;
`;
const TaskDescriptionInput = styled.input`
  border: 0px;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
