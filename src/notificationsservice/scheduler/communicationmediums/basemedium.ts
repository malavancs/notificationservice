abstract class BaseMedium {
    public senderObject: any;

    constructor(public configuration: any) {
        this.initializeConfiguration();
    }
    /**
     * Implement this method send the message to respective receiver
     * @param receiver It contains the receiver address object
     * @param message It contains the actual message
     */
    abstract sendMessage(receiver: any, message: any): Promise<boolean>;

    /**
     * Implement this method to initialize the sender object
     */
    abstract initializeConfiguration(): void;
}

export default BaseMedium;