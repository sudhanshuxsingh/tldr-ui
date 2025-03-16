import LoginButton from "@/components/ui/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen w-screen grid place-items-center gap-3">
      <LoginButton />
    </div>
  );
}
