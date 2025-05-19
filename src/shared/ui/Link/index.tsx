import { FC, memo, ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

interface LinkProps extends NextLinkProps {
    children: ReactNode
}

const Link: FC<LinkProps> = memo(({ children, ...rest }) => (
    <NextLink { ...rest }>
        {children}
    </NextLink>
));

export default Link;
