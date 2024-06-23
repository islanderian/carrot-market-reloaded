import Link from "next/link";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/16/solid";
import FormInput from "@/components/form-input";
import FormButton from "@/components/from-btn";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="text" placeholder="User name" required errors={[]} />
        <FormInput type="email" placeholder="Email" required errors={[]} />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          href="sms"
          className="flex items-center justify-center h-10 gap-3 primary-btn"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="w-7 h-7" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}