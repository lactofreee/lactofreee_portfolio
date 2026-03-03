const EMAIL = 'hello@example.com';

export default function EmailLink() {
  return (
    <div className="hidden md:flex fixed right-8 bottom-0 flex-col items-center gap-5 z-10">
      <a
        href={`mailto:${EMAIL}`}
        className={[
          'font-mono text-xs tracking-widest text-slate',
          '[writing-mode:vertical-rl]',
          'hover:text-green hover:-translate-y-[3px]',
          'transition-colors duration-200',
          'opacity-0 animate-fade-in-up [animation-delay:100ms]',
        ].join(' ')}
      >
        {EMAIL}
      </a>
      <span
        className={[
          'block w-px h-24 bg-slate',
          'opacity-0 animate-fade-in-up [animation-delay:200ms]',
        ].join(' ')}
      />
    </div>
  );
}
