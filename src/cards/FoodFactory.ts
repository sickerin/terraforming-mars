
import {IProjectCard} from './IProjectCard';
import {Tags} from './Tags';
import {CardType} from './CardType';
import {Player} from '../Player';

export class FoodFactory implements IProjectCard {
  public cost: number = 12;
  public nonNegativeVPIcon: boolean = true;
  public tags: Array<Tags> = [Tags.STEEL];
  public name: string = 'Food Factory';
  public cardType: CardType = CardType.AUTOMATED;
  public text: string = 'Decrease your plant production 1 step and increase ' +
    'your mega credit production 4 steps. Gain 1 victory point.';
  public requirements: undefined;
  public description: string = 'For the growing population.';
  public canPlay(player: Player): boolean {
    return player.plantProduction >= 1;
  }
  public play(player: Player) {
    player.plantProduction--;
    player.megaCreditProduction += 4;
    player.victoryPoints++;
    return undefined;
  }
}
