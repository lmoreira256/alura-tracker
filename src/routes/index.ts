import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import TasksView from "@/views/TasksView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ProjectFormView from "@/views/Projects/ProjectFormView.vue";
import ProjectListView from "@/views/Projects/ProjectListView.vue";

const routes: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tasks',
    component: TasksView
}, {
    path: '/projects',
    component: ProjectsView,
    children: [
        {
            path: '',
            name: 'Projects',
            component: ProjectListView
        }, {
            path: 'new',
            name: 'New project',
            component: ProjectFormView
        }, {
            path: ':id',
            name: 'Update project',
            component: ProjectFormView,
            props: true
        }
    ]
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router