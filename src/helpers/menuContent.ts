export const MenuRendering = () => {
  const menuRenderizado = [
    {
      menuItemName: "Home",
      url: "/",
    },
    {
      menuItemName: "Habilidades",
      url: "/#skills",
    },
    {
      menuItemName: "Projetos",
      url: "/#projects",
      hasDropdown: true,
    },
    {
      menuItemName: "Contato",
      url: "/#contact",
    },
  ];

  return menuRenderizado;
};
