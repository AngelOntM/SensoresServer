import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class Sensor extends BaseModel {
  @column({ isPrimary: true })
  public sensorid: number

  @column()
  public sensor: string

  @column()
  public clave: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static ver() {
    return this.query()
  }

  public static verUno(id) {
    return this.findByOrFail('sensorid', id)
  }

  public static crear(data) {
    return this.create(data)
  }

  public static schemasen() {
    const postSchema = schema.create({
      sensor: schema.string(),
      clave: schema.string(),
    })
    return postSchema
  }

  public static schema() {
    const postSchema = schema.create({
      pines: schema.array().members(schema.number()),
      clave: schema.string(),
      isActive: schema.boolean(),
      seccion: schema.number(),
      invernadero: schema.number()
    })
    return postSchema
  }

  public static validar(data) {
    return data.validate({ schema: this.schema() })
  }

  public static validarsen(data) {
    return data.validate({ schema: this.schema() })
  }

  public static schema1() {
    const postSchema = schema.create({
      id: schema.number(),
      fecha: schema.string(),
      hora: schema.string(),
      valor: schema.number(),
      medida: schema.string(),
      nombre: schema.string()
    })
    return postSchema
  }

  public static validar1(data) {
    return data.validate({ schema: this.schema1() })
  }

  public static eliminar(dato) {
    return dato.delete()
  }

  public static modificar(data, registro) {
    return registro.merge(data).save()
  }

}

