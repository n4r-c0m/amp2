import { Module } from "@nestjs/common";
import { TestEntityModuleBase } from "./base/testEntity.module.base";
import { TestEntityService } from "./testEntity.service";
import { TestEntityController } from "./testEntity.controller";
import { TestEntityResolver } from "./testEntity.resolver";

@Module({
  imports: [TestEntityModuleBase],
  controllers: [TestEntityController],
  providers: [TestEntityService, TestEntityResolver],
  exports: [TestEntityService],
})
export class TestEntityModule {}
