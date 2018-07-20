class Ticket {
    private destination: string;
    private price: number;
    private status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
const ticketsDatabase = [];
function ticketDB(tickets, sortCriteria) {
    for (let ticket of tickets) {
        let data = ticket.split('|');
        let destination = data[0];
        let price = Number(data[1]);
        let status = data[2];

        const currentTicket = new Ticket(destination, price, status);
        ticketsDatabase.push(currentTicket);
    }

    if(sortCriteria==='price'){
        return  ticketsDatabase.sort((a,b) =>a[sortCriteria] - b[sortCriteria]);
    }

    return  ticketsDatabase.sort((a,b) =>a[sortCriteria].localeCompare( b[sortCriteria]));;

}


// console.log(ticketDB(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination'
// ))

console.log(ticketDB(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
))