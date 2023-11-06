const PREVIEW_MOCK = {
  url: "https://i.imgflip.com/30b1gx.jpg",
  textTop: "text above",
  textBottom: "text under",
};

export class Model {
  constructor() {
    this.memes = [];
    this.currentMemeId = null;
    this.preview = PREVIEW_MOCK;
  }

  getMemes() {
    return this.memes;
  }

  setMemes(memes) {
    this.memes = memes;
    this.currentMemeId = memes[0].id;
  }

  setCurrentMemeId(currentMemeId) {
    this.currentMemeId = currentMemeId;
  }

  getCurrentMemeId() {
    return this.currentMemeId;
  }

  getPreview() {
    return this.preview;
  }
}
