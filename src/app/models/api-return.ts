export class ApiReturn {
  info?: Infos[];
  results?: Results[];

  constructor(obj: Partial<ApiReturn>) {
    Object.assign(this, obj);
  }
}

export class Infos {
  count?: number;
  pages?: number;
  next?: string;
  prev?: string;
}

export class Results {
  id?: number;
  name?: string;

  constructor(obj: Partial<ApiReturn>) {
    Object.assign(this, obj);
  }
}
