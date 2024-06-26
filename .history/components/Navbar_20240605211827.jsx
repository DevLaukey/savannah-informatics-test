"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronRight, LogOut, Menu } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";
import { LogoIcon } from "@/components/Icons";
import { useRouter } from "next/navigation";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs";

const routeList = [
  {
    href: "#hero",
    label: "Hero",
  },
  {
    href: "#features",
    label: "Features",
  },
];

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <LogoIcon />
              Album | Library
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Album | Library
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  {user ? (
                    <LogoutLink>Log out</LogoutLink>
                  ) : (
                    <>
                      <LoginLink>
                        <Button>
                          Login
                          <ChevronRight className="mr-2 h-4 w-4" />
                        </Button>
                      </LoginLink>
                      <RegisterLink>
                        <Button>
                          Register
                          <ChevronRight className="mr-2 h-4 w-4" />
                        </Button>
                      </RegisterLink>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {!user &&
              routeList.map((route, i) => (
                <a
                  rel="noreferrer noopener"
                  href={route.href}
                  key={i}
                  className={`text-[17px] ${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  {route.label}
                </a>
              ))}
          </nav>

          <div className="hidden md:flex items-center justify-center gap-2">
            {user ? (
              <LogoutLink className="flex gap-2 items-center justify-center">
                Log out <LogOut />
              </LogoutLink>
            ) : (
              <>
                <LoginLink>
                  <Button>
                    Login
                    <ChevronRight className="mr-2 h-4 w-4" />
                  </Button>
                </LoginLink>
                <RegisterLink>
                  <Button>
                    Register
                    <ChevronRight className="mr-2 h-4 w-4" />
                  </Button>
                </RegisterLink>
              </>
            )}
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
