"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, ExternalLink, Eye, EyeOff } from "lucide-react";

interface PasswordProtectionProps {
  onUnlock: () => void;
  externalLink?: string;
  project: string;
}

export function PasswordProtection({ onUnlock, externalLink, project }: PasswordProtectionProps) {
  const [password, setPassword] = useState("");
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsIncorrect(false);
    
    try {
      const response = await fetch('/api/verify-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project,
          password,
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        onUnlock();
      } else {
        setIsIncorrect(true);
        setPassword("");
      }
    } catch (error) {
      console.error('Password verification failed:', error);
      setIsIncorrect(true);
      setPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Card className="border-0 shadow-2xl bg-background/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-8 pt-8">
            <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shadow-lg">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-semibold mb-3">Project in Development</CardTitle>
            <p className="text-muted-foreground text-base leading-relaxed">
              This project is currently under development. Please enter the password to view the case study.
            </p>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setIsIncorrect(false);
                    }}
                    className={`w-full h-12 px-4 pr-12 rounded-xl border-2 transition-all duration-200 bg-background/50 backdrop-blur-sm text-base placeholder:text-muted-foreground/70 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary/50 ${
                      isIncorrect 
                        ? "border-destructive focus:ring-destructive/20 focus:border-destructive" 
                        : "border-border/50 hover:border-border focus:border-primary/50"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200 p-1"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {isIncorrect && (
                  <div className="flex items-center space-x-2 text-destructive text-sm">
                    <div className="w-1 h-1 bg-destructive rounded-full"></div>
                    <span>Incorrect password. Please try again.</span>
                  </div>
                )}
              </div>
              
              <div className="space-y-3 pt-2">
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full h-12 text-base font-medium rounded-xl bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Verifying..." : "View Case Study"}
                </Button>
                
                {externalLink && (
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 text-base font-medium rounded-xl border-2 hover:bg-muted/50 transition-all duration-200"
                    onClick={() => window.open(externalLink, '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live Website
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
