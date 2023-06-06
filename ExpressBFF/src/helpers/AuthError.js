class AuthError extends Error {
    constructor(messages, httpStatus) {
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