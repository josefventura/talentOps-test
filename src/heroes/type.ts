export interface Hero {
    id: string;
    name: string;
    heroNameCode: string;
    superPower: string;
}

export interface HeroResponse {
    id: string
    heroNameCode: string;
    superPower: string;
}

export interface HeroCreate {
    name: string;
    heroNameCode: string;
    superPower: string;
}

export interface HeroUpdate {
    id: string;
    name?: string;
    heroNameCode?: string;
    superPower?: string;
}
