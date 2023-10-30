import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BaseEntity, DataSource, ObjectType } from 'typeorm';

@Injectable()
export class EntityService extends BaseEntity {
  constructor(
    readonly configService: ConfigService,
    private dataSource: DataSource,
  ) {
    super();
  }

  public async find<T extends BaseEntity>(
    entityClass: ObjectType<T>,
    options: Partial<T>,
  ) {
    //@ts-ignore: Property 'find' does not exist on type 'ObjectType<T>'
    return await entityClass.find({ where: options });
  }

  public async save(entity) {
    return await entity.save();
  }

  public async update(entityClass, id: number, options: object) {
    return await entityClass.update(id, options);
  }

  public async remove(entityClass) {
    return await entityClass.remove();
  }
}
