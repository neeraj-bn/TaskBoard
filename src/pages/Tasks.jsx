import { useState, useEffect } from "react";
import TaskModal from "../components/TaskModal";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
    setIsInitialLoad(false); // mark that initial load is done
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isInitialLoad]);

  const handleAddTask = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleSaveTask = (taskData) => {
    if (taskData.id) {
      setTasks(
        tasks.map((task) => (task.id === taskData.id ? { ...taskData } : task))
      );
    } else {
      setTasks([...tasks, { ...taskData, id: Date.now() }]);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Done":
        return "status-done";
      case "In Progress":
        return "status-progress";
      default:
        return "status-todo";
    }
  };

  return (
    <div className="task-container">
      <h1>Tasks</h1>
      <button className="btn" onClick={handleAddTask}>
        Add New Task
      </button>

      {tasks.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
         <div className="lottie-container">
        <DotLottieReact
          src="https://lottie.host/0fc957e7-c370-4fe6-940a-30399bfaf37c/FItvDK1C9J.lottie"
          loop
          autoplay
          className="lottie-animation"
        />
      </div>
          <p>No tasks yet. Add your first task!</p>
        </div>
      ) : (
        <div className="tasks-grid">
          {tasks.map((task) => (
            <div key={task.id} className="task-card">
              <h3 className="task-title">{task.title}</h3>
              <p className="task-description">{task.description}</p>
              <span className={`task-status ${getStatusClass(task.status)}`}>
                {task.status}
              </span>
              <div>
                <button className="btn" onClick={() => handleEditTask(task)}>
                  Edit
                </button>
                <button
                  className="btn"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <TaskModal
          task={editingTask}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveTask}
        />
      )}
    </div>
  );
}

export default Tasks;
