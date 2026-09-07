export function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span className={`arrow ${diagonal ? "diagonal" : ""}`} aria-hidden="true">→</span>; }
export function Mark() { return <span className="mark" aria-hidden="true"><i /><i /><i /></span>; }
