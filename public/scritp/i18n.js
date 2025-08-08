// Simple i18n for ES/EN using data-i18n attributes
(function () {
  const DEFAULT_LANG = 'es';
  const supported = ['es', 'en'];

  const dict = {
    es: {
      nav: {
        about: 'Sobre mí',
        skills: 'Habilidades',
        experience: 'Experiencia',
        projects: 'Proyectos',
        education: 'Educación',
        contact: 'Contacto'
      },
      hero: {
        quote: 'Si puedes imaginarlo, puedes programarlo',
        role: 'Ingeniero de Sistemas',
        description: 'Innovando con fe y convicción, agradecido por las habilidades que Dios me ha dado',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        cv: 'Mi CV'
      },
      about: {
        title: 'Sobre mí',
        paragraph1: 'Tengo 24 años, soy egresado de la carrrera de Ingeniería de Sistemas, entusiasta por el desarrollo de software, que disfruta enfrentando nuevos desafíos y aprendiendo constantemente. Mi objetivo es aplicar mis habilidades técnicas y mi capacidad analítica para resolver desafíos tecnológicos y resolver soluciones innovadoras en un entorno tecnológico en constante evolución. Me caracterizo por mi compromiso con el aprendizaje continuo y la resolución eficiente de problemas, trabajo de manera colaborativa en equipos multidisciplinarios, adaptándome rápidamente a nuevos entornos y metodologías de trabajo.',
        softSkillsTitle: 'Entre mis habilidades blandas destacan:',
        soft: {
          teamwork: 'Trabajo en equipo',
          creativity: 'Creatividad e Innovación',
          problemSolving: 'Resolución de problemas',
          leadership: 'Habilidades de liderazgo',
          continuousLearning: 'Aprendizaje continuo',
          communication: 'Comunicación Asertiva',
          adaptability: 'Adaptabilidad y Flexibilidad'
        }
      },
      skills: { title: 'Habilidades' },
      experience: {
        title: 'Experiencia Laboral',
        items: {
          hm: {
            title: 'Desarrollador Full Stack - H&M Inmobiliaria y Construcción',
            date: 'H&M Inmobiliaria y Construcción | Julio 2025 - Agosto 2025',
            p1: 'Desarrollé una landing page moderna y responsiva para la empresa inmobiliaria, enfocada en la venta de lotes residenciales en la Urbanización El Bonsai en Lambayeque.',
            p2: 'Implementé funcionalidades como formularios de contacto, galería de proyectos, integración con Google Maps, y diseño optimizado para conversión de ventas, destacando las ventajas estratégicas de ubicación y facilidades de pago.'
          },
          unmsm: {
            title: 'Desarrollador Full Stack - Universidad Nacional Mayor de San Marcos',
            date: 'Universidad Nacional Mayor de San Marcos | Abril 2025 - Junio 2025',
            p1: 'Desarrollé un Sistema Web de Balanced Scorecard para la medición de Indicadores de Calidad, implementando un sistema de roles robusto con 4 niveles de acceso: Administrador, Calificador, Asignador y Usuario.',
            p2: 'El sistema permite la gestión integral de indicadores de calidad, reportes en tiempo real y seguimiento de evaluaciones, optimizando los procesos de medición y control de calidad institucional.'
          },
          oti: {
            title: 'Desarrollador Full Stack - Oficina de Tecnologías de la Información',
            date: 'Universidad Nacional Pedro Ruiz Gallo | Junio 2024 - Marzo 2025',
            p1: 'Prácticante Pre-Profesional de un Sistema de Gestión de Documentos y un Sistema de Consultas de Interoperabilidad Digital del Estado - UNPRG, utilizando tecnologías como PHP para Backend y Laravel para Frontend.',
            p2: 'Diseñé y desarrollé las funcionalidades del sistema, con la generación de certificaciones, diplomas, constancias para la universidad junto con el control de la respectiva Base de Datos.'
          },
          manayay: {
            title: 'Desarrollador Full Stack - Comercial Manayay',
            date: 'Junio 2022 - Octubre 2022',
            p1: 'Lideré el desarrollo e implementación de un Sistema de Gestión Comercial, utilizando tecnologías como Java y MariaDB.',
            p2: 'Diseñé y desarrollé todas las funcionalidades del sistema, incluyendo gestión de almacenamiento, consultas, anulación de ventas y generación de reportes. Control de la Base de datos como hacer el respaldo y restauración desde el mismo software.'
          },
          tecnitel: {
            title: 'Desarrollador Full Stack - Grupo Tecnitel',
            date: 'Enero 2022 - Abril 2022',
            p1: 'Lideré el desarrollo e implementación de un Sistema de Gestión de Inventarios, utilizando tecnologías como Java y MySQL.',
            p2: 'Diseñé e implementé una interfaz intuitiva y eficiente para gestionar el inventario de la empresa, permitiendo la entrada y salida de productos, así como la realización de consultas y reportes.'
          }
        }
      },
      projects: {
        title: 'Proyectos Personales',
        items: {
          sisventas: {
            title: 'Sistema de Gestión Comercial',
            desc: 'Gestión de ventas, inventario, proveedores, clientes, roles y reportes para cualquier tipo de rubro de una empresa.',
            modal: {
              desc: 'Un sistema integral para la gestión de ventas, inventario y generación de reportes, diseñado para optimizar las operaciones de pequeñas y medianas empresas.',
              f1: 'Gestión de ventas e inventario',
              f2: 'Generación de reportes detallados',
              f3: 'Roles de administrador y vendedor',
              f4: 'Manejo de categorías y productos',
              f5: 'Seguimiento de clientes y proveedores',
              f6: 'Gráficos de ventas y ganancias'
            }
          },
          sislibrary: {
            title: 'Sistema de Gestión de Biblioteca',
            desc: 'Gestión de préstamos y devoluciones, catálogo de libros y roles de usuario.',
            modal: {
              desc: 'Una solución completa para la gestión de bibliotecas, que facilita el control de préstamos, devoluciones y el inventario de libros.',
              f1: 'Gestión de préstamos y devoluciones',
              f2: 'Catálogo completo de libros',
              f3: 'Roles: administrador, bibliotecario y prestamista',
              f4: 'Seguimiento de disponibilidad de libros',
              f5: 'Historial de préstamos por usuario',
              f6: 'Notificaciones de vencimientos'
            }
          },
          ecommerce: {
            title: 'E-commerce',
            modal: {
              desc: 'Plataforma completa de comercio electrónico desarrollada con tecnologías modernas que ofrece una experiencia de compra integral. El sistema incluye todas las funcionalidades esenciales de un e-commerce profesional, desde la gestión de productos hasta el seguimiento de pedidos.',
              f1: 'Pasarela de pagos integrada y segura',
              f2: 'Selección por categorías de productos',
              f3: 'Carrito de compras dinámico',
              f4: 'Envío a domicilio con seguimiento',
              f5: 'Recojo en tienda con notificaciones',
              f6: 'Seguimiento de pedidos en tiempo real',
              f7: 'Gestión de inventario automática',
              f8: 'Panel de administración completo',
              f9: 'Interfaz responsiva y moderna'
            }
          },
          pl: {
            sisventas: {
              title: 'Sistema de Ventas',
              desc: 'Gestión de ventas, inventario y reportes para pequeñas y medianas empresas.',
              modal: {
                desc: 'Un sistema integral para la gestión de ventas, inventario y generación de reportes, diseñado para optimizar las operaciones de pequeñas y medianas empresas.',
                f1: 'Gestión de ventas e inventario',
                f2: 'Generación de reportes detallados',
                f3: 'Roles de administrador y vendedor',
                f4: 'Manejo de categorías y productos',
                f5: 'Seguimiento de clientes y proveedores'
              }
            },
            sisdoc: {
              title: 'Sistema de Gestión de Documentos',
              desc: 'Control y organización eficiente de documentos con versiones.',
              modal: {
                desc: 'Un sistema eficiente para la creación, almacenamiento y control de versiones de documentos oficiales en organizaciones.',
                f1: 'Control de versiones de documentos',
                f2: 'Organización por asuntos y facultades',
                f3: 'Búsqueda avanzada de documentos',
                f4: 'Gestión de permisos de acceso',
                f5: 'Historial de modificaciones',
                f6: 'Generación de codigo QR en los documentos'
              }
            },
            sispide: {
              title: 'Sistema de Consultas de Interoperabilidad Digital del Estado - UNPRG',
              desc: 'Control de Usuarios, Control de Consultas, Gráfico de Consultas Realizadas.',
              modal: {
                desc: 'Un sistema eficiente para la creación de usuarios para las consultas hacia proveedores externos, registro y almacenamiento de consultas, además de un dashboard interactivo',
                f1: 'Control de Usuarios',
                f2: 'Organización por proveedores',
                f3: 'Búsqueda avanzada de consultas por fechas',
                f4: 'Gestión de permisos de acceso',
                f5: 'Historial de consultas',
                f6: 'Generación de gráficos'
              }
            },
            bonsai: {
              title: 'Landing Page - Urbanización El Bonsai',
              desc: 'Landing page moderna, diseño responsivo con formulario de contacto y descripción de la urbanización.',
              modal: {
                desc: 'Una landing page moderna y responsiva diseñada para H&M Inmobiliaria, enfocada en la venta de lotes residenciales en la Urbanización El Bonsai en Lambayeque.',
                f1: 'Diseño moderno y responsivo',
                f2: 'Ubicación estratégica (cerca de UNPRG, Hospital Belén)',
                f3: 'Seguridad garantizada (vigilancia 24/7)',
                f4: 'Documentación legal 100% en regla (inscrito en SUNARP)',
                f5: 'Facilidades de pago y financiamiento directo',
                f6: 'Galería de imágenes y testimonios de familias satisfechas',
                f7: 'Integración con Google Maps para fácil ubicación',
                link: 'Urbanización El Bonsai'
              }
            },
            bsc: {
              title: 'Sistema Web de Balanced Scorecard',
              desc: 'Sistema web para la medición de Indicadores de Calidad con 4 roles de usuario y gestión integral de indicadores.',
              modal: {
                desc: 'Sistema web desarrollado para la Universidad Nacional Mayor de San Marcos (UNMSM) para la medición y gestión de Indicadores de Calidad mediante un Balanced Scorecard. El sistema cuenta con un sistema de roles robusto que permite una gestión integral de indicadores de calidad.',
                f0: 'Sistema de roles y permisos avanzado',
                f1: 'Administrador: Control total del sistema, gestión de usuarios, reportes, seguimiento y configuración general',
                f2: 'Calificador: Evalúa y califica a las personas que tienen indicadores asignados',
                f3: 'Asignador: Asigna indicadores específicos a las personas del sistema',
                f4: 'Usuario: Recibe indicadores asignados y debe realizar archivos para su revisión, aprobación, modificación o rechazo por parte del calificador',
                f5: 'Gestión integral de indicadores de calidad',
                f6: 'Reportes y seguimiento en tiempo real',
                f7: 'Interfaz intuitiva y responsiva'
              }
            }
          },
          workTitle: 'Proyectos Laborales'
        }
      },
      education: {
        title: 'Estudios',
        udemy: 'Udemy',
        uni: 'Universidad Nacional de Ingenieria',
        dates: {
          java: 'Enero 2021 - Setiembre 2021',
          sql: 'Marzo 2022 - Agosto 2022',
          git: 'Mayo 2023 - Agosto 2023',
          web: 'Diciembre 2023 - Junio 2024',
          reactnode: 'Julio 2024 - Setiembre 2024',
          scrum: 'Octubre 2024 - Diciembre 2024',
          cloud: 'Octubre 2024 - Noviembre 2024'
        },
        unprg: {
          name: 'Universidad Nacional Pedro Ruiz Gallo',
          career: 'Ingeniería de Sistemas',
          status: 'Estudiante 10mo Ciclo',
          rank: '4to Puesto'
        }
      },
      contact: {
        title: 'Contacto',
        infoTitle: 'Información de Contacto',
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
        locationValue: 'Lambayeque, Perú',
        availability: 'Disponibilidad',
        availabilityValue: 'Lunes - Viernes: 9:00 AM - 6:00 PM',
        socialTitle: 'Redes Sociales',
        whatsapp: 'WhatsApp',
        cta: 'Contactame',
        formTitle: 'Envíame un mensaje',
        form: {
          name: 'Nombre completo *',
          namePlaceholder: 'Tu nombre completo',
          email: 'Email *',
          emailPlaceholder: 'tu@email.com',
          subject: 'Asunto *',
          subjectPlaceholder: '¿En qué puedo ayudarte?',
          message: 'Mensaje *',
          messagePlaceholder: 'Describe tu proyecto o consulta...',
          send: 'Enviar Mensaje',
          success: 'Muchas gracias por querer ponerte en contacto, te responderé en menos de 24 horas.'
        }
      },
      footer: {
        copyright: '© 2025 Manuel Barturen. Todos los derechos reservados.'
      },
      whatsapp: {
        interest: 'Hola :D, Me interesa tu proyecto',
        contactTemplate: (name, email, subject, message) => `Hola, soy ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`
      }
    },
    en: {
      nav: {
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        education: 'Education',
        contact: 'Contact'
      },
      hero: {
        quote: 'If you can imagine it, you can code it',
        role: 'Systems Engineer',
        description: 'Innovating with faith and conviction, grateful for the skills God has given me',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        cv: 'My Resume'
      },
      about: {
        title: 'About me',
        paragraph1: 'I am 24 years old, a Systems Engineering graduate passionate about software development. I enjoy facing new challenges and learning continuously. My goal is to apply my technical skills and analytical ability to solve technological challenges and deliver innovative solutions in a constantly evolving environment. I am committed to continuous learning and efficient problem-solving, working collaboratively in multidisciplinary teams and adapting quickly to new environments and methodologies.',
        softSkillsTitle: 'My soft skills include:',
        soft: {
          teamwork: 'Teamwork',
          creativity: 'Creativity and Innovation',
          problemSolving: 'Problem Solving',
          leadership: 'Leadership',
          continuousLearning: 'Continuous Learning',
          communication: 'Assertive Communication',
          adaptability: 'Adaptability and Flexibility'
        }
      },
      skills: { title: 'Skills' },
      experience: {
        title: 'Work Experience',
        items: {
          hm: {
            title: 'Full Stack Developer - H&M Real Estate and Construction',
            date: 'H&M Real Estate and Construction | July 2025 - August 2025',
            p1: 'Developed a modern and responsive landing page focused on selling residential lots at Urbanización El Bonsai in Lambayeque.',
            p2: 'Implemented features like contact forms, project gallery, Google Maps integration, and conversion-optimized design highlighting strategic location and payment plans.'
          },
          unmsm: {
            title: 'Full Stack Developer - National University of San Marcos',
            date: 'National University of San Marcos | April 2025 - June 2025',
            p1: 'Built a Balanced Scorecard Web System for Quality Indicators measurement, implementing a robust role system with 4 access levels: Administrator, Qualifier, Assigner and User.',
            p2: 'The system enables integral management of quality indicators, real-time reports and evaluation tracking, optimizing measurement and quality control processes.'
          },
          oti: {
            title: 'Full Stack Developer - IT Office',
            date: 'Pedro Ruiz Gallo National University | June 2024 - March 2025',
            p1: 'Pre-professional trainee for a Document Management System and a Digital Interoperability Queries System - UNPRG, using PHP for Backend and Laravel for Frontend.',
            p2: 'Designed and developed system features, generating certifications, diplomas, and records, along with database management.'
          },
          manayay: {
            title: 'Full Stack Developer - Comercial Manayay',
            date: 'June 2022 - October 2022',
            p1: 'Led development and implementation of a Commercial Management System using Java and MariaDB.',
            p2: 'Designed and developed all system features including storage management, queries, sales annulment and report generation. Database backup and restore from within the software.'
          },
          tecnitel: {
            title: 'Full Stack Developer - Grupo Tecnitel',
            date: 'January 2022 - April 2022',
            p1: 'Led development and implementation of an Inventory Management System using Java and MySQL.',
            p2: 'Designed and implemented an intuitive and efficient interface to manage company inventory, allowing product in/out and running queries and reports.'
          }
        }
      },
      projects: {
        title: 'Personal Projects',
        items: {
          sisventas: {
            title: 'Commercial Management System',
            desc: 'Sales, inventory, suppliers, customers, roles, and reports management for any business type.',
            modal: {
              desc: 'An integral system for managing sales, inventory, and reporting, designed to optimize operations for small and medium-sized businesses.',
              f1: 'Sales and inventory management',
              f2: 'Detailed reports generation',
              f3: 'Administrator and seller roles',
              f4: 'Categories and products management',
              f5: 'Customers and suppliers tracking',
              f6: 'Sales and profit charts'
            }
          },
          sislibrary: {
            title: 'Library Management System',
            desc: 'Loans and returns management, books catalog, and user roles.',
            modal: {
              desc: 'A complete solution for library management that facilitates the control of loans, returns, and book inventory.',
              f1: 'Loans and returns management',
              f2: 'Complete book catalog',
              f3: 'Roles: administrator, librarian, and borrower',
              f4: 'Book availability tracking',
              f5: 'User loan history',
              f6: 'Due date notifications'
            }
          },
          ecommerce: {
            title: 'E-commerce',
            modal: {
              desc: 'Complete e-commerce platform built with modern technologies delivering an end-to-end shopping experience. It includes all essential features from product management to order tracking.',
              f1: 'Integrated and secure payment gateway',
              f2: 'Product category selection',
              f3: 'Dynamic shopping cart',
              f4: 'Home delivery with tracking',
              f5: 'In-store pickup with notifications',
              f6: 'Real-time order tracking',
              f7: 'Automatic inventory management',
              f8: 'Full admin panel',
              f9: 'Modern responsive interface'
            }
          },
          pl: {
            sisventas: {
              title: 'Sales System',
              desc: 'Sales, inventory and reporting for small and medium businesses.',
              modal: {
                desc: 'An integral system for sales, inventory and reporting, designed to optimize operations for SMBs.',
                f1: 'Sales and inventory management',
                f2: 'Detailed reports',
                f3: 'Administrator and seller roles',
                f4: 'Category and product management',
                f5: 'Customer and supplier tracking'
              }
            },
            sisdoc: {
              title: 'Document Management System',
              desc: 'Efficient document control and organization with versioning.',
              modal: {
                desc: 'An efficient system for creating, storing and version controlling official documents.',
                f1: 'Document version control',
                f2: 'Organization by topics and departments',
                f3: 'Advanced document search',
                f4: 'Access permissions management',
                f5: 'Change history',
                f6: 'QR code generation in documents'
              }
            },
            sispide: {
              title: 'Digital Interoperability Queries System - UNPRG',
              desc: 'User management, queries management, charts of performed queries.',
              modal: {
                desc: 'Efficient system for creating users to perform queries to external providers, with query logging and storage, plus an interactive dashboard.',
                f1: 'User management',
                f2: 'Organization by providers',
                f3: 'Advanced date-based query search',
                f4: 'Access permissions management',
                f5: 'Query history',
                f6: 'Charts generation'
              }
            },
            bonsai: {
              title: 'Landing Page - El Bonsai Urbanization',
              desc: 'Modern landing page, responsive design with contact form and urbanization description.',
              modal: {
                desc: 'A modern and responsive landing page for H&M Real Estate, focused on selling residential lots at Urbanización El Bonsai in Lambayeque.',
                f1: 'Modern and responsive design',
                f2: 'Strategic location (near UNPRG, Hospital Belén)',
                f3: 'Guaranteed security (24/7 surveillance)',
                f4: '100% legal documentation (SUNARP registered)',
                f5: 'Payment facilities and direct financing',
                f6: 'Image gallery and satisfied families testimonials',
                f7: 'Google Maps integration for easy location',
                link: 'El Bonsai Urbanization'
              }
            },
            bsc: {
              title: 'Balanced Scorecard Web System',
              desc: 'Web system for Quality Indicators with 4 user roles and integral management.',
              modal: {
                desc: 'Web system developed for UNMSM to measure and manage Quality Indicators using a Balanced Scorecard. It includes a robust role system enabling integral management of quality indicators.',
                f0: 'Advanced roles and permissions system',
                f1: 'Administrator: Full control, user management, reports, tracking and configuration',
                f2: 'Qualifier: Evaluates and scores users with assigned indicators',
                f3: 'Assigner: Assigns specific indicators to users',
                f4: 'User: Receives indicators and submits files for review, approval, modification or rejection',
                f5: 'Integral quality indicators management',
                f6: 'Real-time reports and tracking',
                f7: 'Intuitive and responsive interface'
              }
            }
          },
          workTitle: 'Work Projects'
        }
      },
      education: {
        title: 'Education',
        udemy: 'Udemy',
        dates: {
          java: 'January 2021 - September 2021',
          sql: 'March 2022 - August 2022',
          git: 'May 2023 - August 2023',
          web: 'December 2023 - June 2024',
          reactnode: 'July 2024 - September 2024',
          scrum: 'October 2024 - December 2024',
          cloud: 'October 2024 - November 2024'
        },
        uni: 'National University of Engineering',
        unprg: {
          name: 'Pedro Ruiz Gallo National University',
          career: 'Systems Engineering',
          status: '10th cycle student',
          rank: '4th place'
        }
      },
      contact: {
        title: 'Contact',
        infoTitle: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Lambayeque, Peru',
        availability: 'Availability',
        availabilityValue: 'Monday - Friday: 9:00 AM - 6:00 PM',
        socialTitle: 'Social Networks',
        whatsapp: 'WhatsApp',
        cta: 'Contact me',
        formTitle: 'Send me a message',
        form: {
          name: 'Full name *',
          namePlaceholder: 'Your full name',
          email: 'Email *',
          emailPlaceholder: 'your@email.com',
          subject: 'Subject *',
          subjectPlaceholder: 'How can I help you?',
          message: 'Message *',
          messagePlaceholder: 'Describe your project or question...',
          send: 'Send Message',
          success: 'Thanks for reaching out! I will reply within 24 hours.'
        }
      },
      footer: {
        copyright: '© 2025 Manuel Barturen. All rights reserved.'
      },
      whatsapp: {
        interest: 'Hi :D, I am interested in your project',
        contactTemplate: (name, email, subject, message) => `Hi, I am ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
      }
    }
  };

  function getSavedLang() {
    const ls = localStorage.getItem('lang');
    if (ls && supported.includes(ls)) return ls;
    const htmlLang = document.documentElement.lang;
    if (htmlLang && supported.includes(htmlLang)) return htmlLang;
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!supported.includes(lang)) lang = DEFAULT_LANG;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }

  function translatePlaceholders(root, langObj) {
    root.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = resolveKey(langObj, key);
      if (typeof value === 'string') {
        el.setAttribute('placeholder', value);
      }
    });
  }

  function resolveKey(obj, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  function applyLang(lang) {
    const langObj = dict[lang] || dict[DEFAULT_LANG];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = resolveKey(langObj, key);
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });
    translatePlaceholders(document, langObj);
  }

  function initSelector(lang) {
    const sel = document.getElementById('languageSelect');
    if (!sel) return;
    sel.value = lang;
    sel.addEventListener('change', () => {
      const chosen = sel.value;
      setLang(chosen);
      applyLang(chosen);
    });
  }

  // Expose helpers for other scripts
  window.__i18n__ = {
    t(key) {
      const lang = getSavedLang();
      const val = resolveKey(dict[lang] || dict[DEFAULT_LANG], key);
      return typeof val === 'string' ? val : '';
    },
    tFormat(key, ...args) {
      const lang = getSavedLang();
      const val = resolveKey(dict[lang] || dict[DEFAULT_LANG], key);
      if (typeof val === 'function') return val(...args);
      return '';
    },
    getLang: getSavedLang
  };

  // Init safe for scripts loaded at end of body
  function initI18n() {
    const lang = getSavedLang();
    setLang(lang);
    initSelector(lang);
    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();


