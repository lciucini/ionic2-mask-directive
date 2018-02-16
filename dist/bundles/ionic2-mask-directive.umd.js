(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms'], factory) :
	(factory((global['ionic2-mask-directive'] = {}),global.ng.core,global.ng.forms));
}(this, (function (exports,core,forms) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */









function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

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
                for (var chars_1 = __values(chars), chars_1_1 = chars_1.next(); !chars_1_1.done; chars_1_1 = chars_1.next()) {
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
    { type: core.Pipe, args: [{ name: '[mask]' },] },
];
/** @nocollapse */
Ionic2MaskDirective.ctorParameters = function () { return [
    { type: forms.NgControl, },
]; };
Ionic2MaskDirective.propDecorators = {
    "mask": [{ type: core.Input },],
    "ngOnChanges": [{ type: core.HostListener, args: ['change',] },],
    "onKeyUp": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
};

exports.Ionic2MaskDirective = Ionic2MaskDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic2-mask-directive.umd.js.map
