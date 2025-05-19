import { FC, memo } from "react";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {}

const Button: FC<ButtonProps> = memo(({ children, ...rest }) => (
    <button type="button" { ...rest }>
      {children}
    </button>
  ));

export default Button;