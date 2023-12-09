


import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import{Document} from 'mongoose';


@Schema()
export class Cars extends Document {

    @Prop({
        unique:true,
        idex:true
    })
    plate: string;


    @Prop({
        
        
    })
    brand: string;



    @Prop({
        unique:true,
        idex:true
    })
    name: string;


}


export const CarsSchema = SchemaFactory.createForClass( Cars );