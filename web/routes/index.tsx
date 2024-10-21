import { Head } from "$fresh/runtime.ts";
import { setCookie } from "$std/http/cookie.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.formData();
    // if (form.get("username") === "craft" && form.get("password") === "craft") {
    if (true) {
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: "bar", // this should be a unique value for each session
        maxAge: 120,
        sameSite: "Lax", // this is important to prevent CSRF attacks
        domain: url.hostname,
        path: "/",
        secure: true,
      });

      headers.set("location", "/app");
      console.log("signin successful");
      return new Response(null, {
        status: 303, // "See Other"
        headers,
      });
    } else {
      return new Response(null, {
        status: 403,
      });
    }
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Sign In | Craft Command Center</title>
      </Head>
      <div class="flex-col justify-start items-stretch inline-flex w-full h-full gap-[120px]">
        <div class="flex flex-col items-center justify-start w-full gap-4 px-8 py-8">
          <h1>Sign In</h1>
          <h2>Craft Command Center</h2>
        </div>
        <form
          method="post"
          action="/"
          class=' class="mt-[200px] flex flex-col items-stretch gap-2.5 px-8 py-8 xpy-[14px] relative bg-white border w-[400px]"'
        >
          <input type="text" name="username" value="username" />
          <input type="password" name="password" value="password" />
          <button>Sign In</button>
        </form>
      </div>
    </>
  );

  // const count = useSignal(3);
  // return (
  //   <div class="px-4 py-8 mx-auto bg-[#86efac]">
  //     <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
  //       <img
  //         class="my-6"
  //         src="/logo.svg"
  //         width="128"
  //         height="128"
  //         alt="the Fresh logo: a sliced lemon dripping with juice"
  //       />
  //       <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
  //       <p class="my-4">
  //         Try updating this message in the
  //         <code class="mx-2">./routes/index.tsx</code> file, and refresh.
  //       </p>
  //       <Counter count={count} />
  //     </div>
  //   </div>
  // );
}
