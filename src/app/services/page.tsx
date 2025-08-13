"use client"

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Services() {
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
              <Link href="/services" className="text-primary font-medium">Services</Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
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
                <Link href="/services" className="text-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
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
              Our Expertise, Your Solutions.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Innovative software, web development, AI, and more to help your business thrive.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src="/Images/png piture 2.png"
                    alt="Web Development"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <CardTitle className="text-xl">Full Stack Website Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Custom-built websites from front to back—optimized for performance, scalability, and user experience.
                </CardDescription>
                <Button variant="link" className="p-0 mt-4">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src="/Images/png picture 3.png"
                    alt="WordPress"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <CardTitle className="text-xl">WordPress Development with Elementor Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Beautiful, responsive websites powered by WordPress and designed with the flexibility of Elementor Pro.
                </CardDescription>
                <Button variant="link" className="p-0 mt-4">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src="/Images/Remove background project.png"
                    alt="SEO"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <CardTitle className="text-xl">SEO Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Improve your visibility in search engines with tailored SEO strategies that drive traffic and boost rankings.
                </CardDescription>
                <Button variant="link" className="p-0 mt-4">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src="/Images/png piture 2.png"
                    alt="Maintenance"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <CardTitle className="text-xl">Website Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Keep your site secure, updated, and running smoothly with our ongoing support and maintenance plans.
                </CardDescription>
                <Button variant="link" className="p-0 mt-4">Learn More</Button>
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
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
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
