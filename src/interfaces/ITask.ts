import IProject from "@/interfaces/IProject";

export default interface ITask {
    time: number,
    description: string,
    project: IProject
}