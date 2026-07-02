// Free hit counter (hits.sh) — increments once per page load. The key below is a
// stable identifier, independent of hosting domain, so it keeps counting even if
// the site later moves to a custom domain.
const COUNTER_KEY = 'niledex.dev/portfolio';
const BADGE_URL = `https://hits.sh/${COUNTER_KEY}.svg?style=flat-square&label=views&color=000000&labelColor=000000`;

export default function ViewCounter() {
  return (
    <div className="inline-flex items-center glass-pill px-3 py-1.5">
      <img src={BADGE_URL} alt="Page view count" className="h-4" />
    </div>
  );
}
