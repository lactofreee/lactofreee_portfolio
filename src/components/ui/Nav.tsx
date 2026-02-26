'use client';

import { useState, useEffect } from 'react';
import useScrollDirection from '@/src/hooks/useScrollDirection';

interface NavLink {
  name: string;
  url: string;
}

const NAV_LINKS: NavLink[] = [
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Projects', url: '#projects' },
  { name: 'Contact', url: '#contact' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  // 스크롤 여부 감지
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 열릴 때 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  // 최상단에서는 방향과 무관하게 항상 표시
  const isHidden = scrollDirection === 'down' && isScrolled;

  return (
    <>
      {/* ── 헤더 바 ─────────────────────────────────────────────── */}
      <header
        className={[
          'fixed top-0 w-full z-50 px-6 md:px-10 lg:px-24',
          'transition-transform duration-300',
          isScrolled ? 'bg-navy shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]' : '',
          isHidden ? '-translate-y-full' : 'translate-y-0',
        ].join(' ')}
      >
        <nav className="flex items-center justify-between h-16 md:h-20">

          {/* 로고 */}
          <a
            href="#"
            className="font-mono text-xl font-bold text-green hover:opacity-80 transition-opacity duration-200"
            aria-label="홈으로 이동"
          >
            {'<CH />'}
          </a>

          {/* 데스크탑 링크 */}
          <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
            {NAV_LINKS.map(({ name, url }, i) => (
              <li key={url}>
                <a
                  href={url}
                  className="text-slate hover:text-green transition-colors duration-200"
                >
                  <span className="text-green mr-1">0{i + 1}.</span>
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green text-green px-4 py-2 rounded hover:bg-green-tint transition-colors duration-200"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* 햄버거 버튼 */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            data-testid="hamburger-button"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          >
            <span
              className={[
                'block w-6 h-[2px] bg-green transition-transform duration-300 origin-center',
                isMenuOpen ? 'translate-y-[7px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-6 h-[2px] bg-green transition-opacity duration-300',
                isMenuOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'block w-6 h-[2px] bg-green transition-transform duration-300 origin-center',
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : '',
              ].join(' ')}
            />
          </button>

        </nav>
      </header>

      {/* ── 모바일 오버레이 ───────────────────────────────────────── */}
      <div
        onClick={() => setIsMenuOpen(false)}
        data-testid="mobile-overlay"
        className={[
          'fixed inset-0 z-30 bg-black/50 md:hidden',
          'transition-opacity duration-300',
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      />

      {/* ── 모바일 드로어 ────────────────────────────────────────── */}
      <aside
        data-testid="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={[
          'fixed top-0 right-0 z-40 h-full w-[min(75vw,400px)]',
          'bg-light-navy flex flex-col items-center justify-center',
          'md:hidden transition-transform duration-300',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <ul className="flex flex-col items-center gap-10 font-mono">
          {NAV_LINKS.map(({ name, url }, i) => (
            <li key={url}>
              <a
                href={url}
                onClick={handleLinkClick}
                className="flex flex-col items-center gap-1 text-lightest-slate hover:text-green transition-colors duration-200"
              >
                <span className="text-green text-xs">0{i + 1}.</span>
                <span className="text-lg">{name}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green text-green px-8 py-3 rounded hover:bg-green-tint transition-colors duration-200"
            >
              Resume
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
