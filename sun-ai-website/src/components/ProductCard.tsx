import Link from "next/link";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  bgGradient: string;
  textColor?: string;
  href: string;
  icon?: string;
  dark?: boolean;
}

export default function ProductCard({
  title,
  subtitle,
  description,
  bgGradient,
  href,
  icon,
  dark = true,
}: ProductCardProps) {
  return (
    <div
      className={`product-card relative overflow-hidden rounded-3xl ${
        dark ? "text-white" : "text-[#1d1d1f]"
      }`}
      style={{ background: bgGradient }}
    >
      <div className="relative z-10 p-10 md:p-12 min-h-[500px] flex flex-col">
        <div>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h3>
          <p
            className={`text-xl md:text-2xl mt-1 font-medium ${
              dark ? "text-white/70" : "text-[#1d1d1f]/70"
            }`}
          >
            {subtitle}
          </p>
          <p
            className={`text-base mt-3 max-w-sm ${
              dark ? "text-white/50" : "text-[#1d1d1f]/50"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="mt-6 flex gap-4">
          <Link href={href} className="btn-primary text-sm">
            Learn more
          </Link>
          <Link href="/store" className="btn-secondary text-sm">
            Buy
          </Link>
        </div>
        {/* Icon / Visual */}
        <div className="flex-1 flex items-center justify-center mt-8">
          {icon && <span className="text-8xl md:text-9xl opacity-30">{icon}</span>}
        </div>
      </div>
    </div>
  );
}
