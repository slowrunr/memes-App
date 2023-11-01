const MEMES_MOCK = [
  {
    id: "181913649",
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
    width: 1200,
    height: 1200,
  },

  {
    id: "112126428",
    name: "Distracted Boyfriend",
    url: "https://i.imgflip.com/1ur9b0.jpg",
    width: 1200,
    height: 800,
  },
];

export class API {
  constructor() {
    this.baseURL = "https://jsonplaceholder.typicode.com";
  }

  getMemes() {
    return MEMES_MOCK;
  }
}
