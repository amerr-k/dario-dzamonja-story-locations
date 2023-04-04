export interface IStory {
  id: string;
  content: string;
  name: string;
}

class Story {
  id: string;
  content: string;
  name: string;

  constructor(data: IStory) {
    this.id = data.id;
    this.content = data.content;
    this.name = data.name;
  }
}

export default Story;
