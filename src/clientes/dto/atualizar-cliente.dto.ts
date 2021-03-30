import { IsString } from "class-validator";


export class AtualizarClienteDto {
    @IsString()
    name: string;
    
}