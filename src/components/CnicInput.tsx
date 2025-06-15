
import * as React from "react"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const CnicInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>((props, ref) => {
  const [value, setValue] = React.useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const digitsOnly = inputValue.replace(/\D/g, "")

    if (inputValue.replace(/-/g, "").length !== digitsOnly.length) {
      toast.error("Invalid Character", {
        description: "Only numbers are allowed for CNIC.",
        duration: 2000,
      })
    }
    
    let formatted = ""
    if (digitsOnly.length > 0) {
      formatted = digitsOnly.substring(0, 5)
    }
    if (digitsOnly.length > 5) {
      formatted += "-" + digitsOnly.substring(5, 12)
    }
    if (digitsOnly.length > 12) {
      formatted += "-" + digitsOnly.substring(12, 13)
    }
    
    setValue(formatted)
  }

  return (
    <Input
      {...props}
      ref={ref}
      value={value}
      onChange={handleChange}
      maxLength={15}
    />
  )
})
CnicInput.displayName = "CnicInput"

export { CnicInput }
