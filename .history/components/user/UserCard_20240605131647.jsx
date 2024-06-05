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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UserCard({ userData }) {
  const { name, phone, email, username, website, address, company } = userData;
  console.log("UserCard", name, phone, username, website, address, company);
  return (
    <Card className="w-1/3 mt-10 mx-auto px-2">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {" "}
          {email}{" "}
          <div class="text-left text-gray-400 text-xs font-semibold">
            <p>Web Developer</p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="">
          <h3 class="text-left text-xl text-gray-900 font-medium leading-8">
            Joh Doe
          </h3>
          <div class="text-left text-gray-400 text-xs font-semibold">
            <p>Web Developer</p>
          </div>
          <table class="text-xs my-3">
            <tbody>
              <tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
              </tr>
              <tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                <td class="px-2 py-2">+977 9955221114</td>
              </tr>
              <tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td class="px-2 py-2">john@exmaple.com</td>
              </tr>
            </tbody>
          </table>

          <div class="text-left my-3">
            <a
              class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
              href="#"
            >
              View Profile
            </a>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-start ">
        <div class="py-2">
          <h3 class="font-bold text-xl text-gray-800 dark:text-white mb-1">
            Cait Genevieve
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
            New York, NY
          </div>
        </div>
        <div className="w-full flex justify-evenly">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
