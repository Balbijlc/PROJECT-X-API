
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';


import { join } from 'path';
import { CarsModule } from './cars/Cars.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    
    CarsModule,
    
    MongooseModule.forRoot('mongodb://localhost:27017/project-x-api'),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),

    CommonModule
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
