export const Source = (props:{tableID:string, secret:string})=> <>
    <label class="block my-2">
        <span class="text-gray-700">Secret</span>
    </label>
    <input type="text" name="secret" class="mt-1 block" />

    <label class="block my-2">
        <span class="text-gray-700">Table ID</span>
    </label>
    <input type="text" name="tableId" class="mt-1 block" /> 
</>
