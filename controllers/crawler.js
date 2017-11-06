class CrawlerController {
  constructor(crawlerService) {
    this.crawlerService = crawlerService;
  }

  runCrawler(req, res) {
    this.crawlerService.runIeeeCrawler()
      .then(result => res.json(result))
      .catch(err => this.handleError('runCrawler', err, res));
  }


  handleError(method, err, res) {
    console.log(`Error in ${method} method: ${err}`)
    res.status(400).send(err.message || err)
  }
}

module.exports = CrawlerController