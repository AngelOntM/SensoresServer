import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class Brand extends BaseModel {
  @column({ isPrimary: true })
  public invernaderoid: number

  @column()
  public invernadero: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static ver() {
    return this.query()
  }

  public static verUno(id) {
    return this.findByOrFail('invernaderoid', id)
  }

  public static crear(data) {
    return this.create(data)
  }

  public static schema() {
    const postSchema = schema.create({
      invernadero: schema.string({}, [rules.unique({ table: 'invernaderos', column: 'invernadero' })])
    })
    return postSchema
  }

  public static validar(data) {
    return data.validate({ schema: this.schema() })
  }

  public static eliminar(dato) {
    return dato.delete()
  }

  public static modificar(data, registro) {
    return registro.merge(data).save()
  }

}
