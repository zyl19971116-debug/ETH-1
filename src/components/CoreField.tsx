"use client";
import { useEffect, useRef } from 'react';
export default function CoreField({ hue, energy, pulse, paused }: { hue: number; energy: number; pulse: number; paused: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const current = useRef({ hue, energy, pulse, paused });
  useEffect(() => { current.current = { hue, energy, pulse, paused }; }, [hue, energy, pulse, paused]);
  useEffect(() => {
    const el = canvas.current; if (!el) return;
    const ctx = el.getContext('2d'); if (!ctx) return;
    let w = 1, h = 1, frame = 0, time = 0, last = 0, seen = 0, burst = 0;
    let smoothHue = 160, smoothEnergy = .3;
    const pointer = { x: 0, y: 0 };
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const particles = Array.from({ length: 1800 }, (_, i) => {
      const y = 1 - 2 * (i + .5) / 1800;
      const angle = i * Math.PI * (3 - Math.sqrt(5));
      return { x: Math.cos(angle) * Math.sqrt(1 - y*y), y, z: Math.sin(angle) * Math.sqrt(1-y*y), seed: i * 1.713 };
    });
    function resize() { const box = el!.getBoundingClientRect(); w = box.width; h = box.height; const dpr = Math.min(devicePixelRatio || 1, 2); el!.width = w*dpr; el!.height = h*dpr; ctx!.setTransform(dpr,0,0,dpr,0,0); }
    const observer = new ResizeObserver(resize); observer.observe(el);
    function move(e: PointerEvent) { const b=el!.getBoundingClientRect(); pointer.x=(e.clientX-b.left)/w-.5; pointer.y=(e.clientY-b.top)/h-.5; }
    el.addEventListener('pointermove', move);
    function draw(now: number) {
      frame = requestAnimationFrame(draw);
      if (document.hidden || now-last < 32) return;
      const dt = Math.min((now-last)/1000,.05); last=now;
      const state=current.current;
      if (!state.paused && !reduced.matches) time += dt;
      if(seen!==state.pulse){seen=state.pulse;burst=1;}
      if(!state.paused) burst*=.96;
      smoothHue+=(state.hue-smoothHue)*.04; smoothEnergy+=(state.energy-smoothEnergy)*.035;
      ctx!.clearRect(0,0,w,h);
      const radius=Math.min(w*.33,h*.34,280);
      const glow=ctx!.createRadialGradient(w/2,h/2,0,w/2,h/2,radius*1.8);
      glow.addColorStop(0,`hsla(${smoothHue},60%,40%,.12)`);glow.addColorStop(1,'transparent');ctx!.fillStyle=glow;ctx!.fillRect(0,0,w,h);
      ctx!.strokeStyle=`hsla(${smoothHue},40%,70%,.12)`;ctx!.lineWidth=.6;
      for(let ring=0;ring<3;ring++){ctx!.beginPath();ctx!.ellipse(w/2,h/2,radius*(1.17+ring*.15),radius*(.28+ring*.05),time*.08+ring*.7,0,Math.PI*2);ctx!.stroke();}
      const angle=time*(.12+smoothEnergy*.13)+pointer.x*.25;
      const projected=particles.map(p=>{
        const wave=Math.sin(p.y*7+time*1.6+p.seed*.03)*smoothEnergy*.16;
        const r=radius*(1+wave+burst*.24*Math.sin(p.seed));
        const x=p.x*Math.cos(angle)-p.z*Math.sin(angle), z=p.x*Math.sin(angle)+p.z*Math.cos(angle);
        const scale=2.8/(2.8-z);
        return {x:w/2+x*r*scale,y:h/2+(p.y+Math.sin(time+p.seed)*smoothEnergy*.025)*r*scale+pointer.y*z*20,z,scale};
      }).sort((a,b)=>a.z-b.z);
      for(const p of projected){ctx!.fillStyle=`hsla(${smoothHue},${35+smoothEnergy*45}%,${65+p.z*20}%,${.15+(p.z+1)*.32})`;ctx!.beginPath();ctx!.arc(p.x,p.y,Math.max(.4,p.scale*(.65+smoothEnergy*.35)),0,Math.PI*2);ctx!.fill();}
    }
    resize();frame=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();el.removeEventListener('pointermove',move);};
  }, []);
  return <canvas ref={canvas} aria-label="Interactive particle artwork responding to your words" role="img" className="absolute inset-0 h-full w-full" />;
}
