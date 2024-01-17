import type { Column, MenuItem } from "./types";

export const MENU_ITEMS: MenuItem[] = [
    {
        name: 'Home',
        href: '/',
        hash: ''
    },
    {
        name: 'Projects',
        href: '/project',
        hash: '#projects'
    },
    {
        name: 'Writing',
        href: '/writing',
        hash: '#writings'
    },
    {
        name: 'Resources',
        href: '/resource',
        hash: '#resources'
    },
    {
        name: 'About',
        href: '/about',
        hash: '#about'
    }
];

export const PROJECT_COLUMNS: Column[] = [
    {
        title: "Title",
        name: 'title',
        key: 'title',
        width: '40%'
    },
    {
        title: "Description",
        name: 'description',
        key: 'shortDescription',
        width: '40%'
    },
    {
        title: "Active",
        name: 'active',
        key: 'active',
        width: '20%'
    }
];

export const POST_COLUMNS: Column[] = [
    {
        title: "Title",
        name: 'title',
        key: 'title',
        width: '50%'
    },
    {
        title: "Author(s)",
        name: 'authors',
        key: 'authors',
        width: '20%'
    },
    {
        title: "Date",
        name: 'date',
        key: 'date',
        width: '15%'
    },
    {
        title: 'Type',
        name: 'type',
        key: 'type',
        width: '15%'
    }
];