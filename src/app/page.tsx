import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-40 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/Images/Zemenay White Tech.png"
                alt="Team collaboration illustration"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-20 mt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Revolutionize Your Digital Experience
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                At Zemenay, we build clean, scalable, and elegant digital experiences for forward-thinking businesses.
              </p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Let's Build Together
              </button>
            </div>
            <div className="relative">
              <Image
                src="/Images/remove background project.png"
                alt="Team collaboration illustration"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Zemenay Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Zemenay</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empower your business with our cutting-edge solutions. We offer a range of services designed to elevate your digital presence and drive success.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Clean & Minimalist Interfaces</CardTitle>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/Images/png piture 2.png"
                      alt="Interface illustration"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Optimize your digital presence with our high-speed solutions, ensuring your users experience seamless interactions.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Scalable, High-Performance Code</CardTitle>
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/Images/png picture 3.png"
                      alt="Code illustration"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Protect your data and users with our state-of-the-art security measures, giving you peace of mind in the digital landscape.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Reliable Support & Maintenance</CardTitle>
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/Images/Remove background project.png"
                      alt="Support illustration"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Grow your business without limits using our scalable infrastructure, designed to evolve with your needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Clients Section with Accordion */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Clients We've Had the Pleasure to Work With
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're proud to have collaborated with these industry leaders, helping them achieve their digital transformation goals.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Our Client Portfolio
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4">
                  {/* Client 1 */}
                  <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center h-32">
                    <div className="text-center">
                      <div className="text-yellow-400 font-bold text-lg">HIYAW</div>
                      <div className="text-yellow-400 text-sm">ANIMATION</div>
                    </div>
                  </div>

                  {/* Client 2 */}
                  <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center h-32">
                    <div className="text-center">
                      <div className="text-orange-400 font-bold text-lg">Shine</div>
                      <div className="text-orange-400 text-sm">Tech</div>
                    </div>
                  </div>

                  {/* Client 3 */}
                  <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center h-32">
                    <Image
                      src="/Images/Berhanu.jpg"
                      alt="Berhanu Integrated Farm"
                      width={80}
                      height={40}
                      className="w-20 h-10 object-contain"
                    />
                  </div>

                  {/* Client 4 */}
                  <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center h-32">
                    <Image
                      src="/Images/EGA.png"
                      alt="EGA"
                      width={80}
                      height={40}
                      className="w-20 h-10 object-contain"
                    />
                  </div>

                  {/* Client 5 */}
                  <div className="bg-green-600 p-6 rounded-lg flex flex-col items-center justify-center h-32">
                    <div className="text-center text-white">
                      <div className="font-bold text-sm">ጨዋታ አዋቂ</div>
                      <div className="text-xs">CHEWATA AWAQI</div>
                    </div>
                  </div>

                  {/* Client 6 */}
                  <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center h-32">
                    <Image
                      src="/Images/The disruptors den.png"
                      alt="THE DISRUPTORS DEN"
                      width={80}
                      height={40}
                      className="w-20 h-10 object-contain"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Testimonials Section with Cards */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry professionals have to say about our services and solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">B</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Biniyam Masresha</CardTitle>
                    <CardDescription>Co-founder at Hiyaw Animations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Working with this team has been an absolute game-changer for our business. Their innovative solutions have streamlined our processes and boosted our productivity tenfold!"
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">D</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Dagmawi Bedilu</CardTitle>
                    <CardDescription>CSO at Efuye Gela</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "I can't recommend their services enough. The level of expertise and dedication they bring to each project is unparalleled. Our ROI has skyrocketed since partnering with them."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">K</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Kirubel Samuel</CardTitle>
                    <CardDescription>Co-founder at Chewataawaqi</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "The customer support is top-notch. They're always available to answer questions and provide guidance. It's refreshing to work with a company that truly cares about its clients' success."
                </p>
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
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">Z</span>
                </div>
                <span className="text-xl font-bold text-foreground">Zemenay Tech</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Services</a></li>
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
