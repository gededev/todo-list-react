import Task from "../../models/Task"
import './TaskElement.css'


interface TaskProps {
    taskElement: Task;
    setter : ()=>void;
}

const TaskElement: React.FC<TaskProps> = ({taskElement,setter})=>{
    const {task, done} = taskElement
    return (
    <div className="task">
        <p>• {task}</p>
        <button className="toggle"  onClick={setter}>
            <i className={`material-icons ${done? "done" : ""}`}>{done ? "check_circle" : "circle"}</i>
        </button>
    </div>
    )
}

export default TaskElement