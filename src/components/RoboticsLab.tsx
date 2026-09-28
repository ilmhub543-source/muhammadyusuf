import React, { useState, useEffect, useRef } from 'react';
import { Bot, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Radio, Volume2, RotateCcw, Activity, ShieldCheck, BatteryCharging } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface RoboticsLabProps {
  lang: Language;
}

export const RoboticsLab: React.FC<RoboticsLabProps> = ({ lang }) => {
  const t = translations[lang];

  // Rover Simulation State
  const [posX, setPosX] = useState(150);
  const [posY, setPosY] = useState(150);
  const [heading, setHeading] = useState(0); // 0 = UP, 90 = RIGHT, 180 = DOWN, 270 = LEFT
  const [status, setStatus] = useState<string>('idle');
  const [obstacleDistance, setObstacleDistance] = useState(42);
  const [battery, setBattery] = useState(96);
  const [log, setLog] = useState('SYSTEM_READY // HC-SR04 ONLINE');
  const [scanning, setScanning] = useState(false);
  const [beepTriggered, setBeepTriggered] = useState(false);

  // Play a simple Web Audio beep
  const playBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch {
      // AudioContext might be blocked until user gesture, ignore gracefully
    }
    setBeepTriggered(true);
    setTimeout(() => setBeepTriggered(false), 300);
    setLog('BUZZER: BEEP (880Hz)');
  };

  const moveForward = () => {
    setStatus('moving');
    setBattery(prev => Math.max(10, prev - 0.2));
    
    // Calculate new position based on heading
    const rad = (heading * Math.PI) / 180;
    const dx = Math.sin(rad) * 20;
    const dy = -Math.cos(rad) * 20;

    setPosX(prev => Math.min(260, Math.max(40, prev + dx)));
    setPosY(prev => Math.min(260, Math.max(40, prev + dy)));
    setObstacleDistance(Math.floor(Math.random() * 40) + 15);
    setLog(`COMMAND: FORWARD // HEADING ${heading}°`);

    setTimeout(() => setStatus('idle'), 300);
  };

  const moveBackward = () => {
    setStatus('moving');
    setBattery(prev => Math.max(10, prev - 0.2));

    const rad = (heading * Math.PI) / 180;
    const dx = -Math.sin(rad) * 20;
    const dy = Math.cos(rad) * 20;

    setPosX(prev => Math.min(260, Math.max(40, prev + dx)));
    setPosY(prev => Math.min(260, Math.max(40, prev + dy)));
    setObstacleDistance(Math.floor(Math.random() * 50) + 20);
    setLog(`COMMAND: REVERSE // HEADING ${heading}°`);

    setTimeout(() => setStatus('idle'), 300);
  };

  const turnLeft = () => {
    setHeading(prev => (prev - 45 + 360) % 360);
    setLog(`COMMAND: ROTATE_LEFT (-45°)`);
  };

  const turnRight = () => {
    setHeading(prev => (prev + 45) % 360);
    setLog(`COMMAND: ROTATE_RIGHT (+45°)`);
  };

  const triggerScan = () => {
    setScanning(true);
    setStatus('scanning');
    setLog('ULTRASONIC_SCAN: PINGING 40kHz...');

    setTimeout(() => {
      const dist = Math.floor(Math.random() * 35) + 12;
      setObstacleDistance(dist);
      setScanning(false);
      setStatus('idle');
      setLog(`SCAN_RESULT: OBSTACLE DETECTED AT ${dist}cm`);
    }, 600);
  };

  const resetRover = () => {
    setPosX(150);
    setPosY(150);
    setHeading(0);
    setObstacleDistance(42);
    setLog('POSITION RESET TO ORIGIN (150, 150)');
  };

  return (
    <section id="robotics" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            03. {t.roboticsLab.sectionTitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t.roboticsLab.sectionSubtitle}
          </h2>
        </div>

        {/* Interactive Lab Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Virtual Rover Grid Viewport */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-square rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 overflow-hidden shadow-inner flex items-center justify-center">
              
              {/* Grid Lines Pattern */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}
              />

              {/* Obstacle Markers in Arena */}
              <div className="absolute top-10 left-12 w-8 h-8 rounded-lg bg-rose-500/30 border border-rose-500 flex items-center justify-center text-[10px] font-mono text-rose-300">
                #1
              </div>
              <div className="absolute bottom-12 right-12 w-10 h-10 rounded-lg bg-rose-500/30 border border-rose-500 flex items-center justify-center text-[10px] font-mono text-rose-300">
                #2
              </div>
              <div className="absolute top-16 right-16 w-8 h-8 rounded-lg bg-amber-500/30 border border-amber-500 flex items-center justify-center text-[10px] font-mono text-amber-300">
                #3
              </div>

              {/* Sonar Scan Wave Animation */}
              {scanning && (
                <div 
                  className="absolute rounded-full border-2 border-sky-400 animate-ping opacity-75 pointer-events-none"
                  style={{
                    left: `${posX - 20}px`,
                    top: `${posY - 20}px`,
                    width: '80px',
                    height: '80px'
                  }}
                />
              )}

              {/* Virtual Rover Vehicle */}
              <div
                className="absolute transition-all duration-300 ease-out flex items-center justify-center"
                style={{
                  left: `${posX}px`,
                  top: `${posY}px`,
                  transform: `translate(-50%, -50%) rotate(${heading}deg)`
                }}
              >
                <div className={`relative w-14 h-16 rounded-xl border-2 shadow-lg flex flex-col items-center justify-between p-1 transition-colors ${
                  beepTriggered ? 'bg-amber-500 border-amber-300' : 'bg-slate-800 border-sky-400'
                }`}>
                  {/* Front Ultrasonic Sensor Eyes */}
                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse border border-white" />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse border border-white" />
                  </div>

                  {/* Rover Body Center */}
                  <Bot className="w-5 h-5 text-white" />

                  {/* Rear Indicator */}
                  <div className="w-6 h-1 rounded bg-slate-600" />

                  {/* Left and Right Tread / Wheels */}
                  <div className="absolute -left-2 top-2 bottom-2 w-1.5 rounded-sm bg-slate-400" />
                  <div className="absolute -right-2 top-2 bottom-2 w-1.5 rounded-sm bg-slate-400" />
                </div>
              </div>

              {/* Arena Info Overlay */}
              <div className="absolute top-3 left-3 text-[11px] font-mono text-slate-400 bg-slate-950/80 px-2 py-1 rounded border border-slate-800">
                ARENA: 300x300mm · HC-SR04
              </div>

            </div>

            {/* Micro Controls Bar below viewport */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 w-full max-w-[420px]">
              <button
                onClick={resetRover}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.roboticsLab.resetRover}</span>
              </button>

              <button
                onClick={playBeep}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 dark:hover:bg-amber-900/60 border border-amber-200 dark:border-amber-800 transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{t.roboticsLab.soundBeep}</span>
              </button>

              <button
                onClick={triggerScan}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800 transition-colors"
              >
                <Radio className="w-3.5 h-3.5 text-sky-500" />
                <span>{t.roboticsLab.scanSensor}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Directional D-Pad & Live Telemetry */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Telemetry Panel */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-sky-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {t.roboticsLab.telemetryTitle}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {status === 'idle' ? t.roboticsLab.statusIdle : status === 'moving' ? t.roboticsLab.statusMoving : t.roboticsLab.statusScanning}
                </span>
              </div>

              {/* Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-3 py-4 text-center">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.roboticsLab.obstacleDistance}
                  </p>
                  <p className="text-lg font-bold font-mono text-sky-600 dark:text-sky-400 tabular-nums mt-0.5">
                    {obstacleDistance} <span className="text-xs">cm</span>
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.roboticsLab.heading}
                  </p>
                  <p className="text-lg font-bold font-mono text-slate-900 dark:text-white tabular-nums mt-0.5">
                    {heading}°
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.roboticsLab.batteryLevel}
                  </p>
                  <p className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums mt-0.5">
                    {battery.toFixed(0)}%
                  </p>
                </div>
              </div>

              {/* Log Stream */}
              <div className="p-2.5 rounded-lg bg-slate-900 text-sky-400 font-mono text-xs overflow-x-auto whitespace-nowrap">
                <span className="text-slate-500">{'>'}</span> {log}
              </div>
            </div>

            {/* Directional D-Pad Controls */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col items-center">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                Rover D-Pad Boshqaruv Klaviaturasi
              </p>

              <div className="grid grid-cols-3 gap-2 w-48">
                <div />
                <button
                  onClick={moveForward}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white flex items-center justify-center transition-colors active:scale-95 shadow-sm"
                  aria-label="Oldinga"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
                <div />

                <button
                  onClick={turnLeft}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white flex items-center justify-center transition-colors active:scale-95 shadow-sm"
                  aria-label="Chapga burilish"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={triggerScan}
                  className="p-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center transition-colors active:scale-95 shadow-sm font-mono text-xs font-bold"
                  aria-label="Sensor Skan"
                >
                  SCAN
                </button>

                <button
                  onClick={turnRight}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white flex items-center justify-center transition-colors active:scale-95 shadow-sm"
                  aria-label="O'ngga burilish"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div />
                <button
                  onClick={moveBackward}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white flex items-center justify-center transition-colors active:scale-95 shadow-sm"
                  aria-label="Orqaga"
                >
                  <ArrowDown className="w-5 h-5" />
                </button>
                <div />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
