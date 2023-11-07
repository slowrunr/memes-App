const PREVIEW_MOCK = {
  // url: "",
  textTop: "text above",
  textBottom: "text under",
};

export class Model {
  constructor({ onCurrentMemeIdChange, onMemeschange }) {
    this.memes = [];
    this.currentMemeId = null;
    this.preview = PREVIEW_MOCK;

    this.onCurrentMemeIdChange = onCurrentMemeIdChange;
    this.onMemeschange = onMemeschange;
  }

  getMemes() {
    return this.memes;
  }

  setMemes(memes) {
    this.memes = memes;
    // this.currentMemeId = memes[0].id;
    this.onMemeschange(this.memes);
  }

  setCurrentMemeId(currentMemeId) {
    this.currentMemeId = currentMemeId;
    this.onCurrentMemeIdChange();
  }

  getCurrentMemeId() {
    return this.currentMemeId;
  }

  getPreview() {
    return this.preview;
  }

  getCurrentMeme() {
    let currentMeme = null;

    this.memes.forEach((meme) => {
      console.log(meme);
      console.log(this.getCurrentMemeId());
      if (meme.id === this.getCurrentMemeId()) {
        currentMeme = meme;
      }
    });

    return currentMeme;
    // return this.memes[this.getCurrentMemeId];
  }
}
