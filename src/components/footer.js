class FooterApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="card text-center" style="background-color: brown;">
                        <div class="card-body" style="color: white;">
                            <h5 class="card-title">About</h5>
                            <p class="card-text">This is a website where you can find all your favorite movies. <br> I made this website as a final project Belajar Fundamental Front-End Web Development at Dicoding Academy</p>
                        </div>
                        <div class="card-footer">
                            Made with love 
                        </div>
                        </div>`;
  }
}

customElements.define("app-footer", FooterApp);
