import template from "./productList.html";
//Componente stateless que recibe dos variables como binding del resolve del state en app.module
export const productListComponent = {
  bindings: {
    productList: "<"
  },
  template,
  controller: class productListComponentController {
    static get $inject() {
      return ["$state"];
    }
    constructor($state) {
      "ngInject";
      this.$state = $state;
    }
    $onInit() {
      this.imagespath = "./src/client/assets/images/hotels/";
      this.iconspath = "./src/client/assets/icons/";
    }
    //metodo usado por directiva para renderizar el ranking de cada hotel
    renderStars(numStars) {
      let stars = "";
      for (var i = 0; i < numStars; i++) {
        stars += `<span><i class="text-warning fa fa-star"></i></span>`;
      }
      return stars;
    }
  }
};
