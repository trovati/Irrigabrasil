import { IsNotEmpty } from 'class-validator';

export class CriarProdutoDto {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  code: number;

  unitPrice: number;
}
