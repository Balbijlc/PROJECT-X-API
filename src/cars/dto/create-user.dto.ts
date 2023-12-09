import { IsEmpty, IsNotEmpty, IsNumber, IsString, MinLength,  } from "class-validator";



export class CreateCarsDto {

    @IsNotEmpty()
  
    plate: string;

   
    @IsString()
    brand: string;

   
    @IsNotEmpty()
    @IsString()
    
      name: string;
}
