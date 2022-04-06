import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pines extends BaseSchema {
  protected tableName = 'pines'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('pinid')
      table.integer('pin')
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
