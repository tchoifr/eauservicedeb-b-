export class User {

  constructor(public id: string,
              public email?: string,
              public password?: string,
              public nom?: string,
              public prenom?: string,
              public adresse?: string,
              public numero?: string,
              public isAdmin?: boolean,
  ) {  }
}
