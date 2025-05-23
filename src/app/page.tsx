"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, CheckCircle, BarChart, Users, Play, Clock } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black to-zinc-900 text-white">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full flex h-20 items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Reeplayer Logo"
              width={160}
              height={48}
              priority
            />
          </div>
          <div className="flex-1 flex justify-center">
            <nav className="flex gap-8">
              <a
                href="#benefits"
                className="text-sm md:text-base font-semibold hover:text-black hover:underline underline-offset-8 decoration-black transition-colors duration-150 cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('benefits');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Benefits
              </a>
              <a
                href="#how-it-works"
                className="text-sm md:text-base font-semibold hover:text-black hover:underline underline-offset-8 decoration-black transition-colors duration-150 cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                How It Works
              </a>
              <a
                href="#ad-formats"
                className="text-sm md:text-base font-semibold hover:text-black hover:underline underline-offset-8 decoration-black transition-colors duration-150 cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('ad-formats');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ad Formats
              </a>
              <a
                href="#faq"
                className="text-sm md:text-base font-semibold hover:text-black hover:underline underline-offset-8 decoration-black transition-colors duration-150 cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('faq');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                FAQ
              </a>
            </nav>
          </div>
          <div className="flex items-center">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md font-semibold transition-colors duration-150"
              onClick={() => {
                const el = document.getElementById('signup-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Become a Sponsor
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative flex items-center justify-center min-h-[400px] bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.png"
              alt="Soccer field background"
              fill
              className="object-cover object-[center_30%] w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto relative z-10 px-4 md:px-6 flex flex-col items-start justify-center text-left max-w-3xl ml-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Sponsor live-streamed youth soccer games watched by families in your community
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-white/80 mb-8">
            Your brand will be seen on screens throughout the season — earning trust, building recognition, and connecting with real local customers while supporting youth sports.
            </p>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow transition-colors duration-150"
              onClick={() => {
                const el = document.getElementById('signup-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Become a Sponsor
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Sponsor Youth Soccer Livestreams?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Reach engaged local families while supporting youth sports in your community
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12 max-w-5xl mx-auto">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-[#2563EB]/10 p-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Targeted Local Reach</h3>
                <p className="text-center text-muted-foreground">
                  Connect with families and community members who are actively engaged in local youth sports.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-[#2563EB]/10 p-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Community Goodwill</h3>
                <p className="text-center text-muted-foreground">
                  Build positive brand associations by supporting youth sports teams in your local community.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-[#2563EB]/10 p-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Measurable Results</h3>
                <p className="text-center text-muted-foreground">
                  Track views, engagement, and conversions with clear reporting on your sponsorship performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sponsoring youth soccer livestreams is simple with Reeplayer
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3 md:gap-12">
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-black">
                  1
                </div>
                <h3 className="text-xl font-bold">Choose Your Package</h3>
                <p className="text-muted-foreground">
                  Select how many streams you want to sponsor and which ad formats work best for your business.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-black">
                  2
                </div>
                <h3 className="text-xl font-bold">Create Your Ad</h3>
                <p className="text-muted-foreground">
                  Upload your existing creative or use our simple tools to create professional-looking ads.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-black">
                  3
                </div>
                <h3 className="text-xl font-bold">Measure Results</h3>
                <p className="text-muted-foreground">
                  Track views, engagement, and the impact of your sponsorship with detailed reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship Options */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How many streams do you want to sponsor?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the package that fits your marketing goals and budget
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12 max-w-5xl mx-auto">
              <div className="flex flex-col rounded-lg border p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold">10 streams</h3>
                  <p className="text-sm text-muted-foreground">Perfect for a quick test</p>
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-bold">$199</p>
                  <p className="text-sm text-muted-foreground">$19.90 per stream</p>
                  <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">Select</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border p-6 border-white shadow-md relative">
                <div className="absolute -top-3 right-4 bg-white text-black text-xs px-3 py-1 rounded-full">
                  Popular
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold">25 streams</h3>
                  <p className="text-sm text-muted-foreground">Our most popular option</p>
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-bold">$399</p>
                  <p className="text-sm text-muted-foreground">$15.96 per stream</p>
                  <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">Select</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold">50 streams</h3>
                  <p className="text-sm text-muted-foreground">Best value for regular sponsors</p>
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-bold">$699</p>
                  <p className="text-sm text-muted-foreground">$13.98 per stream</p>
                  <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">Select</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold">100+ streams</h3>
                  <p className="text-sm text-muted-foreground">Custom package for high volume</p>
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-bold">Contact us</p>
                  <p className="text-sm text-muted-foreground">For custom pricing</p>
                  <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">Contact</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Formats Section */}
        <section id="ad-formats" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How do you want your brand to appear?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from multiple ad formats that integrate seamlessly with live game streams
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mt-12 max-w-5xl mx-auto">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-zinc-900 p-6">
                <div className="aspect-video w-full flex items-center justify-center">
                  <Image
                    src="/video.png"
                    alt="Pre-roll Video Example"
                    width={320}
                    height={250}
                    className="w-full h-auto object-contain rounded-md"
                    priority={false}
                  />
                </div>
                <h3 className="text-lg font-bold">Pre-roll Video</h3>
                <p className="text-center text-sm text-muted-foreground">
                  15-30 second video ad that plays before the livestream begins
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-zinc-900 p-6">
                <div className="aspect-video w-full flex items-center justify-center">
                  <Image
                    src="/BannerOverlay.png"
                    alt="Banner Overlay Example"
                    width={320}
                    height={180}
                    className="w-full h-auto object-contain"
                    priority={false}
                  />
                </div>
                <h3 className="text-lg font-bold">Banner Overlay</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Persistent banner that appears at the bottom of the livestream
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-zinc-900 p-6">
                <div className="aspect-video w-full flex items-center justify-center">
                  <Image
                    src="/picture-in-picture.png"
                    alt="Picture-in-Picture Example"
                    width={320}
                    height={180}
                    className="w-full h-auto object-contain"
                    priority={false}
                  />
                </div>
                <h3 className="text-lg font-bold">Picture-in-Picture</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Your ad appears in a corner while the game continues
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-zinc-900 p-6">
                <div className="w-full flex items-center justify-center" style={{ aspectRatio: '16/11' }}>
                  <Image
                    src="/halftime.png"
                    alt="Halftime Takeover Example"
                    width={320}
                    height={240}
                    className="w-full h-auto object-contain rounded-md"
                    priority={false}
                  />
                </div>
                <h3 className="text-lg font-bold">Halftime Takeover</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Full-screen ad that appears during halftime break
                </p>
              </div>
            </div>
            <div className="mt-12">
              <div className="mx-auto rounded-xl overflow-hidden w-[900px]">
                <Image
                  src="/live.png"
                  alt="Soccer game livestream with sponsor overlay"
                  width={900}
                  height={506}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Form Section */}
        <section id="signup-section" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Submit your interest
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out this short form to express interest in sponsoring youth soccer livestreams
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl rounded-2xl border bg-zinc-900 shadow-lg p-8">
              <form
                action="https://formspree.io/f/xvgayqrk"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="business-name" className="block text-sm font-medium mb-1">
                    Business Name
                  </label>
                  <Input
                    id="business-name"
                    name="businessName"
                    placeholder="Your business name"
                    required
                    className="w-full rounded-md border px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-md border px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="w-full rounded-md border px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-1">
                    Business Location
                  </label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="City, State"
                    className="w-full rounded-md border px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="business-type" className="block text-sm font-medium mb-1">
                    Business Type
                  </label>
                  <div className="relative">
                    <select
                      id="business-type"
                      name="businessType"
                      className="w-full rounded-md bg-zinc-900 text-gray-400 px-3 py-3 pr-12 border border-white focus:outline-none focus:ring-2 focus:ring-zinc-500 transition appearance-none"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select business type</option>
                      <option value="retail">Retail Store</option>
                      <option value="restaurant">Restaurant/Food Service</option>
                      <option value="service">Service Business</option>
                      <option value="professional">Professional Services</option>
                      <option value="sports">Sports/Recreation</option>
                      <option value="other">Other</option>
                    </select>
                    <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label htmlFor="team-preference" className="block text-sm font-medium mb-1">
                    Team Preference
                  </label>
                  <Input
                    id="team-preference"
                    name="teamPreference"
                    placeholder="Do you have a specific team in mind?"
                    className="w-full rounded-md border px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="team-name" className="block text-sm font-medium mb-1">
                    Team Name (if applicable)
                  </label>
                  <Input
                    id="team-name"
                    name="teamName"
                    placeholder="Name of the team you'd like to sponsor"
                    className="w-full rounded-md border px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-1">
                    Estimated Monthly Budget
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      className="w-full rounded-md bg-zinc-900 text-gray-400 px-3 py-3 pr-12 border border-white focus:outline-none focus:ring-2 focus:ring-zinc-500 transition appearance-none"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select budget range</option>
                      <option value="under-200">Under $200</option>
                      <option value="200-500">$200 – $500</option>
                      <option value="500-1000">$500 – $1,000</option>
                      <option value="over-1000">Over $1,000</option>
                    </select>
                    <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Additional Information (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your business and sponsorship goals..."
                    className="w-full rounded-md border px-3 py-2 min-h-[100px]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" name="marketing" />
                  <label htmlFor="marketing" className="text-base text-muted-foreground font-medium">
                    I agree to receive marketing communications from Reeplayer
                  </label>
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md shadow transition-colors duration-150">
                  Submit Interest
                </Button>
              </form>
            </div>
          </div>
        </section>


        {/* What Happens Next Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What happens next?</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-zinc-900 p-6">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Review your application</h3>
                <p className="text-muted-foreground">
                  Our team will review your information and contact you within 1-2 business days to discuss your
                  sponsorship options.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-zinc-900 p-6">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Create your ad</h3>
                <p className="text-muted-foreground">
                  We'll help you create effective ads that resonate with local families and sports fans, or you can
                  provide your own creative.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-zinc-900 p-6">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Go live and see results</h3>
                <p className="text-muted-foreground">
                  Your ads will appear in live streams, and you'll receive detailed reports on views, engagement, and
                  performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently asked questions
                </h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How many people typically watch these livestreams?</h3>
                <p className="text-slate-300">
                  On average, each youth soccer game livestream attracts 30-50 viewers, primarily consisting of family
                  members, friends, and team supporters who can't attend in person.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Will my ads only be shown to people in my local area?</h3>
                <p className="text-slate-300">
                  Yes, we can target your ads to appear only in livestreams for games in your geographic area, ensuring
                  you reach your local customer base.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I get detailed metrics about who saw my ads?</h3>
                <p className="text-slate-300">
                  Yes, you'll receive comprehensive reports showing view counts, engagement rates, click-through rates
                  (for clickable ads), and viewer demographics where available.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How far in advance do I need to submit my ad materials?</h3>
                <p className="text-slate-300">
                  For best results, we recommend submitting your ad materials at least 14 business days before your first
                  sponsored stream. This gives our team time to ensure everything looks perfect.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What if I don't have professional ad creative?</h3>
                <p className="text-slate-300">
                  No problem! We offer simple tools to help you create professional-looking ads, including templates and
                  an AI-assisted design tool that can generate ads based on your business information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to connect with local families?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our pilot program today and be among the first businesses to sponsor youth soccer livestreams
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow transition-colors duration-150"
                  onClick={() => {
                    const el = document.getElementById('signup-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Become a Sponsor
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-zinc-900">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Reeplayer. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
