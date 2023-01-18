import IProject from "@/interfaces/IProject";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";
import { ADD_PROJECT, ADD_TASK, DEFINE_PROJECTS, DEFINE_TASK, DELETE_PROJECT, NOTIFICATION, PUT_PROJECT } from "@/store/mutation-type";
import { INotification } from "@/interfaces/INotification";
import { CREATE_PROJECT, CREATE_TASK, GET_PROJECTS, GET_TASKS, UPDATE_PROJECT } from "./actions-type";
import http from "@/http";
import ITask from "@/interfaces/ITask";

interface State {
    projects: IProject[],
    tasks: ITask[],
    notifications: INotification[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projects: [],
        tasks: [],
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
        [DEFINE_PROJECTS](state, projects: IProject[]) {
            state.projects = projects
        },
        [DEFINE_TASK](state, tasks: ITask[]) {
            state.tasks = tasks
        },
        [ADD_TASK](state, task: ITask) {
            state.tasks.push(task)
        },
        [NOTIFICATION](state, newNotification: INotification) {
            newNotification.id = new Date().getTime();
            state.notifications.push(newNotification);

            setTimeout(() => {
                state.notifications = state.notifications.filter(notification => notification.id != newNotification.id)
            }, 3000)
        }
    },
    actions: {
        [GET_PROJECTS]({ commit }) {
            http.get('projects')
                .then((response) => commit(DEFINE_PROJECTS, response.data))
        },
        [CREATE_PROJECT](context, projectName: string) {
            return http.post('/projects', {
                name: projectName
            })
        },
        [UPDATE_PROJECT](context, project: IProject) {
            return http.put(`/projects/${project.id}`, project)
        },
        [DELETE_PROJECT]({ commit }, projectId: string) {
            return http.delete(`/projects/${projectId}`)
                .then(() => commit(DELETE_PROJECT, projectId))
        },
        [GET_TASKS]({ commit }) {
            http.get('tasks')
                .then((response) => commit(DEFINE_TASK, response.data))
        },
        [CREATE_TASK]({ commit }, task: ITask) {
            return http.post('/tasks', task).then(response => commit(ADD_TASK, response.data))
        },
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}