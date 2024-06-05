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


export default function UserCard({ name, phone, username, website, address, company }) {
    
    console.log("UserCard", name, phone, username, website, address, company);
  return (
    <Card className="w-1/2 mt-10">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="p-2">
          <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
            Joh Doe
          </h3>
          <div class="text-center text-gray-400 text-xs font-semibold">
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

          <div class="text-center my-3">
            <a
              class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
              href="#"
            >
              View Profile
            </a>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
