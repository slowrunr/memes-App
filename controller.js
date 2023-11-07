import { Model } from "./model.js";

import { View } from "./view.js";

import { API } from "./api.js";

export class Controller {
  constructor() {
    this.model = new Model({
      onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange,
    });
    this.view = new View({ onMemeChange: this.handleViewMemeChange });
    this.api = new API();
  }

  init() {
    //
    console.log("app start");
    //
    const memes = this.api.getMemes();
    //
    this.model.setCurrentMemeId(memes[0].id);
    //
    this.model.setMemes(memes);

    // this.view.renderMemesSelect(
    //   this.model.getMemes(),
    //   this.model.getCurrentMemeId()
    // );

    // const preview = this.model.getPreview();

    // this.view.renderPreview(preview);
  }

  handleViewMemeChange(id) {
    // console.log(id);

    this.model.setCurrentMemeId(id);
  }

  handleModelMemesChange = () => {
    this.view.renderMemesSelect(
      this.model.getMemes(),
      this.model.getCurrentMemeId()
    );
  };

  handleModelCurrentMemeIdChange = () => {
    console.log(this.model);

    const preview = {
      ...this.model.getPreview(),
      url: this.model.getCurrentMeme().url,
    };

    this.view.renderPreview(preview);
  };
}
