import {Drink} from './drink'

export class Cocoa extends Drink{
  hasMarshmallow: boolean;

  constructor(hasMarshmallow: boolean, hasIce: boolean, amount: number) {
    super(hasIce, amount);
    this.hasMarshmallow = hasMarshmallow;
  }

}