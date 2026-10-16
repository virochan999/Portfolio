import prisma from "@/lib/prisma"
import { saveProfile } from "../../actions"
import { Field, FormShell, ImageField, Notice } from "@/components/admin/fields"

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>
}) {
  const { saved, error } = await searchParams
  const profile = await prisma.profile.findFirst({ include: { contact: true } })

  if (!profile) {
    return <p>No profile row exists yet. Seed one in the database first.</p>
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Profile</h1>
      <Notice saved={saved} error={error} />
      <FormShell action={saveProfile}>
        <Field label="Name" name="name" defaultValue={profile.name} required />
        <Field
          label="Account email"
          name="email"
          type="email"
          defaultValue={profile.email}
          required
        />
        <Field
          label="Designations"
          name="designation"
          defaultValue={profile.designation.join(", ")}
          hint="Comma separated. Shown in the typing animation on the home page."
        />
        <Field
          label="Bio"
          name="description"
          rows={6}
          defaultValue={profile.description}
        />
        <ImageField label="Profile image" name="image" defaultValue={profile.image} />
        <ImageField label="Resume (PDF) URL" name="resume" defaultValue={profile.resume} />
        <h2 className="mt-4 text-lg font-semibold">Contact details</h2>
        <Field
          label="Contact email"
          name="contactEmail"
          type="email"
          defaultValue={profile.contact?.email}
        />
        <Field label="Phone" name="phone" defaultValue={profile.contact?.phone} />
        <Field label="Address" name="address" defaultValue={profile.contact?.address} />
      </FormShell>
    </>
  )
}
