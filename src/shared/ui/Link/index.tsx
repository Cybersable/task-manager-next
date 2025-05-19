import { FC, memo, ReactNode } from "react";
import { tv } from "tailwind-variants";
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

const linkStyle = tv({
  base: 'cursor-pointer focus:outline-none focus:ring-1 font-medium text-sm rounded-lg px-2.5 py-1.5',
  variants: {
    schema: {
        link: 'font-medium text-blue-600 dark:text-blue-500 hover:text-blue-700',
        btn: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
    },
  },
  defaultVariants: {
    schema: 'link',
  },
});

interface LinkProps extends NextLinkProps {
    link?: 'link' | 'btn'
    children: ReactNode
}

const Link: FC<LinkProps> = memo(({ link, children, ...rest }) => (
    <NextLink className={linkStyle({ schema: link })} { ...rest }>
        {children}
    </NextLink>
));

export default Link;
