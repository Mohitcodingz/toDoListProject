import RightSiderNavbar from '../components/RightSiderNavbar'
import StaticCards from '../components/shared/StaticCard'
import data from '../data/tasks.json'
import useLocalStorage from '../hooks/useLocalStorage'

export default function Overview() {
  const [task, SetTask] = useLocalStorage("taskflow_tasks", data.task)

  return (
    <div>
      <RightSiderNavbar />
      <StaticCards task={task} SetTask={SetTask} />
    </div>
  )
}
