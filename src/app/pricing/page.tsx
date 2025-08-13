"use client"

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pricing() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const getLogoSource = () => {
    return theme === "dark" ? "/Images/Zemnay White Tech.png" : "/Images/Zemnay Black Tech.png";
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm border-b border-border`}>
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
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/pricing" className="text-primary font-medium">Pricing</Link>
              <ThemeToggle />
            </div>

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

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                <Link href="/pricing" className="text-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
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
              Simple, Transparent Pricing
            </h1>
                         <p className="text-xl text-muted-foreground leading-relaxed">
               Choose the perfect plan for your needs. From free community options to enterprise solutions, we&apos;ve got you covered.
             </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Community Plan */}
            <Card className="card-hover">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Community</CardTitle>
                <CardDescription className="text-base">
                  Perfect for personal projects and learning
                </CardDescription>
                <div className="text-4xl font-bold text-foreground mt-4">Free</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Basic website template
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Community support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Documentation access
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Limited features
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* WordPress Solution */}
            <Card className="card-hover border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">WordPress Solution</CardTitle>
                <CardDescription className="text-base">
                  Tailored WordPress sites for businesses
                </CardDescription>
                <div className="text-4xl font-bold text-foreground mt-4">Custom Pricing</div>
                <p className="text-sm text-muted-foreground">Based on project requirements</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Professional WordPress site
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Custom design & branding
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Responsive & mobile-friendly
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    SEO optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Content management system
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Request Quote
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="card-hover">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription className="text-base">
                  Complete digital solutions for organizations
                </CardDescription>
                <div className="text-4xl font-bold text-foreground mt-4">Let&apos;s Talk</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Full-scale digital ecosystem
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Custom web applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Advanced integrations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Dedicated support team
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Scalable infrastructure
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Ongoing maintenance
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardHeader>
                                 <CardTitle className="text-lg">What&apos;s included in the Community plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  The Community plan includes basic website templates, community support, documentation access, and limited features - perfect for learning and personal projects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">What is the WordPress Solution plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our WordPress Solution offers professional WordPress sites with custom design, responsive layouts, SEO optimization, and content management systems tailored to your business needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Who is the Enterprise plan for?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  The Enterprise plan is designed for organizations that need comprehensive digital solutions including custom applications, advanced integrations, and dedicated support teams.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">How does pricing work for the WordPress and Enterprise plans?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Pricing is customized based on your specific requirements, project scope, and complexity. We provide detailed quotes after understanding your needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>

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
