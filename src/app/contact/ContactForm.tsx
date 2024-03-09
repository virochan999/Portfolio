"use client"
import React from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

type FormData = z.infer<typeof schema>

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const formSubmit = (data: FormData) => {
    toast.info("Work in progress for this functionlity", {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
    reset({
      name: "",
      email: "",
      message: "",
    })
  }

  const handleReset = () => {
    reset({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="flex flex-col gap-6 w-full md:w-3/12 p-4 bg-[#fff] rounded shadow-[0_5px_15px_#e6f0f0] text-[#2b2d42]"
    >
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor="name"
          className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 after:text-sm"
        >
          Name:
        </label>
        <input
          type="text"
          placeholder="Enter you name..."
          {...register("name")}
          id="name"
          autoComplete="on"
          aria-invalid={!!errors.name}
          className="p-1 rounded-sm bg-[#e6f0f0] text-sm font-semibold"
        />
        {errors.name && (
          <p className="absolute top-full text-xs text-red-400 font-semibold">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor="email"
          className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 after:text-sm"
        >
          Email:
        </label>
        <input
          type="email"
          placeholder="Enter you email..."
          id="email"
          autoComplete="on"
          {...register("email")}
          aria-invalid={!!errors.email}
          className="p-1 rounded-sm bg-[#e6f0f0] text-sm font-semibold"
        />
        {errors.email && (
          <p className="absolute top-full text-xs text-red-400 font-semibold">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor="message"
          className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 after:text-sm"
        >
          Description:
        </label>
        <textarea
          placeholder="Enter your message..."
          {...register("message")}
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          className="px-1 rounded-sm bg-[#e6f0f0] text-sm font-semibold"
        />
        {errors.message && (
          <p className="absolute top-full text-xs text-red-400 font-semibold">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex justify-center gap-4">
        <Button
          type="submit"
          className="font-bold"
          variant="secondary"
        >
          Submit
        </Button>
        <Button
          type="button"
          className="font-bold"
          variant="secondary"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
