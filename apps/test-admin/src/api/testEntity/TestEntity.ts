import { Decimal } from "decimal.js";

export type TestEntity = {
  amount: Decimal | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
