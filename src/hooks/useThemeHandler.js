import { useTheme } from 'next-themes'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentTheme, setFill } from '@/store/slices/headerSlice'

export const useThemeHandler = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const dispatch = useAppDispatch()

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    dispatch(setCurrentTheme(newTheme))
    dispatch(setFill(newTheme === 'dark' ? '#FFFFFF' : '#000000'))
  }

  return { theme, resolvedTheme, handleThemeChange }
}