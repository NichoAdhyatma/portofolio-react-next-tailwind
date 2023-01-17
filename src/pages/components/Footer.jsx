import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
export default function Footer() {
  const date = new Date();
  return (
    <>
      <footer className="flex justify-center p-10 font-medium gap-4 items-center text-lg">
        <Link href={"https://github.com/NichoAdhyatma"}>
          <AiFillGithub />
        </Link>
        <Link href={"https://github.com/NichoAdhyatma"}>NichoAdhyatma@2022</Link>
      </footer>
    </>
  );
}
