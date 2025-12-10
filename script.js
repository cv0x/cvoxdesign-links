document.addEventListener('DOMContentLoaded', () => {
    // Random Quote Logic
    if (typeof pulpFictionQuotes !== 'undefined' && pulpFictionQuotes.length > 0) {
        const randomQuote = pulpFictionQuotes[Math.floor(Math.random() * pulpFictionQuotes.length)];
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) {
            subtitle.textContent = randomQuote;
        }
    }

    // Links Data Configuration
    const links = [
        {
            title: 'Website',
            url: 'https://cvoxdesign.com',
            icon: 'fa-solid fa-globe'
        },
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/davidoubrecht/',
            icon: 'fa-brands fa-linkedin'
        },
        {
            title: 'GitHub',
            url: 'https://github.com/cv0x',
            icon: 'fa-brands fa-github'
        },
        {
            title: 'X',
            url: 'https://x.com/Thecv0x',
            icon: 'fa-brands fa-x-twitter'
        },
        {
            title: 'Discord',
            url: 'https://discord.com/users/363347849095806978',
            icon: 'fa-brands fa-discord'
        }
    ];

    const container = document.getElementById('links-container');
    let delay = 0.2; // Initial animation delay

    links.forEach(link => {
        // Create link element
        const a = document.createElement('a');
        a.href = link.url;
        a.className = 'link-card';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        
        // Add animation delay for staggered effect
        a.style.animation = `fadeInDown 0.6s ease-out ${delay}s backwards`;
        delay += 0.15; // Increment delay for next item

        // HTML Content
        a.innerHTML = `
            <div class="link-content">
                <i class="${link.icon} icon"></i>
                <span>${link.title}</span>
            </div>
            <i class="fa-solid fa-caret-right"></i>
        `;

        container.appendChild(a);
    });
});
