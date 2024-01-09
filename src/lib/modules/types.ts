export type MenuItem = {
    name: string;
    href: string;
    hash: string;
};

type ContentSpan = {
    _type: string;
    marks: string[];
    text: string;
    _key: string;
};

type ContentBlock = {
    markDefs: any[];
    children: ContentSpan[];
    _type: string;
    style: string;
    _key: string;
};

type ContentEditor = {
    _type: string;
    content: ContentBlock[];
};

type Slug = {
    current: string;
    _type: string;
};

type ImageAsset = {
    _ref: string;
    _type: 'reference';
};

type Image = {
    _type: 'image';
    _key?: string;
    asset: ImageAsset;
};

export interface About {
    _type: 'about';
    _id: string;
    title: string;
    _createdAt: string;
    _updatedAt: string;
    content: ContentEditor;
    tagline: string;
    slug: Slug;
    _rev: string;
}

export interface Post {
    _type: 'post';
    _id: string;
    title: string;
    _createdAt: string;
    _updatedAt: string;
    content: ContentEditor;
    type: string;
    byline: ContentEditor;
    featuredImage?: Image;
    slug: Slug;
    playbackId: string | null;
    _rev: string;
    authors: string[];
    date?: string;
}

export interface Project {
    _type: 'project';
    _id: string;
    title: string;
    _createdAt: string;
    _updatedAt: string;
    content: ContentEditor;
    featuredImage: Image;
    slug: Slug;
    playbackId: string | null;
    _rev: string;
    archived: boolean;
    shortDescription: string;
}