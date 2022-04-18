import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Carrito from 'App/Models/Sensor';
const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/proyecto');
const carros = new Schema({
  id: Number,
  pines: Array,
  clave: String,
  isActive: Boolean,
  seccion: Number,
  invernadero: Number,
  data: Array,
  created_at: Date,
  updated_at: Date,
  store: Boolean,

});
const carrito = mongoose.model('sensores', carros)

export default class CarritosController {
  public async index({ response }: HttpContextContract) {
    const find = await carrito.find()
    console.log(find)
    return response.json({ find })
  }

  public async show({ response, params }: HttpContextContract) {
    const find = await carrito.find({ 'id': params.id })
    return response.json({ find })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await Carrito.validar(request)
    var dato = await new carrito({
      id: await carrito.count(),
      pines: validatedData.pines,
      clave: validatedData.clave,
      isActive: validatedData.isActive,
      seccion: validatedData.seccion,
      invernadero: validatedData.invernadero,
      data: [],
      created_at: Date.now(),
      updated_at: Date.now(),
      store: true,
    });
    await dato.save()
    return response.json({ dato })
  }

  public async update({ response, request, params }: HttpContextContract) {
    const validatedData = await Carrito.validar(request)
    var dato = await new carrito({
      id: params.id,
      pines: validatedData.pines,
      clave: validatedData.clave,
      isActive: validatedData.isActive,
      seccion: validatedData.seccion,
      invernadero: validatedData.invernadero,
      data: [],
      updated_at: Date.now(),
      store: true,
    });
    const find = await carrito.findOne({ 'id': params.id })
    await find.update({ id: dato.id, pines: dato.pines, clave: dato.clave, isActive: dato.isActive, seccion: dato.seccion, invernadero: dato.invernadero, updated_at: dato.updated_at })
    await find.save()
    return response.json({ find })
  }

  public async destroy({ response, params }: HttpContextContract) {
    const dato = await carrito.findOne({ 'id': params.id })
    await carrito.deleteOne({ 'id': params.id })
    await dato.delete()
    return response
      .status(200)
      .send({ message: 'Registro Eliminado' })
  }

  public async storedata({ response, request, params }: HttpContextContract) {
    const validatedData = await Carrito.validar1(request)
    const find = await carrito.findOne({ 'id': params.id })
    await find.updateOne({ '$push': { data: { id: validatedData.id, fecha: validatedData.fecha, hora: validatedData.hora, valor: validatedData.valor, medida: validatedData.medida, nombre: validatedData.nombre, save: true } } })
    await find.save()
    const find1 = await carrito.findOne({ 'id': params.id })
    return response.json({ find1 })
  }
}
