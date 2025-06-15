
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "./DatePicker"
import { useState, useRef } from "react"
import { Camera } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { CnicInput } from "./CnicInput"

export function AdmissionForm() {
  const [photo, setPhoto] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handlePhotoBoxClick = () => {
    fileInputRef.current?.click()
  }

  const allowOnlyAlphabets = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s]/g, '')
  }

  return (
    <Card className="w-full max-w-3xl relative shadow-2xl">
      <div className="absolute top-8 right-8 z-10">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handlePhotoChange}
        />
        <div
          className="w-32 h-40 border bg-background rounded-lg flex flex-col items-center justify-center text-center p-2 shadow-sm cursor-pointer hover:bg-accent transition-colors"
          onClick={handlePhotoBoxClick}
        >
          {photo ? (
            <img src={photo} alt="Applicant photo" className="w-full h-full object-cover rounded-lg" />
          ) : (
            <>
              <Camera className="w-8 h-8 text-muted-foreground" />
              <span className="text-sm text-muted-foreground mt-2">Attach Photo</span>
            </>
          )}
        </div>
      </div>

      <CardHeader className="text-center pt-8">
        <CardTitle className="text-4xl font-extrabold tracking-tight">Admission Form</CardTitle>
        <CardDescription className="text-lg text-muted-foreground mt-2">
          Please fill out the form below to apply for admission.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-8">
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold tracking-tight">Admission Information</h2>
            <p className="text-sm text-muted-foreground mb-6 mt-1">Select your desired course and department.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                        <SelectTrigger id="department">
                            <SelectValue placeholder="Select a department" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cs">Computer Science</SelectItem>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="arts">Arts & Humanities</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="course">Course</Label>
                    <Select>
                        <SelectTrigger id="course">
                            <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="bs-cs">B.S. in Computer Science</SelectItem>
                            <SelectItem value="bba">Bachelor of Business Admin</SelectItem>
                            <SelectItem value="mech-eng">Mechanical Engineering</SelectItem>
                            <SelectItem value="fine-arts">B.A. in Fine Arts</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="grid gap-2">
                    <Label htmlFor="session">Academic Session</Label>
                    <Select>
                        <SelectTrigger id="session">
                            <SelectValue placeholder="Select a session" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="fall-2025">Fall 2025</SelectItem>
                            <SelectItem value="spring-2026">Spring 2026</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="shift">Shift</Label>
                    <Select>
                        <SelectTrigger id="shift">
                            <SelectValue placeholder="Select a shift" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="morning">Morning</SelectItem>
                            <SelectItem value="evening">Evening</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <h2 className="text-xl font-semibold tracking-tight">Personal Information</h2>
            <p className="text-sm text-muted-foreground mb-6 mt-1">Please provide your personal details.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" onInput={allowOnlyAlphabets} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" onInput={allowOnlyAlphabets} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="father-name">Father's Name</Label>
                    <Input id="father-name" placeholder="Richard Roe" onInput={allowOnlyAlphabets}/>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="cnic">Applicant CNIC</Label>
                    <CnicInput id="cnic" placeholder="XXXXX-XXXXXXX-X" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <DatePicker />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+92 300 1234567" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="guardian-name">Guardian's Name</Label>
                    <Input id="guardian-name" placeholder="Jane Doe" onInput={allowOnlyAlphabets}/>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="guardian-phone">Guardian's Phone</Label>
                    <Input id="guardian-phone" type="tel" placeholder="+92 300 1234567" />
                </div>
                 <div className="grid gap-2">
                    <Label htmlFor="domicile">Domicile (City)</Label>
                    <Input id="domicile" placeholder="e.g. Lahore" onInput={allowOnlyAlphabets}/>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="province">Province</Label>
                    <Select>
                        <SelectTrigger id="province">
                            <SelectValue placeholder="Select a province" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="punjab">Punjab</SelectItem>
                            <SelectItem value="sindh">Sindh</SelectItem>
                            <SelectItem value="kpk">Khyber Pakhtunkhwa</SelectItem>
                            <SelectItem value="balochistan">Balochistan</SelectItem>
                            <SelectItem value="gb">Gilgit-Baltistan</SelectItem>
                            <SelectItem value="ajk">Azad Jammu & Kashmir</SelectItem>
                            <SelectItem value="ict">Islamabad Capital Territory</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="123 Main St, Anytown, USA" />
                </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold tracking-tight">Educational Information</h2>
            <p className="text-sm text-muted-foreground mb-6 mt-1">Please provide your previous academic record.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="matric-marks">Matriculation Marks</Label>
                    <Input id="matric-marks" type="number" placeholder="e.g. 950" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="fsc-marks">FSC/Intermediate Marks</Label>
                    <Input id="fsc-marks" type="number" placeholder="e.g. 980" />
                </div>
            </div>
          </section>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-b-lg">
        <Button size="lg" className="w-full max-w-xs">Submit Application</Button>
      </CardFooter>
    </Card>
  )
}
