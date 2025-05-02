/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Controller, Get, Param, Res } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import {  Response } from "express";
import { HeroesService } from "./heroes.service";

@ApiTags('heroes')
@Controller('heroes')
export class HeroesController {

    constructor(private readonly heroesService: HeroesService) {}

    @Get()
    @ApiOperation({summary: 'servicio de obtencion de listado de heroes'})
    findAll( @Res() response: Response ):any {
        const heroesList = this.heroesService.findAll();
        return response.status(200).json({
            status: "success!",
            message: "Data obtenida",
            result: heroesList
        });
    }
    @Get(':id')
    @ApiOperation({summary: 'servicio de obtencion de heroe por id'})
    findOne(@Param('id') id: string, @Res() response: Response):any {
        const hero = this.heroesService.findOne(id);
        return response.status(200).json({
            status: "success!",
            message: "Data obtenida",
            result: hero
        });
    }
}