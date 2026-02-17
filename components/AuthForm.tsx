"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";

import FormField from "@/components/FormField";
import { useRouter } from "next/navigation";
import { use } from "react";
const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        toast.success("Account created successfully!");
        router.push("/sign-in");
      } else {
        toast.success("Signed in successfully!");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    }
  }
  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <img src="./logo.svg" alt="logo" height={32} width={38} />
          <h2>Mock Interviewer</h2>
        </div>
        <h3>Practice job interviews with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
              />
            )}
            <FormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="Your Email Address"
                type="email"
              />
            <FormField
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter Your Password"
                type="password"
              />
            <Button className="btn" type="submit">
              {isSignIn ? "Sign In" : "Create an Account"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <a
            href={isSignIn ? "/sign-up" : "/sign-in"}
            className="text-user-primary font-bold hover:underline ml-1"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
