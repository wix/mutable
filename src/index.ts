export {default as config} from './config';
export {defineClass as define} from './define-type';
export {Any} from './any';
export {default as String} from './string';
export {default as Boolean} from './boolean';
export {default as Number} from './number';
export {default as Function} from './function';
export {default as Reference} from './reference';
export {default as validation} from './validation';
export {default as List} from './list';
export {default as Es5Map, default as Map} from './es5-map';
export {NonPrimitive} from './non-primitive';
export {BaseClass} from "./base-class";
export {default as PropsBase} from './props-base';
export {LifeCycleManager} from './lifecycle';
export {defineEnum, EnumBase} from './define-enum';
export {either} from './generic-types';
import {globalModule, globalModuleMiss} from './singleton-module';

declare const module: {exports:any};
if (!globalModuleMiss){
    module.exports = globalModule;
}
