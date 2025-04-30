import { cn } from "../../lib/shadcn/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between py-4 px-12 w-full",
        className
      )}
      {...props}
    />
  );
}
