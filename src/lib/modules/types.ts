export type MenuItem = {
    name: string;
    href: string;
    hash: string;
};

export type Column = {
    title: string;
    name: string;
    key: string;
    width: string;
    hideOnMobile: boolean;
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
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
    title: string;
    content: ContentEditor;
    tagline: string;
    slug: Slug;
}

export interface Post {
    _type: 'post';
    _id: string;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
    title: string;
    content: ContentEditor;
    type: string;
    byline: ContentEditor;
    featuredImage?: Image;
    media: any[];
    slug: Slug;
    playbackId: string | null;
    links: any[];
    authors: string[];
    date?: string;
    arenaChannel: string;
}

export interface Project {
    _type: 'project';
    _id: string;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
    title: string;
    shortDescription: string;
    active: boolean;
    githubRepo: string;
    arenaChannel: string;
    content: ContentEditor;
    featuredImage: Image;
    media: any[];
    links: any[];
    slug: Slug;
    playbackId: string | null;
}