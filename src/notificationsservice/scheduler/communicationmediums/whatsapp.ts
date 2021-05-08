
import BaseMedium from "./basemedium";
import { Retryable } from "typescript-retry-decorator";

class Whatsapp extends BaseMedium {

    constructor(public configuration) {
        super(configuration);
    }
    @Retryable({ maxAttempts: 3 })
    async sendMessage(receiver: any, message: string) {
        // Implement whatsapp api here
        return true;
    }
    initializeConfiguration(): void {
        // Initialize whatsapp api here
    }

}

export default Whatsapp;