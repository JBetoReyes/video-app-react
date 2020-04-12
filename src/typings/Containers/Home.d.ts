export interface CarouselItemState {
  id: number;
  title: string;
  contentRating: string;
  duration: number;
  source?: string;
  cover: string;
  year: number;
  slug?: string;
}

export interface HomeState {
  mylist: CarouselItemState[];
  trends: CarouselItemState[];
  originals: CarouselItemState[];
}
