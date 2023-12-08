import { BadRequestException, Get, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';


import { Cars } from './entities/Cars.entity';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCarsDto } from './dto/create-user.dto';
import { UpdateCarsDto } from './dto/update-Cars.dto';
import { isModuleNamespaceObject } from 'util/types';

@Injectable()
export class CarsService {


  constructor( 
    @InjectModel( Cars.name )
    private readonly carsModel: Model<Cars>
  ){}

  
  async create(createCarsDto:CreateCarsDto)
  {
    //Peticion post

      createCarsDto.name = createCarsDto.name.toLocaleLowerCase();


    try {
      const Cars = await this.carsModel.create( createCarsDto );
      return Cars
      
    } catch (error) {
      if(error.code === 11000){
        console.log(error)
        throw new BadRequestException(`Cars exists in db ${JSON.stringify ( error.keyValue )}`);
      }
     
      throw new InternalServerErrorException( `No consigo nad`)
      
    }


 }




  findAll() {
    //peticion get

   

    return "retorna todos los carros";
  }

  async findOne(term: string) {

    let Cars : Cars;

    if( !isNaN(+term) ){
      Cars = await this.carsModel.findOne({plate: term});
    }

    //MongoId
    
    if(!Cars && isValidObjectId( term )){
      Cars = await this.carsModel.findById( term );
    }

    //Name

    if( !Cars ){
      Cars = await this.carsModel.findOne({brand: term });
    }

    //brand 

  if( !Cars ){
    Cars = await this.carsModel.findOne({ name:term }); 
  }

     if( !Cars ){
      throw new NotFoundException( `Cars wuth id, Model or plate or brand "${ term }" not found ` );
     }

    return Cars;
  }




  async update(term: string, updateCarsDto: UpdateCarsDto) {
    //Actualizar usuarios

    const cars = await this.findOne(  term  );
    
    
    

    if ( updateCarsDto.name ) 
         updateCarsDto.name = updateCarsDto.name.toLocaleLowerCase();


try {

 await cars.updateOne( updateCarsDto, { new: true })
 return { ...cars.toJSON(), ...updateCarsDto };

} catch (error) {

  if (error.code === 11000) {
    throw new BadRequestException( `Cars exists in db ${ JSON.stringify( error.keyValue )}` );
   }
   console.log(error);
    throw new InternalServerErrorException(`cant create Cars - Chec server logs`);
  
}}



  async remove(term: string) {
//delete usuarios

const cars = await this.findOne( term );

await cars.deleteOne();

   return cars




}


  }

