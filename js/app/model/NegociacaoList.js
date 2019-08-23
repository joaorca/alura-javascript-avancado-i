class NegociacaoList {
  constructor() {
    this._negociacoes = [];
  }

  incluir(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }
}
