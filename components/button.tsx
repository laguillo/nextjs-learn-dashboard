import { Button } from "@/components/ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonEdit({ children, className, ...rest }: ButtonProps) {
  return <Button {...rest}>{children}</Button>;
}
