export type LinkType = {
  name: string
  link: string
  hasChildrem: boolean
  children?: LinkType[]
}

export type StatementIconType = { icon: string; text: string }
export type PostType = { image: string; isVideo: boolean; title: string; description: string }
export type StatementType = {
  headerText: string
  text?: string
  icons?: StatementIconType[]
}
