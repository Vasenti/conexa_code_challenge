import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ObjectId } from 'mongodb';
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

  public async findOne<T extends BaseEntity>(
    entityClass: ObjectType<T>,
    options: Partial<T>,
  ) {
    //@ts-ignore: Property 'find' does not exist on type 'ObjectType<T>'
    const query = async () => entityClass.findOne({ where: options });
    return this.handleQuery(query);
  }

  public async save(entity) {
    const query = async () => entity.save();
    return this.handleQuery(query);
  }

  public async update(entityClass, id: string, options: object) {
    const query = async () =>
      entityClass.update({ _id: new ObjectId(id) }, options);
    return this.handleQuery(query);
  }

  public async remove(entityClass) {
    const query = async () => entityClass.remove();
    return this.handleQuery(query);
  }

  private async handleQuery(query) {
    try {
      const result = await query();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
