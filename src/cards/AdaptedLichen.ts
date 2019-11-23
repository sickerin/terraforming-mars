
import {IProjectCard} from './IProjectCard';
import {Tags} from './Tags';
import {CardType} from './CardType';
import {Player} from '../Player';

export class AdaptedLichen implements IProjectCard {
    public cost: number = 9;
    public tags: Array<Tags> = [Tags.PLANT];
    public cardType: CardType = CardType.AUTOMATED;
    public name: string = 'Adapted Lichen';
    public text: string = 'Increase your plant production 1 step';
    public description: string = 'Suitable even for early terraforming';
    public requirements: undefined;
    public canPlay(): boolean {
      return true;
    }
    public play(player: Player) {
      player.plantProduction++;
      return undefined;
    }
}
