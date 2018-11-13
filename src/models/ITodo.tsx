import { ISimpleDate } from './ISimpleDate';

export default interface ITodo {  
    message: string;
    dueDate: ISimpleDate;
    completed: boolean;
  }
  