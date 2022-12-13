export enum NotificationType {
    SUCCESS,
    WARNING,
    DANGER
}

export interface INotification {
    title: string
    message: string
    type: NotificationType
    id: number
}
