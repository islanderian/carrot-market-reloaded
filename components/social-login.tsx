import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    // fragment
    <>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-3">
        <Link
          href="/github/start"
          className="flex items-center justify-center h-10 gap-3 primary-btn"
        >
          <span>
            <FaGithub className="size-6" />
          </span>
          <span>Continue with Github</span>
        </Link>
        <Link
          href="sms"
          className="flex items-center justify-center h-10 gap-3 primary-btn"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span>Continue with SMS</span>
        </Link>
      </div>
    </>
  );
}
