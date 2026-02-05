export interface NavItem {
    label: string;
    path: string;
    children?: NavItem[];
}

export const NavItems: NavItem[] = [
    { label: 'Usuarios', path: '/users' },
    { label: 'Productos', path: '/products',
        children: [
            { label: "Ropa Masculina", path: "men's clothing" },
            { label: "Ropa Femenina", path: "women's clothing" },
            { label: 'Joyería', path: "jewelery" },
            { label: 'Electrónica', path: "electronics" },
        ]
    },
];