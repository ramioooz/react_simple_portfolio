export type linkType = {
    title: string,
    url: string,
    img?: string,
}
export type skillType = {
    name: string,
    level: "Experienced" | "Intermediate" | "Basic",
    icon?: string,
}
export type projectType = {
    name: string,
    img: string,
    githubLink?: string,
    demoLink?: string,
}