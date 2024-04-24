import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const reqHeader = async () => {
  const session = await getServerSession(authOptions);
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session?.user?.token}`,
  };
  return header;
};
