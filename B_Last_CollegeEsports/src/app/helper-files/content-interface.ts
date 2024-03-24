

interface Content {
    id: number | null;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string[];
    selected?: boolean;
    hoverAffect?: boolean;
}

export default Content;