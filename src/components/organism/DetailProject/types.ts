export type ButtonData = {
  link: string;
  text: string;
}

export type infoDetailData = {
  year: string;
  client: string;
  description: string;
  tags: string[];
  button: ButtonData;
}

export type DropdownCardData = {
  title: string;
  description: string;
  emoji: string;
}

export type CardData = {
  url: string;
  title: string;
  id: number;
};

export type HorizontalScrollCarouselData = {
  title: string;
  description: string;
  cards: CardData[];
}