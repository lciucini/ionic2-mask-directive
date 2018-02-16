import * as tslib_1 from "tslib";
import { Pipe, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ionic2MaskDirective = /** @class */ (function () {
    /**
     * @param {?} control
     */
    function Ionic2MaskDirective(control) {
        this.control = control;
    }
    /**
     * @return {?}
     */
    Ionic2MaskDirective.prototype.ngOnChanges = function () {
        var /** @type {?} */ value = this.control.control.value;
        if (value) {
            this.control.control.setValue(this.format(value));
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    Ionic2MaskDirective.prototype.onKeyUp = function ($event) {
        if ($event.keyCode !== 13 && $event.keyCode !== 9) {
            var /** @type {?} */ value = this.control.control.value;
            this.control.control.setValue(this.format(value));
        }
    };
    /**
     * @param {?} v
     * @return {?}
     */
    Ionic2MaskDirective.prototype.format = function (v) {
        var /** @type {?} */ s = '';
        var /** @type {?} */ matches = v.match(/[a-zA-Z0-9]+/g);
        if (matches !== null) {
            var /** @type {?} */ value = matches.join('').split('');
            var /** @type {?} */ chars = this.mask.split('');
            try {
                for (var chars_1 = tslib_1.__values(chars), chars_1_1 = chars_1.next(); !chars_1_1.done; chars_1_1 = chars_1.next()) {
                    var c = chars_1_1.value;
                    if (value.length === 0) {
                        break;
                    }
                    switch (c) {
                        case '#':
                            s += value[0];
                            value = value.slice(1);
                            break;
                        case '9':
                            if (value[0].match(/\d/) !== null) {
                                s += value[0];
                                value = value.slice(1);
                            }
                            break;
                        case 'A':
                            if (value[0].match(/[a-zA-Z]/) !== null) {
                                s += value[0];
                                value = value.slice(1);
                            }
                            break;
                        default:
                            s += c;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (chars_1_1 && !chars_1_1.done && (_a = chars_1.return)) _a.call(chars_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return s;
        var e_1, _a;
    };
    return Ionic2MaskDirective;
}());
Ionic2MaskDirective.decorators = [
    { type: Pipe, args: [{ name: '[mask]' },] },
];
/** @nocollapse */
Ionic2MaskDirective.ctorParameters = function () { return [
    { type: NgControl, },
]; };
Ionic2MaskDirective.propDecorators = {
    "mask": [{ type: Input },],
    "ngOnChanges": [{ type: HostListener, args: ['change',] },],
    "onKeyUp": [{ type: HostListener, args: ['keyup', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { Ionic2MaskDirective };
//# sourceMappingURL=ionic2-mask-directive.js.map
