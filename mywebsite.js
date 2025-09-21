// document.getElementById("about-toggle").addEventListener("click", function (e) {
//   e.preventDefault(); // Prevent link navigation
//   document.getElementById("about-info").classList.toggle("show");
// });

(function(){
  const modal = document.getElementById('about-modal');
  const openBtn = document.getElementById('about-toggle');
  // const closeBtn = document.getElementById('close-modal');

  // open
  openBtn.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });

  // close via button
  // closeBtn.addEventListener('click', function(){
  //   modal.classList.remove('open');
  //   modal.setAttribute('aria-hidden', 'true');
  // });

  // close by clicking overlay (outside the card)
  modal.addEventListener('click', function(e){
    if (e.target === modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  // close with Escape
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
})();