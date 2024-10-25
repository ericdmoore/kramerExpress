export const Source = (props:{tableID:string, secret:string})=> <>
    <label class="block my-2">
        <span class="text-gray-700">Secret</span>
        <input type="text" name="secret" class="mt-1 block" />
    </label>
    
    <label class="block my-2">
        <span class="text-gray-700">Table ID</span>
        <input type="text" name="tableId" class="mt-1 block" /> 
    </label>
    
</>
