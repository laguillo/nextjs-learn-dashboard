// import { LogOut } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { signOut } from "@/auth";

// export function SignOut() {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signOut();
//       }}
//     >
//       <Button type="submit">
//         <LogOut />
//         Log out
//       </Button>
//     </form>
//   );
// }
"use client"
import { signOut } from "next-auth/react"
 
export function SignOut() {
  return <button onClick={() => signOut()}>Sign Out</button>
}