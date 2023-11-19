export class API {
  constructor() {
    this.baseURL = "https://api.imgflip.com";
  }

  getMemes() {
    return fetch(`${this.baseURL}/get_memes`).then((data) => data.json());
  }
}

// const MEMES_MOCK = [
//   {
//     id: "181913649",
//     name: "Drake Hotline Bling",
//     url: "https://i.imgflip.com/30b1gx.jpg",
//     width: 1200,
//     height: 1200,
//   },

//   {
//     id: "112126428",
//     name: "Distracted Boyfriend",
//     url: "https://i.imgflip.com/1ur9b0.jpg",
//     width: 1200,
//     height: 800,
//   },

//   {
//     id: "217743513",
//     name: "UNO Draw 25 Cards",
//     url: "https://i.imgflip.com/3lmzyx.jpg",
//     width: 500,
//     height: 494,
//   },
// ];
