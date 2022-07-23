import {Task} from 'src/interfaces/Tasks';

interface Props {
  tasks: Task[]
}

export default function index({tasks} : Props) {

  {
   tasks.length === 0 ? <h1>No Taskj</h1> : <h1>Tasks</h1>
  }
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/tasks');
  const tasks = await res.json();

return {
  props: {
    tasks: tasks,
  },
};

};