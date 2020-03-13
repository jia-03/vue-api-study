import http from './axios'
export default class ajax {

  constructor() {
    this._http = http.create();
  }

  /**
   * get请求
   * @param {*} api 请求路径
   * @param {*} params 请求参数
   */
  get(api, params) {
    return this._http.get(api, {
      params: params
    })
  }

  /**
   * post请求
   * @param {*} api 请求路径
   * @param {*} params 请求参数
   */
  post(api, params) {
    return this._http.post(api, params)
  }

  /**
   * @param {*} api 穿透地址
   * @param {*} params 请求参数
   */
  common_post(api, params) {
    let data = {};
    data.path = api;
    data.svcCont = params.svcCont;
    return this._http.post("/common/post", data)
  }

}
