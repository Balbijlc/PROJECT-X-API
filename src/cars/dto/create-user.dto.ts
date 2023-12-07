import { IsString, MinLength,  } from "class-validator";



export class CreateCarsDto {

    
    @MinLength(5)
    plate: number;

    @IsString()
    brand: string;

    @IsString()
    @MinLength(1)
    name: string;
}
