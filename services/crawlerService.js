let Browser = require('zombie');
let browser = new Browser({ debug: false });

let Lecturer = require('../models/lecturer');

class CrawlerService {
  constructor() {

  }

  runIeeeCrawler() {
    return Lecturer.findOne({
        name: 'kharchenko'
      })
      .then(lecturer => {

        //let url = 'http://ieeexplore.ieee.org:80/search/searchresult.jsp?reload=true&amp;pageNumber=1&amp;rowsPerPage=25&amp;searchWithin=&#37;22Authors&#37;22:.QT.' + lecturer.ieeeSearch + '.QT.';

        return this.crawlerScopus(lecturer);
      })



    //var a = 0;
  }


  crawlerScopus(lecturer) {
    let url = 'https://www.scopus.com/author/document/retrieval.uri?authorId=' + lecturer.scopusSearch + '&tabSelected=docLi&sortType=plf-f';

    browser.headers = {};
    browser.headers['Cookie'] = '__cfduid=dfcb2911c4c5dbce966ba15f6f90080e61510142266; AE_SESSION_COOKIE=1510142267387; AMCVS_4D6368F454EC41940A4C98A6%40AdobeOrg=1; acw=30498b7e29443746c76b9a27cf09ca9416e6gxrqa%7C%24%7C096C3F18C4D6560516FCDD07D717D0419C3A4440C13967D2095AE4346D3155D77340E3CD8F33E5136710DF38E30D08CD6679B0D03E29DB593FBA44D1BD4E4F2EB0469A67597464825D387A21AFA2E514; utt=00352e1806b9f512d609287cd2d4445982351f5-cB; optimizelyEndUserId=oeu1510146917101r0.9605858348074954; optimizelySegments=%7B%22278797888%22%3A%22gc%22%2C%22278846372%22%3A%22false%22%2C%22278899136%22%3A%22none%22%2C%22278903113%22%3A%22direct%22%7D; optimizelyBuckets=%7B%7D; SCSessionID=40C72444402688F5433DD5D7E3A2E8F7.wsnAw8kcdt7IPYLO0V48gA; AMCV_4D6368F454EC41940A4C98A6%40AdobeOrg=2096510701%7CMCIDTS%7C17479%7CMCMID%7C23881544342058397272239703358808423329%7CMCAAMLH-1510747071%7C6%7CMCAAMB-1510773520%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1510175920s%7CNONE%7CMCAID%7CNONE%7CMCSYNCSOP%7C411-17486%7CvVersion%7C2.0.0; xmlHttpRequest=true; s_pers=%20v8%3D1510171539464%7C1604779539464%3B%20v8_s%3DLess%2520than%25201%2520day%7C1510173339464%3B%20c19%3Dsc%253Arecord%253Aauthor%2520details%7C1510173339468%3B%20v68%3D1510171538925%7C1510173339472%3B; s_sq=%5B%5BB%5D%5D; s_cc=true; screenInfo=864:1536; _pendo_meta.7108b796-60e0-44bd-6a6b-7313c4a99c35=3872929553; _pendo_visitorId.7108b796-60e0-44bd-6a6b-7313c4a99c35=_PENDO_T_EomijUzONOo; _pendo_accountId.7108b796-60e0-44bd-6a6b-7313c4a99c35=ae%3A278641; CARS_COOKIE=00720059006500790068006E00790063004D0075003400520073006E002F0068004E00520038003300380059003300710072004B004500620049004D0053003000310033004E006B00580078007500790079004400750079006B00720063007100590069006200330077005A0043007A00360055006B0033006D003700440065006500380068004C00370054006E0074004500300067003D; scopus.machineID=6DC32FE5C01D7AC85574DE9F88297766.wsnAw8kcdt7IPYLO0V48gA; s_sess=%20v31%3D1510142270368%3B%20s_cpc%3D0%3B%20s_ppvl%3Dsc%25253Arecord%25253Aauthor%252520details%252C66%252C66%252C759%252C502%252C759%252C1536%252C864%252C2.5%252CL%3B%20e41%3D1%3B%20s_ppv%3Dsc%25253Arecord%25253Aauthor%252520details%252C72%252C66%252C1859%252C502%252C759%252C1536%252C864%252C2.5%252CL%3B; javaScript=true';
    browser.headers['Content-Type'] = 'text/html;';
    browser.headers['accept'] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8";
    browser.headers['accept-encoding'] = 'gzip, deflate, br';
    browser.headers['accept-language'] = 'ru,en-US;q=0.8,en;q=0.6,zh-CN;q=0.4,zh;q=0.2';
    browser.headers['content-encoding'] = 'gzip';
    browser.headers['content-language'] = 'ru';
    browser.headers['content-type'] = 'text/html;charset=utf-8';


    return browser.visit(url)
      .then(result =>{
        return browser.html();
      })
      .then(html => {
        var a = 0;
      });

  }


}

module.exports = CrawlerService