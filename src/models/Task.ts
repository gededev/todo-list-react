class Task {
    readonly task: string;
    done: boolean;
 
  constructor(task?: string) {
    this.task = ""
    if (task !== undefined) {
      this.task = task;
    }
    this.done = false
  }
    
}

export default Task