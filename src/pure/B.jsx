import React from 'react';
import PropTypes from 'prop-types'
import { Task } from '../models/taks.class';

const BComponet = ({task}) => {
    return(
        <div>
            <h2>
                {task.nombre}
            </h2>
            <h2>
                {task.apellido}
            </h2>
            <h2>
                {task.gmail}
            </h2>
            <h2>
                {task.contacto ? 'contacto en linea':'contacto no disponible'}
            </h2>
            
        </div>
    );
};

BComponet.propTypes = {
    task: PropTypes.instanceOf(Task),
}

export default BComponet; 