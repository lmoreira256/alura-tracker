import {NotificationType} from "@/interfaces/INotification";
import {NOTIFICATION} from "@/store/mutation-type";
import {store} from "@/store"

export const notifyMixin = {
    methods: {
        notify(type: NotificationType, title: string, message: string) {
            store.commit(NOTIFICATION, {
                title,
                message,
                type
            })
        }
    }
}