export class User {

  constructor(public id: number,
              public email?: string,
              public mdp?: string,
              public admin?: boolean
  ) {  }
}
