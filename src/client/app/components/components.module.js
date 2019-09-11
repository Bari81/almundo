import angular from "angular";
import { SearchFiltersModule } from "./searchFilters/searchFilters.module";
import { ProductListModule } from "./productList/productList.module";

// Componente que incluye a los dos componentes que forman la aplicacion
// Contiene directiva que renderiza el rating de cada hotel
export const ComponentsModule = angular
  .module("app.components", [SearchFiltersModule, ProductListModule])
  .directive("html", function() {
    function link(scope, element, attrs) {
      var update = function() {
        element.html(scope.html);
      };

      attrs.$observe("html", function(value) {
        update();
      });
    }

    return {
      link: link,
      scope: {
        html: "="
      }
    };
  }).name;
