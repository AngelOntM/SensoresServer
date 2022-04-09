import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pin from 'App/Models/Pin'

export default class PineSeeder extends BaseSeeder {
  public async run() {
    await Pin.createMany([
      {
        pin: 7,
      },
      {
        pin: 8,
      },
      {
        pin: 10,
      },
      {
        pin: 11,
      },
      {
        pin: 12,
      },
      {
        pin: 13,
      },
      {
        pin: 15,
      },
      {
        pin: 16,
      },
      {
        pin: 18,
      },
      {
        pin: 19,
      },
      {
        pin: 21,
      },
      {
        pin: 22,
      },
      {
        pin: 23,
      },
      {
        pin: 24,
      },
      {
        pin: 26,
      },
      {
        pin: 29,
      },
      {
        pin: 31,
      },
      {
        pin: 32,
      },
      {
        pin: 33,
      },
      {
        pin: 35,
      },
      {
        pin: 36,
      },
      {
        pin: 37,
      },
      {
        pin: 38,
      },
      {
        pin: 40,
      },
      {
        pin: 41,
      },
      {
        pin: 42,
      }
    ])
  }
}
