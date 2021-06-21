import { Pagination } from "../shared/pagination";

export class Config {
  static HOST: string = "https://localhost:44358/";
  static pagination: Pagination = { pageNumber: 1, pageSize: 15 };
}
