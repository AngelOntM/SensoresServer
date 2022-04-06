import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sensor from 'App/Models/Sensor'

export default class SensorsController {
  public async index({ response }: HttpContextContract) {
    const dato = await Sensor.ver()
    return response.json({ dato })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await Sensor.validarsen(request)
    const dato = await Sensor.crear(validatedData)
    return response.json({ dato });
  }

  public async show({ response, params }: HttpContextContract) {
    const dato = await Sensor.verUno(params.id)
    return response.json({ dato })
  }

  public async update({ request, response, params }: HttpContextContract) {
    const validatedData = await Sensor.validarsen(request)
    const registro = await Sensor.verUno(params.id)
    const dato = await Sensor.modificar(validatedData, registro)
    return response.json({ dato })
  }

  public async destroy({ response, params }: HttpContextContract) {
    const dato = await Sensor.verUno(params.id)
    await Sensor.eliminar(dato)
    return response
      .status(200)
      .send({ message: 'Registro Eliminado' })
  }

}