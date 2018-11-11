import * as React from "react";
import TaskEditor from "./components/ToDoCreator";

export enum ActionType {
  Create,
  Update
}

interface IUpsertTaskProps {
  actionType: ActionType;
  taskId?: string;
  taskDescription?: string;
  taskDueDate?: Date;
  onSave: (description: string, dueDate: Date) => void;
  onCancel: () => void;
}
interface IUpsertTaskState {
  description: string;
  dueDate: Date;
  id?: string;
}
export default class UpsertTask extends React.Component<
  IUpsertTaskProps,
  IUpsertTaskState
> {
  constructor(props: IUpsertTaskProps) {
    super(props);
    const { taskId, taskDescription, taskDueDate } = props;
    this.state = {
      description: taskDescription || "",
      dueDate: taskDueDate || new Date(),
      id: taskId
    };

    this.bindFunctions();
  }

  public upsertTask() {
    const { onSave } = this.props;
    const { description, dueDate } = this.state;
    onSave(description, dueDate);
  }

  public onTaskDescriptionChange(event: any) {
    this.setState({
      description: event.target.value
    });
  }

  public onTaskDueDateChange(dueDate: Date) {
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
