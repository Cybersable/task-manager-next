import { FC, memo } from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: 'cursor-pointer focus:outline-none focus:ring-1 text-white font-medium text-sm rounded-lg px-2.5 py-1.5',
  variants: {
    colorSchema: {
      secondary: 'focus:ring-blue-300 dark:focus:ring-blue-800 bg-blue-700  dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-blue-800',
      primary: 'focus:ring-green-300 dark:focus:ring-green-800 bg-green-700  dark:bg-green-600 dark:hover:bg-green-700 hover:bg-green-800',
    },
  },
  defaultVariants: {
    colorSchema: 'secondary',
  },
});

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {
  btn?: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = memo(({ btn, children, ...rest }) => (
    <button type="button" className={button({ colorSchema: btn })} { ...rest }>
      {children}
    </button>
  ));

export default Button;