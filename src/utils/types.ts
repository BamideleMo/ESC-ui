export type LinkType = {
    name: string,
    link: string,
    hasChildrem: boolean,
    children?: LinkType[]
}