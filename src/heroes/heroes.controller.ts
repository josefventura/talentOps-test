/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('heroes')
@Controller('heroes')
export class HeroesController {
    @Get()
    @ApiOperation({summary: 'servicio de obtencion de listado de heroes'})
    findAll() {
        return 'This action returns all heroes';
    }
    @Get(':id')
    @ApiOperation({summary: 'servicio de obtencion de heroe por id'})
    findOne() {
        return 'This action returns a #1 hero';
    }
}