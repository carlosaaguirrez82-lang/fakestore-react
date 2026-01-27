export interface NavItem {
    label: string;
    path: string;
}

export const NavItems: NavItem[] = [
    { label: 'Usuarios', path: '/users' },
    { label: 'Productos', path: '/products' },
    { label: 'Carrito', path: '/cart'},
];