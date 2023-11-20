import { Model } from "./model.js";

import { View } from "./view.js";

import { API } from "./api.js";

export class Controller {
  constructor() {
    this.model = new Model({
      onMemesChange: this.handleModelMemesChange,
      onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange,
      onTextTopChange: this.handleModelTextTopChange,
      onTextBottomChange: this.handleModelTextBottomChange,
    });
    this.view = new View({
      onMemeChange: this.handleViewMemeChange,
      onTextTopChange: this.handleViewTextTopChange,
      onTextBottomChange: this.handleViewTextBottomChange,
    });

    this.api = new API();
  }

  init() {
    // this.handleDefaultMemeRender();

    this.handleMemesFromAPI();
  }

  handleDefaultMemeRender = () => {
    const preview = this.model.getDefaultMeme();
    this.view.renderPreview(preview);
  };

  handleMemesFromAPI = () => {
    this.api.getMemes().then((data) => {
      const memes = data.data.memes;
      const MEMES_MAX_NUMBER = 99;
      memes.length = MEMES_MAX_NUMBER;

      this.model.setMemes(memes);
    });
  };

  handleModelMemesChange = () => {
    this.view.renderMemesSelect(
      this.model.getMemes(),
      this.model.getCurrentMemeId()
    );
  };

  handleViewMemeChange = (id) => {
    // console.log(id);
    this.model.setCurrentMemeId(id);
  };

  handleModelCurrentMemeIdChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };

  handleViewTextTopChange = (text) => {
    // console.log(text);
    this.model.setTextTop(text);
  };

  handleViewTextBottomChange = (text) => {
    // console.log(text);
    this.model.setTextBottom(text);
  };

  handleModelTextTopChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };

  handleModelTextBottomChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };
}
