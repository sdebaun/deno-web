import { FreshContext, type Handler } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

interface State {
  data: string;
}

const redirectWithoutUser = (req: Request, ctx: FreshContext<State>) => {
  // if no auth cookie, redirect
  const cookies = getCookies(req.headers);
  console.log(cookies);
  if (!cookies["auth"]) {
    const headers = new Headers();
    headers.set("hx-redirect", "/");
    headers.set("location", "/");
    return new Response(null, {
      status: req.headers.get("hx-request") ? 200 : 303,
      headers,
    });
  }
  return ctx.next();
  // if it's an htmx request...
  // if (req.headers.get('hx-request')) {
  //   // headers.set("location", "/");
  //   return new Response(null, {
  //     status: 200,
  //     headers,
  //   });
  // } else {
  //   return new Response(null, {
  //     status: 303,
  //     headers
  //   })
  // }
  // otherwise
};
// export async function handler(
//   req: Request,
//   ctx: FreshContext<State>,
// ) {
//   // ctx.state.data = "myData";
//   const resp = await ctx.next();
//   // resp.headers.set("server", "fresh server");
//   return resp;
// }
export const handler = [
  redirectWithoutUser,
];
