/**
 * Provide a Form that collects table ID and API key from the user
 */

const preface = '/api/2024.01/from/airtable/to/ics'


export default function Home() {
    return (
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">ICalendar</h1>
          <form method="post" action={`${preface}`}>

            <label class="block my-2">
              <span class="text-gray-700">Auto Complete</span>
            </label>
            <input type="checkbox" name="tableId" class="mt-1 block" />
            <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold my-3 py-2 px-4 rounded">
              <input type="submit" value="Generate" />
            </button>
          
          </form>
          
        </div>
      </div>
    );
  }
  