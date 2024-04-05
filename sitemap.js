const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({
  hostname: "http://www.operatiezwerfkat.be",
  lastmodDateOnly: false, // defaults to false, flip to true for baidu
  xmlns: {
    // XML namespaces to turn on - all by default
    news: false,
    xhtml: true,
    image: true,
    video: false,
    // custom: ['xmlns:custom="https://example.com"']
  },
  errorHandler: undefined,
});

const writeStream = createWriteStream("./public/sitemap.xml");
sitemap.pipe(writeStream);

// sitemap.write({url: "/", changefreq: 'daily', priority: 0.3 });
sitemap.write("/");
sitemap.write("/castration");
sitemap.write("/stray-cats");
sitemap.write("/introducing-cats");
sitemap.write("/twenty-years-page");

sitemap.end();
