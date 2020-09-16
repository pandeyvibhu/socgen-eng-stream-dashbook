export class Card {
    constructor(
      public title: string,
      public status: string,
      public groupId: number,
      public url?: string,
      public favorite?: boolean,
      public description?: string,
      public id?: number,
      public shortUrl?: string,
      public authority?: boolean,
      public isCreator?: boolean
    ){}
}
