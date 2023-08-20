import { extendTheme } from '@chakra-ui/react'
import { Noto_Sans_JP } from 'next/font/google'

const notojp = Noto_Sans_JP({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-notojp',
    display: 'swap',
})

const theme = extendTheme({
    fonts: {
        body: notojp.style.fontFamily,
        heading: notojp.style.fontFamily,
    },
})

export default theme
