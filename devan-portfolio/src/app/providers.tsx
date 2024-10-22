'use client'
import { theme } from './theme'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

/**
 * Providers component wraps the application with necessary global providers.
 * It ensures that Chakra UI's theme and color mode settings are available across the app.
 * - ChakraProvider: Applies the custom theme to all components within the app.
 */

export function Providers({ children }: { children: React.ReactNode }) {

  return (
    <>
  <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>
  </>
  )
}
