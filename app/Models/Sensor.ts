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
    return data.validate({ schema: this.schemasen() })
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

  public static nombre(nom) {
    var n = { nom: 'Invalid', image: '' }
    switch (nom) {
      case 'TH':
        n = { nom: 'Temperatura y Humedad', image: 'https://makertronix.com/uploads/productos/81-ESEN-DHT11.jpg' }
        break;
      case 'FR':
        n = { nom: 'Fotoresistencia', image: 'https://makertronix.com/uploads/productos/92-ESEN-LDR.jpg' }
        break;
      case 'US':
        n = { nom: 'Ultrasonico', image: 'https://www.makercreativo.com/store/wp-content/uploads/2017/06/Sensor_ultrasonico_HCSR04_1.jpg' }
        break;
      case 'IR':
        n = { nom: 'Infrarrojo', image: 'https://ae01.alicdn.com/kf/H1dd5a68952a04cdc90b75ea051613f7fE/Sensor-infrarrojo-de-m-dulo-de-evitaci-n-de-obst-culos-IR-de-reflexi-n-para.jpg_Q90.jpg_.webp' }
        break;
      case 'HG':
        n = { nom: 'Humo y Gas', image: 'https://uelectronics.com/wp-content/uploads/AR0096-Sensor-de-Gas-v5.jpg' }
        break;
    }
    return n
  }

}

