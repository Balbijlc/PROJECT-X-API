import { Module } from '@nestjs/common';
import { CarsService } from './Cars.service';
import { UsersController } from './Cars.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Cars, CarsSchema } from './entities/Cars.entity';

@Module({
  imports:[
 MongooseModule.forFeature([
  {
    name: Cars.name,
    schema: CarsSchema,
  }
])
  ],
  controllers: [UsersController],
  providers: [CarsService,],
})
export class CarsModule {}
