// import { useSignal } from "@preact/signals";
// import Counter from "@islands/Counter.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">API</h1>
        <p class="my-4">
          Available Verisons:
          <a href="/api/2024.01/">
            <code class="mx-2">/2024.01</code>
          </a>
        </p>
        {/* <Counter count={count} /> */}
      </div>
    </div>
  );
}
