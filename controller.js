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
    const preview = this.model.getPreview();
    this.view.render(preview);
  }
}
