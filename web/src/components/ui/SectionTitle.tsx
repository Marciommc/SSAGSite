interface SectionTitleProps {
    subtitle: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}

export default function SectionTitle({ subtitle, title, description, align = "center" }: SectionTitleProps) {
    return (
        <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
            <h2 className="text-base font-semibold leading-7 text-secondary">{subtitle}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-heading">
                {title}
            </p>
            {align === "center" && <div className="w-16 h-1 bg-secondary mx-auto mt-4 mb-6"></div>}
            {align === "left" && <div className="w-16 h-1 bg-secondary mt-4 mb-6"></div>}
            {description && (
                <p className={`mt-6 text-lg leading-8 text-gray-600 ${align === "center" ? "max-w-2xl mx-auto" : ""}`}>
                    {description}
                </p>
            )}
        </div>
    );
}
