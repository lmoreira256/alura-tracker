import IProject from "@/interfaces/IProject";
import {createStore, Store, useStore as vuexUseStore} from "vuex";
import {InjectionKey} from "vue";
import {ADD_PROJECT, DELETE_PROJECT, NOTIFICATION, PUT_PROJECT} from "@/store/mutation-type";
import {INotification} from "@/interfaces/INotification";

interface State {
    projects: IProject[],
    notifications: INotification[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projects: [],
        notifications: []
    },
    mutations: {
        [ADD_PROJECT](state, projectName: string) {
            const project = {
                id: new Date().toISOString(),
                name: projectName
            } as IProject
            state.projects.push(project)
        },
        [PUT_PROJECT](state, project: IProject) {
            const index = state.projects.findIndex(proj => project.id === proj.id)
            state.projects[index] = project
        },
        [DELETE_PROJECT](state, id: string) {
            state.projects = state.projects.filter(proj => proj.id != id)
        },
        [NOTIFICATION](state, newNotification: INotification) {
            newNotification.id = new Date().getTime();
            state.notifications.push(newNotification);

            setTimeout(() => {
                state.notifications = state.notifications.filter(notification => notification.id != newNotification.id)
            }, 3000)
        }
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}