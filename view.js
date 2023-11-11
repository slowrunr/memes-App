export class View {
  constructor({ onMemeChange }) {
    this.previewTextTopNode = document.getElementById("textTop");
    this.previewTextBottomNode = document.getElementById("textBottom");
    this.previewImageNode = document.getElementById("previewImage");
    this.memesSelectNode = document.getElementById("memesSelect");
    this.onMemeChange = onMemeChange;

    this.memesSelectNode.addEventListener("change", this._handleSelectChange);
  }

  renderPreview(preview) {
    const { url, textTop, textBottom } = preview;

    this.previewTextTopNode.innerText = textTop;
    this.previewTextBottomNode.innerText = textBottom;
    this.previewImageNode.src = url;
  }

  renderMemesSelect(memes, currentMemeId) {
    memes.forEach((meme) => {
      const { id, name } = meme;

      const optionNode = document.createElement("option");

      optionNode.setAttribute("value", id);
      optionNode.innerText = name;

      if (id === currentMemeId) {
        optionNode.setAttribute("selected", true);
      }
      this.memesSelectNode.appendChild(optionNode);
    });
  }
}
