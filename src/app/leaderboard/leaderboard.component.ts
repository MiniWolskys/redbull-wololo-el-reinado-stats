import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from '../countdown/countdown.component';
import { Player, PlayerService } from '../services/player.service';
import { LoaderComponent } from '../loader/loader.component';

@Component({
    selector: 'app-leaderboard',
    standalone: true,
    imports: [CommonModule, CountdownComponent, LoaderComponent],
    templateUrl: './leaderboard.component.html',
    styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent implements AfterViewInit{
    public players: Player[] = [];
    public loadingLeaderboard = true;

    public endTimestamp: number = Date.parse("28 Jul 2024 16:00:00 GMT");

    constructor(private playerService: PlayerService) {
    }

    public async ngAfterViewInit(): Promise<void> {
        this.players = await this.playerService.getLeaderboard();
        this.loadingLeaderboard = false;
    }
}
