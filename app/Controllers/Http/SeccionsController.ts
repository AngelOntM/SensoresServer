import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Seccion from 'App/Models/Seccion'

export default class SeccionsController {
  public async index({ response }: HttpContextContract) {
    const dato = await Seccion.ver()
    return response.json({ dato })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await Seccion.validar(request)
    const dato = await Seccion.crear(validatedData)
    return response.json({ dato });
  }

  public async show({ response, params }: HttpContextContract) {
    const dato = await Seccion.verUno(params.id)
    return response.json({ dato })
  }

  public async update({ request, response, params }: HttpContextContract) {
    const validatedData = await Seccion.validar(request)
    const registro = await Seccion.verUno(params.id)
    const dato = await Seccion.modificar(validatedData, registro)
    return response.json({ dato })

  }

  public async destroy({ response, params }: HttpContextContract) {
    const dato = await Seccion.verUno(params.id)
    await Seccion.eliminar(dato)
    return response
      .status(200)
      .send({ message: 'Registro Eliminado' })

  }

}
