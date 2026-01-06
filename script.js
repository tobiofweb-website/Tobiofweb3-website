// Lightweight demo script: renders a mock X/Twitter-style feed.
// Replace this with a real X/Twitter embed or API-driven widget when available.

const mockPosts = [
  {author:'tobiofweb3', handle:'@tobiofweb', time:'2h', text:'GM fam! Launch collab tonight — bring the vibes! 🚀😎 #web3 #community'},
  {author:'tobiprime2025', handle:'@tobiprime2025', time:'1d', text:'Founder update: onboarding 50 new builders this week. Big energy 🔥'},
  {author:'aurumaur_', handle:'@aurumaur_', time:'3d', text:'Co-founder thoughts: token gating + IRL events = stronger retention. Let’s test.'},
  {author:'verse_Of_VOXEL', handle:'@verse_Of_VOXEL', time:'5d', text:'Collab drop incoming — voxel wearables and community quests. Stay tuned! 🎮✨'}
];

function renderFeed(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = '';
  mockPosts.forEach(p => {
    const post = document.createElement('article');
    post.className = 'post';

    post.innerHTML = `
      <div class="post-header">
        <div class="post-avatar" aria-hidden></div>
        <div>
          <div class="post-author">${escapeHtml(p.author)}</div>
          <div class="post-handle">${escapeHtml(p.handle)} · ${escapeHtml(p.time)}</div>
        </div>
      </div>
      <div class="post-body">${escapeHtml(p.text)}</div>
      <div class="post-meta">✨ Community vibes · 💬 Retweets & highlights</div>
    `;

    container.appendChild(post);
  });
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]);
}

// Initialize feed
document.addEventListener('DOMContentLoaded', () => renderFeed('feedGrid'));

// If you want live embeds, replace the feedGrid contents with X widgets
// Example: use the X (Twitter) embedded timeline or the official widget script.

// Newsletter form handling: POST /subscribe
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletterForm');
  const msg = document.getElementById('newsletterMsg');
  if(!form) return;

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput && emailInput.value && emailInput.value.trim();
    if(!email){ msg.textContent = 'Please enter a valid email.'; return; }

    try{
      const res = await fetch('/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if(res.ok && data.ok){
        msg.style.color = '#7bffb0';
        msg.textContent = 'Thanks — you are subscribed!';
        emailInput.value = '';
      } else {
        msg.style.color = '#ff9aa2';
        msg.textContent = data && data.error ? data.error : 'Signup failed.';
      }
    }catch(e){
      msg.style.color = '#ff9aa2';
      msg.textContent = 'Network error — try again later.';
    }
  });
});
