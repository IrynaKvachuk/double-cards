export type CardSide = 'front' | 'back';

export type CardType = {
  src: string;
  id: string;
  name: string;
  side: CardSide;
  matched: boolean; // show all for 3s with side and close all needed with matched
};

export type CardsDeck = Array<CardType>;
