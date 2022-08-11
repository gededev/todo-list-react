import { Dispatch, FormEvent, SetStateAction } from "react"
import Task from "../../models/Task"
import { useForm } from "react-hook-form";
import "./TaskForm.css"

interface TaskFormProps {
    setter : Dispatch<SetStateAction<Task[]>>
}

interface formData {
    task: string
}

//Long term improvements - Controlled input for the input text - Error handling and form validation

const TaskForm: React.FC<TaskFormProps> = ({setter})=>{
    
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<formData>();

    const onSubmit = ({task}: formData) => {
        const taskObject = new Task(task)
        setter(prevState => [...prevState, taskObject])
        reset({task: ""})
    }
  
    return (

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add something 🗃️</h1>
        <div className="task-input">
          <input defaultValue="" placeholder="ex: Do laundry"{...register("task")} />
          <button className="add" type="submit">Add task</button>
        </div>
      </form>
    );
}

export default TaskForm