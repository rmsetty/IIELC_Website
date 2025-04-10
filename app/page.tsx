import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRight, Shield, Users, BarChart2, Lock, CheckCircle, Brain, Share2, BookOpen, Building, Calendar, Rocket, Award } from "lucide-react"
import { Input } from "@/components/ui/input"
import logo from "./IIELC LOGO.png"
import domino from "./domino.jpg"
import engaged from "./engaged.jpg"
import sitDown from "./sitDown.jpg"
import standUp from "./standUp.jpg"


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="IIELC Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-lg">IIELC</span>

            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 bg-background">
          <div className="container mx-auto text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Building a Stronger Innovation Community at <span style={{color: 'orange'}}>U</span><span className="text-4xl md:text-5xl font-bold mb-6">T</span><span style={{color: 'darkgreen'}}>D</span></h1>
            <p className="text-lg text-muted-foreground mb-8">
              The Institute for Innovation and Entrepreneurship Leadership Council at UT Dallas connects students, alumni, 
              faculty, and businesses to foster a thriving entrepreneurial ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input type="email" placeholder="Enter your email" className="max-w-xs" />
              <Button size="lg" className="h-10 px-6">
                Join Our Community
              </Button>
            </div>
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative rounded-lg overflow-hidden border border-border">
              <Image
                src={sitDown}
                alt="IIELC Community"
                width={800}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Our Objectives</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We're transforming the entrepreneurial landscape at UTD through community, collaboration, and impact.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Building</h3>
                <p className="text-muted-foreground">
                  Creating a vibrant community of students with common interests in innovation and entrepreneurship.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <Share2 className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-muted-foreground">
                  Fostering relationships between students, alumni, faculty, local communities, and businesses.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Impact</h3>
                <p className="text-muted-foreground">
                  Hosting events that promote intellectual, technical, professional, and social development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Evolution</h3>
                    <p className="text-muted-foreground">
                      Transitioning from a traditional Entrepreneurship Club to a dynamic Leadership Council addressing key challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expanded Leadership</h3>
                    <p className="text-muted-foreground">
                      Building a diverse team of 17 dedicated members from various academic backgrounds.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <BarChart2 className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Enhancement</h3>
                    <p className="text-muted-foreground">
                      Improving event quality and participation by engaging the local entrepreneurship community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-border">
                <Image
                src={engaged}
                alt="IIELC Journey"
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Meet Our Leadership</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Our executive team is committed to driving innovation and entrepreneurship at UT Dallas.
            </p>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Snehila"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Snehila</h3>
                <p className="text-muted-foreground">President</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Priyanka"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Priyanka</h3>
                <p className="text-muted-foreground">General Secretary</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="TBD"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">TBD</h3>
                <p className="text-muted-foreground">VP of Marketing</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="TBD"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">TBD</h3>
                <p className="text-muted-foreground">VP of Finance</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Santosh"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Santosh</h3>
                <p className="text-muted-foreground">VP of Outreach</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Our executive team comprises 17 dedicated members from diverse academic backgrounds, all committed to driving the council's mission forward.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Initiatives Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Recent Initiatives</h2>
            <p className="text-muted-foreground text-center mb-12">
              Building connections and fostering innovation through our recent events
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/50 p-8 rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Startup Internship Fair</h3>
                </div>
                <p className="text-lg mb-4">
                  An inaugural event connecting over 100 students with seven innovative startups in the region.
                </p>
                <p className="text-muted-foreground">
                  Organized in partnership with the University Career Center, providing valuable opportunities for student career development.
                </p>
              </div>
              <div className="bg-secondary/50 p-8 rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Magic and Mayhem</h3>
                </div>
                <p className="text-lg mb-4">
                  A Halloween-themed networking event facilitating brainstorming among innovators.
                </p>
                <p className="text-muted-foreground">
                  Created connections between budding founders and established entrepreneurs in a creative and engaging atmosphere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Plans Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Upcoming Plans</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Join us for these exciting upcoming events designed to foster innovation and entrepreneurship
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation Lab Tour</h3>
                <p className="text-muted-foreground">
                  Exclusive tours to innovation labs in the DFW area to witness cutting-edge technology and research.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Networking Events</h3>
                <p className="text-muted-foreground">
                  Mixers with universities in the DFW metroplex, including SMU, TCU, UNT, UTA, and DBU.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Lunch and Learn</h3>
                <p className="text-muted-foreground">
                  Sessions with expert speakers offering insights and practical takeaways on innovation and entrepreneurship.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Career Fair 2.0</h3>
                <p className="text-muted-foreground">
                  An innovative hiring event exclusively for startups, fostering entrepreneurial spirit among students.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Venture Dallas</h3>
                <p className="text-muted-foreground">
                  Providing selected council members access to the largest venture capital event in DFW.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Hackathon</h3>
                <p className="text-muted-foreground">
                  Events featuring speakers such as venture capitalists and entrepreneurs, with participation from DFW startups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose IIELC Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Why Choose IIELC?</h2>
            <p className="text-muted-foreground text-center mb-12">
              Discover the advantages of joining our dynamic community
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary/50 p-8 rounded-lg border border-border">
                <p className="text-lg mb-6">
                  "We leverage the dynamic DFW startup ecosystem by connecting students with real-world entrepreneurial opportunities."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Real-World Connections</h4>
                    <p className="text-sm text-muted-foreground">Access to DFW's thriving startup community</p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/50 p-8 rounded-lg border border-border">
                <p className="text-lg mb-6">
                  "We showcase bold ideas that elevate UTD's presence in the entrepreneurship community."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Bold Innovation</h4>
                    <p className="text-sm text-muted-foreground">Elevating UTD's entrepreneurial reputation</p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/50 p-8 rounded-lg border border-border">
                <p className="text-lg mb-6">
                  "We foster connections through events with venture capital firms and angel networks."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Share2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Valuable Networking</h4>
                    <p className="text-sm text-muted-foreground">Access to investors and funding opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-8">Become part of a dynamic community where innovation thrives, connections grow, and entrepreneurial ideas turn into reality</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-12 px-8">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8">
                Learn more
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background text-foreground border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="IIELC Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-bold">IIELC @ UTD</span>
              </div>
              <p className="text-sm text-muted-foreground">Building a stronger innovation and entrepreneurship community at UT Dallas.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Innovation Lab Tours</li>
                <li>Networking Events</li>
                <li>Lunch and Learn</li>
                <li>Hackathons</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Entrepreneurship Guide</li>
                <li>Startup Resources</li>
                <li>DFW Ecosystem Map</li>
                <li>Funding Opportunities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>iielc@utdallas.edu</li>
                <li>Innovation Center</li>
                <li>UT Dallas Campus</li>
                <li>Richardson, TX</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Institute for Innovation and Entrepreneurship Leadership Council. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}