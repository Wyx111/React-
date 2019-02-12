import Jsonp from 'jsonp'
export default class Fetch {
  static Jsonp(options) {
    return new Promise((resolve, reject) => {
      Jsonp(options.url, {
        param: 'callback'
      }, (err, res) => {
        if (res.status === 'success') {
          resolve(res)
        }
      })
    })
  }
}