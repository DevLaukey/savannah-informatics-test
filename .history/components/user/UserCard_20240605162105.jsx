import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export default function UserCard({ userData }) {
  const { name, phone, email, username, website, address, company } = userData;
  return (
    <Card className="w-ful mt-10 mx-auto px-2">
      <CardHeader>
        <CardTitle className="font-bold text-black dark:text-white mb-1 text-3xl">
          {name} {""}({username})
        </CardTitle>
        <CardDescription>
          <p>{email}</p>

          <p className="text-left text-gray-400 text-xs font-semibold">
            {phone}
          </p>
          <Link
            class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
            href={`https://${website}`}
          >
            {website}
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex  flex-col gap-2 w-full items-start justify-start">
          <div>
            <h3 class="font-bold text-xl text-gray-800 dark:text-white mb-1">
              {address?.city}
            </h3>
            <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
              <svg
                class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  class=""
                  d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
              {address?.street}
            </div>
          </div>
          <div className="font-semibold">
            <div className="   gap-3">
              <h2 className="underline underline-offset-2 text-gray-400 ">
                Company Details
              </h2>

              <p className="font-bold text-gray-800 dark:text-white mb-1 text-2xl">
                {" "}
                {company?.name}{" "}
              </p>
              <p className="text-gray-600 text-base">({company?.catchPhrase})</p>
            </div>

            <div className="flex gap-2">
              <p className="text-gray-500 text-sm">{company?.bs}</p>
            </div>
          </div>
        </div>
      </CardContent>
     
    </Card>
  );
}
