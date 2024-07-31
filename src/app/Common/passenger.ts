export class Passenger {
  firstName: String;
  lastName: String;
  birthDate: String;
  gender: String;
  user: {
    id: number;
    firstName: String;
    lastName: String;
    birthDate: String;
    gender: String;
    email: String;
    password: String;
  };
  category: {
    categoryId: number;
    name: String;
    discountPercent: number;
  };
  flightDate:String;
  flightId:number;
  bookingAmount:number;
}
