
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { CarsModule } from './cars/Cars.module';
import { CommonModule } from './common/common.module';

import { join } from 'path';
import { userModule } from './users/users.module';



@Module({
  imports: [
    
    CarsModule,
    
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),

    CommonModule,

   userModule
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {


  constructor() {
    console.log(process.env)
  }
}
