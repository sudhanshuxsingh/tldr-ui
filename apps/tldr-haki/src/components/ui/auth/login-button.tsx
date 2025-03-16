import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LoginButton() {
    return (
        <Link href="/auth/login" className={cn(buttonVariants({ variant: "ghost" }), "items-center text-sm text-muted-foreground")}>
            <span>Login</span>
            <kbd className="pointer-events-none inline-flex select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                L
            </kbd>
        </Link>
    )
}