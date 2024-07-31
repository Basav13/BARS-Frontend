export class Booking {
    bookingId:number;
    refNo:String;
    user: {
        id: number;
        firstName: String;
        lastName: String;
        birthDate: String;
        gender: String;
        email: String;
        password: String;
      };
    flight: {
        flightId: number;
        planes:{
            planeId:String;
            status:String;
            seats:number;
        }
        routes:{
            routeId:number;
            sourceId:number;
            destId:number;
            distance:number;
            basefare:number;
        }
        flightSlots:{
            slotId:number;
            slotFrom:Date;
            slotTo:Date;
        }
    }
    flightDate: Date;
    fareCategory: {
        categoryId:number;
        name:String;
        discountPercent:number;
    }
    amount:number;
    status:String;
    lastUpdateTime:Date;
    fName:String;
    lName:String;
}
