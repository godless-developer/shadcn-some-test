import { InputOTPGroup } from "@/components/ui/input-otp";
import { InputOTPDemo } from "./_components/InputOTPDemo";
import { MenubarDemo } from "./_components/MenubarDemo";
import { Header } from "./_components/Header";
import { TableDemo } from "./_components/TableDemo";
import { Content } from "./_components/Cards";

export default function Home() {
  return (
    <div className=" items-start justify-items-center min-h-screen pb-20 gap-16 ">
      <div className=" items-start justify-items-center p-20 gap-40 ">
        <h1 className="text-[30px] normal font-bold font-[Inter]">Tukkaaa</h1>
        <Content />
        <div className="flex mt-20 flex-col gap-4 items-center">
          <p className="text-red-600">"Enter your phone number !"</p>
          <InputOTPDemo />
        </div>
        <TableDemo />
        <TableDemo />
      </div>
    </div>
  );
}
