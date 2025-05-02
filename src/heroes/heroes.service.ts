/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { heroes } from "./json dummy/heroe-list";
import { Hero, HeroCreate, HeroResponse, HeroUpdate } from "./type";
import * as fs from 'fs';
import * as path from 'path';

export class HeroesService {
    constructor() {}

    findAll(): HeroResponse[] {
        const heroesList = heroes;
        return heroesList.map((hero) => {
            return {
                heroNameCode: hero.heroNameCode,
                superPower: hero.superPower
            };
        });
    }

    findOne(id: string):HeroResponse {
        const heroesList = heroes;
        return heroesList.filter((hero) => hero.id === id).map((hero) => {
            return {
                    heroNameCode: hero.heroNameCode,
                    superPower: hero.superPower
                };
        })[0];
    }

    create(createHero: HeroCreate): Hero {
        const newHeroId = crypto.randomUUID();
        const newHero: Hero = {
            id: newHeroId,
            name: createHero.name,
            heroNameCode: createHero.heroNameCode,
            superPower: createHero.superPower
        };
        const heroesList = heroes;
        heroesList.push(newHero);
        fs.writeFileSync(path.join(__dirname, 'json dummy/heroe-list.json'), JSON.stringify(heroesList, null, 2)); 
        return newHero;

    }   

    update(updateHero: HeroUpdate): Hero | void {
        const heroesList = heroes;
        const heroIndex = heroesList.findIndex((hero) => hero.id === updateHero.id);
        if (heroIndex !== -1) {
            const updatedHero = { ...heroesList[heroIndex], ...updateHero };
            heroesList[heroIndex] = updatedHero;
            fs.writeFileSync(path.join(__dirname, 'json dummy/heroe-list.json'), JSON.stringify(heroesList, null, 2)); 
            return updatedHero;
        } else {
            throw new Error('Hero not found');
        }
       
    }   
    remove(id: string): boolean | void{
        const heroesList = heroes;
        const heroIndex = heroesList.findIndex((hero) => hero.id === id);
        if (heroIndex !== -1) {
            heroesList.splice(heroIndex, 1);
            fs.writeFileSync(path.join(__dirname, 'json dummy/heroe-list.json'), JSON.stringify(heroesList, null, 2)); 
            return true;
        } else {
            throw new Error('Hero not found');
        }
    }
      
}