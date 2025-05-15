import { FC, memo } from "react";

interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, React.AriaAttributes {}

const Title: FC<HeadingProps> = memo(({ children, ...rest }) => (
    <h2 className="text-xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl" { ...rest }>
        {children}
    </h2>
));

export default Title;