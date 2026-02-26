const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Home() {
  return (
    <main className="pt-20">
      {SECTIONS.map(({ id, label }) => (
        <section
          key={id}
          id={id}
          className="flex items-center justify-center min-h-screen border-b border-lightest-navy"
        >
          <h2 className="font-mono text-4xl text-lightest-slate">
            <span className="text-green mr-3">{'{'}</span>
            {label}
            <span className="text-green ml-3">{'}'}</span>
          </h2>
        </section>
      ))}
    </main>
  );
}
