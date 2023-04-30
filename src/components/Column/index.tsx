// Components
import Task from "@/components/Task";

export default function Column() {
  return (
    <div className="flex flex-col gap-4">
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
    </div>
  )
}