interface ServiceCardProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    items?: string[];
}

export default function ServiceCard({ title, description, icon, items }: ServiceCardProps) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-gray-100 flex flex-col h-full">
            {icon && <div className="text-secondary text-4xl mb-4">{icon}</div>}

            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>

            {description && (
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {description}
                </p>
            )}

            {items && items.length > 0 && (
                <ul className="space-y-2 mt-4">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                            <span className="text-secondary mr-2 mt-0.5">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
