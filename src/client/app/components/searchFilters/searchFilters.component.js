import template from "./searchFilters.html";

export const searchFiltersComponent = {
  template,
  controller: class searchFiltersComponentController {
    static get $inject() {
      return ["$state"];
    }
    constructor($state) {
      "ngInject";
      this.$state = $state;
      this.showFilters = false;
    }
    $onInit() {
      this.token = "";
      this.starsSelected = undefined;
    }

    $postLink() {
      this.redirectSearchOnInit();
    }

    /**
     * Cambia state a results definido en app.module.js
     * con el query params usado en state service
     */
    redirectSearch() {
      this.$state.go("results", { query: this.token });
    }
    /**
     * Busqueda inicial al cargar la pagina
     */
    redirectSearchOnInit() {
      this.$state.go("results", { query: "" });
    }
    //Muestra los filtros o los oculta
    enableFilters() {
      this.showFilters = !this.showFilters;
    }
    //Dirige al state results con los parametros token y stars seleccionados
    showStars(stars) {
      this.starsSelected = stars;
      this.$state.go("results", {
        query: this.token,
        stars: this.starsSelected
      });
    }
  }
};
