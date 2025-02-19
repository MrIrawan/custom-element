class ImageFigure extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `  halo, nama saya image-figure`;
    }
}

customElements.define('image-figure', ImageFigure);