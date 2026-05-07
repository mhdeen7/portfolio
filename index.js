 const hamburger = document.getElementById('hamburger');
    const navlist = document.querySelector('.navlist');
    hamburger.addEventListener('click', () => {
      navlist.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
    document.querySelectorAll('.navlist a').forEach(link => {
      link.addEventListener('click', () => {
        navlist.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });

    // Skill bar animation on scroll
    const skillFills = document.querySelectorAll('.skill-fill');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.width = el.getAttribute('data-width');
        }
      });
    }, { threshold: 0.4 });
    skillFills.forEach(fill => observer.observe(fill));

    // Scroll reveal for cards
    const revealEls = document.querySelectorAll('.skill-card, .project-card, .about-card');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${(i % 3) * 0.1}s`;
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => revealObserver.observe(el));


    // Active nav highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      sections.forEach(sec => {
        const offset = sec.offsetTop - 80;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        const link = document.querySelector(`.navlist a[href="#${id}"]`);
        if (link) {
          if (scrollY >= offset && scrollY < offset + height) {
            link.classList.add('active-link');
          } else {
            link.classList.remove('active-link');
          }
        }
      });
    });