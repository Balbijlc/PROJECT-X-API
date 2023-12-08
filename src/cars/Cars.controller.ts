import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Put } from '@nestjs/common';
import { CarsService } from './Cars.service';
import { CreateCarsDto } from './dto/create-user.dto';
import { UpdateCarsDto } from './dto/update-Cars.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';
import mongoose from 'mongoose';


@Controller('api/cars')
export class UsersController {
  constructor(
    
    private readonly carsService: CarsService
    
    ) {}

    

  @Post()
  @HttpCode( 200 )
  async create(@Body() createCarsDto: CreateCarsDto) {
    return this.carsService.create( createCarsDto )

    
  }
  
  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.carsService.findOne( term ) ;
  }

  @Put(':term')
  update(@Param('term') term: string, @Body() updateCarsDto: UpdateCarsDto) {

    
    return this.carsService.update(term, updateCarsDto);
  }

  @Patch(':term')
  updatepath(@Param('term') term: string, @Body() updateCarsDto: UpdateCarsDto) {

    
    return this.carsService.update(term, updateCarsDto);
  }

  @Delete(':term'  )
  remove(@Param('term', ParseMongoIdPipe ) term: string) {
    return this.carsService.remove(term);
  }
}
