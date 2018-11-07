import * as React from 'react';
import TodoItem from './components/TodoItem.tsx';

const Dashboard : React.SFC = ()=>(
    <div>
        <TodoItem message='Call to Jo' createdOn={new Date()}/>
    </div>
);

export default Dashboard;
