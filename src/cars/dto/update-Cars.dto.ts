import { PartialType } from '@nestjs/mapped-types';
import { CreateCarsDto } from './create-user.dto';

export class UpdateCarsDto extends PartialType(CreateCarsDto) {}

