import * as React from 'react';
import TodoContainer from './components/TodoContainer';

const Dashboard : React.SFC = ()=>(
    <div>
        <TodoContainer title='Inbox'/>
    </div>
);

export default Dashboard;
