"use client"

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Determine which logo to use based on theme
  const getLogoSource = () => {
    return theme === "dark" ? "/Images/Zemnay White Tech.png" : "/Images/Zemnay Black Tech.png";
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-16 sm:px-28 lg:px-40">
          <div className="flex justify-between items-center h-16">
            <div className="flex">
              <Image
                src={getLogoSource()}
                alt="Zemenay Tech"
                width={180}
                height={100}
                className="transition-all duration-300"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-primary font-medium">About</Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-9 w-9 text-muted-foreground hover:text-primary"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link href="/about" className="text-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About Our Journey
            </h1>
                          <p className="text-xl text-muted-foreground leading-relaxed">
                Discover the story behind our passion for innovation and commitment to excellence. We&apos;re on a mission to transform the digital landscape, one project at a time.
              </p>
          </div>
        </div>
      </section>

      {/* We Put People First Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                We Put People First
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Zemenay, we believe technology should empower people and make their lives easier. Our mission is simple: to create solutions that prioritize people at every step, delivering innovative digital experiences that transform businesses.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Read More
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/Images/Remove background project.png"
                alt="Zemenay Team"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To empower businesses with high-performing, beautifully crafted web solutions that are simple, scalable, and elegant.
                </CardDescription>
                <Button variant="link" className="p-0 mt-4">Read More</Button>
              </CardContent>
            </Card>

            {/* Our Values */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Simplicity, Quality, Reliability - these core values drive everything we do, ensuring exceptional results for our clients.
                </CardDescription>
                <Button variant="link" className="p-0 mt-4">Read More</Button>
              </CardContent>
            </Card>

            {/* Our Vision */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To become a trusted digital partner for forward-thinking companies by delivering elegant, efficient, and innovative solutions.
                </CardDescription>
                <Button variant="link" className="p-0 mt-4">Read More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Freadam Abebe */}
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">FA</span>
                </div>
                <CardTitle className="text-xl">Freadam Abebe</CardTitle>
                <CardDescription className="text-base font-medium">CO-Founder &amp; Product Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">5+ years in tech leadership</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tech Leader</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Product Visionary</span>
                </div>
              </CardContent>
            </Card>

            {/* Tehetna Askal */}
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">TA</span>
                </div>
                <CardTitle className="text-xl">Tehetna Askal</CardTitle>
                <CardDescription className="text-base font-medium">CO-Founder &amp; Project Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Expert in agile methodologies</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Agile Expert</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Project Strategist</span>
                </div>
              </CardContent>
            </Card>

            {/* Michael Engida */}
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">ME</span>
                </div>
                <CardTitle className="text-xl">Michael Engida</CardTitle>
                <CardDescription className="text-base font-medium">Co-Founder &amp; Business Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Driving business growth</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Business Strategist</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Growth Hacker</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Company */}
            <div className="md:col-span-1">
              <div className="flex mb-4">
                <Image
                  src={getLogoSource()}
                  alt="Zemenay Tech"
                  width={180}
                  height={100}
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Zemenay_Tech_Solutions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Zemenay Tech Solutions</a></li>
                <li><a href="mailto:zemenaytechsolutions@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">zemenaytechsolutions@gmail.com</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">© 2025 Zemenay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
