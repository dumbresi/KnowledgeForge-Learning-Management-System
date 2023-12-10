import React from 'react'
import Modules from '../models/modules'

type ModuleCardProps = {
    module: Modules;
}

const ModuleCard = (props: ModuleCardProps) => {
    const { module } = props;

    return (
        <div>
            <div>
                <h1 className='bg-light_blue m-2 px-2 border-2'>{module.title}</h1>
            </div>
        </div>
    );
}


export default ModuleCard