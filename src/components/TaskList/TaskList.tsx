import { Dispatch, SetStateAction } from "react"
import Task from "../../models/Task"
import TaskElement from "../TaskElement/TaskElement"
interface TaskListProps {
    tasks: Task[]
    setter: Dispatch<SetStateAction<Task[]>>
}

//TODO: improvements with filtering, maybe split todo and done

const TaskList: React.FC<TaskListProps> = ({tasks, setter})=>{
    return (
    <div>
        {tasks && 
        tasks.map((task, index) => {
            function toggleTask() {
                setter(prevState => {
                    const newState = [...prevState] //prevent mutation and no rerender
                    newState.splice(index, 1, {...task, done: !task.done})
                    return newState
                })
            }
            return( <TaskElement taskElement={task} key={index} setter={toggleTask}/>)
        })}
    </div>
    )
}

export default TaskList