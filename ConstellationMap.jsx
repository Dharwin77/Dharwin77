import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Briefcase, Cpu, Hexagon, Milestone, ShieldAlert } from 'lucide-react';

// Achievements & Certifications Database
const KNOWLEDGE_GRAPH = {
  'core': {
    type: 'core',
    title: 'Dharwin S',
    subtitle: 'AI & Data Science Student // Full-Stack Developer',
    year: '2023 - 2027',
    icon: Cpu,
    desc: 'Specializing in building intelligent systems, real-time architectures, and machine learning pipelines. Bridging data-driven models with high-performance user interfaces.',
    color: '#00f2fe'
  },
  'cert-1': {
    type: 'cert',
    title: 'Microsoft Azure AI Engineer Associate',
    subtitle: 'Microsoft Certified (AI-102)',
    year: '2025',
    icon: Hexagon,
    desc: 'Specialized credentials verifying expertise in designing and implementing Azure AI solutions. Covers Cognitive Services, conversational AI workflows, custom NLP, computer vision APIs, and production LLM integrations.',
    color: '#8b5cf6'
  },
  'cert-2': {
    type: 'cert',
    title: 'MongoDB Certified Associate Developer',
    subtitle: 'MongoDB Academy Developer (C100DEV)',
    year: '2025',
    icon: Hexagon,
    desc: 'Certified database developer verifying core proficiency in database structure modeling, aggregation frameworks, operational metrics, document design, and custom indexing optimizations.',
    color: '#8b5cf6'
  },
  'cert-3': {
    type: 'cert',
    title: 'Oracle APEX Professional Developer',
    subtitle: 'Oracle Certified Professional',
    year: '2024',
    icon: Hexagon,
    desc: 'Demonstrated skills in rapid application design, secure enterprise database pipelines, custom SQL optimization, and developing robust Oracle APEX workflows.',
    color: '#8b5cf6'
  },
  'ach-1': {
    type: 'achievement',
    title: 'Generative AI Internship',
    subtitle: 'Industry Partner Internship',
    year: '2025',
    icon: Briefcase,
    desc: 'Orchestrated custom fine-tuned Large Language Model agents. Deployed secure Retrieval-Augmented Generation (RAG) structures, real-time database lookups, and specialized system reasoning logic.',
    color: '#ff00a0'
  },
  'ach-2': {
    type: 'achievement',
    title: 'HackSphere \'25 Winner',
    subtitle: 'First-Place Hackathon Trophy',
    year: '2025',
    icon: Award,
    desc: 'Spearheaded frontend design and machine learning pipeline integration to deliver a production-ready, fully-functional web dashboard prototype within a competitive 24-hour sprint.',
    color: '#ff00a0'
  },
  'ach-3': {
    type: 'achievement',
    title: 'Ruby Year Project Expo 2025',
    subtitle: 'Top-Shortlisted Innovation Project',
    year: '2025',
    icon: Milestone,
    desc: 'Developed and exhibited generative architectural planners and predictive groundwater modeling software combining geospatial data overlays with automated building layouts.',
    color: '#ff00a0'
  }
};

// Line connections mapping to highlighted nodes
const CONNECTION_MAP = {
  'cert-1': ['line-cert-1', 'line-cross-1'],
  'cert-2': ['line-cert-2', 'line-cross-3'],
  'cert-3': ['line-cert-3', 'line-cross-2'],
  'ach-1': ['line-ach-1', 'line-cross-1'],
  'ach-2': ['line-ach-2', 'line-cross-2'],
  'ach-3': ['line-ach-3', 'line-cross-3'],
  'core': ['line-cert-1', 'line-cert-2', 'line-cert-3', 'line-ach-1', 'line-ach-2', 'line-ach-3']
};

