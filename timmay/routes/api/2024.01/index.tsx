
const preface = '/api/2024.01'

const sources = {
    airtable: '/from/airtable',
    data: '/from/data',
    google: '/from/google',
    notion: '/from/notion',
    url: '/from/url',
    yahoo: '/from/yahoo',
    outlook: '/from/outlook',
}

export default function Home() {
    return (
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">View Data Sources</h1>
          <p class="my-4">
            From These <a href={preface+'/from'}>Available Sources:</a>
            <ul>
            {Object.entries(sources).map(([name, path])=> (
                <li>
                    <a href={`${preface}${path}`}>
                        <code class="mx-2">+ {name}</code>
                    </a>
                </li>
            ))}
            </ul>
          </p>
        </div>
      </div>
    );
  }
  