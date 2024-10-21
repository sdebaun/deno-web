import { Handlers } from "$fresh/server.ts";
import { deleteCookie, setCookie } from "$std/http/cookie.ts";

const pathAndDomain = (req: Request) => (
  { path: "/", domain: (new URL(req.url)).hostname }
);

export const handler: Handlers = {
  DELETE(req) {
    const headers = new Headers();
    headers.set("hx-redirect", "/");
    deleteCookie(headers, "auth", pathAndDomain(req));
    return new Response(null, {
      status: 200,
      headers,
    });
  },
  async POST(req) {
    const form = await req.formData();
    const username = form.get("username");
    if (username && username > "") {
      console.log(`${username} signin`);
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: "bar", // this should be a unique value for each session
        maxAge: 120,
        sameSite: "Lax", // this is important to prevent CSRF attacks
        secure: true,
        ...pathAndDomain(req),
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
