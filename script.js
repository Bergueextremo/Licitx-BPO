(() => {
  const header=document.querySelector('.site-header');
  const canvas=document.querySelector('#knowledgeCanvas');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const update=()=>header?.classList.toggle('scrolled',scrollY>24);
  update();addEventListener('scroll',update,{passive:true});
  if(!window.gsap||reduced)return;
  gsap.registerPlugin(ScrollTrigger);
  const intro=gsap.timeline({defaults:{ease:'power3.out'}});
  intro.from('.site-header',{y:-18,autoAlpha:0,duration:.55})
    .from('.hero .eyebrow',{y:16,autoAlpha:0,duration:.5},'-=.25')
    .from('.hero-title',{y:28,autoAlpha:0,duration:.75},'-=.32')
    .from('.hero-lead',{y:22,autoAlpha:0,duration:.6},'-=.42')
    .from('.hero-actions',{y:16,autoAlpha:0,duration:.48},'-=.36')
    .from('.source-line',{y:12,autoAlpha:0,duration:.42},'-=.3')
    .from('.hero-visual',{x:28,autoAlpha:0,scale:.985,duration:.9},'-=.78')
    .from('.float-card',{y:12,autoAlpha:0,duration:.42,stagger:.08},'-=.42');
  gsap.to('.orbit-a',{rotation:360,duration:48,ease:'none',repeat:-1});
  gsap.to('.orbit-b',{rotation:-360,duration:64,ease:'none',repeat:-1});
  ScrollTrigger.batch('.reveal:not(.hero .reveal)',{interval:.08,batchMax:3,start:'top 88%',once:true,onEnter:b=>gsap.fromTo(b,{y:26,autoAlpha:0},{y:0,autoAlpha:1,duration:.62,ease:'power3.out',stagger:.08,overwrite:true})});
  const path=document.querySelector('.line-path');
  if(path){const l=path.getTotalLength();gsap.set(path,{strokeDasharray:l,strokeDashoffset:l});gsap.to(path,{strokeDashoffset:0,duration:1.4,ease:'power2.out',scrollTrigger:{trigger:'.analytics-board',start:'top 78%',once:true}})}
  gsap.to('.flow-line span',{width:'100%',ease:'none',scrollTrigger:{trigger:'.workflow-track',start:'top 78%',end:'bottom 58%',scrub:.8}});
  if(canvas&&matchMedia('(pointer:fine)').matches){
    const rx=gsap.quickTo(canvas,'rotationX',{duration:.55,ease:'power3.out'}),ry=gsap.quickTo(canvas,'rotationY',{duration:.55,ease:'power3.out'}),x=gsap.quickTo(canvas,'x',{duration:.55,ease:'power3.out'}),y=gsap.quickTo(canvas,'y',{duration:.55,ease:'power3.out'});
    canvas.addEventListener('pointermove',e=>{const r=canvas.getBoundingClientRect(),nx=(e.clientX-r.left)/r.width-.5,ny=(e.clientY-r.top)/r.height-.5;ry(-4+nx*3.5);rx(2-ny*2.7);x(nx*5);y(ny*5)});
    canvas.addEventListener('pointerleave',()=>{ry(-4);rx(2);x(0);y(0)})
  }
})();