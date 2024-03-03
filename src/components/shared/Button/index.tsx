import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utilis";
import { Divide } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "h-9 xl:h-10 bg-secondary-500 text-white hover:bg-secondary-500/90 w-full",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "w-fit h-9 xl:h-10 bg-primary-500 hover:bg-primary-800  border border-none text-white text-lg hover:bg-primary-500/90 hover:text-white rounded-lg",
        secondary:
          "w-fit h-9 xl:h-100 bg-transparent hover:bg-none text-text border border-text text-lg hover:bg-text/90 hover:text-white rounded-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 w-full",
        sm: "h-9 rounded-md px-3 w-full",
        lg: "h-11 rounded-md px-8 w-ful",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: any;
  type?: string | any;
  asChild?: boolean;
  icon?: any;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, type, icon, text, variant, size, asChild = false, ...props },
    ref
  ) => {
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon ? (
          <div className="flex items-center">
            <span className="hidden lg:block"> {text}</span>
            <span className="ml-0 lg:ml-2"> {icon}</span>
          </div>
        ) : (
          text
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
