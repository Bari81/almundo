export class AlmundoServiceConnector {
  static get $inject() {
    return ["$http"];
  }
  constructor($http) {
    "ngInject";
    this.$http = $http;
  }
  /**
   * param  {string} token , query param
   * return list of products json
   */
  getProductsList(token, stars) {
    debugger;
    return this.$http
      .get("http://localhost:3000/api/items", {
        params: { q: token, s: stars }
      })
      .then(response => response.data);
  }
}
