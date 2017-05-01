export interface Course {
    id: number;
    name: string;
    date: string;
    length: number;
    description?: string;
    authors?: any,
    isTopRated: boolean;
}
