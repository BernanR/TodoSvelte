<script>
    import Card from "./Card.svelte"
    import { fade, scale } from 'svelte/transition'
    import { createEventDispatcher } from "svelte";
    export let toDoData = []

    const dispatch = createEventDispatcher()
    const deleteItem = (e) => {
        dispatch('delete-item', e.detail)
    }

    const handleClick = (item) => {
        item.done = !item.done
        dispatch('mark-done-task', item)
    }
        

</script>

{#each toDoData as td (td.id) }
    <div in:scale out:fade>
        <Card item={td} on:delete-item={deleteItem}>
            <p class="absolute text-xs -top-0 -left-3 priority rounded-full p-2 text-center w-8 h-8 bg-rose-500 text-white">
                {td.priority}
            </p>
            <div class="mt-1 ml-2">            
                <p class="{td.done ? 'line-through' : ''}"><input checked={td.done? true : false} on:click={handleClick(td)} type="checkbox" class="cursor-pointer p-1 mr-2 h-4 w-4">{td.task}</p>
            </div>
        </Card>
    </div>
{/each}