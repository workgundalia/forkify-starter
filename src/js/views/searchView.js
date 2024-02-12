class SearchView {
  _parentEl = document.querySelector('.search');
  getQuery() {
    console.log('in searchview');
    return this._parentEl.querySelector('.search__field').value;
  }
  clearInput() {
    console.log('in clearIn searchview');
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
