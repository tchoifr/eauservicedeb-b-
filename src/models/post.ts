export class Post {

    constructor(public id: number,
                public titre: string,
                public message: string,
                public compteur: number,
                public idUser: number[]
    ) {  }
  }
