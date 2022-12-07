import React from 'react';
import {Task} from '../../models/taks.class';
import BComponet from '../../../src/pure/B';

const AlistComponet = () => {
    const defaultTask = new Task('Jhon Mauro', 'Zapata', 'Jhmazaja14@gmail.com', false);
    return(
        <div>
            <div>
                you task is:
            </div>
            <BComponet task={defaultTask} />
            
        </div>
    );
};

export default AlistComponet; 