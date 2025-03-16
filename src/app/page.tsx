"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Book, FileText, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export default function ModuleSelectionPage() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [applicationId, setApplicationId] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({ applicationId: "", password: "" })
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-white hover:text-yellow-400 transition-colors duration-200 ease-in-out" />
            <span className="text-2xl font-extrabold text-white tracking-wide">UT-MAS</span>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="grid gap-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ color: "#E67700" }}>
                UTECH MODULE ASSIGNMENT SYSTEM
              </h1>
            </div>
          </div>
        </section>

        <section className="container py-12">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-md p-2 text-primary">
                <Layers className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl" style={{ color: "#E67700" }}>
                Login
              </h2>
              <p className="text-muted-foreground">
                Enrolled students are to use UTECH issued Application ID as their username and their birthday
                (ddmmyyyy).
              </p>
              <div className="pt-4">
                <Button onClick={() => setLoginOpen(true)}>Log In</Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center rounded-m p-2 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl" style={{ color: "#E67700" }}>
                Help & Support
              </h2>
              <p className="text-muted-foreground">
                If you need assistance with selecting your modules, understanding course requirements, or resolving any
                registration issues, our administrative office is here to help.
                <br />
                <br />📍 Visit Us: <b>Basement Floor, Factuly of Engineering</b>
                <br />📞 Call: <b>(876) 489-1436</b>
                <br />📧 Email: <b>AdminOffice@utech.edu.jm</b>
                <br />
                Office hours: <b>Monday – Friday, 9:00 AM – 4:00 PM</b>
                <br />
                Feel free to stop by or reach out—we're happy to assist you!
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5" />
            <span className="font-semibold">UT-MAS</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            " <em>Magna per artem gesta.</em> "
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>

      {/* Login Dialog */}
      <Dialog
        open={loginOpen}
        onOpenChange={(open) => {
          setLoginOpen(open)
          if (!open) {
            // Reset form when dialog is closed
            setApplicationId("")
            setPassword("")
            setErrors({ applicationId: "", password: "" })
          }
        }}
      >
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle style={{ color: "#E67700" }}>Student Login</DialogTitle>
            <DialogDescription>
              Enter your UTECH Application ID and password to access your module selection.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="username" className="text-right mt-2">
                Application ID
              </Label>
              <div className="col-span-3 space-y-1">
                <Input
                  id="username"
                  placeholder="e.g., 2203948"
                  value={applicationId}
                  onChange={(e) => setApplicationId(e.target.value)}
                />
                {errors.applicationId && <p className="text-sm text-red-500">{errors.applicationId}</p>}
              </div>
            </div>

            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="password" className="text-right mt-2">
                Password
              </Label>
              <div className="col-span-3 space-y-1">
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              style={{ backgroundColor: "#E67700" }}
              onClick={() => {
                // Reset errors
                setErrors({ applicationId: "", password: "" })

                // Validate application ID (must be 7 digits)
                if (!/^\d{7}$/.test(applicationId)) {
                  setErrors((prev) => ({
                    ...prev,
                    applicationId: "Invalid Id",
                  }))
                  return
                }

                // Validate password (must be 'intellibus')
                if (password !== "201005") {
                  setErrors((prev) => ({
                    ...prev,
                    password: "Invalid password",
                  }))
                  return
                }

                // If validation passes, proceed to next page
                router.push("/module-selection")
                setLoginOpen(false)
              }}
            >
              Log In
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function ModuleCard({
  title,
  description,
  level,
  duration,
  icon,
}: {
  title: string
  description: string
  level: string
  duration: string
  icon: React.ReactNode
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-primary/10 p-2 text-primary">{icon}</div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <CardDescription className="line-clamp-2 min-h-[40px]">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Book className="h-4 w-4" />
          <span>{level}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <FileText className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <Button variant="ghost" size="sm" className="ml-auto">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

