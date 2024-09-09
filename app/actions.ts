"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { submissionSchema } from "./utils/ZodSchema";

export async function TalkToSalesAction(prevState: any, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: submissionSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
  const response = await fetch(process.env.SALES_REQUEST_URL!, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return redirect("/error");
  }
  return redirect("/success");
}

export async function SupportTicketAction(prevState: any, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: submissionSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
  const response = await fetch(process.env.SUPPORT_TICKET_URL!, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return redirect("/error");
  }

  return redirect("/success");
}
