import type { PageProps } from "$fresh/server.ts";

const sources = {
    airtable: '/airtable',
    data: '/data',
    google: '/google',
    notion: '/notion',
    url: '/url',
    yahoo: '/yahoo',
    outlook: '/outlook',
}

export default function FromPage(props: PageProps) {
    return (
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">View Data Sources</h1>
          <p class="my-4">
            Available & Configured Sources:
            <ul>
            {Object.entries(sources).map(([name, path])=> (
                <li>
                    <a href={`${props.url.href}${path}`}>
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
  