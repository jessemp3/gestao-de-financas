import { UserButton } from "@clerk/nextjs";
// import { Button } from "./_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  return (
    <div className="flex h-full items-center justify-center">
      <UserButton
        showName
        appearance={{
          baseTheme: dark,
        }}
      />
    </div>
  );
};

export default Home;
