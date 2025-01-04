import Image from "next/image";
import Base from "@/src/layout/Base";
import '../app/globals.css';
export default function Home() {
    return (
        <Base>
            <h1 className="text-4xl text-center">It's a great day to be organised!</h1>
            <div className={"flex justify-center"}>
                This is my first fullstack project. I am using Next.js, Tailwind CSS, and MongoDB. I am also using Vercel for deployment. I am excited to see how this project will turn out.
            </div>

        </Base>
    );
}