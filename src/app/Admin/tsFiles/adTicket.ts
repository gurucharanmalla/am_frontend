export class AdTicket{
    ticketId: number;
    activityId: number;
    description:string;
    Charges : number;

    constructor(ticketId: number,activityId: number,description: string,Charges: number){
        this.ticketId=ticketId;
        this.activityId=activityId;
        this.description=description;
        this.Charges=Charges;
    }
}