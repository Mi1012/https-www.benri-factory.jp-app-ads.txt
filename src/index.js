export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/app-ads.txt") {
      return new Response(
        "google.com, pub-2231015021493939, DIRECT, f08c47fec0942fa0\n",
        {
          headers: {
            "content-type": "text/plain; charset=utf-8",
          },
        }
      );
    }

    return fetch(request);
  },
};
