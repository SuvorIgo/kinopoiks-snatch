import {IsBoolean, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateCountryDto {
  @ApiProperty()
  @IsString()
  private readonly name: string;
  @ApiProperty()
  @IsBoolean()
  private readonly is_eng: boolean;
}
