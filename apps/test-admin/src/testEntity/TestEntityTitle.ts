import { TestEntity as TTestEntity } from "../api/testEntity/TestEntity";

export const TESTENTITY_TITLE_FIELD = "id";

export const TestEntityTitle = (record: TTestEntity): string => {
  return record.id?.toString() || String(record.id);
};
