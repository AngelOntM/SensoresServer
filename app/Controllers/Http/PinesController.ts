import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pin from 'App/Models/Pin'

export default class PinsController {
    public async index({ response }: HttpContextContract) {
        const dato = await Pin.ver()
        return response.json({ dato })
    }
    public async show({ response, params }: HttpContextContract) {
        const dato = await Pin.verUno(params.id)
        return response.json({ dato })
    }

}
