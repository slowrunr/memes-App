const DEFAULT_MEME = {
  url: "https://i.imgflip.com/1bij.jpg",
  textTop: "text on top",
  textBottom: "text below",
};
export class Model {
  constructor({
    onCurrentMemeIdChange,
    onMemesChange,
    onTextTopChange,
    onTextBottomChange,
  }) {
    this.preview = DEFAULT_MEME;
    this.memes = [];
    this.currentMemeId = null;
    this.textTop = "";
    this.textBottom = "";

    this.onMemesChange = onMemesChange;
    this.onCurrentMemeIdChange = onCurrentMemeIdChange;
    this.onTextTopChange = onTextTopChange;
    this.onTextBottomChange = onTextBottomChange;
  }
  getDefaultMeme() {
    return this.preview;
  }

  getMemes() {
    return this.memes;
  }

  setMemes(memes) {
    this.memes = memes;
    this.currentMemeId = memes[0].id;

    this.onMemesChange(this.memes);
    this.onCurrentMemeIdChange();
  }

  setCurrentMemeId(currentMemeId) {
    this.currentMemeId = currentMemeId;

    this.onCurrentMemeIdChange();
  }

  getCurrentMemeId() {
    return this.currentMemeId;
  }

  setTextTop(text) {
    this.textTop = text;

    this.onTextTopChange();
  }

  setTextBottom(text) {
    this.textBottom = text;

    this.onTextBottomChange();
  }

  getPreview = () => {
    return {
      textTop: this.textTop,
      textBottom: this.textBottom,
      url: this.getCurrentMeme().url,
    };
  };

  getCurrentMeme() {
    let currentMeme = null;
    this.memes.forEach((meme) => {
      // console.log(this.getCurrentMemeId());
      if (meme.id === this.getCurrentMemeId()) {
        currentMeme = meme;
      }
    });

    return currentMeme;
  }
}
