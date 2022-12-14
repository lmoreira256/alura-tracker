import {NotificationType} from "@/interfaces/INotification";
import {store} from "@/store";
import {NOTIFICATION} from "@/store/mutation-type";

type Notifier = {
    notify: (type: NotificationType, title: string, message: string) => void
}

export default (): Notifier => {
    const notify = (type: NotificationType, title: string, message: string): void => {
        store.commit(NOTIFICATION, {
            title,
            message,
            type
        })
    }

    return {
        notify
    }
}