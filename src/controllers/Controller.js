/* eslint-disable linebreak-style */
class Controller {
  constructor(entidadesService) {
    this.entidadesService = entidadesService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistros = await this.entidadesService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      //erro
    }
  }
}

module.exports = Controller;