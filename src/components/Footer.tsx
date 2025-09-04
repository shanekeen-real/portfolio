import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";
import Lottie from "lottie-react";
import linkedinAnimation from "../../microanimations/linkedin.json";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  // get the current time in local timezone
  const [time, setTime] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })
      );
      
      // Get the current timezone and extract just the city/region part
      const timezoneAbbr = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // Remove continent prefix (e.g., "Europe/London" -> "London")
      const cityName = timezoneAbbr.split('/').pop() || timezoneAbbr;
      setTimezone(cityName);
    };

    // Update immediately and then every second
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          {/* Available for Work Button */}
          <Link
            href="mailto:contact@shane.technology"
            passHref
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            <Button variant="outline" className="gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span>Available for work</span>
            </Button>
          </Link>
          
          <hr className="hidden h-6 border-l border-muted md:flex" />
          
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">Local time:</p>
            <p className="text-sm font-semibold">{time} {timezone}</p>
          </span>
        </span>
        <div className="flex items-center space-x-3">
          {/* LinkedIn Button */}
          <Link
            href="https://www.linkedin.com/in/shane-keen0000/"
            target="_blank"
            rel="noopener noreferrer"
            passHref
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            <Button 
              variant="outline" 
              size="icon" 
              className={`h-10 w-10 p-0 ${
                resolvedTheme === 'dark' 
                  ? 'text-muted-foreground hover:text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Lottie
                animationData={linkedinAnimation}
                loop={true}
                autoplay={true}
                className="h-6 w-6"
                style={{
                  filter: resolvedTheme === 'dark' 
                    ? 'brightness(0) saturate(100%) invert(0.8)' 
                    : 'brightness(0) saturate(100%) invert(0.3)'
                }}
              />
            </Button>
          </Link>
          
          {/* Email Button */}
          <Link
            href="mailto:contact@shane.technology"
            passHref
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            <Button variant="outline">
              <MailIcon className="h-4 w-4 md:mr-2" />
              <span className="hidden md:flex">contact@shane.technology</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#10b981,#059669,#34d399,transparent)] opacity-50 mb-4 md:mb-0" />
    </footer>
  );
}
