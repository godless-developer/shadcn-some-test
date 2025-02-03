import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/437679174_1893359821115130_194482289674950548_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KRMwE_Vz6FgQ7kNvgGO7A2r&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&_nc_gid=A8UlfoWpjS68ioni7bXsIR2&oh=00_AYC332HDK3pu-C7KsnZ4LJe73mIidy6w8T4ZeDaV18oSyw&oe=67A51F5A"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
