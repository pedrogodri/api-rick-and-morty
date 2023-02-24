export class Character {

  id?: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  image?: string;

  constructor(obj: Partial<Character>) {
    Object.assign(this, obj);
  }
}

export class Location {
  name?: string;
  url?: string;

  constructor(obj: Partial<Location>) {
    Object.assign(this, obj);
  }
}

