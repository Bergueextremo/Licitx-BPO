(() => {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header=document.querySelector('.site-header');
  const sync=()=>header?.classList.toggle('scrolled',scrollY>22);
  sync(); addEventListener('scroll',sync,{passive:true});
  const blue='#0E6FFF',cyan='#49D3FF',grid='rgba(130,162,196,.12)',text='#7890AA';
  if(window.Chart){
    Chart.defaults.font.family='Inter, sans-serif'; Chart.defaults.color=text;
    const opts={responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{enabled:true,backgroundColor:'#071B33',titleColor:'#fff',bodyColor:'#BFD2E6',displayColors:false,padding:10}},scales:{x:{grid:{display:false},ticks:{font:{size:8},color:text}},y:{grid:{color:grid},border:{display:false},ticks:{font:{size:8},color:text}}},interaction:{intersect:false,mode:'index'}};
    const hero=document.getElementById('heroChart'); if(hero)new Chart(hero,{type:'line',data:{labels:['Nov','Dez','Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out'],datasets:[{data:[8,13,11,18,24,21,31,29,38,42,40,48],borderColor:cyan,backgroundColor:'rgba(73,211,255,.11)',fill:true,tension:.42,borderWidth:2,pointRadius:0}]},options:{...opts,scales:{x:{display:false},y:{display:false}}}});
    const perf=document.getElementById('performanceChart'); if(perf)new Chart(perf,{type:'line',data:{labels:['Nov','Dez','Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out'],datasets:[{data:[12,18,16,26,31,28,42,47,54,60,68,79],borderColor:blue,backgroundColor:'rgba(14,111,255,.13)',fill:true,tension:.38,borderWidth:2.5,pointRadius:0},{data:[8,10,14,17,21,25,29,33,40,44,50,58],borderColor:cyan,tension:.38,borderWidth:2,pointRadius:0}]},options:opts});
    const line=document.getElementById('juryLineChart'); if(line)new Chart(line,{type:'line',data:{labels:['2019','2020','2021','2022','2023','2024','2025','2026'],datasets:[{data:[21,24,32,37,49,56,63,74],borderColor:blue,backgroundColor:'rgba(14,111,255,.1)',fill:true,tension:.36,borderWidth:2.4,pointRadius:0}]},options:opts});
    const donut=document.getElementById('juryDonutChart'); if(donut)new Chart(donut,{type:'doughnut',data:{labels:['Convergentes','Divergentes','Outros'],datasets:[{data:[68,21,11],backgroundColor:[blue,cyan,'#D6E5F5'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,cutout:'76%',plugins:{legend:{display:false},tooltip:{enabled:false}}}});
  }
  if(window.gsap&&!reduced){
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({defaults:{ease:'power3.out'}}).from('.site-header',{y:-16,autoAlpha:0,duration:.5}).from('.hero-copy',{y:24,autoAlpha:0,duration:.75},'-=.2').from('.hero-dashboard',{x:28,autoAlpha:0,scale:.985,duration:.85},'-=.55');
    ScrollTrigger.batch('.reveal:not(.hero .reveal)',{start:'top 88%',once:true,interval:.08,batchMax:3,onEnter:b=>gsap.fromTo(b,{y:24,autoAlpha:0},{y:0,autoAlpha:1,duration:.62,ease:'power3.out',stagger:.08})});
    gsap.to('.map-a',{rotation:360,duration:52,ease:'none',repeat:-1});
    gsap.to('.map-b',{rotation:-360,duration:70,ease:'none',repeat:-1});
  }
})();