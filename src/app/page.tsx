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
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-[#2563EB]">Reeplayer</span>
            <span>Sponsorships</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#benefits" className="text-sm font-medium hover:text-[#2563EB]">
              Benefits
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-[#2563EB]">
              How It Works
            </Link>
            <Link href="#ad-formats" className="text-sm font-medium hover:text-[#2563EB]">
              Ad Formats
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-[#2563EB]">
              FAQ
            </Link>
          </nav>
          <div>
            <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">
              Become a Sponsor
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Soccer field with players"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl space-y-4 text-white">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Local Businesses: Sponsor Live Youth Soccer
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                Connect with families and fans by sponsoring live-streamed youth soccer games. Support local teams while
                growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">
                  Become a Sponsor <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-[#2563EB]/10 p-4">
                  <Users className="h-6 w-6 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold">Targeted Local Reach</h3>
                <p className="text-center text-muted-foreground">
                  Connect with families and community members who are actively engaged in local youth sports.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-[#2563EB]/10 p-4">
                  <CheckCircle className="h-6 w-6 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold">Community Goodwill</h3>
                <p className="text-center text-muted-foreground">
                  Build positive brand associations by supporting youth sports teams in your local community.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-[#2563EB]/10 p-4">
                  <BarChart className="h-6 w-6 text-[#2563EB]" />
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
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
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
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold">Choose Your Package</h3>
                <p className="text-muted-foreground">
                  Select how many streams you want to sponsor and which ad formats work best for your business.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold">Create Your Ad</h3>
                <p className="text-muted-foreground">
                  Upload your existing creative or use our simple tools to create professional-looking ads.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-xl font-bold text-white">
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
          <div className="container px-4 md:px-6">
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
              <div className="flex flex-col rounded-lg border p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold">10 streams</h3>
                  <p className="text-sm text-muted-foreground">Perfect for a quick test</p>
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-bold">$199</p>
                  <p className="text-sm text-muted-foreground">$19.90 per stream</p>
                  <Button className="w-full mt-4 bg-[#2563EB] hover:bg-[#1d4ed8]">Select</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border p-6 border-[#2563EB] shadow-md relative">
                <div className="absolute -top-3 right-4 bg-[#2563EB] text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold">25 streams</h3>
                  <p className="text-sm text-muted-foreground">Our most popular option</p>
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-bold">$399</p>
                  <p className="text-sm text-muted-foreground">$15.96 per stream</p>
                  <Button className="w-full mt-4 bg-[#2563EB] hover:bg-[#1d4ed8]">Select</Button>
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
                  <Button className="w-full mt-4 bg-[#2563EB] hover:bg-[#1d4ed8]">Select</Button>
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
                  <Button className="w-full mt-4 bg-[#2563EB] hover:bg-[#1d4ed8]">Contact</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Formats Section */}
        <section id="ad-formats" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mt-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6">
                <div className="aspect-video w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <Play className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold">Pre-roll Video</h3>
                <p className="text-center text-sm text-muted-foreground">
                  15-30 second video ad that plays before the livestream begins
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6">
                <div className="aspect-video w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <div className="h-1/4 w-full bg-slate-200 absolute bottom-0 flex items-center justify-center">
                    <span className="text-xs text-slate-400">Banner Ad</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold">Banner Overlay</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Persistent banner that appears at the bottom of the livestream
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6">
                <div className="aspect-video w-full bg-slate-100 rounded-md flex items-center justify-center relative">
                  <div className="absolute top-2 right-2 h-1/3 w-1/3 bg-slate-200 rounded flex items-center justify-center">
                    <span className="text-xs text-slate-400">Logo</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold">Picture-in-Picture</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Your ad appears in a corner while the game continues
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6">
                <div className="aspect-video w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <Clock className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold">Halftime Takeover</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Full-screen ad that appears during halftime break
                </p>
              </div>
            </div>
            <div className="mt-12">
              <div className="mx-auto max-w-3xl rounded-xl overflow-hidden border">
                <div className="relative aspect-video bg-slate-800">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Soccer game livestream with sponsor overlay"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                    Your brand here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Form Section */}
        <section id="signup" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
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

            <div className="mx-auto max-w-2xl rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-6">
                <form
                  action="https://formspree.io/f/xvgayqrk"
                  method="POST"
                  className="space-y-4"
                >
                  {/* redirect back to #signup with a success flag */}
                  <input
                    type="hidden"
                    name="_next"
                    value={`${typeof window !== 'undefined' ? window.location.origin : ''}/#signup?submitted=1`}
                  />

                  <div className="space-y-2">
                    <label htmlFor="business-name" className="text-sm font-medium">
                      Business Name
                    </label>
                    <Input
                      id="business-name"
                      name="businessName"
                      placeholder="Your business name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 555-5555"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="business-type" className="text-sm font-medium">
                      Business Type
                    </label>
                    <Select name="businessType">
                      <SelectTrigger id="business-type">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">Retail Store</SelectItem>
                        <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                        <SelectItem value="service">Service Business</SelectItem>
                        <SelectItem value="professional">Professional Services</SelectItem>
                        <SelectItem value="sports">Sports/Recreation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Estimated Monthly Budget
                    </label>
                    <Select name="budget">
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-200">Under $200</SelectItem>
                        <SelectItem value="200-500">$200 – $500</SelectItem>
                        <SelectItem value="500-1000">$500 – $1,000</SelectItem>
                        <SelectItem value="over-1000">Over $1,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Additional Information (Optional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your business and sponsorship goals..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" name="marketing" />
                    <label htmlFor="marketing" className="text-sm text-muted-foreground">
                      I agree to receive marketing communications from Reeplayer
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-[#2563EB] hover:bg-[#1d4ed8]">
                    Submit Interest
                  </Button>

                  {/* thank‐you message on successful redirect */}
                  {typeof window !== 'undefined' &&
                    window.location.hash === '#signup?submitted=1' && (
                      <p className="mt-4 text-green-600">
                        Thanks! We've got your submission.
                      </p>
                    )}
                </form>
              </div>
            </div>
          </div>
        </section>


        {/* What Happens Next Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What happens next?</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-white p-6">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Review your application</h3>
                <p className="text-muted-foreground">
                  Our team will review your information and contact you within 1-2 business days to discuss your
                  sponsorship options.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-white p-6">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Create your ad</h3>
                <p className="text-muted-foreground">
                  We'll help you create effective ads that resonate with local families and sports fans, or you can
                  provide your own creative.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-white p-6">
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
          <div className="container px-4 md:px-6">
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
                  For best results, we recommend submitting your ad materials at least 5 business days before your first
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
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to connect with local families?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our pilot program today and be among the first businesses to sponsor youth soccer livestreams
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">
                  Become a Sponsor <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button>
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-slate-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
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
