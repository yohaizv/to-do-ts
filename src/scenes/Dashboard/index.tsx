import * as React from 'react';
import TodoGroup from './components/TodoGroup/';

const Dashboard : React.SFC = ()=>(
    <div>
        <TodoGroup title='Inbox'/>
    </div>
);

export default Dashboard;
