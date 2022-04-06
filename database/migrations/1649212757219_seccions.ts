import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Seccions extends BaseSchema {
  protected tableName = 'seccions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('seccionid')
      table.string('seccion').unique().notNullable()
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
