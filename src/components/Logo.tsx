export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="https://cdn.poehali.dev/projects/53605664-65a6-479c-91a0-802cd900a0e7/bucket/7f8ee3b3-9995-40b1-b08b-e15a07af3aa3.png"
        alt="Завод"
        className="h-12 w-auto object-contain"
      />
    </div>
  )
}