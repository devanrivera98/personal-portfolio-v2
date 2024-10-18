import {Montserrat} from 'next/font/google'
import { Open_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans'
})

export const fonts = {
  montserrat,
  openSans
}
