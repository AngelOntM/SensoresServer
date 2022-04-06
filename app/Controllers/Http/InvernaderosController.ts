import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Invernadero from 'App/Models/Invernadero'

export default class InvernaderosController {
  public async index({ response }: HttpContextContract) {
    const dato = await Invernadero.ver()
    return response.json({ dato })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await Invernadero.validar(request)
    const dato = await Invernadero.crear(validatedData)
    return response.json({ dato });
  }

  public async show({ response, params }: HttpContextContract) {
    const dato = await Invernadero.verUno(params.id)
    return response.json({ dato })
  }

  public async update({ request, response, params }: HttpContextContract) {
    const validatedData = await Invernadero.validar(request)
    const registro = await Invernadero.verUno(params.id)
    const dato = await Invernadero.modificar(validatedData, registro)
    return response.json({ dato })

  }

  public async destroy({ response, params }: HttpContextContract) {
    const dato = await Invernadero.verUno(params.id)
    await Invernadero.eliminar(dato)
    return response
      .status(200)
      .send({ message: 'Registro Eliminado' })

  }

}
