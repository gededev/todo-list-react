import { Dispatch, SetStateAction } from "react"
import Task from "../../models/Task"
import TaskElement from "../TaskElement/TaskElement"

interface TaskListProps {
    tasks: Task[]
    setter: Dispatch<SetStateAction<Task[]>>
}

const TaskList: React.FC<TaskListProps> = ({tasks, setter})=>{
    return (
    <div>
        {tasks && 
        tasks.map((task, index) => {
            function toggleTask() {
                setter(prevState => prevState.splice(index, 1, {...task, done: !task.done}))
            }
            return( <TaskElement taskElement={task} key={index} setter={toggleTask}/>)
        })}
    </div>
    )
}

export default TaskList