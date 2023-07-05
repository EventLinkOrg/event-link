class AuthError extends Error {
    httpStatus: number;
    messages: string[];
    timestamp: string;
    constructor(messages: string[], httpStatus: number) {
        super();
        this.messages = messages;
        this.httpStatus = httpStatus;
        this.timestamp = new Date().toLocaleString(
            'en-US',
            { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }
        );
    }
}

export default AuthError;