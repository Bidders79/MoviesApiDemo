import { Component, Input, OnInit } from '@angular/core';

//content projection
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'collapsibleCharacters',
    template: `
    <div class="collapsible-characters" (click)="toggleContent()" class="collapsible-well">
        <h4>
            <ng-content select="[section-title]"></ng-content>
        </h4>
        <div class="collapsible-characters-body">
            <ng-content *ngIf="visible" select="[section-body]"></ng-content>
        </div>
    </div>
    `,
    styles: ['.collapsible-characters { background-color: blue;}'],
})

// tslint:disable-next-line:component-class-suffix
export class CollapsibleCharacters implements OnInit {
   
    visible: boolean;

    toggleContent() {
        this.visible = !this.visible;
    }

    // tslint:disable-next-line:semicolon
    ngOnInit() {
        this.visible = false;
    }
}
