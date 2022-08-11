import { Dispatch, FormEvent, SetStateAction } from "react"
import Task from "../../models/Task"
import { useForm } from "react-hook-form";

interface TaskFormProps {
    setter : Dispatch<SetStateAction<Task[]>>
}

interface formData {
    task: string
}

const TaskForm: React.FC<TaskFormProps> = ({setter})=>{
    
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<formData>();

    const onSubmit = ({task}: formData) => {
        const taskObject = new Task(task)
        setter(prevState => [...prevState, taskObject])
        reset({task: ""})
    }
  
    return (

      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="" placeholder="ex: Do laundry"{...register("task")} />
        
        <button type="submit">Add task</button>
      </form>
    );
}

export default TaskForm