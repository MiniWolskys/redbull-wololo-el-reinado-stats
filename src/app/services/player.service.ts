import { Injectable } from '@angular/core';

export class Player {
  constructor(public name: string, public highest: number, public current: number, public currentRank: number) {
  }
}

const sortPlayerFn = (a: Player, b: Player) => b.highest - a.highest;

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    public players: Player[] = [
        new Player("Viper", 2834, 2815, 2),
        new Player("Hera", 2900, 2800, 3),
        new Player("Sitaux", 2820, 2820, 1),
    ];
    constructor() { }

    public async getLeaderboard(): Promise<Player[]> {
        return this.players.sort(sortPlayerFn)
    }
}
