const content = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

class NewsApi {
  constructor() {
    const apikey = process.env.API_KEY;
  }

  getContent() {
    return content;
  }
}

module.exports = { NewsApi };
