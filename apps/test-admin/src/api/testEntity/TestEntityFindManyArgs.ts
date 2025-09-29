import { TestEntityWhereInput } from "./TestEntityWhereInput";
import { TestEntityOrderByInput } from "./TestEntityOrderByInput";

export type TestEntityFindManyArgs = {
  where?: TestEntityWhereInput;
  orderBy?: Array<TestEntityOrderByInput>;
  skip?: number;
  take?: number;
};
