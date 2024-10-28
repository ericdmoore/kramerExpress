import type { PageProps } from "$fresh/server.ts";

export default function FromSourceToMenu(props: PageProps) {
    const params = props.params
    console.log(props)
    return (
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">{`From ${params.source} → to:`}</h1>
          <p class="my-4">
            <pre> {JSON.stringify(props, null, 2)} </pre>
          </p>
        </div>
      </div>
    );
  }
  