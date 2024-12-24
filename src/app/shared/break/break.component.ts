import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-break',
    imports: [CommonModule],
    templateUrl: 'break.component.html',
    styleUrl: './break.component.scss'
})
export class BreakComponent {
    @Input() section!: string;
    @Input() includeHrTop: boolean = true;
    @Input() includeHrBottom: boolean = false;
}
