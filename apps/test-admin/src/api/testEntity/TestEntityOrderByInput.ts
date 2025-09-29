import { SortOrder } from "../../util/SortOrder";

export type TestEntityOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
