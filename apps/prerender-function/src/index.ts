import { PRERENDERED_DOMAINS, BOT_AGENTS, IGNORE_EXTENSIONS } from "./config";

addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  const { hostname } = url;
  const requestUserAgent = (
    request.headers.get("User-Agent") ?? ""
  ).toLowerCase();
  const xPrerender = request.headers.get("X-Prerender");
  const pathName = url.pathname.toLowerCase();
  const ext = pathName.substring(pathName.lastIndexOf(".") ?? pathName.length);

  if (
    !xPrerender &&
    containsOneOfThem(BOT_AGENTS, requestUserAgent) &&
    !isOneOfThem(IGNORE_EXTENSIONS, ext) &&
    isOneOfThem(PRERENDERED_DOMAINS, hostname)
  ) {
    event.respondWith(prerenderRequest(request));
  }
});

/**
 * Helper function to check if an array contains an exact match for an element or not.
 *
 * @param {string[]} array - The array to check.
 * @param {string} element - The element to check if the array contains.
 * @returns {boolean}
 */
function isOneOfThem(array: string[], element: string) {
  return array.some((e) => e === element);
}

/**
 * Helper function to check if an array contains an element or not.
 *
 * @param {string[]} array - The array to check.
 * @param {string} element - The element to check if the array contains.
 * @returns {boolean}
 */
function containsOneOfThem(array: string[], element: string) {
  return array.some((e) => element.indexOf(e) !== -1);
}

/**
 * Function to request the prerendered version of a request.
 *
 * @param {Request} request - The request received by CloudFlare
 * @param {Env} env - The environment variables
 * @returns {Promise<Response>}
 */
const prerenderRequest = async (request: Request) => {
  const { url, headers } = request;
  const prerenderUrl = `https://service.prerender.io/${url}`;
  const headersToSend = new Headers(headers);
  headersToSend.set("X-Prerender-Token", PRERENDER_API_KEY);

  const prerenderRequest = new Request(prerenderUrl, {
    headers: headersToSend,
    redirect: "manual",
  });

  return await fetch(prerenderRequest);
};
