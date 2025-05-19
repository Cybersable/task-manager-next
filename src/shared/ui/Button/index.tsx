import { FC, memo } from "react";
import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: 'cursor-pointer focus:outline-none font-medium text-sm px-2.5 py-1.5',
  variants: {
    colorSchema: {
      secondary: 'focus:ring-1 rounded-lg text-white focus:ring-blue-300 dark:focus:ring-blue-800 bg-blue-700  dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-blue-800',
      primary: 'focus:ring-1 rounded-lg text-white focus:ring-green-300 dark:focus:ring-green-800 bg-green-700  dark:bg-green-600 dark:hover:bg-green-700 hover:bg-green-800',
      ghost: 'focus:ring-1 rounded-lg text-gray focus:ring-gray-100 bg-none hover:bg-gray-100',
      dangerLink: 'focus:underline text-red-600 hover:text-red-700'
    },
  },
  defaultVariants: {
    colorSchema: 'secondary',
  },
});

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
  btn?: 'primary' | 'secondary' | 'ghost' | 'dangerLink'
}

const Button: FC<ButtonProps> = memo(({ btn, children, ...rest }) => (
    <button type="button" className={buttonStyle({ colorSchema: btn })} { ...rest }>
      {children}
    </button>
  ));

export default Button;