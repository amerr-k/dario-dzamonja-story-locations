export interface ILocation {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  type: string;
}

class Location {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  type: string;

  constructor(data: ILocation) {
    this.id = data.id;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.name = data.name;
    this.type = data.type;
  }
}

export default Location;
