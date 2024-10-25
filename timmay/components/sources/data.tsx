

// export const zCalendar = z.object({
//     title: z.string(),
//     description: z.string(),
//     start: z.date(),
//     end: z.date(),
    
//     isAllDay: z.boolean(), // default false
//     visibility: z.enum(["public", "private"]), // default: private
//     busy: z.boolean(),
//     url: z.optional(z.string()),

//     location: z.optional(z.string()),
    
//     attendees: z.array(z.string()),
//     organizer: z.union([string
//       z.string(),
//       z.object({
//         name: z.string(), // logged in? 
//         email: z.optional(z.string()), // logged in?
//       }),
//     ]),
    
//     sourceOrig: z.object({
//       name: z.string(), // "data form"
//       data: z.string(), // hash of provided data
//     }),
    
//   });

export const Source = (_props:{tableID:string, secret:string})=> <>
    <label class="block my-2">
        <span class="text-gray-700">Title</span>
        <input name="data-title" type="text" required class="mt-1 block placeholder:text-gray-400" 
            placeholder={'Title'}
            defaultValue={""}
        />
    </label>

    <label class="block my-2">
        <span class="text-gray-700">Desciption</span>
        <input name="data-description" type="textarea" required 
            rows={4} defaultValue={""} placeholder={"Description"}
            class="block w-full p-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
    </label>

    <label class="block my-2">
        <span class="text-gray-700">Start</span>
        <input name="data-start" type="datetime-local"required  class="mt-1 block" />
    </label>

    <label class="block my-2">
        <span class="text-gray-700">End</span>
        <input name="data-end" type="datetime-local" required class="mt-1 block" />
    </label>

    <div>
      <label htmlFor="data-url" class="block text-sm font-medium leading-6 text-gray-900">
        URL
      </label>
      <div class="mt-2 flex rounded-md shadow-sm">
        <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
          https://
        </span>
        <input
          id="data-url"
          name="data-url"
          type="text"
          placeholder="www.example.com"
          class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div class="flex flex-col">
        <label class="flex flex-row justify-evenly block my-2">
            <span class="text-gray-700">All Day?</span>
            <input name="data-allday" type="checkbox" value="" class="mt-1 block" /> 
        </label>

        <label class="flex flex-row justify-evenly block my-2">
            <span class="text-gray-700">Busy</span>
            <input name="data-url" type="checkbox" checked class="mt-1 block" /> 
        </label>

        <label class="flex flex-row justify-evenly block my-2">
            <span class="text-gray-700">Mark as Private</span>
            <input name="data-isPrivate" type="checkbox"  checked class="mt-1 block" /> 
        </label>    
    </div>
</>
