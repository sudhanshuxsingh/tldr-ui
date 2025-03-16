"use client"

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginButton() {
    const router = useRouter();
    useEffect(() => {
        router.prefetch("/auth/login");
        const down = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === "l") {
                e.preventDefault()
                router.push("/auth/login");
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <Button asChild variant="ghost" className="group/login-btn gap-1">
            <Link href="/auth/login">
                <span>Login</span>
                <kbd className="pointer-events-none inline-flex select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 group-hover/login-btn:bg-background">
                    L
                </kbd>
            </Link>
        </Button>
    )
}

// className={cn(buttonVariants({ variant: "ghost" }), "items-center text-sm text-muted-foreground")}