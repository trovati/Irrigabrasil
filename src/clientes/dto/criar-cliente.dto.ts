import { IsNotEmpty, IsEmail } from 'class-validator';

export class CriarClienteDto {
  @IsNotEmpty()
  name: string;

  address: string;
  
  @IsNotEmpty()
  phone: number;
  
  @IsEmail()
  email: string;
}
