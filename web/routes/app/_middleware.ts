import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

const redirectWithoutUser = (req: Request, ctx: FreshContext) => {
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
};

export const handler = [
  redirectWithoutUser,
];
