import * as graphql from "@nestjs/graphql";
import { TestEntityResolverBase } from "./base/testEntity.resolver.base";
import { TestEntity } from "./base/TestEntity";
import { TestEntityService } from "./testEntity.service";

@graphql.Resolver(() => TestEntity)
export class TestEntityResolver extends TestEntityResolverBase {
  constructor(protected readonly service: TestEntityService) {
    super(service);
  }
}
