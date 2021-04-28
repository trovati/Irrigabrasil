import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";


export class ClienteValidacaoPipe implements PipeTransform {

    transform (value: any, metadata: ArgumentMetadata) {

        if(!value) {
            throw new BadRequestException(`O valor do ${metadata.data} deve ser preenchido`)
        }
        return value
    }
}