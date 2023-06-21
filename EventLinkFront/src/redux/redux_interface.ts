export interface BasicState {
    state: ReduxState
    error?: ErrorState
}

export type ReduxState = 'idle' | 'success' | 'error' | 'pending'

export type ErrorState = {
    messages: string[],
    httpStatus: number,
    timestamp: string
}