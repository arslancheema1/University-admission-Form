
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

export function AdmissionForm() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-12 right-4 sm:right-6 lg:right-8">
            <div className="w-32 h-40 border bg-card rounded-lg flex flex-col items-center justify-center text-center p-2 shadow-sm">
                <span className="text-sm text-muted-foreground">Attach Photo</span>
            </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-center mb-2">Admission Form</h1>
        <p className="text-muted-foreground text-center mb-8">Please fill out the form below to apply for admission.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Admission Info Section */}
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Admission Information</CardTitle>
                    <CardDescription>Select your desired course and department.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
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
                </CardContent>
            </Card>

            {/* Personal Info Section */}
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Please provide your personal details.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <DatePicker />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" placeholder="123 Main St, Anytown, USA" />
                    </div>
                </CardContent>
            </Card>

            {/* Educational Info Section */}
            <Card className="w-full lg:col-span-2">
                <CardHeader>
                    <CardTitle>Educational Information</CardTitle>
                    <CardDescription>Please provide your previous academic record.</CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="matric-marks">Matriculation Marks</Label>
                        <Input id="matric-marks" type="number" placeholder="e.g. 950" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="fsc-marks">FSC/Intermediate Marks</Label>
                        <Input id="fsc-marks" type="number" placeholder="e.g. 980" />
                    </div>
                </CardContent>
            </Card>
        </div>

        <CardFooter className="flex justify-center mt-8 px-0">
          <Button size="lg" className="w-full max-w-xs">Submit Application</Button>
        </CardFooter>
    </div>
  )
}
