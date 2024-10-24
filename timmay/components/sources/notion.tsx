
export const Source = ()=> <>
    <div>
      <div class="flex flex-row justify-between">
        <label htmlFor="account-secret" class="text-sm font-medium leading-6 text-gray-900">
          Account Secret
        </label>
        <span id="account-secret-reqd" class="text-sm leading-6 text-gray-500">
          Required
        </span>
      </div>
      <div class="mt-2">  
        <input
          id="account-secret"
          name="account-secret"
          type="text"
          placeholder="000000-0000-0000-000000"
          aria-describedby="account-secret-reqd"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <label class="block my-2">
        <span class="text-sm font-medium text-gray-700">Notion DB Id</span>
        <input type="text" name="noition-db-id" class="mt-1 block" /> 
    </label>
    
</>
