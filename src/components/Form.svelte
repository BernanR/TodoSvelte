<script>
    import { v4 as uuidv4} from 'uuid'
    import { createEventDispatcher } from 'svelte';

    let priority = 1
    let btnDisabled = true
    let task = ''
    let minLengthTesk = 5
    let message

    const priorities = [1,2,3,4,5,6,7,8,9,10]
    const dispatch = createEventDispatcher()

    const handleInput = () => {
        if (task.trim().length > minLengthTesk ) {
            btnDisabled = false
            message = null
        } else if (task.trim().length == 0) {
            message = null
        } else {
            message = `Task must be at least ${minLengthTesk} caracteres`
            btnDisabled = true
        }
    }

    const onSubmitTask = () => {
        if (task.trim().length > minLengthTesk) {
            const newTask = {
                id : uuidv4(),
                priority: priority,
                task: task
            }
            dispatch('add-task', newTask)
            task = ``
            btnDisabled = true
        }
    }

</script>
<div class="text-center py-5">
    <span class="inline-block w-full text-xs text-gray-700">Priority</span>
    {#each priorities as key }
        <label class="
        {priority === key ? 'bg-rose-900' : 'bg-rose-500 '}
        cursor-pointer
        text-white
        font-semibold        
        hover:bg-rose-900
        m-2 p-2 h-10 w-10 inline-block rounded-full">
        <input on:click={() => priority = key}  class="hidden" name="priority" type="radio" value="{key}">{key}</label>
    {/each}
</div>

<form on:submit|preventDefault={onSubmitTask}>
    <div class="pl-10 p-1 grid grid-cols-12 bg-white rounded-full border-gray-300">        
        <div class="col-span-11">
            <input 
            bind:value={task}
            on:input={handleInput}
            type="text" 
            name="task" 
            id="task" 
            autocomplete="given-name"
            placeholder="What do I have to do today?"
            class="            
                h-8
                text-2xl
                font-semibold
                rounded-full
                mt-1     
                w-full
                focus:border-indigo-500 
                focus:ring-indigo-500
                pl-5
                pr-5
                text-fuchsia-900
                "
            >        
        </div>
        <div class="text-right">
            <button disabled={btnDisabled} type="submit" 
            class="font-semibold hover:bg-rose-900 disabled:bg-rose-900 bg-rose-600 text-white rounded-full p-2 w-full"
            >Create</button>
        </div>
    </div>
</form> 
{#if message}
    <div class="text-center">
        <span class="text-red-400">{message}</span>
    </div>
{/if}