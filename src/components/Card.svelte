<script>
    import { createEventDispatcher } from "svelte"    
    export let item = {}

    const dispatch = createEventDispatcher()

    const deleteTodo = () => {
        dispatch('delete-item', item)
    }
</script>

<div class="card relative rounded-lg py-1 px-5 mt-5 {item.done == 1 ? 'bg-green-100' : 'bg-blue-100' }">   
    <slot></slot>
    <button type="button"
    on:click={deleteTodo}
    class="
        rounded-full
        absolute
        right-3
        top-2
        text-center
        hover:bg-slate-400
        hover:text-white
        text-gray-400
        transition-opacity
    "
    >x</button>
</div>

<style>
    button{
        padding: 0px 9px 4px 9px;
    }
</style>