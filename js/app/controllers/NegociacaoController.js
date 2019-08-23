class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    this._negociacaoList = new NegociacaoList();
    this._negociacaoView = new NegociacaoView($("#negociacaoView"));
    this._negociacaoView.update(this._negociacaoList);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($("#mensagemView"));
    this._mensagemView.update(this._mensagem);
  }

  incluir(event) {
    event.preventDefault();
    this._negociacaoList.incluir(this._negociacaoFactory());
    this._negociacaoView.update(this._negociacaoList);

    this._mensagem.texto = "Negociação incluída com sucesso";
    this._mensagemView.update(this._mensagem);

    this._resetForm();
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
