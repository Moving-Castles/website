import type { Column, MenuItem } from "./types";

export const PROJECT_COLUMNS: Column[] = [
    {
        title: "Title",
        name: 'title',
        key: 'title',
        width: '40%',
        hideOnMobile: false
    },
    {
        title: "Description",
        name: 'description',
        key: 'shortDescription',
        width: '40%',
        hideOnMobile: false
    },
    {
        title: "Active",
        name: 'active',
        key: 'active',
        width: '20%',
        hideOnMobile: true
    }
];

export const POST_COLUMNS: Column[] = [
    {
        title: "Title",
        name: 'title',
        key: 'title',
        width: '50%',
        hideOnMobile: false
    },
    {
        title: "Author(s)",
        name: 'authors',
        key: 'authors',
        width: '20%',
        hideOnMobile: false
    },
    {
        title: "Date",
        name: 'date',
        key: 'date',
        width: '15%',
        hideOnMobile: true
    },
    {
        title: 'Type',
        name: 'type',
        key: 'type',
        width: '15%',
        hideOnMobile: true
    }
];

export const SOCIAL_MEDIA: {
    [key: string]: string
} = {
    discord: 'https://discord.gg/USH976PyXJ',
    github: 'https://github.com/moving-castles',
    twitter: 'https://twitter.com/movingcastles_',
    arena: 'https://www.are.na/moving-castles'
};