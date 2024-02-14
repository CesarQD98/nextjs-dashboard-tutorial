import { Inter } from 'next/font/google'
import { Lusitana } from 'next/font/google'
import { Arvo } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({ subsets:['latin'], weight: ['400', '700'] })
export const arvo = Arvo({ subsets: ['latin'], weight: ['400','700'], style: ['normal', 'italic'] })