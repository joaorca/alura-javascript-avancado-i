class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._negociacaoList = new NegociacaoList();
  }

  incluir(event) {
    event.preventDefault();
    this._negociacaoList.incluir(this._negociacaoFactory());
    this._resetForm();
    console.log(this._negociacaoList.negociacoes);
  }

  _negociacaoFactory() {
    return new Negociacao(
      DateHelper.stringToDate(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _resetForm() {
    this._inputData.value = "";
    this._inputQuantidade.value = "";
    this._inputValor.value = "";
    this._inputData.focus();
  }
}
