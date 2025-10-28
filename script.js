// script.js - animations and simple form handlers for demo
function scrollToSection(sel){
  document.querySelector(sel)?.scrollIntoView({behavior:'smooth', block:'start'});
}

// Intersection Observer to trigger animate-up
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
      // optional: unobserve so animation runs once
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.15});

document.querySelectorAll('.animate-up').forEach(el=>observer.observe(el));

// Contact form demo behavior
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.name.value || 'Friend';
  alert(name + ', your message has been received! We will contact you soon.');
  this.reset();
});

// Review form demo behavior
document.getElementById('reviewForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.name.value || 'Customer';
  const rev = this.review.value || '';
  const container = document.querySelector('#reviews .reviews');
  const block = document.createElement('blockquote');
  block.innerHTML = `<p>"${rev}"</p><cite>— ${name}</cite>`;
  container.insertBefore(block, container.firstChild);
  this.reset();
  alert('Thanks for your review!');
});
