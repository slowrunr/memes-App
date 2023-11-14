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
    this.api.getMemes().then((data) => {
      const memes = data.data.memes;
      this.model.setMemes(memes);
    });
  }

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
    // const url = this.model.getCurrentMeme().url;
    // if (!url) {
    //   return;
    // }

    // const preview = {
    //   ...this.model.getPreview(),
    //   url: this.model.getCurrentMeme().url,
    // };

    this.view.renderPreview(this.model.getPreview());
  };

  handleViewTextTopChange = (text) => {
    console.log(text);
    this.model.setTextTop(text);
  };

  handleViewTextBottomChange = (text) => {
    console.log(text);
    this.model.setTextBottom(text);
  };

  handleModelTextTopChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };

  handleModelTextBottomChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };
}
