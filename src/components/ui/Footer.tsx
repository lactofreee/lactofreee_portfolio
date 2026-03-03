export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 py-6 font-mono text-xs text-slate">
      <p className="transition-colors duration-200 hover:text-green hover:-translate-y-[3px]">
        Designed &amp; Built by 홍길동
      </p>
      <a
        href="https://brittanychiang.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200 hover:text-green hover:-translate-y-[3px]"
      >
        Inspired by Brittany Chiang
      </a>
    </footer>
  );
}
