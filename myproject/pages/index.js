import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Login from "../component/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <Login/>
    </div>
  );
}
