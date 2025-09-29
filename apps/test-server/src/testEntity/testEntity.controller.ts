import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestEntityService } from "./testEntity.service";
import { TestEntityControllerBase } from "./base/testEntity.controller.base";

@swagger.ApiTags("testEntities")
@common.Controller("testEntities")
export class TestEntityController extends TestEntityControllerBase {
  constructor(protected readonly service: TestEntityService) {
    super(service);
  }
}
