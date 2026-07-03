import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main style={{ minHeight: "82vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "120px", paddingBottom: "80px" }}>
      <SignIn />
    </main>
  );
}