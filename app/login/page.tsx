import Image from "next/image";
import { Button } from "../_components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// import { LogInIcon } from "lucide-react";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      {/* Esquerda */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logoLogin.svg"
          alt="Finance AI "
          width={172}
          height={39}
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-Vindo</h1>
        <p className="mb-8 text-muted-foreground">
          finance.ai Bem-vindo A Finance AI é uma plataforma de gestão
          financeira que utiliza IA para monitorar suas movimentações, e
          oferecer insights personalizados, facilitando o controle do seu
          orçamento. Entrar com Google
        </p>
        <SignInButton>
          <Button variant="outline">
            {/* <LogInIcon className="mr-2" /> */}
            <Image
              src="/googleIcons.png"
              alt="icone do google"
              width={20}
              height={20}
            ></Image>
            Entrar com o Google
          </Button>
        </SignInButton>
      </div>
      {/* direita */}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça Login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
