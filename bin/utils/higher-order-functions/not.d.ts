import type { Predicate } from '../../typings/Predicate.js';
export declare const not: <T extends Predicate>(fn: T) => (arg: Parameters<T>[0]) => boolean;
