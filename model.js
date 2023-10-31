const PREVIEW_MOCK = {
  url: "https://i.imgflip.com/30b1gx.jpg",
  textTop: "text above",
  textBottom: "text under",
};

export class Model {
  constructor() {
    this.preview = PREVIEW_MOCK;
  }

  getPreview() {
    return this.preview;
  }
}
