import angular from "angular";
import { searchFiltersComponent } from "./searchFilters.component";
import "./searchFilters.scss";

export const SearchFiltersModule = angular
  .module("searchFilters", [])
  .component("searchFilters", searchFiltersComponent).name;
