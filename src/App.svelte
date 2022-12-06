<script>
  import TodoList from "./components/TodoList.svelte";
  import Form from "./components/Form.svelte"
  import { feedbacks} from "./feedbackList"

  let toDos = feedbacks

  const addTask = (e) => {
    const newTodo = e.detail
    toDos = [newTodo, ...toDos]
  }

  const deleteItem = (e) => {
    const item = e.detail
    toDos = toDos.filter(e => e.id != item.id)
  }

  const setTaskAsDone = (e) => {
    const item = e.detail
    toDos = toDos.filter(e => e.id != item.id)
    if (item.done == 1)
      toDos.push(item)
    else
      toDos = [item, ...toDos]
  }
</script>

<main>
  <img class="absolute top-1 left-2" src="./public/logo.png" alt="">
 <div class="container">  
  <div class="rounded-lg mt-10 px-20 py-6 bg-indigo-200 shadow-lg">
    <Form on:add-task={addTask}></Form>
  </div>
  <div class="grid grid-cols-2 rounded-lg mt-8 px-5 py-5 bg-zinc-200">
    <div>
      <h2 class="font-semibold text-gray-900">This is what you have to do today.</h2>    
    </div>
    <div class="text-right text-sm">
      <p>12/2/2022</p>
    </div>
  </div>



  <div class="px-12 mt-8 ">
    <div class="grid grid-cols-2">
      <div>
          {toDos.length} tesks
      </div>
      <div class="text-right text-sm">
        <p>Completed</p>
      </div>
    </div>
    <TodoList toDoData={toDos} on:delete-item={deleteItem} on:mark-done-task={setTaskAsDone} ></TodoList>
  </div>

 </div>


</main>
