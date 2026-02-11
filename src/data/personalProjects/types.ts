export interface IPersonalProjectsProps {
    id: string;
    title: string;
    type: string;
    summary: string;
    thumbnail: string;
    skills: {
        type: string;
        skill: string[];
    };
    overview: string[];
    features?: {
        title: string;
        desc: string[];
    };
    period?: string;
    links?: {
        github?: string;
        demo?: string;
    };
    role?: string;
}
