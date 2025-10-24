"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Users, Target, Award, BarChart3, PieChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Metric {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  description?: string;
}

interface InteractiveMetricsProps {
  metrics: Metric[];
  title?: string;
  description?: string;
}

export function InteractiveMetrics({ metrics, title, description }: InteractiveMetricsProps) {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const getIconForMetric = (metric: Metric) => {
    const iconClass = "h-5 w-5";
    
    switch (metric.id) {
      case "revenue":
        return <TrendingUp className={iconClass} />;
      case "users":
        return <Users className={iconClass} />;
      case "accuracy":
        return <Target className={iconClass} />;
      case "satisfaction":
        return <Award className={iconClass} />;
      case "performance":
        return <BarChart3 className={iconClass} />;
      case "efficiency":
        return <PieChart className={iconClass} />;
      default:
        return <TrendingUp className={iconClass} />;
    }
  };

  return (
    <div className="space-y-8">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold tracking-tight mb-2">{title}</h3>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
          )}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className={`overflow-hidden border transition-all duration-300 cursor-pointer group ${
                selectedMetric === metric.id
                  ? "border-primary/60 bg-primary/5 shadow-lg scale-105"
                  : "border-border/50 hover:border-primary/40 hover:bg-muted/20 hover:scale-[1.02]"
              }`}
              onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg transition-colors duration-300 ${
                    selectedMetric === metric.id
                      ? "bg-primary/20 text-primary"
                      : `${metric.color} group-hover:bg-primary/10 group-hover:text-primary`
                  }`}>
                    {getIconForMetric(metric)}
                  </div>
                  
                  {selectedMetric === metric.id && (
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>
                
                <div className="space-y-2">
                  <motion.h4
                    className={`font-semibold text-lg transition-colors duration-300 ${
                      selectedMetric === metric.id
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {metric.label}
                  </motion.h4>
                  
                  <motion.div
                    className={`text-2xl font-bold transition-colors duration-300 ${
                      selectedMetric === metric.id
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                    initial={false}
                    animate={{
                      color: selectedMetric === metric.id ? "hsl(var(--primary))" : "hsl(var(--foreground))"
                    }}
                  >
                    {metric.value}
                  </motion.div>
                  
                  {metric.description && (
                    <motion.p
                      className="text-sm text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: selectedMetric === metric.id ? 1 : 0,
                        height: selectedMetric === metric.id ? "auto" : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {metric.description}
                    </motion.p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
