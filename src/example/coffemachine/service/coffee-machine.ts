import {Cappuccino} from '../model/coffee/cappuccino'
import {Cocoa} from '../model/cocoa'

export function makeCappuccino(hasSyrup: boolean, hasIce: boolean): Cappuccino {
  return new Cappuccino(20, hasIce, hasSyrup, 50, 100);
}

export function makeCocoa(hasMarshmallow: boolean, hasIce: boolean): Cocoa {
  return new Cocoa(hasMarshmallow, hasIce, 200);
}