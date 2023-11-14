export class View {
  constructor({ onMemeChange, onTextTopChange, onTextBottomChange }) {
    this.previewTextTopNode = document.getElementById("textTop");
    this.previewTextBottomNode = document.getElementById("textBottom");
    this.previewImageNode = document.getElementById("previewImage");
    this.memesSelectNode = document.getElementById("memesSelect");
    this.textTopInputNode = document.getElementById("textTop");
    this.textBottomInputNode = document.getElementById("textBottom");
    this.onMemeChange = onMemeChange;
    this.onTextTopChange = onTextTopChange;
    this.onTextBottomChange = onTextBottomChange;

    this.memesSelectNode.addEventListener("change", this._handleSelectChange);
    this.textTopInputNode.addEventListener("change", this._handleTextTopChange);
    this.textBottomInputNode.addEventListener(
      "change",
      this._handleTextBottomChange
    );
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

  _handleSelectChange = () => {
    const id = this.memesSelectNode.value;
    // console.log(this.memesSelectNode.value);
    this.onMemeChange(id);
  };

  _handleTextTopChange = (event) => {
    this.onTextTopChange(event.target.value);
  };
  _handleTextBottomChange = (event) => {
    this.onTextBottomChange(event.target.value);
  };
}
