import { Head } from "$fresh/runtime.ts";
import { deleteCookie, setCookie } from "$std/http/cookie.ts";
import { Handlers, type PageProps } from "$fresh/server.ts";

const pathAndDomain = (req: Request) => (
  { path: "/", domain: (new URL(req.url)).hostname }
);

export const handler: Handlers = {
  GET(req, ctx) {
    const message = (new URL(req.url)).searchParams.get('message')
    console.log('message', message)
    console.log('searchParams', Object.fromEntries((new URL(req.url)).searchParams))
    return ctx.render({message})
  },
  DELETE(req) {
    const headers = new Headers({ 'hx-redirect': '/' });
    deleteCookie(headers, "auth", pathAndDomain(req));
    return new Response(null, {
      status: 200,
      headers,
    });
  },
  async POST(req) {
    const { username, password } = Object.fromEntries(await req.formData())
    if (username == 'admin') {
      const headers = new Headers({ 'location': '/app' });
      setCookie(headers, {
        name: "auth",
        value: "bar", // this should be a unique value for each session
        maxAge: 60 * 60 * 24,
        sameSite: "Lax", // this is important to prevent CSRF attacks
        secure: true,
        ...pathAndDomain(req)
      });

      console.log("signin successful");
      return new Response(null, {
        status: 303, // "See Other"
        headers,
      });
    } else {
      const headers = new Headers();
      headers.set("location", "/?message=UNAUTHORIZED_CREDENTIALS");
      return new Response(null, {
        status: 303,
        headers
      });
    }
  },
};

type HomeProps = { message?: keyof typeof codeToHuman }
export default function Home({data: { message }}: PageProps<HomeProps>) {
  console.log('message', message)
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
          <input type="text" name="username" value="admin" />
          <input type="password" name="password" value="password" />
          <button>Sign In</button>
          { message ? <SigninMessage message={message}/> : ''}
        </form>
      </div>
    </>
  );

}

const codeToHuman = {
  UNAUTHORIZED_CREDENTIALS: 'Unauthorized credentials.'
}

const SigninMessage = ({message}: { message: keyof typeof codeToHuman}) => {
  return (
    <>
    <div>{codeToHuman[message]}</div>
    </>
  )
}