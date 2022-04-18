import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sensores extends BaseSchema {
  protected tableName = 'sensors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('sensorid')
      table.string('sensor').unique().notNullable
      table.string('clave').unique().notNullable
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
