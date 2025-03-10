import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Hassan Namwar</div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary">
              Education
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/hsn-squared" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/hassan-syed-namwar-h5n" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:hassansyednamwar@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hassan Syed Namwar</h1>
              <p className="text-xl text-muted-foreground">Computer Science & Economics Enthusiast</p>
              <p className="text-muted-foreground max-w-prose">
                Passionate about technology, economics, and politics. Exploring innovative solutions at the intersection
                of these fields.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Avatar className="h-40 w-40 border-4 border-background shadow-lg">
                <AvatarFallback className="text-4xl">HSN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p>
                Hello! I'm Hassan Syed Namwar, a passionate individual with a keen interest in technology and economics.
                I have experience in programming, data analysis, and research. My goal is to work on innovative projects
                that merge these fields, creating impactful solutions and driving change.
              </p>
              <p>
                Recently, I attended the Labour Party Conference to campaign with "Send My Friend to School", advocating
                for global education. I also lead several student societies, including Junior Politics Society, Junior
                Business Society, and Lower Computer Science Society.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Classical Guitar</Badge>
                <Badge>Guitar Playing</Badge>
                <Badge>Music Education</Badge>
                <Badge>Programming</Badge>
                <Badge>Data Analysis</Badge>
                <Badge>Leadership</Badge>
                <Badge>Public Speaking</Badge>
              </div>

              <h3 className="text-xl font-semibold mt-6">Languages</h3>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">English</span>
                  <span className="text-muted-foreground ml-2">(Native or Bilingual)</span>
                </div>
                <div>
                  <span className="font-medium">Urdu</span>
                  <span className="text-muted-foreground ml-2">(Native or Bilingual)</span>
                </div>
                <div>
                  <span className="font-medium">German</span>
                  <span className="text-muted-foreground ml-2">(Elementary)</span>
                </div>
                <div>
                  <span className="font-medium">French</span>
                  <span className="text-muted-foreground ml-2">(Elementary)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Student Ambassador</CardTitle>
                    <CardDescription>Youth United for Good</CardDescription>
                  </div>
                  <Badge>Oct 2024 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Promote youth engagement in meaningful causes, advocating for global health, education, and
                    collaborative, data-driven philanthropy.
                  </li>
                  <li>
                    Successfully recruited 12 Student Representatives for the January onboarding via platforms like
                    WhatsApp and Reddit.
                  </li>
                  <li>
                    Align with the mission to foster sustainable, scalable social change, focusing on measurable
                    outcomes and ethical impact via effective altruism.
                  </li>
                  <li>
                    Developed leadership, communication, and strategic thinking skills through active participation in
                    impactful projects.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Student Ambassador</CardTitle>
                    <CardDescription>Young Professionals</CardDescription>
                  </div>
                  <Badge>Nov 2024 - Present</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Student Representative</CardTitle>
                    <CardDescription>St. Olave's Grammar School</CardDescription>
                  </div>
                  <Badge>Sep 2024 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  I represent my form, 10N, at Year 10 student council meetings and the whole school Environmental
                  Society. I also represent Year 10 at student council meetings of the whole school.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Campaign Champion</CardTitle>
                    <CardDescription>Send My Friend to School | Global Campaign for Education UK</CardDescription>
                  </div>
                  <Badge>Jan 2024 - Nov 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  As a Campaign Champion for Send My Friend to School, my role involved advocating for access to quality
                  education for children worldwide, particularly in marginalised communities. I worked to raise
                  awareness, engage with policymakers, and represent the campaign at high-profile events.
                </p>
                <p className="mt-2">
                  A highlight of my time was attending Parliament and the Labour Party Conference, where I had the
                  opportunity to bring attention to the importance of global education and discuss actionable solutions
                  with influential decision-makers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>St. Olave's Grammar School</CardTitle>
                  <CardDescription>GCSEs</CardDescription>
                </div>
                <Badge>Sep 2021 - 2026</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Activities and Societies:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Co-president of Junior Politics Society</li>
                <li>Co-founder of Game Development Society</li>
                <li>Campaign Champion for Send My Friend To School</li>
                <li>Leader of former F1 in Schools team, Phoenix Motors</li>
                <li>Former president of Junior Business Society</li>
                <li>10N Form Representative and Year 10 School Council Representative</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Stock Analysis Tool</CardTitle>
                <CardDescription>Web Development, Data Analysis</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>A web-based platform for analysing stock trends using industry information and market indicators.</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Space Settlement Design</CardTitle>
                <CardDescription>Infrastructure, Automation, Human Factors</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>
                  A comprehensive design plan for a settlement on Callisto, focusing on infrastructure, automation, and
                  human factors.
                </p>
                <Button variant="outline" size="sm" className="mt-4" asChild>
                  <Link
                    href="https://hsn-squared.github.io/stellar%20forge%20iosdc%20entry%20final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Download Presentation
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>S&P Analysis</CardTitle>
                <CardDescription>Financial Analysis</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>Analysis of S&P market trends and performance indicators.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:hassansyednamwar@gmail.com" className="hover:text-primary">
                    hassansyednamwar@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://www.linkedin.com/in/hassan-syed-namwar-h5n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/hassan-syed-namwar-h5n
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://github.com/hsn-squared"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    github.com/hsn-squared
                  </a>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://discord.gg/dB7CGhkKJt" target="_blank" rel="noopener noreferrer">
                      Join my Discord Server
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hassan Syed Namwar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/hsn-squared"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/hassan-syed-namwar-h5n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href="https://huggingface.co/h5n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              HuggingFace
            </Link>
            <Link
              href="https://issuu.com/saintolaves/docs/junior_politics_journal_-_spring_2024/34"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Politics Journal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

