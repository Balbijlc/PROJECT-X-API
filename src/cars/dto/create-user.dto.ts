import { IsEmpty, IsNotEmpty, IsNumber, IsString, MinLength,  } from "class-validator";



export class CreateCarsDto {

    @IsNotEmpty()
   @IsNumber()
    plate: number;

   
    @IsString()
    brand: string;

   
    @IsNotEmpty()
    @IsString()
    
      name: string;
}
