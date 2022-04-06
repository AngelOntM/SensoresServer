import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Invernaderos extends BaseSchema {
  protected tableName = 'invernaderos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('invernaderoid')
      table.string('invernadero').notNullable()
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
