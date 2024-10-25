/**
 * Provide a Form that collects table ID and API key from the user
 */

const preface = '/api/2024.01/from/airtable'

const destinations = {
  airtable: '/to/airtable',
  google: '/to/google',
  notion: '/to/notion',
  yahoo: '/to/yahoo',
  outlook: '/to/outlook',
  ical: '/to/ics'
}


/**
 * @todo: how to handle the secret...
 * Just plop it in the base64 encoded string in the search params?
 * Or do something more secure? AES encryption? ECDSA? etc.
 *  if opting for the latter, how to handle the key?
 *  the key is in the headers? and retained for a few minutes?
 *  maybe the key IS the JWT value, which is passed around in the headers/cookies?
 * @returns 
 */
export default function Home() {
    return (
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Airtable</h1>
          <form action={`${preface}`} method="post">
            <label class="block my-2">
              <span class="text-gray-700">Secret</span>
            </label>
            <input type="text" name="secret" class="mt-1 block" />

            <label class="block my-2">
              <span class="text-gray-700">Table ID</span>
            </label>
            <input type="text" name="tableId" class="mt-1 block" />

          </form>
          
          <p class="my-4"> Transform To</p>
          <ul>
            {Object.entries(destinations).map(([name, path])=> (
                <li>
                    <a href={`${preface}${path}`}>
                        <code class="mx-2">+ {name}</code>
                    </a>
                </li>
            ))}
            </ul>
        </div>
      </div>
    );
  }
  