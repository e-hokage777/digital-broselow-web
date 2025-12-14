import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NavBar() {
  return (
    <div
      className="w-screen fixed left-0 top-0 z-25  flex justify-center"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="flex justify-between items-center py-8 bg-transparent container">
        <Link href="#hero" className="text-xl font-bold text-primary">
          Digital Broselow
        </Link>
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-4 font-semibold">
            <li>
              <Link href="#hero">Home</Link>
            </li>
            <li>
              <Link href="#how-it-works">How It Works</Link>
            </li>
            <li>
              <Link href="#key-innovations">Key Innovations</Link>
            </li>
            <li>
              <Link href="#closing">Purpose</Link>
            </li>
          </ul>
        </nav>
        <ContactDialog />
      </div>
    </div>
  );
}

function ContactDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>Contact Us</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Send us a message</DialogTitle>
            <DialogDescription>
              Send us a message and we will get back to you as soon as possible
            </DialogDescription>
          </DialogHeader>
          <div className=" w-full md:max-w-[420] md:flex-1">
            <form action="" className="div flex flex-col gap-4">
              <Input name="name" placeholder="Name" />
              <Input name="email" placeholder="Email" />
              <Input name="subject" placeholder="Subject" />
              <Textarea placeholder="Message" className="min-h-80"></Textarea>
              <Button className="text-xl py-6">Send Messsage</Button>
            </form>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
