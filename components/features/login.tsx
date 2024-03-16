// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// icons
import AccountSVG from "@/public/assets/account.svg";

export const Login = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center p-8 w-[400px] rounded-xl border b-[#100F0F]">
      <AccountSVG className="text-black w-6 h-6" />
      <h1 className="text-xl text-primary">Welcome</h1>

      <div className="w-full flex flex-col gap-y-4 mt-4">
        {/* email */}
        <div>
          <label>Email</label>
          <Input placeholder="Username" />
        </div>
        {/* password */}
        <div>
          <label>Password</label>
          <Input type="password" placeholder="Password" />
        </div>
      </div>

      <Button className="w-full mt-24">Login</Button>
    </div>
  );
};
