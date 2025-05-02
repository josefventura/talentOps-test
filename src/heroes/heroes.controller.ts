/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import {  Response } from "express";
import { HeroesService } from "./heroes.service";
import { HeroCreate } from "./type";

@ApiTags('heroes')
@Controller('heroes')
export class HeroesController {

    constructor(private readonly heroesService: HeroesService) {}

    @Get()
    @ApiResponse({status: 200, description: 'Listado de heroes'})
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
    @ApiResponse({status: 200, description: 'Heroe encontrado'})
    @ApiOperation({summary: 'servicio de obtencion de heroe por id'})
    findOne(@Param('id') id: string, @Res() response: Response):any {
        const hero = this.heroesService.findOne(id);
        return response.status(200).json({
            status: "success!",
            message: "Data obtenida",
            result: hero
        });
    }

    @Post()
    @ApiResponse({status: 200, description: 'Heroe creado'})
    @ApiOperation({summary: 'servicio de creacion de heroe'})
    create(@Body() createHero: HeroCreate, @Res() response: Response):any {
        const newHero = this.heroesService.create(createHero);
        return response.status(200).json({
            status: "success!",
            message: "Data obtenida",
            result: newHero
        }); 
    }

    @Put(':id')
    @ApiResponse({status: 200, description: 'Heroe actualizado'})
    @ApiResponse({status: 404, description: 'Heroe no encontrado'})
    @ApiOperation({summary: 'servicio de actualizacion de heroe por id'})
    update(@Param('id') id: string, @Body() updateHero: HeroCreate, @Res() response: Response):any {
        const updatedHero = this.heroesService.update({id, ...updateHero});
        return response.status(200).json({
            status: "success!",
            message: "Data obtenida",
            result: updatedHero
        }); 
    }

    @Delete(':id')
    @ApiResponse({status: 200, description: 'Heroe eliminado'})
    @ApiResponse({status: 404, description: 'Heroe no encontrado'})
    @ApiOperation({summary: 'servicio de eliminacion de heroe por id'}) 
    remove(@Param('id') id: string, @Res() response: Response):any {
        const deletedHero = this.heroesService.remove(id);
        return response.status(200).json({
            status: "success!",
            message: "Data obtenida",
            result: deletedHero
        }); 
    }
}