export default function ConstellationMap() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeNode, setActiveNode] = useState('core');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle subtle ambient parallax based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.03,
        y: (e.clientY - window.innerHeight / 2) * 0.03
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const activeData = KNOWLEDGE_GRAPH[activeNode] || KNOWLEDGE_GRAPH['core'];
  const IconComponent = activeData.icon;

  const isHighlighted = (lineId) => {
    if (!hoveredNode) return false;
    const activeLines = CONNECTION_MAP[hoveredNode] || [];
    return activeLines.includes(lineId);
  };

  const getLineOpacity = (lineId) => {
    if (!hoveredNode) return 0.05;
    return isHighlighted(lineId) ? 0.7 : 0.02;
  };

  const getLineColor = (lineId) => {
    if (!hoveredNode) return '#ffffff';
    const type = KNOWLEDGE_GRAPH[hoveredNode]?.type;
    if (type === 'cert') return '#8b5cf6';
    if (type === 'achievement') return '#ff00a0';
    return '#00f2fe';
  };

  return (
    <div className="relative w-full min-h-[90vh] bg-[#030308] text-slate-100 overflow-hidden flex flex-col md:flex-row items-center justify-center p-6 select-none font-sans">
      
      {/* Ambient gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none opacity-80 z-0">
        <div className="absolute top-[20%] left-[10%] w-[35%] h-[35%] rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[35%] rounded-full bg-cyan-900/10 blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-pink-900/5 blur-[120px]" />
        
        {/* Subtle matrix-like grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Header telemetry info */}
      <div className="absolute top-8 left-8 z-10 flex flex-col gap-1">
        <h2 className="text-xl md:text-2xl font-black tracking-widest bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          KNOWLEDGE CONSTELLATION
        </h2>
        <p className="font-mono text-[10px] tracking-wider text-slate-500">
          SYSTEM_ACCESS: SECURE // AI NEURAL MAP v1.0.2
        </p>
      </div>

      {/* Constellation Canvas Frame */}
      <motion.div 
        className="relative z-10 w-full max-w-[850px] aspect-square flex items-center justify-center"
        style={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
      >
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <defs>
            {/* Glowing neon filters */}
            <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-pink" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Dotted orbits */}
          <circle cx="500" cy="500" r="145" className="fill-none stroke-slate-800/40 stroke-[1.5] stroke-dasharray-[4_8]" />
          <motion.circle 
            cx="500" 
            cy="500" 
            r="145" 
            className="fill-none stroke-purple-500/10 stroke-[2.5]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '500px 500px' }}
          />
          <circle cx="500" cy="500" r="330" className="fill-none stroke-slate-800/40 stroke-[1.5] stroke-dasharray-[4_8]" />

          {/* Connected Grid Lines */}
          <g>
            {[
              { id: 'line-cert-1', x: 380, y: 400 },
              { id: 'line-cert-2', x: 580, y: 600 },
              { id: 'line-cert-3', x: 620, y: 440 },
              { id: 'line-ach-1', x: 250, y: 280 },
              { id: 'line-ach-2', x: 720, y: 260 },
              { id: 'line-ach-3', x: 520, y: 780 }
            ].map(line => (
              <motion.line
                key={line.id}
                x1="500"
                y1="500"
                x2={line.x}
                y2={line.y}
                stroke={getLineColor(line.id)}
                animate={{
                  strokeWidth: isHighlighted(line.id) ? 2.5 : 1.5,
                  opacity: getLineOpacity(line.id)
                }}
                transition={{ duration: 0.4 }}
              />
            ))}

            {/* Constellation Linkage lines */}
            <motion.line x1="250" y1="280" x2="380" y2="400" stroke={getLineColor('line-cross-1')} animate={{ opacity: getLineOpacity('line-cross-1'), strokeWidth: isHighlighted('line-cross-1') ? 2.5 : 1.5 }} />
            <motion.line x1="720" y1="260" x2="620" y2="440" stroke={getLineColor('line-cross-2')} animate={{ opacity: getLineOpacity('line-cross-2'), strokeWidth: isHighlighted('line-cross-2') ? 2.5 : 1.5 }} />
            <motion.line x1="520" y1="780" x2="580" y2="600" stroke={getLineColor('line-cross-3')} animate={{ opacity: getLineOpacity('line-cross-3'), strokeWidth: isHighlighted('line-cross-3') ? 2.5 : 1.5 }} />
          </g>

          {/* Interactive Nodes */}
          <g>
            {/* Certifications (Orbiting Nodes) */}
            {[
              { id: 'cert-1', cx: 380, cy: 400, label: 'AZURE AI ENGINEER', color: 'var(--glow-purple)' },
              { id: 'cert-2', cx: 580, cy: 600, label: 'MONGODB DEVELOPER', color: 'var(--glow-purple)' },
              { id: 'cert-3', cx: 620, cy: 440, label: 'ORACLE APEX PROF.', color: 'var(--glow-purple)' }
            ].map(node => (
              <g 
                key={node.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setActiveNode(node.id)}
              >
                <motion.circle 
                  cx={node.cx} 
                  cy={node.cy} 
                  r={12} 
                  className="fill-purple-600" 
                  filter="url(#glow-purple)"
                  whileHover={{ scale: 1.35 }}
                  animate={{ scale: activeNode === node.id ? 1.25 : 1 }}
                />
                <circle cx={node.cx} cx={node.cx} cy={node.cy} r={5} className="fill-white" />
                <motion.text
                  x={node.cx}
                  y={node.cy > 500 ? node.cy + 30 : node.cy - 25}
                  className="text-[10px] font-mono fill-slate-400 font-bold"
                  textAnchor="middle"
                  animate={{
                    fill: (hoveredNode === node.id || activeNode === node.id) ? '#ffffff' : 'rgba(148, 163, 184, 0.55)',
                    scale: hoveredNode === node.id ? 1.05 : 1
                  }}
                >
                  {node.label}
                </motion.text>
              </g>
            ))}

            {/* Achievements (Milestone Stars) */}
            {[
              { id: 'ach-1', cx: 250, cy: 280, label: 'GEN-AI INTERNSHIP', points: '250,265 253,275 264,275 255,282 258,293 250,286 242,293 245,282 236,275 247,275' },
              { id: 'ach-2', cx: 720, cy: 260, label: 'HACKSPHERE \'25', points: '720,245 723,255 734,255 725,262 728,273 720,266 712,273 715,262 706,255 717,255' },
              { id: 'ach-3', cx: 520, cy: 780, label: 'RUBY PROJECT EXPO', points: '520,765 523,775 534,775 525,782 528,793 520,786 512,793 515,782 506,775 517,775' }
            ].map(star => (
              <g 
                key={star.id} 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode(star.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setActiveNode(star.id)}
              >
                <motion.polygon 
                  points={star.points} 
                  className="fill-pink-500 origin-center" 
                  filter="url(#glow-pink)"
                  whileHover={{ scale: 1.35 }}
                  animate={{ scale: activeNode === star.id ? 1.25 : 1 }}
                  style={{ transformOrigin: `${star.cx}px ${star.cy}px` }}
                />
                <circle cx={star.cx} cy={star.cy} r={3} className="fill-white" />
                <motion.text
                  x={star.cx}
                  y={star.cy > 500 ? star.cy + 30 : star.cy - 25}
                  className="text-[10px] font-mono fill-slate-400 font-bold"
                  textAnchor="middle"
                  animate={{
                    fill: (hoveredNode === star.id || activeNode === star.id) ? '#ffffff' : 'rgba(148, 163, 184, 0.55)',
                    scale: hoveredNode === star.id ? 1.05 : 1
                  }}
                >
                  {star.label}
                </motion.text>
              </g>
            ))}

            {/* Central Node Profile Core */}
            <g 
              className="cursor-pointer"
              onMouseEnter={() => setHoveredNode('core')}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => setActiveNode('core')}
            >
              {/* Pulse animation ring */}
              <motion.circle 
                cx="500" 
                cy="500" 
                r={24} 
                className="fill-cyan-500/10 stroke-cyan-500/30 stroke-[1.5]"
                animate={{ r: [22, 30, 22] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.circle 
                cx="500" 
                cy="500" 
                r={14} 
                className="fill-cyan-500" 
                filter="url(#glow-cyan)"
                whileHover={{ scale: 1.25 }}
                animate={{ scale: activeNode === 'core' ? 1.15 : 1 }}
              />
              <circle cx="500" cy="500" r="5" className="fill-white" />
              <text x="500" y="535" className="text-[11px] font-mono font-black tracking-wider fill-cyan-400 text-center" textAnchor="middle">
                DHARWIN S
              </text>
            </g>
          </g>
        </svg>
      </motion.div>

      {/* Floating Info Panel Card */}
      <div className="w-full md:w-[380px] md:absolute md:bottom-8 md:right-8 z-20 mt-6 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="w-full bg-slate-950/45 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-md shadow-2xl shadow-black/60"
          >
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800/50">
              <span 
                className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded border"
                style={{ 
                  color: activeData.color,
                  borderColor: `${activeData.color}30`,
                  backgroundColor: `${activeData.color}10`
                }}
              >
                {activeData.type === 'core' ? 'System Core' : activeData.type === 'cert' ? 'Certification' : 'Milestone Star'}
              </span>
              <span className="font-mono text-xs text-slate-500">
                {activeData.year}
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div 
                className="p-3 rounded-xl border border-slate-800/80 shrink-0"
                style={{ backgroundColor: `${activeData.color}05` }}
              >
                <IconComponent 
                  className="w-6 h-6 stroke-[1.5]"
                  style={{ color: activeData.color }}
                />
              </div>
              <div>
                <h3 className="text-lg font-black tracking-tight text-white leading-snug">
                  {activeData.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  {activeData.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-300 font-light mt-5">
              {activeData.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer hint indicator */}
      <div className="absolute bottom-8 left-8 z-10 font-mono text-[9px] text-cyan-400/60 tracking-wider flex items-center gap-2 animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span>SELECT NODES TO QUERY DEEP CREDENTIALS</span>
      </div>
    </div>
  );
}
