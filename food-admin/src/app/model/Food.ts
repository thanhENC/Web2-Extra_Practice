export class Food {
  constructor(
    public id: number,
    public name: string = '',
    public price: number = 0,
    public image: string = '',
    public expireDate: Date = new Date(),
    public rating: number = 0,
  ) {}
}
