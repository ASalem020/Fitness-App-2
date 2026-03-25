import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioPill } from "@/components/ui/radio-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { RangeSlider } from "@/components/ui/range-slider";
import { HighlightText } from "@/components/ui/highlight-text";
import { ArrowUpRight, User, Mail, Lock, CheckCircle2, Wand2 } from "lucide-react";

export default function SystemDesign() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors ${theme}`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-16">
        <header className="flex items-center justify-between border-b border-border pb-6">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
            Design System Showcase
          </h1>
          <Button variant="outline" onClick={toggleTheme}>
            Toggle Theme ({theme})
          </Button>
        </header>

        {/* Highlighted Text Example */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-border pb-2">Typography Highlights</h2>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <HighlightText 
              startText="Elevate fitness with the"
              highlightText="best way"
              endText="possible"
            />
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-border pb-2">Buttons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Primary & Secondary</h3>
              <div className="flex flex-col gap-4 items-start">
                <Button variant="primaryWithIcon" defaultIcon={<ArrowUpRight className="h-4 w-4" />} iconContainerClass="rounded-full border-2 border-white h-9 w-9">
                  Get Started
                </Button>
                <Button variant="secondaryWithIcon" endIcon={<ArrowUpRight className="h-4 w-4 text-white" />} iconContainerClass="rounded-full bg-[#FF4A11] h-7 w-7">
                  Explore More
                </Button>
              </div>
            </div>

            <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Ghost & Solid Icons</h3>
              <div className="flex flex-col gap-4 items-start">
                <Button variant="ghostWithIcon" endIcon={<ArrowUpRight className="h-4 w-4 text-backgroun text-white " />} iconContainerClass="rounded-full bg-[#FF4A11] h-7 w-7">
                  Explore
                </Button>
                <div className="flex gap-4">
                  <Button variant="iconInsideDark" endIcon={<CheckCircle2 className="h-5 w-5" />}>
                    Lose Weight
                  </Button>
                  <Button variant="iconInsideLight" endIcon={<CheckCircle2 className="h-5 w-5" />}>
                    Lose Weight
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inputs */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-border pb-2">Inputs & Form Controls</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Standard Inputs</h3>
              <div className="space-y-4">
                <Input startIcon={<User className="h-5 w-5" />} placeholder="First Name" />
                <Input startIcon={<User className="h-5 w-5" />} placeholder="Last Name" />
                <Input startIcon={<Mail className="h-5 w-5" />} placeholder="Email" type="email" />
                <Input startIcon={<Lock className="h-5 w-5" />} placeholder="Password" type="password" />
              </div>
            </div>

            <div className="space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">AI Input</h3>
                <Input
                  startIcon={<Wand2 className="h-5 w-5 text-[#FF4A11]" />}
                  placeholder="Ask Me Any Things"
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">OTP Input</h3>
                <div className="flex flex-col gap-2">
                   <div className="text-sm font-medium mb-2">Enter The OTP You Have Received</div>
                   <InputOTP maxLength={4}>
                      <InputOTPGroup className="gap-4">
                         <InputOTPSlot index={0} />
                         <InputOTPSlot index={1} />
                         <InputOTPSlot index={2} />
                         <InputOTPSlot index={3} />
                      </InputOTPGroup>
                   </InputOTP>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Radio Pill Selection */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-border pb-2">Selection Options</h2>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm max-w-md">
            <RadioGroup defaultValue="lose-weight" className="gap-3">
              <RadioPill value="gain-weight" id="gain-w">Gain Weight</RadioPill>
              <RadioPill value="lose-weight" id="lose-w">Lose Weight</RadioPill>
              <RadioPill value="get-fitter" id="get-f">Get Fitter</RadioPill>
              <RadioPill value="flexible" id="flex">Gain More Flexible</RadioPill>
              <RadioPill value="learn" id="learn-b">Learn The Basic</RadioPill>
            </RadioGroup>
          </div>
        </section>

        {/* Range Sliders */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold border-b border-border pb-2">Custom Range Sliders</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 shadow-sm text-center">
              <h2 className="text-3xl font-bold mb-2">What Is Your Height ?</h2>
              <p className="text-muted-foreground mb-8">This Helps Us Create Your Personalized Plan</p>
              <RangeSlider min={100} max={250} defaultValue={167} label="CM" />
              <Button className="w-full mt-6 bg-[#FF4A11] hover:bg-[#FF4A11]/90 text-white rounded-full h-12 text-base font-semibold">
                Next
              </Button>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 shadow-sm text-center">
              <h2 className="text-3xl font-bold mb-2">What Is Your Weight ?</h2>
              <p className="text-muted-foreground mb-8">This Helps Us Create Your Personalized Plan</p>
              <RangeSlider min={40} max={200} defaultValue={90} label="Kg" />
              <Button className="w-full mt-6 bg-[#FF4A11] hover:bg-[#FF4A11]/90 text-white rounded-full h-12 text-base font-semibold">
                Done
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
