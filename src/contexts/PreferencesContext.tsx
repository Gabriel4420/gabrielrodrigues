import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "pt" | "en" | "es";
export type Theme = "light" | "dark";

const translations = {
  pt: {
    "nav.home": "Início", "nav.skills": "Habilidades", "nav.projects": "Projetos", "nav.contact": "Contato",
    "nav.primary": "Navegação principal", "nav.mobile": "Navegação móvel", "nav.open": "Abrir menu", "nav.close": "Fechar menu", "nav.conversation": "Iniciar uma conversa",
    "prefs.themeLight": "Ativar modo claro", "prefs.themeDark": "Ativar modo escuro", "prefs.language": "Selecionar idioma",
    "hero.available": "Disponível para novos projetos", "hero.role": "Desenvolvedor fullstack", "hero.intro": "Transformo ideias em produtos digitais rápidos, claros e bem construídos — do conceito à experiência final.",
    "hero.projects": "Conhecer projetos", "hero.talk": "Conversar sobre uma ideia", "hero.social": "Redes e contato", "hero.explore": "Explorar",
    "skills.kicker": "Ferramentas de trabalho", "skills.title": "Tecnologias que movem cada entrega", "skills.controls": "Controles das tecnologias", "skills.previous": "Tecnologias anteriores", "skills.next": "Próximas tecnologias", "skills.label": "Tecnologias utilizadas", "skills.empty": "As tecnologias estão sendo carregadas. Tente novamente em instantes.",
    "projects.kicker": "Meus projetos", "projects.title": "Soluções que saíram do papel", "projects.controls": "Controles dos projetos", "projects.previous": "Projeto anterior", "projects.next": "Próximo projeto", "projects.label": "Projetos em destaque", "projects.empty": "Os projetos estão sendo carregados. Tente novamente em instantes.",
    "card.open": "Ver detalhes do projeto {title}", "card.preview": "Prévia do projeto {title}", "card.selected": "Projeto selecionado", "card.explore": "Explorar projeto",
    "contact.kicker": "Contato", "contact.title": "Vamos tomar um café e tirar sua ideia do papel?", "contact.intro": "Disponível para projetos freelance, oportunidades CLT e parcerias em produtos digitais com foco em performance, usabilidade e interfaces bem acabadas.",
    "contact.open": "Aberto para novas conversas", "contact.build": "Construo experiências web modernas, funcionais e pensadas para gerar resultado.", "contact.detail": "Se você precisa evoluir um produto, criar uma landing page, desenvolver uma aplicação ou validar uma ideia, envie uma mensagem com o contexto inicial.", "contact.email": "Enviar e-mail", "contact.reply": "Normalmente respondo com próximos passos e uma proposta de alinhamento.", "contact.role": "Desenvolvedor fullstack", "contact.stack": "React, Next.js, Node.js e interfaces com atenção a detalhe, clareza e manutenção.", "contact.top": "Voltar ao topo",
    "detail.all": "Todos os projetos", "detail.case": "Estudo de caso", "detail.fallback": "Produto digital desenvolvido sob medida.", "detail.live": "Ver projeto", "detail.code": "Ver código", "detail.overview": "Visão geral", "detail.idea": "A ideia por trás da entrega", "detail.descriptionEmpty": "A descrição detalhada deste projeto ainda está sendo preparada.", "detail.stackApplied": "Stack aplicada", "detail.technologies": "Tecnologias", "detail.stackEmpty": "Stack não informada.", "detail.inside": "Por dentro do produto", "detail.perspectives": "Outras perspectivas", "detail.similar": "Tem uma ideia parecida?", "detail.next": "Vamos construir a próxima.", "detail.start": "Iniciar conversa", "detail.back": "Voltar aos projetos",
  },
  en: {
    "nav.home": "Home", "nav.skills": "Skills", "nav.projects": "Projects", "nav.contact": "Contact", "nav.primary": "Main navigation", "nav.mobile": "Mobile navigation", "nav.open": "Open menu", "nav.close": "Close menu", "nav.conversation": "Start a conversation",
    "prefs.themeLight": "Switch to light mode", "prefs.themeDark": "Switch to dark mode", "prefs.language": "Select language",
    "hero.available": "Available for new projects", "hero.role": "Fullstack developer", "hero.intro": "I turn ideas into fast, clear and well-crafted digital products — from concept to final experience.", "hero.projects": "View projects", "hero.talk": "Discuss an idea", "hero.social": "Social links and contact", "hero.explore": "Explore",
    "skills.kicker": "Tools of the trade", "skills.title": "Technologies behind every delivery", "skills.controls": "Technology controls", "skills.previous": "Previous technologies", "skills.next": "Next technologies", "skills.label": "Technologies used", "skills.empty": "Technologies are loading. Please try again shortly.",
    "projects.kicker": "My projects", "projects.title": "Solutions brought to life", "projects.controls": "Project controls", "projects.previous": "Previous project", "projects.next": "Next project", "projects.label": "Featured projects", "projects.empty": "Projects are loading. Please try again shortly.",
    "card.open": "View details for {title}", "card.preview": "Preview of {title}", "card.selected": "Selected project", "card.explore": "Explore project",
    "contact.kicker": "Contact", "contact.title": "Shall we turn your idea into a real product?", "contact.intro": "Available for freelance work, full-time opportunities and digital product partnerships focused on performance, usability and polished interfaces.", "contact.open": "Open to new conversations", "contact.build": "I build modern, functional web experiences designed to deliver results.", "contact.detail": "If you need to evolve a product, create a landing page, develop an application or validate an idea, send me the initial context.", "contact.email": "Send email", "contact.reply": "I usually reply with next steps and a proposal for alignment.", "contact.role": "Fullstack developer", "contact.stack": "React, Next.js, Node.js and interfaces built with attention to detail, clarity and maintainability.", "contact.top": "Back to top",
    "detail.all": "All projects", "detail.case": "Case study", "detail.fallback": "A custom-built digital product.", "detail.live": "View project", "detail.code": "View code", "detail.overview": "Overview", "detail.idea": "The idea behind the delivery", "detail.descriptionEmpty": "The detailed project description is still being prepared.", "detail.stackApplied": "Applied stack", "detail.technologies": "Technologies", "detail.stackEmpty": "Stack not provided.", "detail.inside": "Inside the product", "detail.perspectives": "Other perspectives", "detail.similar": "Have a similar idea?", "detail.next": "Let’s build what comes next.", "detail.start": "Start a conversation", "detail.back": "Back to projects",
  },
  es: {
    "nav.home": "Inicio", "nav.skills": "Habilidades", "nav.projects": "Proyectos", "nav.contact": "Contacto", "nav.primary": "Navegación principal", "nav.mobile": "Navegación móvil", "nav.open": "Abrir menú", "nav.close": "Cerrar menú", "nav.conversation": "Iniciar una conversación",
    "prefs.themeLight": "Activar modo claro", "prefs.themeDark": "Activar modo oscuro", "prefs.language": "Seleccionar idioma",
    "hero.available": "Disponible para nuevos proyectos", "hero.role": "Desarrollador fullstack", "hero.intro": "Transformo ideas en productos digitales rápidos, claros y bien construidos — desde el concepto hasta la experiencia final.", "hero.projects": "Ver proyectos", "hero.talk": "Hablar sobre una idea", "hero.social": "Redes y contacto", "hero.explore": "Explorar",
    "skills.kicker": "Herramientas de trabajo", "skills.title": "Tecnologías detrás de cada entrega", "skills.controls": "Controles de tecnologías", "skills.previous": "Tecnologías anteriores", "skills.next": "Siguientes tecnologías", "skills.label": "Tecnologías utilizadas", "skills.empty": "Las tecnologías se están cargando. Inténtalo de nuevo en unos instantes.",
    "projects.kicker": "Mis proyectos", "projects.title": "Soluciones que cobraron vida", "projects.controls": "Controles de proyectos", "projects.previous": "Proyecto anterior", "projects.next": "Siguiente proyecto", "projects.label": "Proyectos destacados", "projects.empty": "Los proyectos se están cargando. Inténtalo de nuevo en unos instantes.",
    "card.open": "Ver detalles de {title}", "card.preview": "Vista previa de {title}", "card.selected": "Proyecto seleccionado", "card.explore": "Explorar proyecto",
    "contact.kicker": "Contacto", "contact.title": "¿Convertimos tu idea en un producto real?", "contact.intro": "Disponible para proyectos freelance, oportunidades de tiempo completo y alianzas en productos digitales con foco en rendimiento, usabilidad e interfaces bien acabadas.", "contact.open": "Abierto a nuevas conversaciones", "contact.build": "Construyo experiencias web modernas, funcionales y pensadas para generar resultados.", "contact.detail": "Si necesitas evolucionar un producto, crear una landing page, desarrollar una aplicación o validar una idea, envíame el contexto inicial.", "contact.email": "Enviar correo", "contact.reply": "Normalmente respondo con los próximos pasos y una propuesta de alineación.", "contact.role": "Desarrollador fullstack", "contact.stack": "React, Next.js, Node.js e interfaces creadas con atención al detalle, claridad y mantenimiento.", "contact.top": "Volver arriba",
    "detail.all": "Todos los proyectos", "detail.case": "Caso de estudio", "detail.fallback": "Producto digital desarrollado a medida.", "detail.live": "Ver proyecto", "detail.code": "Ver código", "detail.overview": "Visión general", "detail.idea": "La idea detrás de la entrega", "detail.descriptionEmpty": "La descripción detallada de este proyecto aún se está preparando.", "detail.stackApplied": "Stack aplicada", "detail.technologies": "Tecnologías", "detail.stackEmpty": "Stack no informada.", "detail.inside": "Dentro del producto", "detail.perspectives": "Otras perspectivas", "detail.similar": "¿Tienes una idea parecida?", "detail.next": "Construyamos la próxima.", "detail.start": "Iniciar conversación", "detail.back": "Volver a los proyectos",
  },
} as const;

type TranslationKey = keyof typeof translations.pt;
type Preferences = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: TranslationKey, values?: Record<string, string>) => string;
};

const PreferencesContext = createContext<Preferences | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const savedLocale = localStorage.getItem("portfolio-locale") as Locale | null;
      const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
      if (savedLocale && ["pt", "en", "es"].includes(savedLocale)) setLocale(savedLocale);
      setTheme(savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : locale;
    localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  const value = useMemo<Preferences>(() => ({
    locale,
    setLocale,
    theme,
    toggleTheme: () => setTheme((current) => current === "light" ? "dark" : "light"),
    t: (key, values) => Object.entries(values || {}).reduce((text, [name, replacement]) => text.replace(`{${name}}`, replacement), translations[locale][key] as string),
  }), [locale, theme]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences deve ser usado dentro de PreferencesProvider.");
  return context;
}
