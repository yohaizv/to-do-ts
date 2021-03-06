import * as React from "react";
import { ISimpleDate } from 'src/models/ISimpleDate';
import TaskEditor from "./components/ToDoCreator";

export enum ActionType {
  Create,
  Update
}

interface IUpsertTaskProps {
  actionType: ActionType;
  taskId?: number;
  taskDescription?: string;
  taskDueDate?: ISimpleDate;
  onSave: ( description: string, dueDate: ISimpleDate,taskId?: number,) => void;
  onCancel: () => void;
}
interface IUpsertTaskState {
  description: string;
  dueDate: ISimpleDate;
  id?: string;
}
export default class UpsertTask extends React.Component<
  IUpsertTaskProps,
  IUpsertTaskState
> {
  constructor(props: IUpsertTaskProps) {
    super(props);
    const { taskDescription, taskDueDate } = props;
    this.state = {
      description: taskDescription || "",
      dueDate: taskDueDate || {year:2005,month:1,day:1}
    };

    this.bindFunctions();
  }

  public upsertTask() {
    const { onSave, taskId } = this.props;
    const { description, dueDate } = this.state;
    onSave( description, dueDate,taskId);
    this.setState({
      description:  "",
      dueDate: {year:2005,month:1,day:1}
    })
  }

  public onTaskDescriptionChange(event: any) {
    this.setState({
      description: event.target.value
    });
  }

  public onTaskDueDateChange(dueDate: ISimpleDate) {
    // tslint:disable-next-line:no-console
    console.log(dueDate);
    if (!dueDate) {
      return;
    }
    this.setState({
      dueDate
    });
  }

  public render() {
    const { description, dueDate } = this.state;
    const { actionType, onCancel } = this.props;
    return (
      <TaskEditor
        taskDescription={description}
        onTaskDescriptionChange={this.onTaskDescriptionChange}
        onTaskDueDateChange={this.onTaskDueDateChange}
        taskDueDate={dueDate}
        onSave={this.upsertTask}
        onCancel={onCancel}
        saveButtonText={
          actionType === ActionType.Create ? "Add Task" : "Update"
        }
      />
    );
  }

  private bindFunctions() {
    this.onTaskDescriptionChange = this.onTaskDescriptionChange.bind(this);
    this.onTaskDueDateChange = this.onTaskDueDateChange.bind(this);
    this.upsertTask = this.upsertTask.bind(this);
  }
}
