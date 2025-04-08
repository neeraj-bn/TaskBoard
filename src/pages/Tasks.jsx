import { useState } from 'react';
import TaskModal from '../components/TaskModal';
import Lottie from 'lottie-react';
import emptyAnimation from '../assets/empty-animation.json';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleSaveTask = (taskData) => {
    if (taskData.id) {
      setTasks(tasks.map(task => 
        task.id === taskData.id ? { ...taskData } : task
      ));
    } else {
      setTasks([...tasks, { ...taskData, id: Date.now() }]);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Done':
        return 'status-done';
      case 'In Progress':
        return 'status-progress';
      default:
        return 'status-todo';
    }
  };

  return (
    <div className="task-container">
      <h1>Tasks</h1>
      <button className="btn" onClick={handleAddTask}>Add New Task</button>

      {tasks.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <div className="lottie-container">
            <Lottie
              animationData={emptyAnimation}
              className="lottie-animation"
            />
          </div>
          <p>No tasks yet. Add your first task!</p>
        </div>
      ) : (
        <div className="tasks-grid">
          {tasks.map(task => (
            <div key={task.id} className="task-card">
              <h3 className="task-title">{task.title}</h3>
              <p className="task-description">{task.description}</p>
              <span className={`task-status ${getStatusClass(task.status)}`}>
                {task.status}
              </span>
              <div>
                <button className="btn" onClick={() => handleEditTask(task)}>Edit</button>
                <button className="btn" onClick={() => handleDeleteTask(task.id)}>Delete</button>
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