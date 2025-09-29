import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TestEntityWhereInput = {
  amount?: DecimalNullableFilter;
  id?: StringFilter;
};
