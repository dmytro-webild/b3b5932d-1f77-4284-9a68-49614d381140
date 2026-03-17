"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Award, CheckCircle, DollarSign, MapPin, Package, Rocket, Smartphone, Sparkles, Star, Tag, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="compact"
      sizing="largeSmall"
      background="blurBottom"
      cardStyle="solid"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="MADIGAN WEB DESIGN"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" }
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Professional Websites Built Fast"
          description="We design and develop stunning websites for local businesses. Get a high-quality, custom website for just $185—or add premium features starting at $60."
          tag="Web Design Agency"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Get Your Website", href: "#contact" },
            { text: "View Add-Ons", href: "#pricing" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-psd/wellness-concept-landing-page-template_23-2150094962.jpg",              imageAlt: "Modern website design mockup"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-vector/dashboard-element-collection-template_23-2148366978.jpg",              imageAlt: "Website development workspace screen"
            }
          ]}
          mediaAnimation="slide-up"
          rating={5}
          ratingText="Trusted by 50+ local businesses"
          background={{ variant: "plain" }}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose MADIGAN WEB DESIGN?"
          description="We specialize in creating professional, fast-loading websites that convert visitors into customers. No delays, no complexity—just results."
          tag="Our Approach"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          buttons={[
            { text: "Learn More", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          bulletPoints={[
            {
              title: "Fast Turnaround",              description: "Get your website live in days, not months. We move quick.",              icon: Zap
            },
            {
              title: "Affordable Pricing",              description: "Professional design at $185. Premium add-ons starting at $60.",              icon: DollarSign
            },
            {
              title: "Local Focus",              description: "Built for local businesses. We understand your market.",              icon: MapPin
            },
            {
              title: "Mobile Ready",              description: "Every website is responsive and optimized for all devices.",              icon: Smartphone
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/colleagues-speaking-discussing-drawings-new-ideas-office_176420-1702.jpg"
          imageAlt="MADIGAN WEB DESIGN team"
          mediaAnimation="slide-up"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentySeven
          title="What We Offer"
          description="Base website design with premium add-ons to customize your online presence."
          tag="Services"
          tagIcon={Package}
          tagAnimation="slide-up"
          buttons={[
            { text: "Get Started Today", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          features={[
            {
              id: "1",              title: "Base Website - $185",              descriptions: [
                "Professional multi-page design",                "Mobile responsive layout",                "Contact form integration",                "SEO optimized",                "1 year hosting included"
              ]
            },
            {
              id: "2",              title: "E-commerce Setup",              descriptions: [
                "Product catalog integration",                "Payment processing",                "Inventory management",                "Shopping cart functionality",                "Add-on: $60"
              ]
            },
            {
              id: "3",              title: "SEO Optimization",              descriptions: [
                "Keyword research & strategy",                "Meta tags optimization",                "Site speed enhancement",                "Google Search Console setup",                "Add-on: $60"
              ]
            },
            {
              id: "4",              title: "Content Creation",              descriptions: [
                "Professional copywriting",                "Product descriptions",                "Blog setup & management",                "Regular content updates",                "Add-on: $100"
              ]
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Start with our base website and add features as you grow."
          tag="Pricing"
          tagIcon={Tag}
          tagAnimation="slide-up"
          plans={[
            {
              id: "starter",              badge: "Popular",              badgeIcon: Star,
              price: "$185",              subtitle: "Base Website Package",              features: [
                "Multi-page professional website",                "Mobile responsive design",                "Contact form with notifications",                "SEO-friendly structure",                "1 year hosting included",                "Email support"
              ]
            },
            {
              id: "plus",              badge: "Best Value",              badgeIcon: Sparkles,
              price: "$60+",              subtitle: "Premium Add-Ons",              features: [
                "E-commerce setup",                "Advanced SEO package",                "Blog & content management",                "Social media integration",                "Analytics dashboard",                "Monthly support plan"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Start Your Project", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Local Businesses"
          description="From startups to established companies, we've helped 50+ businesses establish their online presence."
          tag="Social Proof"
          tagIcon={Award}
          tagAnimation="slide-up"
          names={[
            "Local Retail Shop",            "Coffee Roastery",            "Fitness Studio",            "Restaurant & Cafe",            "Plumbing Service",            "Real Estate Agency",            "Photography Studio",            "Medical Practice"
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "See Our Portfolio", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          showCard={true}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Launch Your Website?"
          description="Contact us today to discuss your project. Call (843) 810-6484 or fill out the form below."
          tagIcon={Rocket}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Get in Touch"
          termsText="By submitting this form, you agree to be contacted about your website project."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Pricing", href: "#pricing" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Contact", href: "#contact" },
                { label: "Email Support", href: "mailto:info@madiganwebdesign.com" },
                { label: "Call (843) 810-6484", href: "tel:+18438106484" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2024 MADIGAN WEB DESIGN. All rights reserved."
          bottomRightText="Designed to convert. Built to scale."
        />
      </div>
    </ThemeProvider>
  );
}
