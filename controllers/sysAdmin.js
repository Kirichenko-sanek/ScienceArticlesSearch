class SysAdminController {
  constructor(sysAdminService) {
    this.sysAdminService = sysAdminService;
  }

  addLecturer(req, res) {
    this.sysAdminService.addLecturer()
      .then(result => res.json(result))
      .catch(err => this.handleError('addLecturer', err, res))
  }

  handleError(method, err, res) {
    console.log(`Error in ${method} method: ${err}`)
    res.status(400).send(err.message || err)
  }
}

module.exports = SysAdminController