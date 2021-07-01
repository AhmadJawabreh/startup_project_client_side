import { Filter } from './../shared/filter';
import { Pagination } from "../shared/pagination";

export class Config {
  static BookHost: string = "https://localhost:44391/";
  static PublisherAndAuthorHost: string = "https://localhost:44358/";
  static filter: Filter = {publihser: true, authors:true ,pageNumber: 1, pageSize: 15 };
}
