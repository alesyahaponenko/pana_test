import { useTheme } from 'next-themes'
import { useHeaderStore } from '@/store/useHeaderStore'

export const useThemeHandler = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { setCurrentTheme, setFill } = useHeaderStore()

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    setCurrentTheme(newTheme)
    setFill(newTheme === 'dark' ? '#FFFFFF' : '#000000')
  }

  return { theme, resolvedTheme, handleThemeChange }
}