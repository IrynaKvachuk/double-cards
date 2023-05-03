export type CardSide = 'front' | 'back';

export type CardType = {
  src: string;
  id: string;
  name: string;
  side: CardSide;
  matched: boolean;
  index: number;
  freezed: boolean;
};

export type CardsDeck = Array<CardType>;
