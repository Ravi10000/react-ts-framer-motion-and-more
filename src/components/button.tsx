import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  {
    variants: {
      variant: {
        default: "bg-red-500",
        primary: "bg-blue-500",
        success: "bg-green-500",
      },
      size: {
        default: "py-2 px-4",
        sm: "py-1 px-2",
        lg: "py-3 px-6",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    }
  }

)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

// export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, size, variant, ...props }, ref) => {
//   return <button ref={ref} className={cn(buttonVariants({ className, size, variant }))} {...props} />;
// });
export const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
  return <button className={cn(buttonVariants({ className, size, variant }))} {...props} />;
};

