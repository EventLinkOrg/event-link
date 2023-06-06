export interface BasicState {
    state: ReduxState
    error?: ErrorState
}

type ReduxState = 'idle' | 'success' | 'error' | 'pending'

export type ErrorState = {
    messages: string[],
    httpStatus: number,
    timestamp: string
}