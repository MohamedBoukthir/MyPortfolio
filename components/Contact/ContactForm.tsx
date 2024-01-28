"use client";
 
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useRef, useState } from "react";
import useAlert from "@/hooks/useAlert";
import emailjs from "@emailjs/browser";
import { Alert } from "../ui/alert";



const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Invalid email address.",
    }),
    message: z.string().min(1, {
      message: "Message is required.",
    }),
  });


export  function ContactForm() {

  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = ({ target: { name, value } }: { target: { name: string; value: string; }; }) => {
    form.setValue(name as "message" | "name" | "email", value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      {
        from_name: form.getValues("name"),
        to_name: "Mohamed Boukthir",
        from_email: form.getValues("email"),
        to_email: "medboukthir7@gmail.com",
        message: form.getValues("message"),
      },
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    )
    .then(
      () => {
        showAlert({
          text: "Thank you for your message 😃",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          form.setValue("name", "");
          form.setValue("email", "");
          form.setValue("message", "");
        }, 3000);
      },
      (error) => {
        console.error(error);
        showAlert({
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      }
    );
};


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert/>}
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your thoughts here..." rows={4} {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" >Submit</Button>
      </form>
    </Form>
    </section>
  )
}
