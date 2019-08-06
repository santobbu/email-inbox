export interface EmailItem {
    from: {
        name: string,
        email: string,
    }, 
    subject: string,
    body: string,
    time: string,
}