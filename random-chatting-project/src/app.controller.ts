import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('index')
  root() {
    return {
      // message: 'hello nestjs :)'
      data: {
        title: 'Chatting Project',
        copyright: 'lee kang uk'
      }
    };
  }
}
