import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function RegistrationCompleted() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] py-10">
      <Image
        src="/popup.png"
        alt="Logo"
        width={200}
        height={100}
        className="mb-6"
      />
      <h2 className="text-2xl font-bold mb-2 text-center">
        Your registration is complete. Let the journey Begin!
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Check your email for further details.
      </p>
      <div className="flex gap-2 w-full">
        <Button variant={"default"} className="w-1/3">
        <Link href={'https://fesensi.com/'}>
          Go Home
        </Link>
        </Button>
      </div>
    </div>
  );
}
