'use client'

import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useThemeHandler } from '@/lib/hooks/useThemeHandler'

const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-6 w-6 group-hover:text-lightGray"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
)

const Moon = ({ color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={color}
    className="h-6 w-6 group-hover:text-lightGray"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
)

const Blank = () => <svg className="h-6 w-6" />

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, handleThemeChange } = useThemeHandler()

  useEffect(() => setMounted(true), [])

  return (
    <div className="mr-5 flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex items-center justify-center hover:text-green dark:hover:text-lightGray">
          {mounted ? resolvedTheme === 'dark' ? <Moon color="white" /> : <Sun /> : <Blank />}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-carbonBlack">
            <div className="p-1">
              {['light', 'dark'].map((themeOption) => (
                <Menu.Item key={themeOption}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-white text-darkSlate' : ''
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm text-darkSlate dark:text-white dark:hover:text-darkSlate`}
                      onClick={() => handleThemeChange(themeOption)}
                    >
                      <div className="mr-2">
                        {themeOption === 'light' && <Sun />}
                        {themeOption === 'dark' && <Moon />}
                      </div>
                      {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default ThemeSwitch
