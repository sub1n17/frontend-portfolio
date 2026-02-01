export interface IPersonalProjectsProps {
    id: string;
    title: string;
    type: string;
    summary: string;
    thumbnail: string;
    techStack: string[];
    features: string[];
    highlights?: string[];
    period?: string;
    links?: {
        github?: string;
        demo?: string;
    };
    isFeatured?: boolean;
    role?: string;
}
