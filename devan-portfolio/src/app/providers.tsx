'use client'
import { theme } from './theme'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

/**
 * Providers component wraps the application with necessary global providers.
 * It ensures that Chakra UI's theme and color mode settings are available across the app.
 *
 * - ChakraProvider: Applies the custom theme to all components within the app.
 * - ColorModeScript: Injects the correct color mode (light/dark) based on the user's preference
 *   or system settings. This ensures the correct color mode is applied on the initial load,
 *   avoiding a flash of incorrect mode.
 */

export function Providers({ children }: { children: React.ReactNode }) {

  return (
    <>
  <ColorModeScript initialColorMode={theme.initialColorMode} />
  <ChakraProvider theme={theme}>
    {/* The script lets the corrrect color mode be applied on inital load */}
    {children}
  </ChakraProvider>
  </>
  )
}
