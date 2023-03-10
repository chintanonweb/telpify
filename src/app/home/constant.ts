export interface GridData {
    ticketId: string,
    client: string,
    subject: string,
    category: string,
    serverity: string,
    currentStatus: string,
    loggedOn: string,
    logggedBy: string,
    currentWith: string,
    noOfJobs: string,
    action?: string
}

export interface CardConfig {
  color: string;
  text: string;
  count: number;
}

export const gridData: GridData[] = [
    {
        ticketId: 'Ticket Id here',
        client: 'Client Here',
        subject: 'subject Here',
        category: 'category Here',
        serverity: 'serverity Here',
        currentStatus: 'Logged',
        loggedOn: 'Occured',
        logggedBy: 'Jenny Penz',
        currentWith: 'Client Here',
        noOfJobs: 'Client Here',
        action: '',
    },
    {
        ticketId: 'Ticket Id here',
        client: 'Client Here',
        subject: 'subject Here',
        category: 'category Here',
        serverity: 'serverity Here',
        currentStatus: 'Recieved',
        loggedOn: 'Occured',
        logggedBy: 'Jenny Penz',
        currentWith: 'Client Here',
        noOfJobs: 'Client Here',
        action: '',
    },
    {
        ticketId: 'Ticket Id here',
        client: 'Client Here',
        subject: 'subject Here',
        category: 'category Here',
        serverity: 'serverity Here',
        currentStatus: 'InProgress',
        loggedOn: 'Occured',
        logggedBy: 'Jenny Penz',
        currentWith: 'Client Here',
        noOfJobs: 'Client Here',
        action: '',
    },
    {
        ticketId: 'Ticket Id here',
        client: 'Client Here',
        subject: 'subject Here',
        category: 'category Here',
        serverity: 'serverity Here',
        currentStatus: 'Re-assigned',
        loggedOn: 'Occured',
        logggedBy: 'Jenny Penz',
        currentWith: 'Client Here',
        noOfJobs: 'Client Here',
        action: '',
    },
    {
        ticketId: 'Ticket Id here',
        client: 'Client Here',
        subject: 'subject Here',
        category: 'category Here',
        serverity: 'serverity Here',
        currentStatus: 'Resolved',
        loggedOn: 'Occured',
        logggedBy: 'Jenny Penz',
        currentWith: 'Client Here',
        noOfJobs: 'Client Here',
        action: '',
    },
    {
        ticketId: 'Ticket Id here',
        client: 'Client Here',
        subject: 'subject Here',
        category: 'category Here',
        serverity: 'serverity Here',
        currentStatus: 'Esclated',
        loggedOn: 'Occured',
        logggedBy: 'Jenny Penz',
        currentWith: 'Client Here',
        noOfJobs: 'Client Here',
        action: '',
    },
    {
        ticketId: 'Ticket Id here',
        client: 'Client Here',
        subject: 'subject Here',
        category: 'category Here',
        serverity: 'serverity Here',
        currentStatus: 'Retraced',
        loggedOn: 'Occured',
        logggedBy: 'Jenny Penz',
        currentWith: 'Client Here',
        noOfJobs: 'Client Here',
        action: '',
    },
    {
        ticketId: 'Ticket Id here',
        client: 'Client Here',
        subject: 'subject Here',
        category: 'category Here',
        serverity: 'serverity Here',
        currentStatus: 'Rejected',
        loggedOn: 'Occured',
        logggedBy: 'Jenny Penz',
        currentWith: 'Client Here',
        noOfJobs: 'Client Here',
        action: '',
    },
    {
        ticketId: 'Ticket Id here',
        client: 'Client Here',
        subject: 'subject Here',
        category: 'category Here',
        serverity: 'serverity Here',
        currentStatus: 'Closed',
        loggedOn: 'Occured',
        logggedBy: 'Jenny Penz',
        currentWith: 'Client Here',
        noOfJobs: 'Client Here',
        action: '',
    },
    {
        ticketId: 'Ticket Id here',
        client: 'Client Here',
        subject: 'subject Here',
        category: 'category Here',
        serverity: 'serverity Here',
        currentStatus: 'Reopend',
        loggedOn: 'Occured',
        logggedBy: 'Jenny Penz',
        currentWith: 'Client Here',
        noOfJobs: 'Client Here',
        action: '',
    }
]

export const cardsData: CardConfig[] = [
    {
        color: 'bg-lime-300',
        text: 'With me',
        count: 97
    },
    {
        color: 'bg-orange-300',
        text: 'Convert to jobs',
        count: 31
    },
    {
        color: 'bg-purple-300',
        text: 'Escalated',
        count: 10
    },
    {
        color: 'bg-sky-300',
        text: 'Released',
        count: 52
    },
    {
        color: 'bg-pink-300',
        text: 'Un assigned',
        count: 27
    },
]