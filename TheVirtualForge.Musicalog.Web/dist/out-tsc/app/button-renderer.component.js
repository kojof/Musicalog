import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ButtonRendererComponent = class ButtonRendererComponent {
    agInit(params) {
        this.params = params;
        this.label = this.params.label || null;
    }
    refresh(params) {
        return true;
    }
    onClick($event) {
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            const params = {
                event: $event,
                rowData: this.params.node.data
                // ...something
            };
            this.params.onClick(this.params);
        }
    }
};
ButtonRendererComponent = __decorate([
    Component({
        selector: 'app-button-renderer',
        template: `
    <button type="button" (click)="onClick($event)">{{label}}</button>
    `
    })
], ButtonRendererComponent);
export { ButtonRendererComponent };
//# sourceMappingURL=button-renderer.component.js.map