export interface CarouselItemState {
  id: number;
  title: string;
  contentRating: string;
  duration: number;
  source?: string;
  cover: string;
  year: number;
}

export interface HomeState {
  [key: string]: CarouselItemState[];
}
