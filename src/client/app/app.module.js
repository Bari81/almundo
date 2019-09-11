import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { productListComponent } from "./components/productList/productList.component";
import "bootstrap/dist/css/bootstrap.css";
import { AlmundoServiceConnector } from "./services/app.services";
import "./app.scss";

export const AppModule = angular
  .module("app", [ComponentsModule, uiRouter])
  .component("app", AppComponent)
  .component("productListComponent", productListComponent)
  .service("AlmundoServiceConnector", AlmundoServiceConnector)
  .config([
    "$locationProvider",
    "$stateProvider",
    "$urlRouterProvider",
    ($locationProvider, $stateProvider, $urlRouterProvider) => {
      $locationProvider.html5Mode({
        enabled: true
      });
      /*
       * State usado por UiRouter para ser insertado en el ui-view (app.html)
       * name: nombre usado por $state.go() en otros componentes
       * url: url con query params
       * resolve: llama al service y devuelve lista de productos al componente
       */
      const listState = {
        name: "results",
        url: "?search={query}&rating={stars}",
        component: "productListComponent",
        resolve: {
          productList: [
            "AlmundoServiceConnector",
            "$transition$",
            (AlmundoServiceConnector, $transition$) => {
              return AlmundoServiceConnector.getProductsList(
                $transition$.params().query,
                $transition$.params().stars
              );
            }
          ]
        }
      };
      $stateProvider.state(listState);
      $urlRouterProvider.otherwise("/");
    }
  ]).name;
