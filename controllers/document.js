class DocumentController {
  constructor(documentService) {
    this.documentService = documentService;
  }

  getAllLecturer(req, res) {
    this.documentService.getAllLecturer()
      .then(result => res.json(result))
      .catch(err => this.handleError('getAllLecturer', err, res));
  }

  getAllDocument(req, res) {
    this.documentService.getAllDocument(req.params.id)
      .then(result => res.json(result))
      .catch(err => this.handleError('getAllDocument', err, res));
  }

  handleError(method, err, res) {
    console.log(`Error in ${method} method: ${err}`)
    res.status(400).send(err.message || err)
  }
}

module.exports = DocumentController