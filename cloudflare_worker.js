addEventListener("fetch", event => {
    let url = new URL(event.request.url);
    if (url.pathname.startsWith("/speed/") || (url.pathname == "/" && url.search == "")) {
      url.href = "https://download.parallels.com/desktop/v19/19.1.1-54734/ParallelsDesktop-19.1.1-54734.dmg";
      let request = new Request(url, event.request);
      event.respondWith(fetch(request));
    }
  })
  