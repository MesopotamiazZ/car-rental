import { SlateElement } from '@wangeditor/editor'

export type ImageElement = SlateElement & {
    src: string
    alt: string
    url: string
    href: string
}

export type InsertFnType = (url: string, alt: string, href: string) => void

