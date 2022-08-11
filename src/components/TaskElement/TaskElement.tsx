import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { setTextRange } from "typescript";
import Task from "../../models/Task"

interface TaskProps {
    taskElement: Task;
    setter : ()=>void;
}

const TaskElement: React.FC<TaskProps> = ({taskElement,setter})=>{
    return (
    <div>
        <p>{taskElement.task}</p>
        <button  onClick={setter}>
            <i className="material-icons">{taskElement.done ? "check_circle" : "circle"}</i>
        </button>
    </div>
    )
}

export default TaskElement