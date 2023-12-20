import React from 'react'
import { twMerge } from 'tailwind-merge'

const textStyle = {
  'heading-large': 'text-[4rem] leading-[4.5rem] font-bold text-black',
  'heading-medium': 'text-[2.5rem] leading-[3rem] font-bold text-black',
  'heading-small': 'text-[1.875rem] leading-[2.5rem] font-bold text-black',
  'label-large': 'text-[1.125rem] leading-[1.75rem] font-bold text-black',
  'label-medium': 'text-[0.9375rem] leading-[1.5rem] font-bold text-black',
  'label-small': 'text-[0.875rem] leading-[1.25rem] font-bold text-black',
  'label-extrasmall': 'text-[0.75rem] leading-[1rem] font-bold text-black',
  'paragraph-large':
    'text-[1.125rem] leading-[1.75rem] font-[500] text-gray-600',
  'paragraph-medium':
    'text-[0.9375rem] leading-[1.5rem] font-[500] text-gray-600',
  'paragraph-small':
    'text-[0.875rem] leading-[1.25rem] font-[500] text-gray-600',
  'paragraph-extrasmall':
    'text-[0.75rem] leading-[1rem] font-[500] text-gray-600',
}

const topSpacer = {
  'heading-large': 'pt-[2rem]',
  'heading-medium': 'pt-[1.5rem]',
  'heading-small': 'pt-[0.75rem]',
  'label-large': 'pt-[0.5rem]',
  'label-medium': 'pt-[0.5rem]',
  'label-small': 'pt-[0.5rem]',
  'label-extrasmall': 'pt-[0.5rem]',
  'paragraph-large': 'pt-[1rem]',
  'paragraph-medium': 'pt-[0.75rem]',
  'paragraph-small': 'pt-[0.5rem]',
  'paragraph-extrasmall': 'pt-[0.5rem]',
}

const bottomSpacer = {
  'heading-large': 'pb-[2rem]',
  'heading-medium': 'pb-[1rem]',
  'heading-small': 'pb-[0.75rem]',
  'label-large': 'pb-[0.5rem]',
  'label-medium': 'pb-[0.5rem]',
  'label-small': 'pb-[0.5rem]',
  'label-extrasmall': 'pb-[0.5rem]',
  'paragraph-large': 'pb-[0.5rem]',
  'paragraph-medium': 'pb-[1.5rem]',
  'paragraph-small': 'pb-[1rem]',
  'paragraph-extrasmall': 'pb-[1rem]',
}

export const Typography= ({
  variant = 'heading-medium',
  spacers,
  children,
  className,
}) => {
  // Create a component map
  const Component = {
    'heading-large': 'h1',
    'heading-medium': 'h2',
    'heading-small': 'h3',
    'label-large': 'h4',
    'label-medium': 'h5',
    'label-small': 'h6',
    'label-extrasmall': 'h6',
    'paragraph-large': 'p',
    'paragraph-medium': 'p',
    'paragraph-small': 'p',
    'paragraph-extrasmall': 'p',
  }[variant]

  // Return the appropriate heading level with the class string applied
  return React.createElement(
    Component,
    {
      className: twMerge(
        textStyle[variant],
        Array.isArray(spacers) && spacers.includes('top') && topSpacer[variant],
        Array.isArray(spacers) &&
          spacers.includes('bottom') &&
          bottomSpacer[variant],
        className
      ),
    },
    children
  )
}
