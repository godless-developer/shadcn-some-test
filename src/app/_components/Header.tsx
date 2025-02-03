import { AvatarDemo } from "./Avatar";
import { MenubarDemo } from "./MenubarDemo";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <div className="w-[100vw] bg-yellow-950 h-[60px] flex justify-around items-center">
      <div className="flex gap-3 justify-center items-center">
        <AvatarDemo />
        <h1 className="text-[22px] font-medium font-sans]">Б.Баттулга</h1>
      </div>
      <div>
        <MenubarDemo />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};
