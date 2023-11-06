import { Model } from "./model.js";

import { View } from "./view.js";

import { API } from "./api.js";

export class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.api = new API();
  }

  init() {
    console.log("app start");

    const memes = this.api.getMemes();
    this.model.setMemes(memes);

    this.view.renderMemesSelect(
      this.model.getMemes(),
      this.model.getCurrentMemeId()
    );

    const preview = this.model.getPreview();

    this.view.renderPreview(preview);
  }
}
