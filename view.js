export class View {
  constructor() {
    this.previewTextTopNode = document.getElementById("textTop");
    this.previewTextBottomNode = document.getElementById("textBottom");
    this.previewBaseImageNode = document.getElementById("baseImage");

    this.memesSelectNode = document.getElementById("memesSelect");
  }

  renderPreview(preview) {
    const { url, textTop, textBottom } = preview;

    this.previewTextTopNode.innerText = textTop;
    this.previewTextBottomNode.innerText = textBottom;
    this.previewBaseImageNode.src = url;
  }

  renderMemesSelect(memes, currentMemeId) {
    memes = [];
    memes.forEach((meme) => {
      const { id, name } = meme;

      const optionNode = document.createElement("option");

      optionNode.setAttribute("value", id);
      optionNode.innerText = name;
      optionNode.setAttribute("selected", id === currentMemeId);

      this.memesSelectNode.appendChild(optionNode);
    });
  }
}
