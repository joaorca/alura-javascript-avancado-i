class NegociacaoView {
  constructor(element) {
    this._element = element;
  }

  template(model) {
    return `
    <table class="table table-hover table-bordered">
    <thead>
      <tr>
        <th>DATA</th>
        <th>QUANTIDADE</th>
        <th>VALOR</th>
        <th>VOLUME</th>
      </tr>
    </thead>
    <tbody>
      ${model.negociacoes
        .map(
          negociacao => `
          <tr>
            <td>${DateHelper.dateToString(negociacao.data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
            <td>${negociacao.volume}</td>
          </tr>
        `
        )
        .join("")}
    </tbody>
    <tfoot>
          <tr>
            <td colspan=3></td>
            <td>${model.negociacoes.reduce(
              (acc, negociacao) => acc + negociacao.volume,
              0.0
            )}</td>
          </tr>
    </tfoot>
  </table>
    `;
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}
