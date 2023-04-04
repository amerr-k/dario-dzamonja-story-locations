interface ILocations {
  [key: string]: boolean;
}

export interface IQuote {
  id: string;
  content: string;
  storyId: string;
  locations: ILocations;
}

class Quote {
  id: string;
  content: string;
  storyId: string;
  locations: ILocations;

  constructor(data: IQuote) {
    this.id = data.id;
    this.content = data.content;
    this.storyId = data.storyId;
    this.locations = data.locations;
  }
}

export default Quote;
