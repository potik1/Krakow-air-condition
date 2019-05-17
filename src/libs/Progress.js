class ProgressBar {
  constructor(el) {
    this.el = el;
    this.loading = 0;
    this.loaded = 0;
  }

  addLoading = () => {
    if (this.loading === 0) {
      this.show();
    }
    ++this.loading; //eslint-disable-line
    this.update();
  };

  addLoaded = () => {
    setTimeout(() => {
      ++this.loaded; //eslint-disable-line
      this.update();
    }, 100);
  };

  update = () => {
    if (this.loading === this.loaded) {
      this.loading = 0;
      this.loaded = 0;
      setTimeout(() => {
        this.hide();
      }, 250);
    }
  };

  show = () => {
    this.el.style.visibility = 'visible';
  };

  hide = () => {
    if (this.loading === this.loaded) {
      this.el.style.visibility = 'hidden';
    }
  };
}

export default ProgressBar;
