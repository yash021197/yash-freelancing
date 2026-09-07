import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Arrow, Mark } from "@/components/icons";
import { projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { return params.then(({ slug }) => { const project = projects.find((item) => item.slug === slug); return project ? { title: project.title, description: project.description } : {}; }); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return <><header className="nav"><Link href="/" className="brand"><Mark /> YASH<span>STUDIO</span></Link><Link href="/#work" className="back">← Back to work</Link></header><main className="project-page">
    <div className="case-hero"><div><div className="work-labels"><span>{project.type}</span><span>{project.category}</span></div><h1>{project.title}</h1><p className="project-lead">{project.description}</p>{project.liveUrl && <a href={project.liveUrl} className="button button-dark">Live demo <span>↗</span></a>}</div><div className="case-hero-image"><Image src={project.image} alt={project.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 55vw" /></div></div>
    <div className="case-study"><aside><span>Overview</span><span>Challenge</span><span>Solution</span><span>Features</span></aside><div><section><h2>Overview</h2><p>{project.description}</p></section><section><h2>The challenge</h2><p>{project.problem}</p></section><section><h2>The solution</h2><p>{project.solution}</p></section><section><h2>Key features</h2><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section><section><h2>Technology</h2><div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section><section><h2>Project status</h2><p className="placeholder-note">{project.type} demonstrating the product, user experience, and technical approach. Replace or extend this section with genuine results when the project is delivered for a client.</p></section></div></div>
    <nav className="case-navigation" aria-label="More case studies"><Link href={`/projects/${previous.slug}`}><small>← Previous project</small><strong>{previous.title}</strong></Link><Link href={`/projects/${next.slug}`}><small>Next project →</small><strong>{next.title}</strong></Link></nav>
  </main><Footer /></>;
}
