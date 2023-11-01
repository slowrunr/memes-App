const PREVIEW_MOCK = {
  url: "https://i.imgflip.com/30b1gx.jpg",
  textTop: "text above",
  textBottom: "text under",
};

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

export class Model {
  constructor() {
    this.memes = [];
    this.currentMemeId = null;
    this.preview = PREVIEW_MOCK;
  }

  getMemes() {
    return this.memese;
  }

  setMemes(memes) {
    this.memes = memes;
    this.currentMemeId = memes[0].id;
  }

  getCurrentMemeId() {
    return this.currentMemeId;
  }

  getPreview() {
    return this.preview;
  }
}
