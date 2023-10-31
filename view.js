export class View {
  constructor() {
    this.previewTextTopNode = document.getElementById("textTop");
    this.previewTextBottomNode = document.getElementById("textBottom");
    this.previewBaseImageNode = document.getElementById("baseImage");
  }

  render(preview) {
    const { url, textTop, textBottom } = preview;

    this.previewTextTopNode.innerText = textTop;
    this.previewTextBottomNode.innerText = textBottom;
    this.previewBaseImageNode.src = url;
  }
}
