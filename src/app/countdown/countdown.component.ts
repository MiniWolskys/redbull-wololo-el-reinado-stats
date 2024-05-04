import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
    selector: 'app-countdown',
    standalone: true,
    imports: [],
    templateUrl: './countdown.component.html',
    styleUrl: './countdown.component.css'
})
export class CountdownComponent implements AfterViewInit {
    @Input() endTimestamp: number = 0;

    public targetDate: string = ""

    public days: number = 0;
    public hours: number = 0;
    public minutes: number = 0;
    public seconds: number = 0;

    public ngAfterViewInit() {
        setInterval(() => this.tick(), 1000);
        this.targetDate = new Date(this.endTimestamp).toLocaleString();
    }

    private tick() {
        let difference = (this.endTimestamp - Date.now()) / 1000;

        this.days = Math.floor(difference / (60 * 60 * 24));
        difference = difference % (60 * 60 * 24);
        this.hours = Math.floor(difference / (60 * 60));
        difference = difference % (60 * 60);
        this.minutes = Math.floor(difference / (60));
        difference = difference % (60);
        this.seconds = Math.floor(difference);
    }
}
