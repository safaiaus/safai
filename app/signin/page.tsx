import AuthForm from "@/components/AuthForm";

export const metadata = { title: "Sign in · Safai" };

export default function SignInPage() {
  return <AuthForm mode="signin" />;
}