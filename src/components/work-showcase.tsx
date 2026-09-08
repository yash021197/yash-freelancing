"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Arrow } from "./icons";
import { projects, type Project } from "@/data/projects";

const filters = ["All", "Websites", "Web Applications", "E-commerce", "Software"] as const;
type Filter = (typeof filters)[number];

function matchesFilter(project: Project, filter: Filter) {
  if (filter === "All") return true;
  if (filter === "Websites") return project.category === "Website";
  if (filter === "Software") return project.category === "Software";
  return project.category === filter;
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <article className={featured ? "work-featured" : "work-card"}>
    <Link href={`/projects/${project.slug}`} className="work-image-link" aria-label={`View ${project.title} case study`}>
      <div className="work-image"><Image src={project.image} alt={project.imageAlt} fill sizes={featured ? "(max-width: 800px) 100vw, 1200px" : "(max-width: 800px) 100vw, 50vw"} priority={featured} /></div>
      <span className="image-overlay">View project <Arrow /></span>
    </Link>
    <div className="work-details"><div className="work-labels"><span>{project.type}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><Link href={`/projects/${project.slug}`} className="project-link">View project <Arrow /></Link></div>
  </article>;
}

export function WorkShowcase() {
  const [filter, setFilter] = useState<Filter>("All");
  const featured = projects.find((project) => project.featured);
  const visibleProjects = useMemo(() => projects.filter((project) => !project.featured && matchesFilter(project, filter)), [filter]);
  return <section id="work" className="portfolio-work"><div className="portfolio-head"><div><span className="kicker">Selected work</span><h2>Projects I&apos;m proud <em>of.</em></h2><p>A selection of websites, applications, and digital experiences I&apos;ve designed and built.</p></div><div className="work-filters" aria-label="Filter projects">{filters.map((item) => <button key={item} type="button" className={filter === item ? "active" : ""} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div></div>
  {featured && (filter === "All" || matchesFilter(featured, filter)) && <ProjectCard project={featured} featured />}
  <div className="work-card-grid">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
  <div className="work-cta"><div><span className="kicker">Your project</span><h3>Have a project in mind?</h3><p>Let&apos;s build something useful for your business.</p></div><a href="#contact" className="button button-dark">Start a project <span>→</span></a></div></section>;
}
