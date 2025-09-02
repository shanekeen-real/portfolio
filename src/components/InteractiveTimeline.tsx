"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Circle, Clock, Users, Lightbulb, Zap } from "lucide-react";

interface TimelinePhase {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  status: "completed" | "current" | "upcoming";
}

interface InteractiveTimelineProps {
  phases: TimelinePhase[];
  onPhaseClick?: (phaseId: string) => void;
}

export function InteractiveTimeline({ phases, onPhaseClick }: InteractiveTimelineProps) {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const handlePhaseClick = (phaseId: string) => {
    setActivePhase(activePhase === phaseId ? null : phaseId);
    onPhaseClick?.(phaseId);
  };

  const getIconForPhase = (phase: TimelinePhase) => {
    const iconClass = "h-5 w-5";
    
    switch (phase.id) {
      case "research":
        return <Users className={iconClass} />;
      case "concept":
        return <Lightbulb className={iconClass} />;
      case "iteration":
        return <Zap className={iconClass} />;
      case "final":
        return <CheckCircle2 className={iconClass} />;
      default:
        return <Circle className={iconClass} />;
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />
      
      <div className="space-y-8">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="relative"
          >
            {/* Phase Dot */}
            <motion.div
              className={`absolute left-6 top-0 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                phase.status === "completed"
                  ? "bg-primary border-primary"
                  : phase.status === "current"
                  ? "bg-primary/20 border-primary animate-pulse"
                  : "bg-background border-border"
              }`}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Content */}
            <div className="ml-16">
              <motion.button
                onClick={() => handlePhaseClick(phase.id)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${
                  activePhase === phase.id
                    ? "border-primary/60 bg-primary/5 shadow-lg"
                    : "border-border/50 hover:border-primary/40 hover:bg-muted/20"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${
                      activePhase === phase.id
                        ? "bg-primary/20 text-primary"
                        : "bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}>
                      {getIconForPhase(phase)}
                    </div>
                    <div>
                      <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                        activePhase === phase.id
                          ? "text-primary"
                          : "text-foreground"
                      }`}>
                        {phase.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {phase.duration}
                      </div>
                    </div>
                  </div>
                  
                  {phase.status === "completed" && (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  )}
                </div>
                
                <motion.p
                  className={`text-muted-foreground leading-relaxed transition-colors duration-300 ${
                    activePhase === phase.id
                      ? "text-foreground"
                      : ""
                  }`}
                  initial={false}
                  animate={{
                    color: activePhase === phase.id ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"
                  }}
                >
                  {phase.description}
                </motion.p>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
