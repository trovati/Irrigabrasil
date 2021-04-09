import { IsNotEmpty, IsEmail } from 'class-validator';

export class CriarClienteDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  phone: number;
  @IsEmail()
  email: string;
}
