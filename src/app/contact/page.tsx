
"use client"
import { Card } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu } from 'lucide-react';

export default function ContactPage() {
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
			<section className="container mx-auto px-6 sm:px-16 lg:px-36 py-20">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
								<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
									Have questions or want to discuss a project? We&apos;d love to hear from you. Our team is ready to help bring your vision to life.
								</p>
				</div>
				<div className="grid md:grid-cols-2 gap-12">
					{/* Contact Form */}
					<Card className="p-8 shadow-lg">
						<h2 className="text-2xl font-semibold mb-6 text-foreground">Send us a message</h2>
						<form className="space-y-4">
							<div className="flex gap-4">
								<Input type="text" placeholder="First Name" required className="bg-muted" />
								<Input type="text" placeholder="Last Name" required className="bg-muted" />
							</div>
							<Input type="email" placeholder="Email" required className="bg-muted" />
							<Input type="text" placeholder="Subject" className="bg-muted" />
							<Textarea placeholder="Message" rows={5} className="bg-muted" />
							<Button type="submit" className="w-full mt-2">Send Message</Button>
						</form>
					</Card>
					{/* Contact Info */}
					<div className="space-y-8">
						<Card className="p-6 flex items-center gap-4">
							<MapPin className="text-primary" />
							<div>
								<div className="font-semibold text-foreground">Our Location</div>
								<div className="text-muted-foreground">Piassa, Addis Ababa, Ethiopia</div>
							</div>
						</Card>
						<Card className="p-6 flex items-center gap-4">
							<Phone className="text-primary" />
							<div>
								<div className="font-semibold text-foreground">Phone Number</div>
								<div className="text-muted-foreground">+251 93 220 9141</div>
							</div>
						</Card>
						<Card className="p-6 flex items-center gap-4">
							<Mail className="text-primary" />
							<div>
								<div className="font-semibold text-foreground">Email Address</div>
								<div className="text-muted-foreground">zemenaytechsolutions@gmail.com</div>
							</div>
						</Card>
						<Card className="p-6 flex items-center gap-4">
							<Clock className="text-primary" />
							<div>
								<div className="font-semibold text-foreground">Business Hours</div>
								<div className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 2:00 PM</div>
							</div>
						</Card>
					</div>
				</div>
			</section>
			{/* Footer Quick Links & Legal */}
			<footer className="bg-muted py-12 mt-20">
				<div className="container mx-auto px-6 sm:px-16 lg:px-36 grid md:grid-cols-4 gap-8">
					<div>
						<Image src="/Images/Zemnay White Tech.png" alt="Zemenay Logo" width={120} height={60} className="mb-4" />
						<div className="text-muted-foreground text-sm">© 2025 Zemenay. All rights reserved.</div>
					</div>
					<div>
						<div className="font-semibold mb-2 text-foreground">Quick Links</div>
									<ul className="space-y-1">
										<li><Link href="/" className="hover:text-primary">Home</Link></li>
										<li><Link href="/about" className="hover:text-primary">About</Link></li>
										<li><Link href="/services" className="hover:text-primary">Services</Link></li>
										<li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
										<li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
									</ul>
					</div>
					<div>
						<div className="font-semibold mb-2 text-foreground">Legal</div>
						<ul className="space-y-1">
							<li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
							<li><a href="#" className="hover:text-primary">Terms of Service</a></li>
						</ul>
					</div>
					<div>
						<div className="font-semibold mb-2 text-foreground">Connect</div>
						<ul className="space-y-1">
							<li><a href="mailto:zemenaytechsolutions@gmail.com" className="hover:text-primary">zemenaytechsolutions@gmail.com</a></li>
							<li><a href="https://linkedin.com/" target="_blank" rel="noopener" className="hover:text-primary">LinkedIn</a></li>
						</ul>
					</div>
				</div>
			</footer>
		</main>
	);
}
