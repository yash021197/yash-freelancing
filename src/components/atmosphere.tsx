export function Atmosphere({ className = "" }: { className?: string }) {
  return <div className={`atmosphere ${className}`} aria-hidden="true"><i className="atmosphere-grid" /><i className="atmosphere-orb one" /><i className="atmosphere-orb two" /><i className="atmosphere-arc" /></div>;
}
