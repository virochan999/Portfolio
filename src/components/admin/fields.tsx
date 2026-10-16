import { Input, Select, Textarea } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ImageField from "./ImageField"

type FieldProps = {
  label: string
  name: string
  defaultValue?: string | number | null
  hint?: string
  required?: boolean
  type?: string
  rows?: number
}

export const Field = ({ label, name, hint, rows, ...rest }: FieldProps) => (
  <label className="flex flex-col gap-1 text-sm font-medium">
    {label}
    {rows ? (
      <Textarea
        name={name}
        rows={rows}
        defaultValue={rest.defaultValue ?? ""}
        required={rest.required}
      />
    ) : (
      <Input
        name={name}
        type={rest.type ?? "text"}
        defaultValue={rest.defaultValue ?? ""}
        required={rest.required}
      />
    )}
    {hint && <span className="text-xs font-normal text-muted-foreground">{hint}</span>}
  </label>
)

export const SelectField = ({
  label,
  name,
  options,
  defaultValue,
}: {
  label: string
  name: string
  options: string[]
  defaultValue?: string
}) => (
  <label className="flex flex-col gap-1 text-sm font-medium">
    {label}
    <Select name={name} defaultValue={defaultValue}>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </Select>
  </label>
)

export { ImageField }

export const FormShell = ({
  action,
  children,
  deleteAction,
}: {
  action: (fd: FormData) => Promise<void>
  children: React.ReactNode
  deleteAction?: (fd: FormData) => Promise<void>
}) => (
  <>
    <form action={action} className="flex max-w-2xl flex-col gap-4">
      {children}
      <div className="flex gap-3">
        <Button type="submit">Save</Button>
      </div>
    </form>
    {deleteAction && (
      <form action={deleteAction} className="mt-2 max-w-2xl">
        <Button type="submit" variant="destructive">
          Delete
        </Button>
      </form>
    )}
  </>
)

export const Notice = ({
  saved,
  error,
}: {
  saved?: string
  error?: string
}) => (
  <>
    {saved && (
      <p className="rounded-md bg-green-600/15 px-3 py-2 text-sm text-green-700 dark:text-green-400">
        Saved.
      </p>
    )}
    {error && (
      <p className="rounded-md bg-red-600/15 px-3 py-2 text-sm text-red-700 dark:text-red-400">
        {error}
      </p>
    )}
  </>
)
