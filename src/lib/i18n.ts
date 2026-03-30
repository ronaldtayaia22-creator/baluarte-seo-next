// =============================================
// Lightweight i18n system for Clínica Baluarte
// Full multilingual coverage
// =============================================

export type Locale = "es" | "en" | "eu" | "fr";

export const SUPPORTED_LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "eu", label: "Euskera", flag: "🏴" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

/** BCP-47 tag for Web Speech API / date-fns */
export const LOCALE_BCP47: Record<Locale, string> = {
  es: "es-ES",
  en: "en-GB",
  eu: "eu-ES",
  fr: "fr-FR",
};

type TranslationDict = Record<string, string>;

const es: TranslationDict = {
  // ── Nav ──
  "nav.services": "Servicios",
  "nav.contact": "Contacto",
  "nav.book": "Reserva tu Cita",
  "nav.myAccount": "Mi cuenta",
  "nav.logout": "Salir",
  "nav.panel": "Mi panel",

  // ── Hero ──
  "hero.tag": "Estética Integral Avanzada",
  "hero.subtitle": "Cuidamos tu piel y tu bienestar con técnicas avanzadas y un enfoque personalizado.",
  "hero.cta": "Reservar cita",
  "hero.explore": "Explorar tratamientos",

  // ── Footer ──
  "footer.schedule": "Horario",
  "footer.address": "Dirección",
  "footer.contact": "Contacto",
  "footer.rights": "© 2026 Clínica Baluarte. Todos los derechos reservados.",
  "footer.weekdays": "De Lunes a Viernes",
  "footer.privacy": "Política de Privacidad",
  "footer.terms": "Términos y Condiciones",
  "footer.cookies": "Política de Cookies",
  "footer.designedBy": "Diseñada por",

  // ── Cookie ──
  "cookie.title": "Tu privacidad es importante",
  "cookie.desc": "Utilizamos cookies esenciales para el funcionamiento del sitio. Las cookies analíticas y de marketing son opcionales.",
  "cookie.accept": "Aceptar todo",
  "cookie.reject": "Rechazar opcionales",
  "cookie.manage": "Gestionar preferencias",
  "cookie.save": "Guardar preferencias",
  "cookie.essential": "Esenciales (obligatorias)",
  "cookie.analytics": "Analíticas",
  "cookie.marketing": "Marketing",

  // ── Legal pages ──
  "privacy.title": "Política de Privacidad",
  "terms.title": "Términos y Condiciones",
  "cookies.title": "Política de Cookies",

  // ── Blog ──
  "blog.title": "Blog",
  "blog.readMore": "Leer más",
  "blog.defaultAuthor": "Clínica Baluarte",

  // ── Public pages ──
  "common.loading": "Cargando...",
  "pub.loadingServices": "Cargando servicios...",
  "pub.catalogue": "Catálogo",
  "pub.ourServices": "Nuestros Servicios",
  "pub.minutesShort": "min",
  "pub.serviceNotFound": "Servicio no encontrado",
  "pub.professionalNotFound": "Profesional no encontrado",
  "pub.locationNotFound": "Centro no encontrado",
  "pub.articleNotFound": "Artículo no encontrado",
  "pub.viewAllServices": "Ver todos los servicios",
  "pub.backToBlog": "Volver al blog",
  "pub.back": "Volver",
  "pub.schedule": "Horario",
  "pub.closed": "Cerrado",
  "pub.bookService": "Reservar este servicio",
  "pub.bookWith": "Reservar con {name}",
  "pub.bookIn": "Reservar en {name}",
  "pub.serviceSeoDesc": "Servicio de {name} en Clínica Baluarte Pamplona",
  "pub.professionalSeoDesc": "{name}, {role} en Clínica Baluarte Pamplona",
  "pub.locationSeoDesc": "Visita nuestro centro {name}. {address}",

  // ── Appointment action ──
  "cita.loading": "Procesando tu solicitud...",
  "cita.confirmedTitle": "¡Cita confirmada!",
  "cita.confirmedDesc": "Gracias por confirmar. Te esperamos mañana en Doixa.",
  "cita.cancelledTitle": "Cita cancelada",
  "cita.cancelledDesc": "Tu cita ha sido cancelada. Puedes reservar una nueva cuando quieras.",
  "cita.alreadyTitle": "Cita ya procesada",
  "cita.alreadyDesc": "Esta cita ya fue modificada previamente y no se puede cambiar de nuevo.",
  "cita.errorTitle": "Error",
  "cita.errorDesc": "No se pudo procesar la solicitud. El enlace puede ser inválido o haber expirado.",
  "cita.bookNew": "Reservar nueva cita",
  "cita.home": "Ir al inicio",

  // ── Settings / Export ──
  "settings.title": "Configuración",
  "export.csv": "Exportar CSV",
  "export.excel": "Exportar Excel",
  "export.pdf": "Exportar PDF",

  // ── Contact page ──
  "contact.tag": "Hablemos",
  "contact.title": "Estamos",
  "contact.titleAccent": "cerca",
  "contact.subtitle": "Asesoramiento personalizado para encontrar el tratamiento perfecto para ti.",
  "contact.formTitle": "Escríbenos",
  "contact.formSubtitle": "Te respondemos en menos de 24h.",
  "contact.name": "Nombre *",
  "contact.email": "Email *",
  "contact.phone": "Teléfono (opcional)",
  "contact.message": "Tu mensaje *",
  "contact.send": "Enviar mensaje",
  "contact.sending": "Enviando...",
  "contact.success": "¡Mensaje enviado! Te responderemos pronto.",
  "contact.error": "Error al enviar el mensaje. Inténtalo de nuevo.",
  "contact.address": "Dirección",
  "contact.schedule": "Horario",
  "contact.needAppt": "¿Necesitas una cita?",
  "contact.useAssistant": "Utiliza nuestro asistente inteligente en el icono del micrófono.",

  // ── Services section ──
  "services.tag": "Nuestros servicios",
  "services.titlePrefix": "Lo que",
  "services.titleAccent": "hacemos",
  "services.bookCta": "Reservar cita",
  "services.consultCta": "Consultar",
  "services.clickHint": "Haz clic en una categoría para ver todas las especialidades",

  // ── Category Explorer ──
  "explorer.tag": "Catálogo",
  "explorer.title": "Explorar por",
  "explorer.titleAccent": "categoría",
  "explorer.loading": "Cargando catálogo…",

  // ── Top Treatment ──
  "top.tag": "Destacado",
  "top.title": "Tu bienestar es nuestra",
  "top.titleAccent": "prioridad",
  "top.bookCta": "Reservar cita",
  "top.benefit1": "Alivio del dolor y recuperación de movilidad",
  "top.benefit2": "Tratamientos basados en evidencia científica",
  "top.benefit3": "Atención personalizada por profesionales colegiados",
  "top.fisioDesc": "Recupera tu movilidad y elimina el dolor con tratamientos terapéuticos profesionales.",
  "top.podoDesc": "Cuida la salud de tus pies con tratamientos especializados y tecnología avanzada.",
  "top.nutriDesc": "Planes nutricionales personalizados para alcanzar tus objetivos de salud.",

  // ── CTA section ──
  "cta.title": "¿Listo para cuidar tu salud?",
  "cta.subtitle": "Nuestro equipo de profesionales está preparado para ayudarte. Reserva tu cita o utiliza nuestro asistente inteligente.",

  // ── Testimonials ──
  "testimonials.tag": "Opiniones",
  "testimonials.titlePrefix": "Lo que dicen nuestros",
  "testimonials.titleAccent": "pacientes",
  "testimonials.avgLabel": "valoración media",
  "testimonials.satisfiedPatients": "pacientes satisfechos",
  "testimonials.badge1": "Profesionales colegiados",
  "testimonials.badge2": "Atención personalizada",
  "testimonials.badge3": "Equipamiento de última generación",
  "testimonials.ctaText": "¿Eres paciente de Clínica Baluarte? Accede a tu panel para dejar tu opinión.",
  "testimonials.ctaButton": "Acceder a mi panel",
  "testimonials.anonymous": "Paciente",

  // ── Booking flow ──
  "booking.categoryTitle": "¿Qué tipo de tratamiento buscas?",
  "booking.loading": "Cargando opciones de tratamiento...",
  "booking.retry": "Reintentar",
  "booking.noCategories": "Ahora mismo no hay categorías disponibles.",
  "booking.refresh": "Actualizar",
  "booking.servicesCount": "servicios",
  "booking.servicesOf": "Servicios de",
  "booking.chooseService": "Elige el tratamiento que prefieras",
  "booking.perSession": "por sesión",
  "booking.chooseProfessional": "Elige tu profesional",
  "booking.whichProfessional": "¿con quién prefieres tu cita?",
  "booking.noPref": "Sin preferencia de profesional",
  "booking.chooseDate": "Elige una fecha",
  "booking.chooseTime": "Elige una hora",
  "booking.availableSlots": "Horarios disponibles",
  "booking.noSlots": "No hay horarios disponibles.",
  "booking.otherDate": "Otra fecha",
  "booking.confirmTitle": "Confirma tu cita",
  "booking.fullName": "Nombre completo *",
  "booking.namePlaceholder": "Tu nombre",
  "booking.emailLabel": "Email *",
  "booking.phoneLabel": "Teléfono *",
  "booking.phonePlaceholder": "+34 600 000 000",
  "booking.confirming": "Confirmando...",
  "booking.confirmCta": "Confirmar cita",
  "booking.successTitle": "¡Cita solicitada!",
  "booking.withProfessional": "Con",
  "booking.onDate": "El",
  "booking.atTime": "a las",
  "booking.emailConfirmation": "Te confirmaremos por email a",
  "booking.bookAnother": "Reservar otra cita para otra persona",
  "booking.goHome": "Volver al inicio",
  "booking.stepCategory": "Categoría",
  "booking.stepService": "Servicio",
  "booking.stepProfessional": "Profesional",
  "booking.stepDate": "Fecha",
  "booking.stepTime": "Hora",
  "booking.stepInfo": "Datos",
  "booking.stepAccount": "Cuenta",
  "booking.loadingProfessionals": "Cargando...",
  "booking.firstAvailable": "Primer profesional disponible",
  "booking.firstAvailableDesc": "Te asignamos al primer especialista con hueco disponible",
  "booking.previousSpecialist": "Te atendió anteriormente",
  "booking.accountTitle": "¿Ya tienes cuenta?",
  "booking.accountSubtitle": "Si eres paciente de la clínica, inicia sesión para acceder a tus beneficios.",
  "booking.insuranceHint": "¿Tienes seguro médico?",
  "booking.insuranceHintDesc": "Si tu seguro cubre nuestros servicios, inicia sesión para que no se te cobren los tratamientos cubiertos.",
  "booking.haveAccount": "Ya tengo cuenta — Iniciar sesión",
  "booking.continueGuest": "Continuar sin cuenta",
  "booking.coveredByInsurance": "Cubierto por seguro",

  // ── Auth ──
  "auth.login": "Iniciar sesión",
  "auth.register": "Crear cuenta",
  "auth.welcome": "Bienvenido/a",
  "auth.loading": "Cargando...",
  "auth.emailLabel": "Email",
  "auth.passwordLabel": "Contraseña",
  "auth.nameLabel": "Nombre completo",
  "auth.phoneLabel": "Teléfono",
  "auth.forgotPassword": "¿Olvidaste tu contraseña?",
  "auth.noAccount": "¿No tienes cuenta?",
  "auth.hasAccount": "¿Ya tienes cuenta?",
  "auth.registerCta": "Regístrate",
  "auth.loginCta": "Inicia sesión",
  "auth.processing": "Procesando...",
  "auth.enter": "Entrar",
  "auth.registerBtn": "Registrarse",
  "auth.loginSubtitle": "Accede a tu panel de paciente",
  "auth.registerSubtitle": "Regístrate para gestionar tus citas y más",
  "auth.checkEmail": "Revisa tu correo electrónico",
  "auth.checkEmailDesc": "Te hemos enviado un enlace de confirmación. Haz clic en él para activar tu cuenta.",
  "auth.backHome": "Volver al inicio",
  "auth.benefit1": "Reserva y gestiona tus citas online",
  "auth.benefit2": "Accede a tu historial de tratamientos",
  "auth.benefit3": "Comparte tu opinión sobre nuestros servicios",
  "auth.withAccount": "Con tu cuenta podrás:",
  "auth.accountBenefits": "Beneficios de tu cuenta:",
  "auth.referralCode": "¿Tienes un código de referido?",
  "auth.referralCodePlaceholder": "Ej: NICO-A3F2",
  "auth.referralCodeOptional": "Opcional — si alguien te recomendó, introduce su código",

  // ── Forgot / Reset Password ──
  "forgot.title": "Recuperar contraseña",
  "forgot.desc": "Ingresa tu email y te enviaremos un enlace para restablecer tu contraseña.",
  "forgot.sending": "Enviando...",
  "forgot.sendLink": "Enviar enlace",
  "forgot.sentTitle": "Enlace enviado",
  "forgot.sentDesc": "Si existe una cuenta con ese email, recibirás un enlace para restablecer tu contraseña.",
  "forgot.checkSpam": "Revisa tu bandeja de entrada y la carpeta de spam. El enlace expira en 1 hora.",
  "forgot.backLogin": "Volver al login",
  "reset.title": "Nueva contraseña",
  "reset.desc": "Ingresa tu nueva contraseña.",
  "reset.newPassword": "Nueva contraseña",
  "reset.confirmPassword": "Confirmar contraseña",
  "reset.saving": "Guardando...",
  "reset.save": "Guardar contraseña",
  "reset.successTitle": "¡Contraseña actualizada!",
  "reset.successDesc": "Ya puedes iniciar sesión con tu nueva contraseña.",
  "reset.goLogin": "Ir a iniciar sesión",
  "reset.invalidLink": "Enlace inválido",
  "reset.invalidDesc": "Este enlace de recuperación no es válido o ha expirado.",
  "reset.mismatch": "Las contraseñas no coinciden.",
  "reset.tooShort": "La contraseña debe tener al menos 6 caracteres.",

  // ── Client Dashboard ──
  "client.title": "Mi Panel",
  "client.profile": "Mi perfil",
  "client.appointments": "Mis citas",
  "client.noAppointments": "No tienes citas registradas.",
  "client.bookFirst": "Reservar mi primera cita",
  "client.upcoming": "Próximas",
  "client.past": "Historial",
  "client.payments": "Pagos y facturas",
  "client.packages": "Mis paquetes",
  "client.feedback": "Valoraciones", "client.satisfaction": "Satisfacción",
  "client.opinion": "Tu opinión",
  "client.dataExport": "Mis datos (RGPD)",
  "client.insurance": "Seguro médico",
  "client.newAppt": "Nueva cita",
  "client.reschedule": "Reprogramar",
  "client.cancel": "Cancelar",
  "client.bookNow": "Reservar ahora",
  "client.noUpcoming": "No tienes citas próximas",
  "client.noHistory": "No hay historial",
  "client.edit": "Editar",
  "client.save": "Guardar",
  "client.fullName": "Nombre completo",
  "client.email": "Email",
  "client.phone": "Teléfono",
  "client.address": "Dirección (opcional)",
  "client.notRegistered": "No registrado",
  "client.notRegisteredAddr": "No registrada",
  "client.logout": "Cerrar sesión",
  "client.cancelTitle": "¿Cancelar esta cita?",
  "client.cancelConfirm": "Sí, cancelar cita",
  "client.cancelling": "Cancelando...",
  "client.cancelled": "Cita cancelada",
  "client.cancelledDesc": "Tu cita ha sido cancelada correctamente.",
  "client.close": "Cerrar",
  "client.back": "Volver",
  "client.rescheduleTitle": "Reprogramar cita",
  "client.chooseNewDate": "Elige nueva fecha",
  "client.slotsFor": "Horarios disponibles para",
  "client.loadingSlots": "Cargando horarios...",
  "client.noSlotsDay": "No hay horarios disponibles para este día.",
  "client.cancelBtn": "Cancelar",
  "client.confirmNewDate": "Confirmar nueva fecha",
  "client.rescheduling": "Reprogramando...",
  "client.reviewTitle": "Danos tu opinión",
  "client.reviewSubtitle": "Tu experiencia ayuda a otros pacientes. Las opiniones se publican tras revisión.",
  "client.reviewSent": "¡Opinión enviada!",
  "client.reviewSentDesc": "Será revisada antes de publicarse.",
  "client.sendAnother": "Enviar otra opinión",
  "client.rating": "Valoración",
  "client.comment": "Tu comentario",
  "client.commentPlaceholder": "Cuéntanos tu experiencia en Clínica Baluarte...",
  "client.displayName": "Nombre a mostrar (opcional)",
  "client.sendReview": "Enviar opinión",
  "client.sendingReview": "Enviando...",
  "client.dataUpdated": "Datos actualizados",
  "client.saveError": "Error al guardar",
  "client.rescheduleError": "Error al reprogramar",
  "client.rescheduled": "Cita reprogramada con éxito",
  "client.reviewThanks": "¡Gracias por tu opinión!",
  "client.reviewThanksDesc": "Tu opinión será verificada por nuestro equipo antes de publicarse.",
  "client.reviewError": "Error al enviar opinión",
  "client.pay": "Pagar",
  "client.payError": "Error al iniciar el pago",

  // ── Admin Dashboard ──
  "admin.title": "Panel de control",
  "admin.panelTitle": "Panel de Administración",
  "admin.todayAppts": "Citas hoy",
  "admin.activeAppts": "Citas activas",
  "admin.activeServices": "Servicios activos",
  "admin.messages": "Mensajes",
  "admin.backToSite": "Volver al sitio",
  "admin.logout": "Cerrar sesión",
  // Sidebar groups
  "admin.groupMain": "Principal",
  "admin.groupBusiness": "Negocio",
  "admin.groupCRM": "CRM y Marketing",
  "admin.groupFinance": "Finanzas",
  "admin.groupComm": "Comunicación",
  "admin.groupContent": "Contenido",
  "admin.groupSystem": "Sistema",
  // Sidebar items
  "admin.panel": "Panel",
  "admin.analytics": "Analytics",
  "admin.calendar": "Calendario",
  "admin.appointments": "Citas",
  "admin.services": "Servicios",
  "admin.professionals": "Profesionales",
  "admin.packages": "Paquetes",
  "admin.hours": "Horarios",
  "admin.crm": "CRM Clientes",
  "admin.campaigns": "Campañas",
  "admin.loyalty": "Fidelización",
  "admin.automations": "Automatizaciones",
  "admin.paymentsNav": "Pagos",
  "admin.invoices": "Facturas",
  "admin.quotes": "Presupuestos",
  "admin.taxes": "Impuestos",
  "admin.exports": "Exportaciones",
  "admin.waitlist": "Lista de espera",
  "admin.reminders": "Recordatorios",
  "admin.calSync": "Calendarios",
  "admin.staffMsg": "Mensajes equipo",
  "admin.messagesNav": "Mensajes",
  "admin.reviews": "Opiniones",
  "admin.emailUsage": "Uso de emails",
  "admin.blog": "Blog",
  "admin.settings": "Configuración",
  "admin.audit": "Auditoría",

  // ── Chat ──
  "chat.title": "Centro Inteligente",
  "chat.placeholder": "Escribe tu consulta...",
  "chat.reset": "Reiniciar conversación",
  "chat.close": "Cerrar chat",
  "chat.send": "Enviar",
  "chat.expand": "Expandir",
  "chat.introText": "¿No sabes qué tratamiento elegir? Pregunta aquí. También puedes consultar detalles y precios.",
  "chat.errorMsg": "Lo siento, ha ocurrido un error. Inténtalo de nuevo en unos segundos.",

  // ── Voice ──
  "voice.title": "Asistente de Voz",
  "voice.greeting": "Hola, soy la asistente virtual de Clínica Baluarte. Puedo ayudarte a reservar, reprogramar o cancelar una cita. Pulsa el micrófono para decirme qué necesitas.",
  "voice.initialGreeting": "Hola, soy la asistente virtual de Clínica Baluarte. ¿En qué puedo ayudarte?",
  "voice.error": "Lo siento, ha ocurrido un error. Inténtalo de nuevo.",
  "voice.noSupport": "Tu navegador no soporta reconocimiento de voz. Usa Chrome o Edge.",
  "voice.book": "Reservar cita",
  "voice.reschedule": "Reprogramar cita",
  "voice.cancel": "Cancelar cita",
  "voice.openLabel": "Abrir asistente de voz",
  "voice.tapMic": "Toca el micrófono para hablar",
  "voice.idle": "Toca el micrófono para hablar",
  "voice.listening": "Escuchando...",
  "voice.processing": "Procesando...",
  "voice.speaking": "Hablando...",
  "voice.stopAudio": "Detener audio",
  "voice.mute": "Silenciar",
  "voice.unmute": "Activar voz",
  "voice.resetConv": "Reiniciar conversación",
  "voice.browserFallback": "Voz no disponible. Usando voz del navegador.",
  "voice.blockedUntil": "Voz no disponible. Reintentaremos a las",
  "voice.textPlaceholder": "Escribe tu mensaje o email...",
  "voice.play": "Reproducir",
  "voice.wantBook": "Quiero reservar una cita",
  "voice.wantReschedule": "Quiero reprogramar una cita",
  "voice.wantCancel": "Quiero cancelar una cita",

  // ── Quick chips ──
  "chip.fisio": "¿Qué servicios de fisioterapia ofrecéis?",
  "chip.backPain": "Tengo dolor de espalda: ¿qué me recomendáis?",
  "chip.podo": "¿En qué consiste la podología?",
  "chip.nutri": "Quiero mejorar mi alimentación: ¿opciones?",
  "chip.activity": "¿Qué tipos de actividad física tenéis?",
  "chip.prices": "¿Cuáles son vuestros precios?",

  // ── Validation ──
  "val.nameRequired": "El nombre es obligatorio",
  "val.maxChars": "Máximo {n} caracteres",
  "val.invalidEmail": "Email no válido",
  "val.messageRequired": "El mensaje es obligatorio",
  "val.invalidService": "Servicio no válido",
  "val.invalidProfessional": "Profesional no válido",
  "val.invalidDate": "Fecha no válida",
  "val.invalidTime": "Hora no válida",
  "val.nameBooking": "Nombre obligatorio",
  "val.writeComment": "Escribe un comentario",
  "val.campaignName": "Nombre obligatorio",

  // ── Statuses ──
  "status.confirmed": "Confirmada",
  "status.rescheduled": "Reprogramada",
  "status.cancelled_by_client": "Cancelada",
  "status.cancelled_by_admin": "Cancelada por admin",
  "status.completed": "Completada",
  "status.attended": "Asistió",
  "status.no_show": "No asistió",
  "status.pending": "Pendiente",

  // ── Category descriptions ──
  "catDesc.Fisioterapia": "Recuperación y rehabilitación profesional",
  "catDesc.Podología": "Salud y bienestar de tus pies",
  "catDesc.Nutrición": "Planes nutricionales personalizados",
  "catDesc.Actividad Física": "Ejercicio terapéutico individualizado",
  // Long descriptions
  "catDescLong.Fisioterapia": "Prevención, recuperación y rehabilitación mediante tratamientos terapéuticos dirigidos a restablecer el correcto funcionamiento corporal.",
  "catDescLong.Podología": "Tus pies son la base de tu cuerpo. Tratamientos especializados para mantenerlos saludables y sin dolor.",
  "catDescLong.Nutrición": "Planes nutricionales personalizados para mejorar tu bienestar y alcanzar tus objetivos de salud.",
  "catDescLong.Actividad Física": "Sesiones individualizadas de ejercicio terapéutico guiadas por profesionales para mejorar tu calidad de vida.",

  // ── Admin shared ──
  "adm.loading": "Cargando...", "adm.saving": "Guardando...", "adm.save": "Guardar", "adm.cancel": "Cancelar", "adm.delete": "Eliminar", "adm.edit": "Editar", "adm.create": "Crear", "adm.new": "Nuevo", "adm.active": "Activo", "adm.inactive": "Inactivo", "adm.noData": "Sin datos", "adm.search": "Buscar por nombre o email...", "adm.all": "Todos/as", "adm.name": "Nombre", "adm.email": "Email", "adm.phone": "Teléfono", "adm.address": "Dirección", "adm.description": "Descripción", "adm.notes": "Notas", "adm.date": "Fecha", "adm.status": "Estado", "adm.actions": "Acciones", "adm.close": "Cerrar", "adm.confirm": "Confirmar", "adm.send": "Enviar", "adm.reply": "Responder", "adm.export": "Exportar", "adm.refresh": "Actualizar", "adm.add": "Añadir", "adm.remove": "Quitar", "adm.back": "Volver", "adm.yes": "Sí", "adm.no": "No", "adm.open": "Abierto", "adm.closed": "Cerrado", "adm.from": "Desde", "adm.to": "Hasta", "adm.reason": "Motivo", "adm.optional": "opcional", "adm.required": "obligatorio", "adm.noResults": "No se encontraron resultados", "adm.errorSaving": "Error al guardar", "adm.errorLoading": "Error al cargar", "adm.updated": "Actualizado", "adm.created": "Creado", "adm.deleted": "Eliminado",

  // ── Appointments ──
  "adm.appts.title": "Citas", "adm.appts.upcoming": "Próximas", "adm.appts.past": "Pasadas", "adm.appts.cancelled": "Canceladas", "adm.appts.attended": "Asistida", "adm.appts.noShow": "No asistió", "adm.appts.cancelAppt": "Cancelar", "adm.appts.noAppts": "No hay citas con este filtro.", "adm.appts.authUploaded": "Autorización subida", "adm.appts.noAuth": "Sin autorización", "adm.appts.viewPolicy": "Ver póliza", "adm.appts.validated": "Validada", "adm.appts.validatePolicy": "Validar póliza", "adm.appts.insured": "Asegurado", "adm.appts.policyOk": "Póliza validada ✅", "adm.appts.validationRemoved": "Validación retirada", "adm.appts.updateError": "Error al actualizar", "adm.appts.deleteConfirm": "¿Cancelar esta cita?", "adm.appts.sendSurvey": "Enviar encuesta",

  // ── Services ──
  "adm.svc.title": "Servicios", "adm.svc.new": "Nuevo servicio", "adm.svc.edit": "Editar servicio", "adm.svc.duration": "Duración (minutos)", "adm.svc.price": "Precio (€)", "adm.svc.category": "Categoría", "adm.svc.noServices": "No hay servicios. Crea el primero.", "adm.svc.updated": "Servicio actualizado", "adm.svc.created": "Servicio creado", "adm.svc.deactivated": "Servicio desactivado", "adm.svc.deleteConfirm": "¿Eliminar este servicio?",

  // ── Messages ──
  "adm.msg.title": "Mensajes de contacto", "adm.msg.noMessages": "No hay mensajes aún", "adm.msg.replyTo": "Responder a", "adm.msg.replyPlaceholder": "Escribe tu respuesta...", "adm.msg.sendReply": "Enviar respuesta", "adm.msg.sending": "Enviando...", "adm.msg.sent": "Respuesta enviada", "adm.msg.sentTo": "Email enviado a", "adm.msg.sendError": "Error al enviar",

  // ── Professionals ──
  "adm.prof.title": "Profesionales", "adm.prof.subtitle": "Gestiona el equipo, servicios y horarios", "adm.prof.add": "Añadir profesional", "adm.prof.edit": "Editar profesional", "adm.prof.new": "Nuevo profesional", "adm.prof.noProfessionals": "No hay profesionales aún.", "adm.prof.addFirst": "Añadir el primero", "adm.prof.role": "Rol / Título", "adm.prof.specialties": "Especialidades (separadas por coma)", "adm.prof.bio": "Bio", "adm.prof.bioPlaceholder": "Breve descripción profesional...", "adm.prof.assignedServices": "Servicios asignados", "adm.prof.weeklySchedule": "Horario semanal", "adm.prof.addSlot": "Añadir franja", "adm.prof.updated": "Profesional actualizado", "adm.prof.created": "Profesional creado", "adm.prof.deleted": "Profesional eliminado", "adm.prof.deleteConfirm": "¿Eliminar este profesional?", "adm.prof.nameRequired": "El nombre es obligatorio",

  // ── Calendar ──
  "adm.cal.title": "Calendario", "adm.cal.blockTime": "Bloquear horario", "adm.cal.blocked": "Bloqueados", "adm.cal.appointments": "Citas", "adm.cal.noAppts": "No hay citas para este día.", "adm.cal.blockAdded": "Bloque añadido", "adm.cal.blockRemoved": "Bloque eliminado", "adm.cal.cancelConfirm": "¿Cancelar esta cita?", "adm.cal.cancelled": "Cita cancelada", "adm.cal.confirmed": "Confirmada", "adm.cal.pending": "Pendiente",

  // ── Business Hours ──
  "adm.hours.title": "Horario semanal", "adm.hours.saved": "Horarios guardados", "adm.hours.saveCta": "Guardar horarios",
  "adm.day.0": "Domingo", "adm.day.1": "Lunes", "adm.day.2": "Martes", "adm.day.3": "Miércoles", "adm.day.4": "Jueves", "adm.day.5": "Viernes", "adm.day.6": "Sábado",

  // ── Invoices ──
  "adm.inv.title": "Facturas", "adm.inv.new": "Nueva factura", "adm.inv.noInvoices": "No hay facturas.", "adm.inv.clientName": "Nombre del cliente", "adm.inv.clientEmail": "Email del cliente", "adm.inv.clientFiscalId": "NIF/CIF del cliente", "adm.inv.clientAddress": "Dirección fiscal del cliente", "adm.inv.subtotal": "Subtotal", "adm.inv.tax": "IVA", "adm.inv.total": "Total", "adm.inv.issued": "Emitida", "adm.inv.created": "Factura creada", "adm.inv.createError": "Error al crear factura", "adm.inv.sendCta": "Enviar", "adm.inv.markPaid": "Marcar pagada", "adm.inv.draft": "Borrador", "adm.inv.sent": "Enviada", "adm.inv.paid": "Pagada", "adm.inv.overdue": "Vencida", "adm.inv.cancelled": "Cancelada", "adm.inv.emitterInfo": "Datos del emisor (se cargan de configuración)", "adm.inv.items": "Líneas de factura", "adm.inv.addItem": "Añadir línea", "adm.inv.description": "Descripción", "adm.inv.qty": "Ud.", "adm.inv.unitPrice": "Precio ud.", "adm.inv.lineTotal": "Total línea", "adm.inv.removeItem": "Quitar", "adm.inv.notes": "Notas", "adm.inv.type": "Tipo de factura", "adm.inv.typeDirect": "Directa (cliente)", "adm.inv.typeInsurance": "Aseguradora", "adm.inv.insurerName": "Nombre de la aseguradora", "adm.inv.pricesIncludeVat": "Los precios de los servicios ya incluyen IVA", "adm.inv.services": "Servicios", "adm.inv.thisMonth": "Este mes", "adm.inv.thisWeek": "Esta semana", "adm.inv.createInvoice": "Crear factura",
  "adm.set.fiscal": "Datos fiscales", "adm.set.fiscalDesc": "Estos datos aparecerán como emisor en las facturas", "adm.set.fiscalName": "Razón social", "adm.set.fiscalId": "CIF/NIF", "adm.set.fiscalAddress": "Dirección fiscal",

  // ── Payments ──
  "adm.pay.title": "Pagos", "adm.pay.revenueToday": "Ingresos hoy", "adm.pay.revenueMonth": "Ingresos este mes", "adm.pay.pending": "Pagos pendientes", "adm.pay.deposits": "Depósitos cobrados", "adm.pay.refundsIssued": "Reembolsos emitidos", "adm.pay.payments": "Pagos", "adm.pay.refunds": "Reembolsos", "adm.pay.noPayments": "No hay pagos registrados aún. Los pagos aparecerán aquí cuando se conecte Stripe.", "adm.pay.noRefunds": "No hay reembolsos registrados.", "adm.pay.deposit": "Depósito", "adm.pay.noReason": "Sin motivo", "adm.pay.pPending": "Pendiente", "adm.pay.pCompleted": "Completado", "adm.pay.pFailed": "Fallido", "adm.pay.pRefunded": "Reembolsado", "adm.pay.pPartial": "Reemb. parcial", "adm.pay.processed": "Procesado",

  // ── Reviews ──
  "adm.rev.title": "Opiniones de pacientes", "adm.rev.pending": "Pendientes", "adm.rev.approved": "Aprobadas", "adm.rev.rejected": "Rechazadas", "adm.rev.all": "Todas", "adm.rev.approve": "Aprobar", "adm.rev.reject": "Rechazar", "adm.rev.disapprove": "Desaprobar", "adm.rev.deleteReview": "Eliminar", "adm.rev.noReviews": "No hay opiniones", "adm.rev.anonymous": "Anónimo", "adm.rev.approvedLabel": "Aprobada", "adm.rev.rejectedLabel": "Rechazada", "adm.rev.pendingLabel": "Pendiente", "adm.rev.reviewApproved": "Opinión aprobada", "adm.rev.reviewRejected": "Opinión rechazada", "adm.rev.reviewDeleted": "Opinión eliminada", "adm.rev.updateError": "Error al actualizar", "adm.rev.deleteError": "Error al eliminar",
  "adm.quot.pricesIncludeVat": "Los precios ya incluyen IVA",

  // ── Waitlist ──
  "adm.wait.title": "Lista de espera", "adm.wait.waiting": "en espera", "adm.wait.noEntries": "No hay entradas en la lista de espera.", "adm.wait.noEntriesHint": "Los clientes podrán unirse cuando no haya disponibilidad.", "adm.wait.notify": "Notificar", "adm.wait.book": "Reservar", "adm.wait.preference": "Preferencia", "adm.wait.registered": "Registrado", "adm.wait.statusUpdated": "Estado actualizado", "adm.wait.wWaiting": "En espera", "adm.wait.wNotified": "Notificado", "adm.wait.wBooked": "Reservado", "adm.wait.wExpired": "Expirado", "adm.wait.wCancelled": "Cancelado",

  // ── Reminders ──
  "adm.rem.title": "Recordatorios", "adm.rem.subtitle": "Configura recordatorios automáticos para citas", "adm.rem.new": "Nuevo", "adm.rem.noReminders": "No hay recordatorios configurados.", "adm.rem.noRemindersHint": "Configura recordatorios por email a 2h, 24h o 48h antes de la cita.", "adm.rem.channel": "Canal", "adm.rem.hoursBefore": "Horas antes", "adm.rem.subject": "Asunto del email", "adm.rem.body": "Cuerpo del mensaje", "adm.rem.bodyPlaceholder": "Hola {nombre}, te recordamos tu cita de {servicio} el {fecha} a las {hora}.", "adm.rem.subjectPlaceholder": "Recordatorio de tu cita", "adm.rem.created": "Recordatorio configurado", "adm.rem.deleted": "Recordatorio eliminado", "adm.rem.createCta": "Crear recordatorio", "adm.rem.smsFuture": "SMS (futuro)", "adm.rem.whatsappFuture": "WhatsApp (futuro)",

  // ── Campaigns ──
  "adm.camp.title": "Campañas de Marketing", "adm.camp.subtitle": "Gestiona campañas de email, SMS y reactivación", "adm.camp.new": "Nueva campaña", "adm.camp.create": "Crear campaña", "adm.camp.noResults": "No hay campañas creadas", "adm.camp.campaignName": "Nombre de la campaña", "adm.camp.subject": "Asunto del email", "adm.camp.content": "Contenido del mensaje (HTML)...", "adm.camp.totalCampaigns": "Total campañas", "adm.camp.sentCampaigns": "Enviadas", "adm.camp.drafts": "Borradores", "adm.camp.scheduled": "Programadas", "adm.camp.campaign": "Campaña", "adm.camp.type": "Tipo", "adm.camp.sentCount": "Enviados", "adm.camp.openedCount": "Abiertos", "adm.camp.sending": "Enviando...", "adm.camp.sendCta": "Enviar", "adm.camp.created": "Campaña creada", "adm.camp.sent": "Campaña enviada", "adm.camp.createError": "Error al crear campaña", "adm.camp.smsSoon": "SMS (próximamente)", "adm.camp.whatsappSoon": "WhatsApp (próximamente)", "adm.camp.autoReactivation": "Reactivación automática",
  "adm.camp.recipients": "Destinatarios", "adm.camp.allClients": "Todos los clientes", "adm.camp.byTag": "Por etiqueta", "adm.camp.selectTag": "Seleccionar etiqueta", "adm.camp.selectedCount": "destinatarios seleccionados", "adm.camp.preview": "Vista previa", "adm.camp.editor": "Editor", "adm.camp.addBlock": "Añadir bloque", "adm.camp.blockHeading": "Encabezado", "adm.camp.blockText": "Texto", "adm.camp.blockImage": "Imagen", "adm.camp.blockButton": "Botón", "adm.camp.blockDivider": "Separador", "adm.camp.btnText": "Texto del botón", "adm.camp.btnUrl": "URL del botón", "adm.camp.imgUrl": "URL de la imagen", "adm.camp.imgAlt": "Texto alternativo", "adm.camp.headingText": "Texto del encabezado", "adm.camp.paragraphText": "Escribe tu texto aquí...", "adm.camp.deleteBlock": "Eliminar bloque", "adm.camp.moveUp": "Subir", "adm.camp.moveDown": "Bajar", "adm.camp.confirmSend": "¿Enviar esta campaña a {n} destinatarios?", "adm.camp.noRecipients": "No hay destinatarios para esta campaña", "adm.camp.editCampaign": "Editar campaña", "adm.camp.recipientsSummary": "Se enviará a {n} clientes",

  // ── Loyalty ──
  "adm.loy.title": "Fidelización y Referencias", "adm.loy.subtitle": "Programa de puntos, referidos y feedback", "adm.loy.programActive": "Programa activo", "adm.loy.pointsIssued": "Puntos emitidos", "adm.loy.pointsRedeemed": "Puntos canjeados", "adm.loy.references": "Referencias", "adm.loy.feedbackReceived": "Feedback recibido", "adm.loy.points": "Puntos", "adm.loy.referrals": "Referencias", "adm.loy.feedback": "Feedback", "adm.loy.config": "Configuración", "adm.loy.source": "Fuente", "adm.loy.code": "Código", "adm.loy.referredEmail": "Email referido", "adm.loy.rewardPoints": "Puntos", "adm.loy.rating": "Valoración", "adm.loy.serviceRating": "Servicio", "adm.loy.staffRating": "Staff", "adm.loy.comment": "Comentario", "adm.loy.noPoints": "Sin movimientos de puntos", "adm.loy.noReferrals": "Sin referencias", "adm.loy.noFeedback": "Sin feedback", "adm.loy.configTitle": "Configuración del programa", "adm.loy.perBooking": "Puntos por reserva", "adm.loy.perEuro": "Puntos por € gastado", "adm.loy.perReferral": "Puntos por referido", "adm.loy.redemptionRate": "Valor de canje (€/punto)", "adm.loy.configUpdated": "Configuración actualizada", "adm.loy.saveConfig": "Guardar configuración",
  "client.referralCode": "Tu código de referido", "client.shareReferral": "Comparte este código con amigos y gana beneficios cuando se registren", "client.copied": "¡Copiado!", "client.copyCode": "Copiar código", "client.copyLink": "Copiar enlace", "client.shareWhatsApp": "Compartir por WhatsApp", "client.myPoints": "Mis puntos", "client.referralTitle": "Invita y gana",
  "client.whatsappShareText": "¡Te recomiendo Clínica Baluarte! Usa mi código para registrarte:",
  "client.referralsMade": "Personas referidas", "client.referralsConverted": "personas se registraron con tu código",
  "client.freeSessionProgress": "Progreso sesión gratis", "client.freeSessionsEarned": "{n} sesión(es) gratis conseguida(s)", "client.freeSessionHint": "Refiere a 4 personas para obtener una sesión gratis",
  "client.pointsDesc": "Puntos acumulados por referidos y reservas",
  "client.howItWorks": "¿Cómo funciona?",
  "client.rewardInsured1": "Comparte tu código con amigos o familiares",
  "client.rewardInsured2": "Por cada 4 personas que se registren con tu código, obtienes una sesión gratis",
  "client.rewardInsured3": "Tu referido también recibe puntos de bienvenida al registrarse",
  "client.rewardUninsured1": "Comparte tu código con amigos o familiares",
  "client.rewardUninsured2": "Ganas 100 puntos por cada persona que se registre con tu código",
  "client.rewardUninsured3": "Tu referido también gana 50 puntos de bienvenida",
  "client.referralHistory": "Historial de referidos", "client.referralConverted": "Registrado", "client.referralPending": "Pendiente",

  // ── Quotes ──
  "adm.quot.title": "Presupuestos", "adm.quot.new": "Nuevo presupuesto", "adm.quot.noQuotes": "No hay presupuestos.", "adm.quot.validUntil": "Válido hasta", "adm.quot.sendCta": "Enviar", "adm.quot.accept": "Aceptar", "adm.quot.validity": "Validez (días)", "adm.quot.services": "Servicios", "adm.quot.created": "Presupuesto creado", "adm.quot.createError": "Error al crear presupuesto", "adm.quot.draft": "Borrador", "adm.quot.sent": "Enviado", "adm.quot.viewed": "Visto", "adm.quot.accepted": "Aceptado", "adm.quot.expired": "Expirado", "adm.quot.rejected": "Rechazado", "adm.quot.totalQuotes": "Total presupuestos", "adm.quot.pending": "Pendientes", "adm.quot.conversion": "Conversión", "adm.quot.thisMonth": "Este mes", "adm.quot.thisWeek": "Esta semana", "adm.quot.remaining": "restantes", "adm.quot.sendQuote": "Enviar presupuesto", "adm.quot.createFromCRM": "Crea presupuestos desde la ficha del cliente en CRM",

  // ── Packages ──
  "adm.pkg.title": "Paquetes", "adm.pkg.new": "Nuevo paquete", "adm.pkg.edit": "Editar paquete", "adm.pkg.packages": "Paquetes", "adm.pkg.purchases": "Compras", "adm.pkg.noPackages": "No hay paquetes creados. Crea el primero.", "adm.pkg.noPurchases": "No hay compras de paquetes.", "adm.pkg.sessions": "Sesiones", "adm.pkg.validityDays": "Validez (días)", "adm.pkg.validFor": "Válido", "adm.pkg.days": "días", "adm.pkg.used": "Usadas", "adm.pkg.remaining": "Restantes", "adm.pkg.deactivate": "Desactivar", "adm.pkg.activate": "Activar", "adm.pkg.updated": "Paquete actualizado", "adm.pkg.created": "Paquete creado", "adm.pkg.saveChanges": "Guardar cambios", "adm.pkg.createPkg": "Crear paquete", "adm.pkg.active": "Activo", "adm.pkg.expired": "Expirado", "adm.pkg.exhausted": "Agotado",

  // ── Automation ──
  "adm.auto.title": "Automatizaciones", "adm.auto.subtitle": "Reglas automáticas basadas en eventos del negocio", "adm.auto.runNow": "Ejecutar ahora", "adm.auto.running": "Ejecutando...", "adm.auto.newRule": "Nueva regla", "adm.auto.createRule": "Crear automatización", "adm.auto.ruleName": "Nombre de la regla", "adm.auto.trigger": "Evento disparador", "adm.auto.action": "Acción a ejecutar", "adm.auto.activeRules": "Reglas activas", "adm.auto.totalExecs": "Ejecuciones totales", "adm.auto.todayLogs": "Registros hoy", "adm.auto.rules": "Reglas", "adm.auto.log": "Historial", "adm.auto.executions": "Ejecuciones", "adm.auto.noRules": "Sin reglas de automatización", "adm.auto.noLogs": "Sin registros de ejecución", "adm.auto.destination": "Destino", "adm.auto.created": "Automatización creada", "adm.auto.createError": "Error al crear automatización", "adm.auto.executed": "Automatizaciones ejecutadas correctamente",
  "adm.auto.tApptCompleted": "Cita asistida", "adm.auto.tApptCancelled": "Cita cancelada", "adm.auto.tNoShow": "No-show", "adm.auto.tQuoteSent": "Presupuesto enviado", "adm.auto.tQuoteNotAccepted": "Presupuesto sin aceptar (X días)", "adm.auto.tQuoteExpiring": "Presupuesto próximo a vencer", "adm.auto.tNoBooking": "Sin reserva en X días", "adm.auto.tPkgLow": "Paquete con pocas sesiones",
  "adm.auto.aSendEmail": "Enviar email", "adm.auto.aReviewReq": "Solicitar reseña", "adm.auto.aReactivation": "Enviar reactivación", "adm.auto.aNextSlot": "Ofrecer próximo hueco", "adm.auto.aRenewal": "Sugerir renovación de paquete", "adm.auto.aTimeline": "Registrar en timeline",

  // ── Exports ──
  "adm.exp.title": "Exportaciones", "adm.exp.subtitle": "Exporta datos del sistema en CSV, Excel o PDF", "adm.exp.bookings": "Reservas", "adm.exp.bookingsDesc": "Historial de citas y reservas", "adm.exp.clients": "Clientes", "adm.exp.clientsDesc": "Base de datos de clientes", "adm.exp.revenue": "Ingresos", "adm.exp.revenueDesc": "Informe de pagos e ingresos", "adm.exp.services": "Servicios", "adm.exp.servicesDesc": "Catálogo y rendimiento de servicios", "adm.exp.reviews": "Opiniones", "adm.exp.reviewsDesc": "Valoraciones de clientes", "adm.exp.noDataExport": "No hay datos para exportar", "adm.exp.exported": "Exportado {n} registros", "adm.exp.error": "Error al exportar", "adm.exp.configExport": "Configurar exportación", "adm.exp.dateRange": "Rango de fechas", "adm.exp.custom": "Personalizado", "adm.exp.from": "Desde", "adm.exp.to": "Hasta", "adm.exp.preview": "Vista previa", "adm.exp.previewTitle": "Vista previa", "adm.exp.rows": "registros", "adm.exp.rowsExported": "registros exportados", "adm.exp.showingFirst": "Mostrando primeros",

  // ── Analytics ──
  "adm.an.title": "Analytics", "adm.an.subtitle": "Métricas de rendimiento del negocio", "adm.an.last7": "Últimos 7 días", "adm.an.last30": "Últimos 30 días", "adm.an.last90": "Últimos 90 días", "adm.an.lastYear": "Último año", "adm.an.healthScore": "Business Health Score", "adm.an.healthDesc": "Basado en volumen, cancelaciones, no-shows y satisfacción", "adm.an.excellent": "Excelente", "adm.an.good": "Bueno", "adm.an.needsAttention": "Necesita atención",
  "adm.an.bookings": "Reservas", "adm.an.completed": "Completadas", "adm.an.revenue": "Ingresos", "adm.an.today": "Hoy", "adm.an.cancRate": "% Cancelación", "adm.an.rating": "Valoración",
  "adm.an.tabBookings": "Reservas", "adm.an.tabRevenue": "Ingresos", "adm.an.tabOps": "Operaciones", "adm.an.tabSatisfaction": "Satisfacción", "adm.an.tabClients": "Clientes", "adm.an.tabInsights": "IA Insights", "adm.an.tabAutomation": "Automatización",
  "adm.an.bookingsPerDay": "Reservas por día", "adm.an.bookingsPerService": "Reservas por servicio", "adm.an.bookingsPerProf": "Reservas por profesional", "adm.an.revenuePerService": "Ingresos por servicio", "adm.an.peakHours": "Horas punta", "adm.an.apptStatus": "Estado de citas", "adm.an.completedLabel": "Completadas", "adm.an.cancelledLabel": "Canceladas", "adm.an.pendingLabel": "Pendientes",
  "adm.an.satByService": "Satisfacción por servicio", "adm.an.satByProf": "Satisfacción por profesional", "adm.an.ratingSummary": "Resumen de valoraciones", "adm.an.byService": "Por servicio", "adm.an.byProf": "Por profesional", "adm.an.noSatData": "Sin datos de satisfacción", "adm.an.generalRating": "Valoración general", "adm.an.serviceRating": "Valoración servicio", "adm.an.profRating": "Valoración profesional",
  "adm.an.totalClients": "Total clientes", "adm.an.riskClients": "Clientes con riesgo", "adm.an.churnRisk": "Riesgo de churn", "adm.an.noShowGlobal": "No-show rate global", "adm.an.churnDetail": "Riesgo de abandono", "adm.an.clients": "clientes",
  "adm.an.aiAnalysis": "Análisis generado por IA sobre los últimos 90 días de datos", "adm.an.regenerate": "Regenerar", "adm.an.regenerating": "Regenerando insights...", "adm.an.analyzing": "Analizando datos del negocio...", "adm.an.insights": "Insights accionables", "adm.an.topServices": "🔝 Servicios más rentables", "adm.an.underperforming": "⚠️ Servicios que necesitan atención", "adm.an.allGood": "Todos los servicios rinden bien", "adm.an.predictions": "Predicciones y recomendaciones", "adm.an.busyPeriods": "Períodos punta previstos", "adm.an.revenueTrend": "Tendencia de ingresos", "adm.an.recCampaigns": "Campañas recomendadas", "adm.an.noInsights": "No se pudieron generar insights. Pulsa \"Regenerar\" para intentarlo de nuevo.",
  "adm.an.aiUsage": "Uso de IA y automatización", "adm.an.noAiData": "Sin datos de uso de IA en este período", "adm.an.autoMetrics": "Métricas de automatización", "adm.an.aiConvs": "Conversaciones IA", "adm.an.voiceConvs": "Conversaciones voz", "adm.an.autoEmails": "Emails automatizados", "adm.an.quotesGen": "Presupuestos generados", "adm.an.noServiceLabel": "Sin servicio", "adm.an.unassigned": "Sin asignar",

  // ── CRM ──
  "adm.crm.title": "CRM — Clientes", "adm.crm.registered": "clientes registrados", "adm.crm.segment": "Segmento", "adm.crm.tag": "Etiqueta", "adm.crm.allTags": "Todas", "adm.crm.vip": "VIP (10+ visitas)", "adm.crm.new": "Nuevos", "adm.crm.risky": "Riesgo", "adm.crm.noName": "Sin nombre", "adm.crm.riskLabel": "Riesgo", "adm.crm.appts": "citas", "adm.crm.noClients": "No se encontraron clientes", "adm.crm.selectClient": "Selecciona un cliente para ver su perfil",
  "adm.crm.tabProfile": "Perfil", "adm.crm.tabTimeline": "Timeline", "adm.crm.tabAppts": "Citas", "adm.crm.tabPayments": "Pagos", "adm.crm.tabNotes": "Notas",
  "adm.crm.emailLabel": "Email:", "adm.crm.phoneLabel": "Teléfono:", "adm.crm.addressLabel": "Dirección:", "adm.crm.insuranceLabel": "Seguro:", "adm.crm.apptsLabel": "Citas", "adm.crm.completedLabel": "Completadas", "adm.crm.revenueLabel": "Ingresos",
  "adm.crm.noTimeline": "Sin eventos en el timeline", "adm.crm.noAppts": "Sin citas", "adm.crm.noPayments": "Sin pagos", "adm.crm.amount": "Importe", "adm.crm.method": "Método", "adm.crm.service": "Servicio", "adm.crm.professional": "Profesional",
  "adm.crm.writeNote": "Escribir nota interna...", "adm.crm.addNote": "Añadir", "adm.crm.noteAdded": "Nota añadida", "adm.crm.noteError": "Error al añadir nota",

  // ── Settings ──
  "adm.set.title": "Configuración", "adm.set.subtitle": "Gestiona la configuración general del negocio",
  "adm.set.tabGeneral": "General", "adm.set.tabBranding": "Marca", "adm.set.tabProviders": "Proveedores", "adm.set.tabPlan": "Plan", "adm.set.tabAudit": "Auditoría",
  "adm.set.businessInfo": "Información del negocio", "adm.set.web": "Web", "adm.set.timezone": "Zona horaria", "adm.set.currency": "Moneda", "adm.set.languages": "Idiomas",
  "adm.set.branding": "White-label / Marca", "adm.set.brandingDesc": "Personaliza la apariencia del negocio", "adm.set.logoUrl": "URL del logo", "adm.set.primaryColor": "Color primario", "adm.set.secondaryColor": "Color secundario",
  "adm.set.providers": "Proveedores de servicio", "adm.set.providersDesc": "Configura proveedores de IA, email, voz y automatización", "adm.set.aiMain": "IA Principal", "adm.set.aiMainDesc": "Proveedor de inteligencia artificial", "adm.set.aiFallback": "IA Fallback", "adm.set.aiFallbackDesc": "Proveedor alternativo de IA", "adm.set.emailProv": "Email", "adm.set.emailProvDesc": "Proveedor de envío de emails", "adm.set.voiceProv": "Voz", "adm.set.voiceProvDesc": "Proveedor de text-to-speech", "adm.set.smsProv": "SMS", "adm.set.smsProvDesc": "Proveedor de mensajes SMS", "adm.set.calProv": "Calendario", "adm.set.calProvDesc": "Sincronización con calendarios externos", "adm.set.provActive": "Activo", "adm.set.provNotConfigured": "Sin configurar", "adm.set.usage": "Uso",
  "adm.set.planTitle": "Plan y límites", "adm.set.professionals": "Profesionales", "adm.set.locations": "Ubicaciones", "adm.set.services": "Servicios", "adm.set.bookingsMonth": "Reservas/mes", "adm.set.aiCallsMonth": "Llamadas IA/mes", "adm.set.emailsMonth": "Emails/mes", "adm.set.noPlan": "Sin plan configurado. Se aplicarán los límites por defecto.",
  "adm.set.auditTitle": "Registro de auditoría", "adm.set.auditDesc": "Últimas 50 acciones administrativas", "adm.set.noAudit": "Sin registros aún", "adm.set.updated": "Configuración actualizada",

  // ── Blog ──
  "adm.blog.title": "Blog", "adm.blog.subtitle": "Gestiona artículos y contenido SEO", "adm.blog.new": "Nuevo artículo", "adm.blog.edit": "Editar artículo", "adm.blog.noArticles": "Sin artículos aún", "adm.blog.titleLabel": "Título", "adm.blog.slug": "Slug", "adm.blog.excerpt": "Extracto", "adm.blog.content": "Contenido (Markdown)", "adm.blog.author": "Autor", "adm.blog.tags": "Tags (separados por coma)", "adm.blog.coverImage": "URL imagen portada", "adm.blog.metaTitle": "Meta título SEO", "adm.blog.metaDesc": "Meta descripción SEO", "adm.blog.draft": "Borrador", "adm.blog.published": "Publicado", "adm.blog.updated": "Artículo actualizado", "adm.blog.created": "Artículo creado", "adm.blog.deleted": "Artículo eliminado", "adm.blog.saveError": "Error al guardar",

  // ── Staff Messages ──
  "adm.staff.title": "Mensajes internos", "adm.staff.unread": "sin leer", "adm.staff.new": "Nuevo mensaje", "adm.staff.sendToTeam": "Enviar mensaje al equipo", "adm.staff.subject": "Asunto", "adm.staff.message": "Mensaje...", "adm.staff.send": "Enviar", "adm.staff.sent": "Mensaje enviado", "adm.staff.sendError": "Error al enviar mensaje", "adm.staff.noSubject": "Sin asunto", "adm.staff.newBadge": "Nuevo", "adm.staff.noMessages": "Sin mensajes", "adm.staff.compose": "Redactar", "adm.staff.inbox": "Recibidos", "adm.staff.sentTab": "Enviados", "adm.staff.allRead": "Todo al día", "adm.staff.recipient": "Destinatario", "adm.staff.allTeam": "Todo el equipo", "adm.staff.admin": "Administración", "adm.staff.reception": "Recepción", "adm.staff.teamMember": "Miembro del equipo", "adm.staff.you": "tú", "adm.staff.to": "Para", "adm.staff.read": "Leído", "adm.staff.backToMessages": "Volver a mensajes", "adm.staff.reply": "Responder", "adm.staff.replyAll": "Responder a todos", "adm.staff.forward": "Reenviar", "adm.staff.originalMessage": "Mensaje original", "adm.staff.fwdPrefix": "RV: ", "adm.staff.rePrefix": "RE: ", "adm.staff.fwdFrom": "Reenviado de", "adm.staff.attach": "Adjuntar", "adm.staff.attachments": "Adjuntos", "adm.staff.fileTooLarge": "Archivo demasiado grande (máx. 20 MB)", "adm.staff.downloadError": "Error al descargar archivo", "adm.staff.sending": "Enviando...",

  // ── Tax Config ──
  "adm.tax.title": "Impuestos", "adm.tax.subtitle": "Configura los tipos impositivos para facturas y presupuestos", "adm.tax.new": "Nuevo impuesto", "adm.tax.noTaxes": "No hay impuestos configurados.", "adm.tax.noTaxesHint": "Crea un tipo impositivo como IVA 21% o IGIC 7%.", "adm.tax.name": "Nombre", "adm.tax.rate": "Porcentaje (%)", "adm.tax.region": "Región (opcional)", "adm.tax.default": "Por defecto", "adm.tax.setDefault": "Usar por defecto", "adm.tax.created": "Impuesto configurado", "adm.tax.defaultSet": "Impuesto establecido por defecto", "adm.tax.deleted": "Impuesto eliminado", "adm.tax.create": "Crear impuesto",

  // ── Calendar Sync ──
  "adm.calsync.title": "Sincronización de calendarios", "adm.calsync.subtitle": "Conecta calendarios externos para evitar doble reserva", "adm.calsync.connections": "conexiones", "adm.calsync.connect": "Conectar (próximamente)", "adm.calsync.activeTitle": "Conexiones activas", "adm.calsync.noConnections": "No hay calendarios conectados.", "adm.calsync.noConnectionsHint": "Cada profesional podrá conectar su Google Calendar, iCal u Outlook.", "adm.calsync.active": "Activo", "adm.calsync.paused": "Pausado", "adm.calsync.lastSync": "Última sync",

  // ── Audit Log ──
  "adm.auditlog.title": "Registro de auditoría", "adm.auditlog.subtitle": "Historial de acciones administrativas", "adm.auditlog.search": "Buscar...", "adm.auditlog.all": "Todas", "adm.auditlog.create": "Crear", "adm.auditlog.update": "Actualizar", "adm.auditlog.deleteAction": "Eliminar", "adm.auditlog.exportAction": "Exportar", "adm.auditlog.roleChange": "Cambio rol", "adm.auditlog.loading": "Cargando...", "adm.auditlog.noLogs": "Sin registros",

  // ── ScrollScrub Hero ──
  "scrubHero.clinic": "Clínica", "scrubHero.name": "Baluarte", "scrubHero.subtitle": "Un espacio en movimiento en el corazón de Pamplona", "scrubHero.categories": "Fisioterapia · Podología · Nutrición · Actividad Física", "scrubHero.cta": "Reserva tu Cita", "scrubHero.explore": "Nuestros servicios",

  // ── Insurance ──
  "ins.title": "Seguro médico", "ins.toggle": "Tengo seguro", "ins.company": "Aseguradora", "ins.companyPlaceholder": "Selecciona aseguradora", "ins.policyNumber": "Nº de póliza", "ins.policyPlaceholder": "Número de póliza", "ins.document": "Póliza (documento)", "ins.uploaded": "Póliza subida", "ins.view": "Ver", "ins.validated": "Póliza validada por la clínica", "ins.pendingValidation": "Pendiente de validación", "ins.uploadHint": "Sube tu póliza (PDF, JPG o PNG, máx. 10MB)", "ins.uploading": "Subiendo...", "ins.analyzing": "Analizando póliza con IA...", "ins.aiExtracting": "La IA está extrayendo los datos de tu póliza automáticamente...", "ins.policyAnalyzed": "✅ Póliza analizada", "ins.dataExtracted": "Datos de {company} extraídos correctamente.", "ins.viewerTitle": "Póliza de seguro", "ins.saveError": "Error al guardar", "ins.dataUpdated": "Datos de seguro actualizados", "ins.fileTooLarge": "Archivo demasiado grande", "ins.maxSize": "Máximo 10MB", "ins.unsupportedFormat": "Formato no soportado", "ins.useFormats": "Usa PDF, JPG o PNG", "ins.uploadError": "Error al subir archivo",

  // ── Client Financials ──
  "fin.payments": "Pagos", "fin.invoices": "Facturas", "fin.noPayments": "No hay pagos registrados.", "fin.noInvoices": "No hay facturas.", "fin.pending": "Pendiente", "fin.completed": "Completado", "fin.failed": "Fallido", "fin.refunded": "Reembolsado", "fin.draft": "Borrador", "fin.sent": "Enviada", "fin.paid": "Pagada", "fin.noPackages": "No tienes paquetes activos.", "fin.package": "Paquete", "fin.used": "Usadas", "fin.remaining": "Restantes", "fin.expires": "Expira", "fin.active": "Activo", "fin.expired": "Expirado", "fin.exhausted": "Agotado", "fin.bookSession": "Reservar sesión", "fin.sessionHistory": "Historial de sesiones", "fin.noSessions": "Aún no se han registrado sesiones.", "fin.session": "Sesión",
  "booking.bonoMessage": "Para adquirir este bono, accede a tu panel de cliente en Mi cuenta → Mis paquetes.", "booking.bonoHint": "Adquiérelo desde tu panel de cliente",

  // ── Client Feedback ──
  "fb.pendingTitle": "Valoraciones pendientes", "fb.pendingDesc": "Cuéntanos cómo fue tu experiencia tras tu última visita.", "fb.rate": "Valorar", "fb.overallRating": "Valoración general", "fb.serviceQuality": "Calidad del servicio", "fb.staffAttention": "Atención del profesional", "fb.commentOptional": "Comentario (opcional)", "fb.commentPlaceholder": "¿Qué te pareció tu visita?", "fb.sending": "Enviando...", "fb.sendRating": "Enviar valoración", "fb.cancelRating": "Cancelar", "fb.thankYou": "¡Gracias por tu valoración!", "fb.errorSending": "Error al enviar la valoración", "fb.sentTitle": "Valoraciones enviadas", "fb.service": "Servicio", "fb.noPending": "No tienes valoraciones pendientes.", "fb.afterAppt": "Después de cada cita completada recibirás una solicitud de feedback.",

  // ── Client Data Export (GDPR) ──
  "gdpr.title": "Tus datos personales", "gdpr.desc": "De acuerdo con el RGPD, puedes descargar una copia de todos tus datos personales almacenados.", "gdpr.downloadCta": "Descargar mis datos", "gdpr.downloadDesc": "Archivo CSV compatible con Excel / hojas de cálculo", "gdpr.gathering": "Recopilando tus datos...", "gdpr.exported": "Datos descargados correctamente", "gdpr.exportError": "Error al exportar datos", "gdpr.sectionProfile": "--- PERFIL ---", "gdpr.sectionAppointments": "--- CITAS ---", "gdpr.sectionPayments": "--- PAGOS ---", "gdpr.sectionReviews": "--- OPINIONES ---", "gdpr.deleteTitle": "Solicitar eliminación de datos", "gdpr.deleteDesc": "Puedes solicitar la eliminación completa de tu cuenta y datos personales. Un administrador revisará tu solicitud.", "gdpr.deleteCta": "Solicitar eliminación", "gdpr.deleteDialogTitle": "Solicitar eliminación de datos", "gdpr.deleteDialogDesc": "Esta acción es irreversible. Un administrador procesará tu solicitud según la normativa RGPD.", "gdpr.reasonPlaceholder": "Motivo (opcional)", "gdpr.cancel": "Cancelar", "gdpr.sending": "Enviando...", "gdpr.confirmDelete": "Confirmar solicitud", "gdpr.deleteSent": "Solicitud de eliminación enviada. Te contactaremos pronto.", "gdpr.deleteError": "Error al enviar la solicitud",

  // ── Authorization Upload ──
  "authUpload.viewAuth": "Ver autorización", "authUpload.viewAuthShort": "Autoriz.", "authUpload.dialogTitle": "Autorización", "authUpload.deleted": "Autorización eliminada", "authUpload.uploaded": "Autorización subida correctamente", "authUpload.saveError": "Error al guardar autorización", "authUpload.uploadError": "Error al subir", "authUpload.fileTooLarge": "Archivo demasiado grande", "authUpload.maxSize": "Máximo 10MB", "authUpload.uploading": "Subiendo...", "authUpload.uploadShort": "Subir autoriz.", "authUpload.upload": "Subir autorización",

  // ── Booking page ──
  "booking.pageTitle": "Reserva tu Cita", "booking.errorValidation": "Error de validación", "booking.invalidData": "Datos no válidos", "booking.loadError": "No pudimos cargar los tratamientos ahora mismo. Pulsa reintentar.", "booking.bookError": "No se pudo agendar la cita.",

  // ── Specialty names (for SpecialtyCarouselModal) ──
  "spec.terapiasManuales": "Terapias manuales", "spec.terapiasManualesDesc": "Mejoran la movilidad articular, alivian contracturas y reducen el dolor mediante técnicas de manipulación y movilización.",
  "spec.drenajeLinfatico": "Drenaje linfático", "spec.drenajeLinfaticoDesc": "Reduce la hinchazón y mejora la circulación linfática con masajes suaves y rítmicos. Ideal tras cirugías o para piernas cansadas.",
  "spec.puncionSeca": "Punción seca", "spec.puncionSecaDesc": "Desactiva puntos gatillo musculares mediante una aguja fina, aliviando el dolor y la tensión muscular de forma rápida y eficaz.",
  "spec.fisioReumatologica": "Fisioterapia reumatológica", "spec.fisioReumatologicaDesc": "Tratamiento especializado para artritis, artrosis, fibromialgia y otras enfermedades reumáticas que limitan tu movilidad.",
  "spec.fisioOrtopedica": "Fisioterapia ortopédica", "spec.fisioOrtopedicaDesc": "Rehabilitación de fracturas, esguinces, tendinitis y lesiones post-quirúrgicas para recuperar tu funcionalidad completa.",
  "spec.ejercicioTerapeutico": "Ejercicio terapéutico", "spec.ejercicioTerapeuticoDesc": "Programa personalizado de ejercicios diseñados para fortalecer, prevenir recaídas y mejorar tu calidad de vida.",
  "spec.unasCallosidades": "Uñas y callosidades", "spec.unasCallosidadesDesc": "Tratamiento profesional de uñas encarnadas, engrosadas, callos y durezas para mantener tus pies sanos y sin dolor.",
  "spec.reconstruccionUnas": "Reconstrucción de uñas", "spec.reconstruccionUnasDesc": "Restauración estética y funcional de uñas dañadas por traumatismos, hongos u otras patologías.",
  "spec.podologiaDeportiva": "Podología deportiva", "spec.podologiaDeportivaDesc": "Evaluación biomecánica y cuidado especializado del pie del deportista para prevenir lesiones y optimizar el rendimiento.",
  "spec.plantillas": "Plantillas personalizadas", "spec.plantillasDesc": "Diseño y fabricación de plantillas a medida para corregir pisada, aliviar dolor y mejorar tu postura al caminar.",
  "spec.cirugiaPodologica": "Cirugía podológica", "spec.cirugiaPodologicaDesc": "Intervenciones menores ambulatorias para resolver problemas como uñas encarnadas recurrentes con anestesia local.",
  "spec.pieDiabetico": "Cuidado pie diabético", "spec.pieDiabeticoDesc": "Revisiones preventivas y tratamiento especializado para proteger los pies de personas con diabetes y evitar complicaciones.",
  "spec.primeraConsulta": "Primera consulta", "spec.primeraConsultaDesc": "Evaluación completa de tu estado nutricional, historial clínico y hábitos alimenticios para diseñar un plan personalizado.",
  "spec.seguimiento": "Consulta de seguimiento", "spec.seguimientoDesc": "Revisión de tu progreso, ajuste de tu plan nutricional y resolución de dudas para asegurar resultados duraderos.",
  "spec.ninosAdolescentes": "Niños y adolescentes", "spec.ninosAdolescentesDesc": "Actividades adaptadas para promover hábitos saludables, coordinación y desarrollo motor desde edades tempranas.",
  "spec.stretching": "Stretching", "spec.stretchingDesc": "Sesiones de estiramiento guiado para mejorar la flexibilidad, prevenir lesiones y aliviar tensiones musculares.",
  "spec.familia": "Actividad física en familia", "spec.familiaDesc": "Sesiones divertidas para toda la familia que fomentan el ejercicio compartido y los vínculos saludables.",
  "spec.preparacionDeportiva": "Preparación deportiva", "spec.preparacionDeportivaDesc": "Entrenamiento funcional individualizado para mejorar el rendimiento deportivo y prevenir lesiones.",
  "spec.pilates": "Pilates", "spec.pilatesDesc": "Ejercicios controlados en máquina reformer para fortalecer el core, mejorar la postura y ganar flexibilidad.",
  "spec.gimnasiaMantenimiento": "Gimnasia de mantenimiento", "spec.gimnasiaMantenimientoDesc": "Sesiones adaptadas para mantener la movilidad, fuerza y equilibrio, especialmente en personas mayores.",
  "spec.posturologia": "Posturología", "spec.posturologiaDesc": "Análisis y corrección postural integral para prevenir dolores crónicos de espalda, cuello y articulaciones.",

  // ── Service name translations ──
  "svcName.Terapias manuales": "Terapias manuales", "svcName.Drenaje linfático": "Drenaje linfático", "svcName.Ejercicio terapéutico": "Ejercicio terapéutico", "svcName.Fisioterapia ortopédica": "Fisioterapia ortopédica", "svcName.Fisioterapia reumatológica": "Fisioterapia reumatológica", "svcName.Punción seca": "Punción seca",
  "svcName.Cirugía podológica": "Cirugía podológica", "svcName.Cuidado pie diabético": "Cuidado pie diabético", "svcName.Plantillas personalizadas": "Plantillas personalizadas", "svcName.Podología deportiva": "Podología deportiva", "svcName.Reconstrucción de uñas": "Reconstrucción de uñas", "svcName.Uñas y callosidades": "Uñas y callosidades",
  "svcName.Primera consulta": "Primera consulta", "svcName.Consulta de seguimiento": "Consulta de seguimiento",
  "svcName.Actividad física en familia": "Actividad física en familia", "svcName.Gimnasia de mantenimiento": "Gimnasia de mantenimiento", "svcName.Niños y adolescentes": "Niños y adolescentes", "svcName.Pilates": "Pilates", "svcName.Posturología": "Posturología", "svcName.Preparación deportiva": "Preparación deportiva", "svcName.Stretching": "Stretching",

  // ── Category name translations ──
  "catName.Fisioterapia": "Fisioterapia", "catName.Podología": "Podología", "catName.Nutrición": "Nutrición", "catName.Actividad Física": "Actividad Física",
};

const en: TranslationDict = {
  "nav.services": "Services", "nav.contact": "Contact", "nav.book": "Book Appointment", "nav.myAccount": "My Account", "nav.logout": "Sign out", "nav.panel": "My Dashboard",
  "hero.tag": "Advanced Integral Aesthetics", "hero.subtitle": "We care for your skin and well-being with advanced techniques and a personalised approach.", "hero.cta": "Book appointment", "hero.explore": "Explore treatments",
  "footer.schedule": "Hours", "footer.address": "Address", "footer.contact": "Contact", "footer.rights": "© 2026 Clínica Baluarte. All rights reserved.", "footer.weekdays": "Monday to Friday", "footer.privacy": "Privacy Policy", "footer.terms": "Terms and Conditions", "footer.cookies": "Cookie Policy", "footer.designedBy": "Designed by",
  "cookie.title": "Your privacy matters", "cookie.desc": "We use essential cookies for the site to work. Analytics and marketing cookies are optional.", "cookie.accept": "Accept all", "cookie.reject": "Reject optional", "cookie.manage": "Manage preferences", "cookie.save": "Save preferences", "cookie.essential": "Essential (required)", "cookie.analytics": "Analytics", "cookie.marketing": "Marketing",
  "privacy.title": "Privacy Policy", "terms.title": "Terms and Conditions", "cookies.title": "Cookie Policy",
  "blog.title": "Blog", "blog.readMore": "Read more", "blog.defaultAuthor": "Clínica Baluarte",
  "common.loading": "Loading...", "pub.loadingServices": "Loading services...", "pub.catalogue": "Catalogue", "pub.ourServices": "Our Services", "pub.minutesShort": "min", "pub.serviceNotFound": "Service not found", "pub.professionalNotFound": "Professional not found", "pub.locationNotFound": "Location not found", "pub.articleNotFound": "Article not found", "pub.viewAllServices": "View all services", "pub.backToBlog": "Back to blog", "pub.back": "Back", "pub.schedule": "Hours", "pub.closed": "Closed", "pub.bookService": "Book this service", "pub.bookWith": "Book with {name}", "pub.bookIn": "Book at {name}", "pub.serviceSeoDesc": "{name} service at Clínica Baluarte Pamplona", "pub.professionalSeoDesc": "{name}, {role} at Clínica Baluarte Pamplona", "pub.locationSeoDesc": "Visit our {name} location. {address}", "cita.loading": "Processing your request...", "cita.confirmedTitle": "Appointment confirmed!", "cita.confirmedDesc": "Thanks for confirming. We look forward to seeing you tomorrow at Doixa.", "cita.cancelledTitle": "Appointment cancelled", "cita.cancelledDesc": "Your appointment has been cancelled. You can book a new one anytime.", "cita.alreadyTitle": "Appointment already processed", "cita.alreadyDesc": "This appointment was already modified and cannot be changed again.", "cita.errorTitle": "Error", "cita.errorDesc": "We couldn't process your request. The link may be invalid or expired.", "cita.bookNew": "Book new appointment", "cita.home": "Go to home",
  "settings.title": "Settings", "export.csv": "Export CSV", "export.excel": "Export Excel", "export.pdf": "Export PDF",
  "contact.tag": "Let's talk", "contact.title": "We are", "contact.titleAccent": "close", "contact.subtitle": "Personalised advice to find the perfect treatment for you.", "contact.formTitle": "Write to us", "contact.formSubtitle": "We reply within 24h.", "contact.name": "Name *", "contact.email": "Email *", "contact.phone": "Phone (optional)", "contact.message": "Your message *", "contact.send": "Send message", "contact.sending": "Sending...", "contact.success": "Message sent! We'll get back to you soon.", "contact.error": "Error sending message. Please try again.", "contact.address": "Address", "contact.schedule": "Hours", "contact.needAppt": "Need an appointment?", "contact.useAssistant": "Use our smart assistant via the microphone icon.",
  "services.tag": "Our services", "services.titlePrefix": "What we", "services.titleAccent": "do", "services.bookCta": "Book appointment", "services.consultCta": "Ask us", "services.clickHint": "Click a category to see all specialties",
  "explorer.tag": "Catalogue", "explorer.title": "Explore by", "explorer.titleAccent": "category", "explorer.loading": "Loading catalogue…",
  "top.tag": "Featured", "top.title": "Your well-being is our", "top.titleAccent": "priority", "top.bookCta": "Book appointment", "top.benefit1": "Pain relief and mobility recovery", "top.benefit2": "Evidence-based treatments", "top.benefit3": "Personalised care by certified professionals", "top.fisioDesc": "Recover mobility and eliminate pain with professional therapeutic treatments.", "top.podoDesc": "Take care of your feet with specialised treatments and advanced technology.", "top.nutriDesc": "Personalised nutrition plans to reach your health goals.",
  "cta.title": "Ready to take care of your health?", "cta.subtitle": "Our team of professionals is ready to help you. Book your appointment or use our smart assistant.",
  "testimonials.tag": "Reviews", "testimonials.titlePrefix": "What our", "testimonials.titleAccent": "patients say", "testimonials.avgLabel": "average rating", "testimonials.satisfiedPatients": "satisfied patients", "testimonials.badge1": "Certified professionals", "testimonials.badge2": "Personalised care", "testimonials.badge3": "State-of-the-art equipment", "testimonials.ctaText": "Are you a Clínica Baluarte patient? Access your dashboard to leave a review.", "testimonials.ctaButton": "Go to my dashboard", "testimonials.anonymous": "Patient",
  "booking.categoryTitle": "What type of treatment are you looking for?", "booking.loading": "Loading treatment options...", "booking.retry": "Retry", "booking.noCategories": "No categories are available right now.", "booking.refresh": "Refresh", "booking.servicesCount": "services", "booking.servicesOf": "Services in", "booking.chooseService": "Choose the treatment you prefer", "booking.perSession": "per session", "booking.chooseProfessional": "Choose your professional", "booking.whichProfessional": "Who would you prefer for your appointment?", "booking.noPref": "No professional preference", "booking.chooseDate": "Choose a date", "booking.chooseTime": "Choose a time", "booking.availableSlots": "Available times", "booking.noSlots": "No available times.", "booking.otherDate": "Another date", "booking.confirmTitle": "Confirm your appointment", "booking.fullName": "Full name *", "booking.namePlaceholder": "Your name", "booking.emailLabel": "Email *", "booking.phoneLabel": "Phone *", "booking.phonePlaceholder": "+34 600 000 000", "booking.confirming": "Confirming...", "booking.confirmCta": "Confirm appointment", "booking.successTitle": "Appointment requested!", "booking.withProfessional": "With", "booking.onDate": "On", "booking.atTime": "at", "booking.emailConfirmation": "We'll confirm by email to", "booking.bookAnother": "Book another appointment for someone else", "booking.goHome": "Go back home", "booking.stepCategory": "Category", "booking.stepService": "Service", "booking.stepProfessional": "Professional", "booking.stepDate": "Date", "booking.stepTime": "Time", "booking.stepInfo": "Details", "booking.stepAccount": "Account", "booking.loadingProfessionals": "Loading...",
  "booking.accountTitle": "Do you have an account?", "booking.accountSubtitle": "If you are a clinic patient, log in to access your benefits.", "booking.insuranceHint": "Do you have health insurance?", "booking.insuranceHintDesc": "If your insurance covers our services, log in so you won't be charged for covered treatments.", "booking.haveAccount": "I have an account — Log in", "booking.continueGuest": "Continue without an account", "booking.coveredByInsurance": "Covered by insurance",
  "auth.login": "Log in", "auth.register": "Create account", "auth.welcome": "Welcome", "auth.loading": "Loading...", "auth.emailLabel": "Email", "auth.passwordLabel": "Password", "auth.nameLabel": "Full name", "auth.phoneLabel": "Phone", "auth.forgotPassword": "Forgot your password?", "auth.noAccount": "Don't have an account?", "auth.hasAccount": "Already have an account?", "auth.registerCta": "Sign up", "auth.loginCta": "Log in", "auth.processing": "Processing...", "auth.enter": "Log in", "auth.registerBtn": "Sign up", "auth.loginSubtitle": "Access your patient dashboard", "auth.registerSubtitle": "Register to manage your appointments and more", "auth.checkEmail": "Check your email", "auth.checkEmailDesc": "We've sent you a confirmation link. Click it to activate your account.", "auth.backHome": "Back to home", "auth.benefit1": "Book and manage your appointments online", "auth.benefit2": "Access your treatment history", "auth.benefit3": "Share your opinion about our services", "auth.withAccount": "With your account you can:", "auth.accountBenefits": "Account benefits:", "auth.referralCode": "Have a referral code?", "auth.referralCodePlaceholder": "E.g.: NICO-A3F2", "auth.referralCodeOptional": "Optional — if someone recommended us, enter their code",
  "forgot.title": "Recover password", "forgot.desc": "Enter your email and we'll send you a link to reset your password.", "forgot.sending": "Sending...", "forgot.sendLink": "Send link", "forgot.sentTitle": "Link sent", "forgot.sentDesc": "If an account with that email exists, you'll receive a password reset link.", "forgot.checkSpam": "Check your inbox and spam folder. The link expires in 1 hour.", "forgot.backLogin": "Back to login",
  "reset.title": "New password", "reset.desc": "Enter your new password.", "reset.newPassword": "New password", "reset.confirmPassword": "Confirm password", "reset.saving": "Saving...", "reset.save": "Save password", "reset.successTitle": "Password updated!", "reset.successDesc": "You can now log in with your new password.", "reset.goLogin": "Go to login", "reset.invalidLink": "Invalid link", "reset.invalidDesc": "This recovery link is invalid or has expired.", "reset.mismatch": "Passwords don't match.", "reset.tooShort": "Password must be at least 6 characters.",
  "client.title": "My Dashboard", "client.profile": "My profile", "client.appointments": "My appointments", "client.noAppointments": "You have no registered appointments.", "client.bookFirst": "Book my first appointment", "client.upcoming": "Upcoming", "client.past": "History", "client.payments": "Payments & invoices", "client.packages": "My packages", "client.feedback": "Reviews", "client.satisfaction": "Satisfaction", "client.opinion": "Your review", "client.dataExport": "My data (GDPR)", "client.insurance": "Health insurance", "client.newAppt": "New appointment", "client.reschedule": "Reschedule", "client.cancel": "Cancel", "client.bookNow": "Book now", "client.noUpcoming": "No upcoming appointments", "client.noHistory": "No history", "client.edit": "Edit", "client.save": "Save", "client.fullName": "Full name", "client.email": "Email", "client.phone": "Phone", "client.address": "Address (optional)", "client.notRegistered": "Not registered", "client.notRegisteredAddr": "Not registered", "client.logout": "Sign out", "client.cancelTitle": "Cancel this appointment?", "client.cancelConfirm": "Yes, cancel appointment", "client.cancelling": "Cancelling...", "client.cancelled": "Appointment cancelled", "client.cancelledDesc": "Your appointment has been cancelled successfully.", "client.close": "Close", "client.back": "Back", "client.rescheduleTitle": "Reschedule appointment", "client.chooseNewDate": "Choose new date", "client.slotsFor": "Available times for", "client.loadingSlots": "Loading times...", "client.noSlotsDay": "No available times for this day.", "client.cancelBtn": "Cancel", "client.confirmNewDate": "Confirm new date", "client.rescheduling": "Rescheduling...", "client.reviewTitle": "Leave your review", "client.reviewSubtitle": "Your experience helps other patients. Reviews are published after review.", "client.reviewSent": "Review sent!", "client.reviewSentDesc": "It will be reviewed before publishing.", "client.sendAnother": "Send another review", "client.rating": "Rating", "client.comment": "Your comment", "client.commentPlaceholder": "Tell us about your experience at Clínica Baluarte...", "client.displayName": "Display name (optional)", "client.sendReview": "Send review", "client.sendingReview": "Sending...", "client.dataUpdated": "Data updated", "client.saveError": "Error saving", "client.rescheduleError": "Error rescheduling", "client.rescheduled": "Appointment rescheduled successfully", "client.reviewThanks": "Thank you for your review!", "client.reviewThanksDesc": "Your review will be verified by our team before publishing.", "client.reviewError": "Error sending review", "client.pay": "Pay", "client.payError": "Error starting payment",
  "admin.title": "Dashboard", "admin.panelTitle": "Admin Panel", "admin.todayAppts": "Today's appointments", "admin.activeAppts": "Active appointments", "admin.activeServices": "Active services", "admin.messages": "Messages", "admin.backToSite": "Back to site", "admin.logout": "Sign out",
  "admin.groupMain": "Main", "admin.groupBusiness": "Business", "admin.groupCRM": "CRM & Marketing", "admin.groupFinance": "Finance", "admin.groupComm": "Communication", "admin.groupContent": "Content", "admin.groupSystem": "System",
  "admin.panel": "Dashboard", "admin.analytics": "Analytics", "admin.calendar": "Calendar", "admin.appointments": "Appointments", "admin.services": "Services", "admin.professionals": "Professionals", "admin.packages": "Packages", "admin.hours": "Hours", "admin.crm": "Client CRM", "admin.campaigns": "Campaigns", "admin.loyalty": "Loyalty", "admin.automations": "Automations", "admin.paymentsNav": "Payments", "admin.invoices": "Invoices", "admin.quotes": "Quotes", "admin.taxes": "Taxes", "admin.exports": "Exports", "admin.waitlist": "Waitlist", "admin.reminders": "Reminders", "admin.calSync": "Calendars", "admin.staffMsg": "Team messages", "admin.messagesNav": "Messages", "admin.reviews": "Reviews", "admin.emailUsage": "Email usage", "admin.blog": "Blog", "admin.settings": "Settings", "admin.audit": "Audit",
  "chat.title": "Smart Centre", "chat.placeholder": "Type your query...", "chat.reset": "Reset conversation", "chat.close": "Close chat", "chat.send": "Send", "chat.expand": "Expand", "chat.introText": "Not sure which treatment to choose? Ask here. You can also check details and prices.", "chat.errorMsg": "Sorry, an error occurred. Please try again in a few seconds.",
  "voice.title": "Voice Assistant", "voice.greeting": "Hello, I'm Clínica Baluarte's virtual assistant. I can help you book, reschedule or cancel an appointment. Press the microphone to tell me what you need.", "voice.initialGreeting": "Hello, I'm Clínica Baluarte's virtual assistant. How can I help you?", "voice.error": "Sorry, an error occurred. Please try again.", "voice.noSupport": "Your browser doesn't support voice recognition. Use Chrome or Edge.", "voice.book": "Book appointment", "voice.reschedule": "Reschedule appointment", "voice.cancel": "Cancel appointment", "voice.openLabel": "Open voice assistant", "voice.tapMic": "Tap the microphone to speak", "voice.idle": "Tap the microphone to speak", "voice.listening": "Listening...", "voice.processing": "Processing...", "voice.speaking": "Speaking...", "voice.stopAudio": "Stop audio", "voice.mute": "Mute", "voice.unmute": "Unmute", "voice.resetConv": "Reset conversation", "voice.browserFallback": "Voice unavailable. Using browser voice.", "voice.blockedUntil": "Voice unavailable. Retrying at", "voice.textPlaceholder": "Type your message or email...", "voice.play": "Play", "voice.wantBook": "I want to book an appointment", "voice.wantReschedule": "I want to reschedule an appointment", "voice.wantCancel": "I want to cancel an appointment",
  "chip.fisio": "What physiotherapy services do you offer?", "chip.backPain": "I have back pain: what do you recommend?", "chip.podo": "What is podiatry?", "chip.nutri": "I want to improve my diet: options?", "chip.activity": "What types of physical activity do you have?", "chip.prices": "What are your prices?",
  "val.nameRequired": "Name is required", "val.maxChars": "Maximum {n} characters", "val.invalidEmail": "Invalid email", "val.messageRequired": "Message is required", "val.invalidService": "Invalid service", "val.invalidProfessional": "Invalid professional", "val.invalidDate": "Invalid date", "val.invalidTime": "Invalid time", "val.nameBooking": "Name is required", "val.writeComment": "Write a comment", "val.campaignName": "Name is required",
  "status.confirmed": "Confirmed", "status.rescheduled": "Rescheduled", "status.cancelled_by_client": "Cancelled", "status.cancelled_by_admin": "Cancelled by admin", "status.completed": "Completed", "status.attended": "Attended", "status.no_show": "No show", "status.pending": "Pending",
  "catDesc.Fisioterapia": "Professional recovery and rehabilitation", "catDesc.Podología": "Foot health and well-being", "catDesc.Nutrición": "Personalised nutrition plans", "catDesc.Actividad Física": "Individualised therapeutic exercise",
  "catDescLong.Fisioterapia": "Prevention, recovery and rehabilitation through therapeutic treatments aimed at restoring proper body function.", "catDescLong.Podología": "Your feet are the foundation of your body. Specialised treatments to keep them healthy and pain-free.", "catDescLong.Nutrición": "Personalised nutrition plans to improve your well-being and achieve your health goals.", "catDescLong.Actividad Física": "Individualised therapeutic exercise sessions guided by professionals to improve your quality of life.",

  // ── ScrollScrub Hero ──
  "scrubHero.clinic": "Clínica", "scrubHero.name": "Baluarte", "scrubHero.subtitle": "A space in motion in the heart of Pamplona", "scrubHero.categories": "Physiotherapy · Podiatry · Nutrition · Physical Activity", "scrubHero.cta": "Book Appointment", "scrubHero.explore": "Our services",

  // ── Insurance ──
  "ins.title": "Health insurance", "ins.toggle": "I have insurance", "ins.company": "Insurance company", "ins.companyPlaceholder": "Select company", "ins.policyNumber": "Policy number", "ins.policyPlaceholder": "Policy number", "ins.document": "Policy (document)", "ins.uploaded": "Policy uploaded", "ins.view": "View", "ins.validated": "Policy validated by the clinic", "ins.pendingValidation": "Pending validation", "ins.uploadHint": "Upload your policy (PDF, JPG or PNG, max 10MB)", "ins.uploading": "Uploading...", "ins.analyzing": "Analysing policy with AI...", "ins.aiExtracting": "AI is extracting your policy data automatically...", "ins.policyAnalyzed": "✅ Policy analysed", "ins.dataExtracted": "Data from {company} extracted successfully.", "ins.viewerTitle": "Insurance policy", "ins.saveError": "Error saving", "ins.dataUpdated": "Insurance data updated", "ins.fileTooLarge": "File too large", "ins.maxSize": "Maximum 10MB", "ins.unsupportedFormat": "Unsupported format", "ins.useFormats": "Use PDF, JPG or PNG", "ins.uploadError": "Error uploading file",

  // ── Client Financials ──
  "fin.payments": "Payments", "fin.invoices": "Invoices", "fin.noPayments": "No payments recorded.", "fin.noInvoices": "No invoices.", "fin.pending": "Pending", "fin.completed": "Completed", "fin.failed": "Failed", "fin.refunded": "Refunded", "fin.draft": "Draft", "fin.sent": "Sent", "fin.paid": "Paid", "fin.noPackages": "You have no active packages.", "fin.package": "Package", "fin.used": "Used", "fin.remaining": "Remaining", "fin.expires": "Expires", "fin.active": "Active", "fin.expired": "Expired", "fin.exhausted": "Exhausted", "fin.bookSession": "Book session", "fin.sessionHistory": "Session history", "fin.noSessions": "No sessions recorded yet.", "fin.session": "Session",
  "booking.bonoMessage": "To purchase this bundle, access your client panel at My Account → My Packages.", "booking.bonoHint": "Get it from your client panel",

  // ── Client Feedback ──
  "fb.pendingTitle": "Pending reviews", "fb.pendingDesc": "Tell us about your experience after your last visit.", "fb.rate": "Rate", "fb.overallRating": "Overall rating", "fb.serviceQuality": "Service quality", "fb.staffAttention": "Professional attention", "fb.commentOptional": "Comment (optional)", "fb.commentPlaceholder": "How was your visit?", "fb.sending": "Sending...", "fb.sendRating": "Send rating", "fb.cancelRating": "Cancel", "fb.thankYou": "Thank you for your rating!", "fb.errorSending": "Error sending rating", "fb.sentTitle": "Sent reviews", "fb.service": "Service", "fb.noPending": "You have no pending reviews.", "fb.afterAppt": "After each completed appointment you'll receive a feedback request.",

  // ── Client Data Export (GDPR) ──
  "gdpr.title": "Your personal data", "gdpr.desc": "In accordance with GDPR, you can download a copy of all your stored personal data.", "gdpr.downloadCta": "Download my data", "gdpr.downloadDesc": "CSV file compatible with Excel / spreadsheets", "gdpr.gathering": "Gathering your data...", "gdpr.exported": "Data downloaded successfully", "gdpr.exportError": "Error exporting data", "gdpr.sectionProfile": "--- PROFILE ---", "gdpr.sectionAppointments": "--- APPOINTMENTS ---", "gdpr.sectionPayments": "--- PAYMENTS ---", "gdpr.sectionReviews": "--- REVIEWS ---", "gdpr.deleteTitle": "Request data deletion", "gdpr.deleteDesc": "You can request the complete deletion of your account and personal data. An administrator will review your request.", "gdpr.deleteCta": "Request deletion", "gdpr.deleteDialogTitle": "Request data deletion", "gdpr.deleteDialogDesc": "This action is irreversible. An administrator will process your request under GDPR.", "gdpr.reasonPlaceholder": "Reason (optional)", "gdpr.cancel": "Cancel", "gdpr.sending": "Sending...", "gdpr.confirmDelete": "Confirm request", "gdpr.deleteSent": "Deletion request sent. We'll contact you soon.", "gdpr.deleteError": "Error sending request",

  // ── Authorization Upload ──
  "authUpload.viewAuth": "View authorisation", "authUpload.viewAuthShort": "Auth.", "authUpload.dialogTitle": "Authorisation", "authUpload.deleted": "Authorisation deleted", "authUpload.uploaded": "Authorisation uploaded successfully", "authUpload.saveError": "Error saving authorisation", "authUpload.uploadError": "Error uploading", "authUpload.fileTooLarge": "File too large", "authUpload.maxSize": "Maximum 10MB", "authUpload.uploading": "Uploading...", "authUpload.uploadShort": "Upload auth.", "authUpload.upload": "Upload authorisation",

  // ── Booking page ──
  "booking.pageTitle": "Book Appointment", "booking.errorValidation": "Validation error", "booking.invalidData": "Invalid data", "booking.loadError": "We couldn't load treatments right now. Press retry.", "booking.bookError": "Could not book the appointment.",

  // ── Specialty names ──
  "spec.terapiasManuales": "Manual therapy", "spec.terapiasManualesDesc": "Improve joint mobility, relieve contractures and reduce pain through manipulation and mobilisation techniques.",
  "spec.drenajeLinfatico": "Lymphatic drainage", "spec.drenajeLinfaticoDesc": "Reduces swelling and improves lymphatic circulation with gentle, rhythmic massage. Ideal after surgery or for tired legs.",
  "spec.puncionSeca": "Dry needling", "spec.puncionSecaDesc": "Deactivates muscular trigger points with a fine needle, quickly and effectively relieving pain and muscle tension.",
  "spec.fisioReumatologica": "Rheumatological physiotherapy", "spec.fisioReumatologicaDesc": "Specialised treatment for arthritis, arthrosis, fibromyalgia and other rheumatic diseases limiting your mobility.",
  "spec.fisioOrtopedica": "Orthopaedic physiotherapy", "spec.fisioOrtopedicaDesc": "Rehabilitation of fractures, sprains, tendinitis and post-surgical injuries to restore full functionality.",
  "spec.ejercicioTerapeutico": "Therapeutic exercise", "spec.ejercicioTerapeuticoDesc": "Personalised exercise programme designed to strengthen, prevent relapse and improve your quality of life.",
  "spec.unasCallosidades": "Nails & calluses", "spec.unasCallosidadesDesc": "Professional treatment of ingrown nails, thickened nails, corns and calluses to keep your feet healthy and pain-free.",
  "spec.reconstruccionUnas": "Nail reconstruction", "spec.reconstruccionUnasDesc": "Aesthetic and functional restoration of nails damaged by trauma, fungus or other conditions.",
  "spec.podologiaDeportiva": "Sports podiatry", "spec.podologiaDeportivaDesc": "Biomechanical assessment and specialised foot care for athletes to prevent injuries and optimise performance.",
  "spec.plantillas": "Custom insoles", "spec.plantillasDesc": "Design and manufacture of bespoke insoles to correct gait, relieve pain and improve your walking posture.",
  "spec.cirugiaPodologica": "Podiatric surgery", "spec.cirugiaPodologicaDesc": "Minor outpatient procedures to resolve problems such as recurrent ingrown toenails under local anaesthesia.",
  "spec.pieDiabetico": "Diabetic foot care", "spec.pieDiabeticoDesc": "Preventive check-ups and specialised treatment to protect the feet of people with diabetes and avoid complications.",
  "spec.primeraConsulta": "First consultation", "spec.primeraConsultaDesc": "Complete assessment of your nutritional status, clinical history and eating habits to design a personalised plan.",
  "spec.seguimiento": "Follow-up consultation", "spec.seguimientoDesc": "Review of your progress, adjustment of your nutrition plan and resolution of queries to ensure lasting results.",
  "spec.ninosAdolescentes": "Children & teenagers", "spec.ninosAdolescentesDesc": "Adapted activities to promote healthy habits, coordination and motor development from an early age.",
  "spec.stretching": "Stretching", "spec.stretchingDesc": "Guided stretching sessions to improve flexibility, prevent injuries and relieve muscle tension.",
  "spec.familia": "Family physical activity", "spec.familiaDesc": "Fun sessions for the whole family that encourage shared exercise and healthy bonds.",
  "spec.preparacionDeportiva": "Sports training", "spec.preparacionDeportivaDesc": "Individualised functional training to improve athletic performance and prevent injuries.",
  "spec.pilates": "Pilates", "spec.pilatesDesc": "Controlled reformer exercises to strengthen the core, improve posture and gain flexibility.",
  "spec.gimnasiaMantenimiento": "Maintenance gymnastics", "spec.gimnasiaMantenimientoDesc": "Adapted sessions to maintain mobility, strength and balance, especially for older adults.",
  "spec.posturologia": "Posturology", "spec.posturologiaDesc": "Comprehensive postural analysis and correction to prevent chronic back, neck and joint pain.",

  // ── Service name translations ──
  "svcName.Terapias manuales": "Manual therapies", "svcName.Drenaje linfático": "Lymphatic drainage", "svcName.Ejercicio terapéutico": "Therapeutic exercise", "svcName.Fisioterapia ortopédica": "Orthopaedic physiotherapy", "svcName.Fisioterapia reumatológica": "Rheumatology physiotherapy", "svcName.Punción seca": "Dry needling",
  "svcName.Cirugía podológica": "Podiatric surgery", "svcName.Cuidado pie diabético": "Diabetic foot care", "svcName.Plantillas personalizadas": "Custom insoles", "svcName.Podología deportiva": "Sports podiatry", "svcName.Reconstrucción de uñas": "Nail reconstruction", "svcName.Uñas y callosidades": "Nails & calluses",
  "svcName.Primera consulta": "Initial consultation", "svcName.Consulta de seguimiento": "Follow-up consultation",
  "svcName.Actividad física en familia": "Family physical activity", "svcName.Gimnasia de mantenimiento": "Maintenance gymnastics", "svcName.Niños y adolescentes": "Children & teens", "svcName.Pilates": "Pilates", "svcName.Posturología": "Posturology", "svcName.Preparación deportiva": "Sports conditioning", "svcName.Stretching": "Stretching",

  // ── Category name translations ──
  "catName.Fisioterapia": "Physiotherapy", "catName.Podología": "Podiatry", "catName.Nutrición": "Nutrition", "catName.Actividad Física": "Physical Activity",

  // ── Admin shared ──
  "adm.loading": "Loading...", "adm.saving": "Saving...", "adm.save": "Save", "adm.cancel": "Cancel", "adm.delete": "Delete", "adm.edit": "Edit", "adm.create": "Create", "adm.new": "New", "adm.active": "Active", "adm.inactive": "Inactive", "adm.noData": "No data", "adm.search": "Search by name or email...", "adm.all": "All", "adm.name": "Name", "adm.email": "Email", "adm.phone": "Phone", "adm.address": "Address", "adm.description": "Description", "adm.notes": "Notes", "adm.date": "Date", "adm.status": "Status", "adm.actions": "Actions", "adm.close": "Close", "adm.confirm": "Confirm", "adm.send": "Send", "adm.reply": "Reply", "adm.export": "Export", "adm.refresh": "Refresh", "adm.add": "Add", "adm.remove": "Remove", "adm.back": "Back", "adm.yes": "Yes", "adm.no": "No", "adm.open": "Open", "adm.closed": "Closed", "adm.from": "From", "adm.to": "To", "adm.reason": "Reason", "adm.optional": "optional", "adm.required": "required", "adm.noResults": "No results found", "adm.errorSaving": "Error saving", "adm.errorLoading": "Error loading", "adm.updated": "Updated", "adm.created": "Created", "adm.deleted": "Deleted",

  // ── Appointments ──
  "adm.appts.title": "Appointments", "adm.appts.upcoming": "Upcoming", "adm.appts.past": "Past", "adm.appts.cancelled": "Cancelled", "adm.appts.attended": "Attended", "adm.appts.noShow": "No show", "adm.appts.cancelAppt": "Cancel", "adm.appts.noAppts": "No appointments with this filter.", "adm.appts.authUploaded": "Authorisation uploaded", "adm.appts.noAuth": "No authorisation", "adm.appts.viewPolicy": "View policy", "adm.appts.validated": "Validated", "adm.appts.validatePolicy": "Validate policy", "adm.appts.insured": "Insured", "adm.appts.policyOk": "Policy validated ✅", "adm.appts.validationRemoved": "Validation removed", "adm.appts.updateError": "Error updating", "adm.appts.deleteConfirm": "Cancel this appointment?", "adm.appts.sendSurvey": "Send survey",

  // ── Services ──
  "adm.svc.title": "Services", "adm.svc.new": "New service", "adm.svc.edit": "Edit service", "adm.svc.duration": "Duration (minutes)", "adm.svc.price": "Price (€)", "adm.svc.category": "Category", "adm.svc.noServices": "No services. Create the first one.", "adm.svc.updated": "Service updated", "adm.svc.created": "Service created", "adm.svc.deactivated": "Service deactivated", "adm.svc.deleteConfirm": "Delete this service?",

  // ── Messages ──
  "adm.msg.title": "Contact messages", "adm.msg.noMessages": "No messages yet", "adm.msg.replyTo": "Reply to", "adm.msg.replyPlaceholder": "Write your reply...", "adm.msg.sendReply": "Send reply", "adm.msg.sending": "Sending...", "adm.msg.sent": "Reply sent", "adm.msg.sentTo": "Email sent to", "adm.msg.sendError": "Error sending",

  // ── Professionals ──
  "adm.prof.title": "Professionals", "adm.prof.subtitle": "Manage team, services and schedules", "adm.prof.add": "Add professional", "adm.prof.edit": "Edit professional", "adm.prof.new": "New professional", "adm.prof.noProfessionals": "No professionals yet.", "adm.prof.addFirst": "Add the first one", "adm.prof.role": "Role / Title", "adm.prof.specialties": "Specialties (comma-separated)", "adm.prof.bio": "Bio", "adm.prof.bioPlaceholder": "Short professional description...", "adm.prof.assignedServices": "Assigned services", "adm.prof.weeklySchedule": "Weekly schedule", "adm.prof.addSlot": "Add slot", "adm.prof.updated": "Professional updated", "adm.prof.created": "Professional created", "adm.prof.deleted": "Professional deleted", "adm.prof.deleteConfirm": "Delete this professional?", "adm.prof.nameRequired": "Name is required",

  // ── Calendar ──
  "adm.cal.title": "Calendar", "adm.cal.blockTime": "Block time", "adm.cal.blocked": "Blocked", "adm.cal.appointments": "Appointments", "adm.cal.noAppts": "No appointments for this day.", "adm.cal.blockAdded": "Block added", "adm.cal.blockRemoved": "Block removed", "adm.cal.cancelConfirm": "Cancel this appointment?", "adm.cal.cancelled": "Appointment cancelled", "adm.cal.confirmed": "Confirmed", "adm.cal.pending": "Pending",

  // ── Business Hours ──
  "adm.hours.title": "Weekly schedule", "adm.hours.saved": "Hours saved", "adm.hours.saveCta": "Save hours",
  "adm.day.0": "Sunday", "adm.day.1": "Monday", "adm.day.2": "Tuesday", "adm.day.3": "Wednesday", "adm.day.4": "Thursday", "adm.day.5": "Friday", "adm.day.6": "Saturday",

  // ── Invoices ──
  "adm.inv.title": "Invoices", "adm.inv.new": "New invoice", "adm.inv.noInvoices": "No invoices.", "adm.inv.clientName": "Client name", "adm.inv.clientEmail": "Client email", "adm.inv.clientFiscalId": "Client Tax ID", "adm.inv.clientAddress": "Client fiscal address", "adm.inv.subtotal": "Subtotal", "adm.inv.tax": "Tax", "adm.inv.total": "Total", "adm.inv.issued": "Issued", "adm.inv.created": "Invoice created", "adm.inv.createError": "Error creating invoice", "adm.inv.sendCta": "Send", "adm.inv.markPaid": "Mark as paid", "adm.inv.draft": "Draft", "adm.inv.sent": "Sent", "adm.inv.paid": "Paid", "adm.inv.overdue": "Overdue", "adm.inv.cancelled": "Cancelled", "adm.inv.emitterInfo": "Emitter data (loaded from settings)", "adm.inv.items": "Invoice lines", "adm.inv.addItem": "Add line", "adm.inv.description": "Description", "adm.inv.qty": "Qty", "adm.inv.unitPrice": "Unit price", "adm.inv.lineTotal": "Line total", "adm.inv.removeItem": "Remove", "adm.inv.notes": "Notes", "adm.inv.type": "Invoice type", "adm.inv.typeDirect": "Direct (client)", "adm.inv.typeInsurance": "Insurance", "adm.inv.insurerName": "Insurer name", "adm.inv.pricesIncludeVat": "Service prices already include tax", "adm.inv.services": "Services", "adm.inv.thisMonth": "This month", "adm.inv.thisWeek": "This week", "adm.inv.createInvoice": "Create invoice",
  "adm.set.fiscal": "Fiscal data", "adm.set.fiscalDesc": "This data will appear as emitter on invoices", "adm.set.fiscalName": "Legal name", "adm.set.fiscalId": "Tax ID", "adm.set.fiscalAddress": "Fiscal address",

  // ── Payments ──
  "adm.pay.title": "Payments", "adm.pay.revenueToday": "Revenue today", "adm.pay.revenueMonth": "Revenue this month", "adm.pay.pending": "Pending payments", "adm.pay.deposits": "Deposits collected", "adm.pay.refundsIssued": "Refunds issued", "adm.pay.payments": "Payments", "adm.pay.refunds": "Refunds", "adm.pay.noPayments": "No payments recorded yet. Payments will appear here when Stripe is connected.", "adm.pay.noRefunds": "No refunds recorded.", "adm.pay.deposit": "Deposit", "adm.pay.noReason": "No reason", "adm.pay.pPending": "Pending", "adm.pay.pCompleted": "Completed", "adm.pay.pFailed": "Failed", "adm.pay.pRefunded": "Refunded", "adm.pay.pPartial": "Partial refund", "adm.pay.processed": "Processed",

  // ── Reviews ──
  "adm.rev.title": "Patient reviews", "adm.rev.pending": "Pending", "adm.rev.approved": "Approved", "adm.rev.rejected": "Rejected", "adm.rev.all": "All", "adm.rev.approve": "Approve", "adm.rev.reject": "Reject", "adm.rev.disapprove": "Disapprove", "adm.rev.deleteReview": "Delete", "adm.rev.noReviews": "No reviews", "adm.rev.anonymous": "Anonymous", "adm.rev.approvedLabel": "Approved", "adm.rev.rejectedLabel": "Rejected", "adm.rev.pendingLabel": "Pending", "adm.rev.reviewApproved": "Review approved", "adm.rev.reviewRejected": "Review rejected", "adm.rev.reviewDeleted": "Review deleted", "adm.rev.updateError": "Error updating", "adm.rev.deleteError": "Error deleting",
  "adm.quot.pricesIncludeVat": "Prices already include VAT",

  // ── Waitlist ──
  "adm.wait.title": "Waitlist", "adm.wait.waiting": "waiting", "adm.wait.noEntries": "No entries in the waitlist.", "adm.wait.noEntriesHint": "Clients will be able to join when there is no availability.", "adm.wait.notify": "Notify", "adm.wait.book": "Book", "adm.wait.preference": "Preference", "adm.wait.registered": "Registered", "adm.wait.statusUpdated": "Status updated", "adm.wait.wWaiting": "Waiting", "adm.wait.wNotified": "Notified", "adm.wait.wBooked": "Booked", "adm.wait.wExpired": "Expired", "adm.wait.wCancelled": "Cancelled",

  // ── Reminders ──
  "adm.rem.title": "Reminders", "adm.rem.subtitle": "Configure automatic appointment reminders", "adm.rem.new": "New", "adm.rem.noReminders": "No reminders configured.", "adm.rem.noRemindersHint": "Set up email reminders 2h, 24h or 48h before the appointment.", "adm.rem.channel": "Channel", "adm.rem.hoursBefore": "Hours before", "adm.rem.subject": "Email subject", "adm.rem.body": "Message body", "adm.rem.bodyPlaceholder": "Hello {name}, we remind you of your {service} appointment on {date} at {time}.", "adm.rem.subjectPlaceholder": "Your appointment reminder", "adm.rem.created": "Reminder configured", "adm.rem.deleted": "Reminder deleted", "adm.rem.createCta": "Create reminder", "adm.rem.smsFuture": "SMS (future)", "adm.rem.whatsappFuture": "WhatsApp (future)",

  // ── Campaigns ──
  "adm.camp.title": "Marketing Campaigns", "adm.camp.subtitle": "Manage email, SMS and reactivation campaigns", "adm.camp.new": "New campaign", "adm.camp.create": "Create campaign", "adm.camp.noResults": "No campaigns created", "adm.camp.campaignName": "Campaign name", "adm.camp.subject": "Email subject", "adm.camp.content": "Message content (HTML)...", "adm.camp.totalCampaigns": "Total campaigns", "adm.camp.sentCampaigns": "Sent", "adm.camp.drafts": "Drafts", "adm.camp.scheduled": "Scheduled", "adm.camp.campaign": "Campaign", "adm.camp.type": "Type", "adm.camp.sentCount": "Sent", "adm.camp.openedCount": "Opened", "adm.camp.sending": "Sending...", "adm.camp.sendCta": "Send", "adm.camp.created": "Campaign created", "adm.camp.sent": "Campaign sent", "adm.camp.createError": "Error creating campaign", "adm.camp.smsSoon": "SMS (soon)", "adm.camp.whatsappSoon": "WhatsApp (soon)", "adm.camp.autoReactivation": "Automatic reactivation",
  "adm.camp.recipients": "Recipients", "adm.camp.allClients": "All clients", "adm.camp.byTag": "By tag", "adm.camp.selectTag": "Select tag", "adm.camp.selectedCount": "selected recipients", "adm.camp.preview": "Preview", "adm.camp.editor": "Editor", "adm.camp.addBlock": "Add block", "adm.camp.blockHeading": "Heading", "adm.camp.blockText": "Text", "adm.camp.blockImage": "Image", "adm.camp.blockButton": "Button", "adm.camp.blockDivider": "Divider", "adm.camp.btnText": "Button text", "adm.camp.btnUrl": "Button URL", "adm.camp.imgUrl": "Image URL", "adm.camp.imgAlt": "Alt text", "adm.camp.headingText": "Heading text", "adm.camp.paragraphText": "Write your text here...", "adm.camp.deleteBlock": "Delete block", "adm.camp.moveUp": "Move up", "adm.camp.moveDown": "Move down", "adm.camp.confirmSend": "Send this campaign to {n} recipients?", "adm.camp.noRecipients": "No recipients for this campaign", "adm.camp.editCampaign": "Edit campaign", "adm.camp.recipientsSummary": "Will be sent to {n} clients",

  // ── Loyalty ──
  "adm.loy.title": "Loyalty & Referrals", "adm.loy.subtitle": "Points programme, referrals and feedback", "adm.loy.programActive": "Programme active", "adm.loy.pointsIssued": "Points issued", "adm.loy.pointsRedeemed": "Points redeemed", "adm.loy.references": "Referrals", "adm.loy.feedbackReceived": "Feedback received", "adm.loy.points": "Points", "adm.loy.referrals": "Referrals", "adm.loy.feedback": "Feedback", "adm.loy.config": "Settings", "adm.loy.source": "Source", "adm.loy.code": "Code", "adm.loy.referredEmail": "Referred email", "adm.loy.rewardPoints": "Points", "adm.loy.rating": "Rating", "adm.loy.serviceRating": "Service", "adm.loy.staffRating": "Staff", "adm.loy.comment": "Comment", "adm.loy.noPoints": "No point movements", "adm.loy.noReferrals": "No referrals", "adm.loy.noFeedback": "No feedback", "adm.loy.configTitle": "Programme settings", "adm.loy.perBooking": "Points per booking", "adm.loy.perEuro": "Points per € spent", "adm.loy.perReferral": "Points per referral", "adm.loy.redemptionRate": "Redemption rate (€/point)", "adm.loy.configUpdated": "Settings updated", "adm.loy.saveConfig": "Save settings",
  "client.referralCode": "Your referral code", "client.shareReferral": "Share this code with friends and earn benefits when they sign up", "client.copied": "Copied!", "client.copyCode": "Copy code", "client.copyLink": "Copy link", "client.shareWhatsApp": "Share via WhatsApp", "client.myPoints": "My points", "client.referralTitle": "Invite & earn",
  "client.whatsappShareText": "I recommend Clínica Baluarte! Use my code to sign up:",
  "client.referralsMade": "People referred", "client.referralsConverted": "people signed up with your code",
  "client.freeSessionProgress": "Free session progress", "client.freeSessionsEarned": "{n} free session(s) earned", "client.freeSessionHint": "Refer 4 people to get a free session",
  "client.pointsDesc": "Points earned from referrals and bookings",
  "client.howItWorks": "How does it work?",
  "client.rewardInsured1": "Share your code with friends or family",
  "client.rewardInsured2": "For every 4 people who sign up with your code, you get a free session",
  "client.rewardInsured3": "Your referral also gets welcome points when they sign up",
  "client.rewardUninsured1": "Share your code with friends or family",
  "client.rewardUninsured2": "You earn 100 points for each person who signs up with your code",
  "client.rewardUninsured3": "Your referral also gets 50 welcome points",
  "client.referralHistory": "Referral history", "client.referralConverted": "Signed up", "client.referralPending": "Pending",

  // ── Quotes ──
  "adm.quot.title": "Quotes", "adm.quot.new": "New quote", "adm.quot.noQuotes": "No quotes yet.", "adm.quot.validUntil": "Valid until", "adm.quot.sendCta": "Send", "adm.quot.accept": "Accept", "adm.quot.validity": "Validity (days)", "adm.quot.services": "Services", "adm.quot.created": "Quote created", "adm.quot.createError": "Error creating quote", "adm.quot.draft": "Draft", "adm.quot.sent": "Sent", "adm.quot.viewed": "Viewed", "adm.quot.accepted": "Accepted", "adm.quot.expired": "Expired", "adm.quot.rejected": "Rejected", "adm.quot.totalQuotes": "Total quotes", "adm.quot.pending": "Pending", "adm.quot.conversion": "Conversion", "adm.quot.thisMonth": "This month", "adm.quot.thisWeek": "This week", "adm.quot.remaining": "remaining", "adm.quot.sendQuote": "Send quote", "adm.quot.createFromCRM": "Create quotes from the client profile in CRM",

  // ── Packages ──
  "adm.pkg.title": "Packages", "adm.pkg.new": "New package", "adm.pkg.edit": "Edit package", "adm.pkg.packages": "Packages", "adm.pkg.purchases": "Purchases", "adm.pkg.noPackages": "No packages created. Create the first one.", "adm.pkg.noPurchases": "No package purchases.", "adm.pkg.sessions": "Sessions", "adm.pkg.validityDays": "Validity (days)", "adm.pkg.validFor": "Valid for", "adm.pkg.days": "days", "adm.pkg.used": "Used", "adm.pkg.remaining": "Remaining", "adm.pkg.deactivate": "Deactivate", "adm.pkg.activate": "Activate", "adm.pkg.updated": "Package updated", "adm.pkg.created": "Package created", "adm.pkg.saveChanges": "Save changes", "adm.pkg.createPkg": "Create package", "adm.pkg.active": "Active", "adm.pkg.expired": "Expired", "adm.pkg.exhausted": "Exhausted",

  // ── Automation ──
  "adm.auto.title": "Automations", "adm.auto.subtitle": "Automatic rules based on business events", "adm.auto.runNow": "Run now", "adm.auto.running": "Running...", "adm.auto.newRule": "New rule", "adm.auto.createRule": "Create automation", "adm.auto.ruleName": "Rule name", "adm.auto.trigger": "Trigger event", "adm.auto.action": "Action to execute", "adm.auto.activeRules": "Active rules", "adm.auto.totalExecs": "Total executions", "adm.auto.todayLogs": "Today's logs", "adm.auto.rules": "Rules", "adm.auto.log": "History", "adm.auto.executions": "Executions", "adm.auto.noRules": "No automation rules", "adm.auto.noLogs": "No execution logs", "adm.auto.destination": "Destination", "adm.auto.created": "Automation created", "adm.auto.createError": "Error creating automation", "adm.auto.executed": "Automations executed successfully",
  "adm.auto.tApptCompleted": "Appointment attended", "adm.auto.tApptCancelled": "Appointment cancelled", "adm.auto.tNoShow": "No-show", "adm.auto.tQuoteSent": "Quote sent", "adm.auto.tQuoteNotAccepted": "Quote not accepted (X days)", "adm.auto.tQuoteExpiring": "Quote about to expire", "adm.auto.tNoBooking": "No booking in X days", "adm.auto.tPkgLow": "Package with few sessions",
  "adm.auto.aSendEmail": "Send email", "adm.auto.aReviewReq": "Request review", "adm.auto.aReactivation": "Send reactivation", "adm.auto.aNextSlot": "Offer next slot", "adm.auto.aRenewal": "Suggest package renewal", "adm.auto.aTimeline": "Log in timeline",

  // ── Exports ──
  "adm.exp.title": "Exports", "adm.exp.subtitle": "Export system data in CSV, Excel or PDF", "adm.exp.bookings": "Bookings", "adm.exp.bookingsDesc": "Appointment and booking history", "adm.exp.clients": "Clients", "adm.exp.clientsDesc": "Client database", "adm.exp.revenue": "Revenue", "adm.exp.revenueDesc": "Payment and revenue report", "adm.exp.services": "Services", "adm.exp.servicesDesc": "Catalogue and service performance", "adm.exp.reviews": "Reviews", "adm.exp.reviewsDesc": "Client ratings", "adm.exp.noDataExport": "No data to export", "adm.exp.exported": "Exported {n} records", "adm.exp.error": "Error exporting", "adm.exp.configExport": "Configure export", "adm.exp.dateRange": "Date range", "adm.exp.custom": "Custom", "adm.exp.from": "From", "adm.exp.to": "To", "adm.exp.preview": "Preview", "adm.exp.previewTitle": "Preview", "adm.exp.rows": "records", "adm.exp.rowsExported": "records exported", "adm.exp.showingFirst": "Showing first",

  // ── Analytics ──
  "adm.an.title": "Analytics", "adm.an.subtitle": "Business performance metrics", "adm.an.last7": "Last 7 days", "adm.an.last30": "Last 30 days", "adm.an.last90": "Last 90 days", "adm.an.lastYear": "Last year", "adm.an.healthScore": "Business Health Score", "adm.an.healthDesc": "Based on volume, cancellations, no-shows and satisfaction", "adm.an.excellent": "Excellent", "adm.an.good": "Good", "adm.an.needsAttention": "Needs attention",
  "adm.an.bookings": "Bookings", "adm.an.completed": "Completed", "adm.an.revenue": "Revenue", "adm.an.today": "Today", "adm.an.cancRate": "% Cancellation", "adm.an.rating": "Rating",
  "adm.an.tabBookings": "Bookings", "adm.an.tabRevenue": "Revenue", "adm.an.tabOps": "Operations", "adm.an.tabSatisfaction": "Satisfaction", "adm.an.tabClients": "Clients", "adm.an.tabInsights": "AI Insights", "adm.an.tabAutomation": "Automation",
  "adm.an.bookingsPerDay": "Bookings per day", "adm.an.bookingsPerService": "Bookings per service", "adm.an.bookingsPerProf": "Bookings per professional", "adm.an.revenuePerService": "Revenue per service", "adm.an.peakHours": "Peak hours", "adm.an.apptStatus": "Appointment status", "adm.an.completedLabel": "Completed", "adm.an.cancelledLabel": "Cancelled", "adm.an.pendingLabel": "Pending",
  "adm.an.satByService": "Satisfaction by service", "adm.an.satByProf": "Satisfaction by professional", "adm.an.ratingSummary": "Ratings summary", "adm.an.byService": "By service", "adm.an.byProf": "By professional", "adm.an.noSatData": "No satisfaction data", "adm.an.generalRating": "Overall rating", "adm.an.serviceRating": "Service rating", "adm.an.profRating": "Professional rating",
  "adm.an.totalClients": "Total clients", "adm.an.riskClients": "At-risk clients", "adm.an.churnRisk": "Churn risk", "adm.an.noShowGlobal": "Global no-show rate", "adm.an.churnDetail": "Churn risk", "adm.an.clients": "clients",
  "adm.an.aiAnalysis": "AI-generated analysis of the last 90 days of data", "adm.an.regenerate": "Regenerate", "adm.an.regenerating": "Regenerating insights...", "adm.an.analyzing": "Analysing business data...", "adm.an.insights": "Actionable insights", "adm.an.topServices": "🔝 Most profitable services", "adm.an.underperforming": "⚠️ Services needing attention", "adm.an.allGood": "All services are performing well", "adm.an.predictions": "Predictions and recommendations", "adm.an.busyPeriods": "Expected peak periods", "adm.an.revenueTrend": "Revenue trend", "adm.an.recCampaigns": "Recommended campaigns", "adm.an.noInsights": "Could not generate insights. Click \"Regenerate\" to try again.",
  "adm.an.aiUsage": "AI and automation usage", "adm.an.noAiData": "No AI usage data for this period", "adm.an.autoMetrics": "Automation metrics", "adm.an.aiConvs": "AI conversations", "adm.an.voiceConvs": "Voice conversations", "adm.an.autoEmails": "Automated emails", "adm.an.quotesGen": "Quotes generated", "adm.an.noServiceLabel": "No service", "adm.an.unassigned": "Unassigned",

  // ── CRM ──
  "adm.crm.title": "CRM — Clients", "adm.crm.registered": "registered clients", "adm.crm.segment": "Segment", "adm.crm.tag": "Tag", "adm.crm.allTags": "All", "adm.crm.vip": "VIP (10+ visits)", "adm.crm.new": "New", "adm.crm.risky": "At risk", "adm.crm.noName": "No name", "adm.crm.riskLabel": "Risk", "adm.crm.appts": "appointments", "adm.crm.noClients": "No clients found", "adm.crm.selectClient": "Select a client to view their profile",
  "adm.crm.tabProfile": "Profile", "adm.crm.tabTimeline": "Timeline", "adm.crm.tabAppts": "Appointments", "adm.crm.tabPayments": "Payments", "adm.crm.tabNotes": "Notes",
  "adm.crm.emailLabel": "Email:", "adm.crm.phoneLabel": "Phone:", "adm.crm.addressLabel": "Address:", "adm.crm.insuranceLabel": "Insurance:", "adm.crm.apptsLabel": "Appointments", "adm.crm.completedLabel": "Completed", "adm.crm.revenueLabel": "Revenue",
  "adm.crm.noTimeline": "No timeline events", "adm.crm.noAppts": "No appointments", "adm.crm.noPayments": "No payments", "adm.crm.amount": "Amount", "adm.crm.method": "Method", "adm.crm.service": "Service", "adm.crm.professional": "Professional",
  "adm.crm.writeNote": "Write internal note...", "adm.crm.addNote": "Add", "adm.crm.noteAdded": "Note added", "adm.crm.noteError": "Error adding note",

  // ── Settings ──
  "adm.set.title": "Settings", "adm.set.subtitle": "Manage general business settings",
  "adm.set.tabGeneral": "General", "adm.set.tabBranding": "Branding", "adm.set.tabProviders": "Providers", "adm.set.tabPlan": "Plan", "adm.set.tabAudit": "Audit",
  "adm.set.businessInfo": "Business information", "adm.set.web": "Website", "adm.set.timezone": "Timezone", "adm.set.currency": "Currency", "adm.set.languages": "Languages",
  "adm.set.branding": "White-label / Branding", "adm.set.brandingDesc": "Customise business appearance", "adm.set.logoUrl": "Logo URL", "adm.set.primaryColor": "Primary colour", "adm.set.secondaryColor": "Secondary colour",
  "adm.set.providers": "Service providers", "adm.set.providersDesc": "Configure AI, email, voice and automation providers", "adm.set.aiMain": "Main AI", "adm.set.aiMainDesc": "AI provider", "adm.set.aiFallback": "AI Fallback", "adm.set.aiFallbackDesc": "Alternative AI provider", "adm.set.emailProv": "Email", "adm.set.emailProvDesc": "Email sending provider", "adm.set.voiceProv": "Voice", "adm.set.voiceProvDesc": "Text-to-speech provider", "adm.set.smsProv": "SMS", "adm.set.smsProvDesc": "SMS messaging provider", "adm.set.calProv": "Calendar", "adm.set.calProvDesc": "External calendar sync", "adm.set.provActive": "Active", "adm.set.provNotConfigured": "Not configured", "adm.set.usage": "Usage",
  "adm.set.planTitle": "Plan and limits", "adm.set.professionals": "Professionals", "adm.set.locations": "Locations", "adm.set.services": "Services", "adm.set.bookingsMonth": "Bookings/month", "adm.set.aiCallsMonth": "AI calls/month", "adm.set.emailsMonth": "Emails/month", "adm.set.noPlan": "No plan configured. Default limits will apply.",
  "adm.set.auditTitle": "Audit log", "adm.set.auditDesc": "Last 50 administrative actions", "adm.set.noAudit": "No logs yet", "adm.set.updated": "Settings updated",

  // ── Blog ──
  "adm.blog.title": "Blog", "adm.blog.subtitle": "Manage articles and SEO content", "adm.blog.new": "New article", "adm.blog.edit": "Edit article", "adm.blog.noArticles": "No articles yet", "adm.blog.titleLabel": "Title", "adm.blog.slug": "Slug", "adm.blog.excerpt": "Excerpt", "adm.blog.content": "Content (Markdown)", "adm.blog.author": "Author", "adm.blog.tags": "Tags (comma-separated)", "adm.blog.coverImage": "Cover image URL", "adm.blog.metaTitle": "SEO meta title", "adm.blog.metaDesc": "SEO meta description", "adm.blog.draft": "Draft", "adm.blog.published": "Published", "adm.blog.updated": "Article updated", "adm.blog.created": "Article created", "adm.blog.deleted": "Article deleted", "adm.blog.saveError": "Error saving",

  "adm.staff.title": "Internal messages", "adm.staff.unread": "unread", "adm.staff.new": "New message", "adm.staff.sendToTeam": "Send message to team", "adm.staff.subject": "Subject", "adm.staff.message": "Message...", "adm.staff.send": "Send", "adm.staff.sent": "Message sent", "adm.staff.sendError": "Error sending message", "adm.staff.noSubject": "No subject", "adm.staff.newBadge": "New", "adm.staff.noMessages": "No messages", "adm.staff.compose": "Compose", "adm.staff.inbox": "Inbox", "adm.staff.sentTab": "Sent", "adm.staff.allRead": "All caught up", "adm.staff.recipient": "Recipient", "adm.staff.allTeam": "All team", "adm.staff.admin": "Administration", "adm.staff.reception": "Reception", "adm.staff.teamMember": "Team member", "adm.staff.you": "you", "adm.staff.to": "To", "adm.staff.read": "Read", "adm.staff.backToMessages": "Back to messages", "adm.staff.reply": "Reply", "adm.staff.replyAll": "Reply all", "adm.staff.forward": "Forward", "adm.staff.originalMessage": "Original message", "adm.staff.fwdPrefix": "FW: ", "adm.staff.rePrefix": "RE: ", "adm.staff.fwdFrom": "Forwarded from", "adm.staff.attach": "Attach", "adm.staff.attachments": "Attachments", "adm.staff.fileTooLarge": "File too large (max 20 MB)", "adm.staff.downloadError": "Error downloading file", "adm.staff.sending": "Sending...",
  "adm.tax.title": "Taxes", "adm.tax.subtitle": "Configure tax rates for invoices and quotes", "adm.tax.new": "New tax", "adm.tax.noTaxes": "No taxes configured.", "adm.tax.noTaxesHint": "Create a tax rate like VAT 21% or IGIC 7%.", "adm.tax.name": "Name", "adm.tax.rate": "Rate (%)", "adm.tax.region": "Region (optional)", "adm.tax.default": "Default", "adm.tax.setDefault": "Set as default", "adm.tax.created": "Tax configured", "adm.tax.defaultSet": "Tax set as default", "adm.tax.deleted": "Tax deleted", "adm.tax.create": "Create tax",
  "adm.calsync.title": "Calendar sync", "adm.calsync.subtitle": "Connect external calendars to avoid double bookings", "adm.calsync.connections": "connections", "adm.calsync.connect": "Connect (coming soon)", "adm.calsync.activeTitle": "Active connections", "adm.calsync.noConnections": "No calendars connected.", "adm.calsync.noConnectionsHint": "Each professional can connect their Google Calendar, iCal or Outlook.", "adm.calsync.active": "Active", "adm.calsync.paused": "Paused", "adm.calsync.lastSync": "Last sync",
  "adm.auditlog.title": "Audit log", "adm.auditlog.subtitle": "Administrative action history", "adm.auditlog.search": "Search...", "adm.auditlog.all": "All", "adm.auditlog.create": "Create", "adm.auditlog.update": "Update", "adm.auditlog.deleteAction": "Delete", "adm.auditlog.exportAction": "Export", "adm.auditlog.roleChange": "Role change", "adm.auditlog.loading": "Loading...", "adm.auditlog.noLogs": "No logs",
};

const eu: TranslationDict = {
  "nav.services": "Zerbitzuak", "nav.contact": "Kontaktua", "nav.book": "Erreserbatu Hitzordua", "nav.myAccount": "Nire kontua", "nav.logout": "Irten", "nav.panel": "Nire panela",
  "hero.tag": "Estetika Integral Aurreratua", "hero.subtitle": "Zure azala eta ongizatea zaintzen ditugu teknika aurreratuekin eta ikuspegi pertsonalizatuarekin.", "hero.cta": "Hitzordua erreserbatu", "hero.explore": "Tratamenduak esploratu",
  "footer.schedule": "Ordutegia", "footer.address": "Helbidea", "footer.contact": "Kontaktua", "footer.rights": "© 2026 Clínica Baluarte. Eskubide guztiak erreserbatuta.", "footer.weekdays": "Astelehenetik Ostiralera", "footer.privacy": "Pribatutasun Politika", "footer.terms": "Baldintzak", "footer.cookies": "Cookie Politika", "footer.designedBy": "Diseinatua",
  "cookie.title": "Zure pribatutasuna garrantzitsua da", "cookie.desc": "Cookie esentialak erabiltzen ditugu gunearen funtzionamendurako. Analitikako eta marketineko cookieak aukerakoak dira.", "cookie.accept": "Guztiak onartu", "cookie.reject": "Aukerakoak ukatu", "cookie.manage": "Hobespenak kudeatu", "cookie.save": "Hobespenak gorde", "cookie.essential": "Esentialak (derrigorrezkoak)", "cookie.analytics": "Analitikoak", "cookie.marketing": "Marketina",
  "privacy.title": "Pribatutasun Politika", "terms.title": "Baldintzak", "cookies.title": "Cookie Politika",
  "blog.title": "Bloga", "blog.readMore": "Gehiago irakurri", "blog.defaultAuthor": "Clínica Baluarte",
  "common.loading": "Kargatzen...", "pub.loadingServices": "Zerbitzuak kargatzen...", "pub.catalogue": "Katalogoa", "pub.ourServices": "Gure Zerbitzuak", "pub.minutesShort": "min", "pub.serviceNotFound": "Ez da zerbitzua aurkitu", "pub.professionalNotFound": "Ez da profesionala aurkitu", "pub.locationNotFound": "Ez da zentroa aurkitu", "pub.articleNotFound": "Ez da artikulua aurkitu", "pub.viewAllServices": "Ikusi zerbitzu guztiak", "pub.backToBlog": "Blogera itzuli", "pub.back": "Itzuli", "pub.schedule": "Ordutegia", "pub.closed": "Itxita", "pub.bookService": "Zerbitzu hau erreserbatu", "pub.bookWith": "Erreserbatu {name}(r)ekin", "pub.bookIn": "Erreserbatu {name} zentroan", "pub.serviceSeoDesc": "{name} zerbitzua Clínica Baluarte Iruñean", "pub.professionalSeoDesc": "{name}, {role} Clínica Baluarte Iruñean", "pub.locationSeoDesc": "Bisita ezazu gure {name} zentroa. {address}", "cita.loading": "Zure eskaera prozesatzen...", "cita.confirmedTitle": "Hitzordua baieztatuta!", "cita.confirmedDesc": "Eskerrik asko baieztatzeagatik. Bihar Doixan zain izango gaituzu.", "cita.cancelledTitle": "Hitzordua bertan behera utzita", "cita.cancelledDesc": "Zure hitzordua bertan behera utzi da. Nahi duzunean berria erreserbatu dezakezu.", "cita.alreadyTitle": "Hitzordua dagoeneko prozesatuta", "cita.alreadyDesc": "Hitzordu hau lehenago aldatu da eta ezin da berriz aldatu.", "cita.errorTitle": "Errorea", "cita.errorDesc": "Ezin izan da eskaera prozesatu. Esteka baliogabea edo iraungita egon daiteke.", "cita.bookNew": "Hitzordu berria erreserbatu", "cita.home": "Hasierara joan",
  "settings.title": "Konfigurazioa", "export.csv": "CSV Esportatu", "export.excel": "Excel Esportatu", "export.pdf": "PDF Esportatu",
  "contact.tag": "Hitz egin dezagun", "contact.title": "Hurbil", "contact.titleAccent": "gaude", "contact.subtitle": "Aholkularitza pertsonalizatua zure tratamendu ezin hobea aurkitzeko.", "contact.formTitle": "Idatzi iezaguzu", "contact.formSubtitle": "24 ordutan erantzungo dizugu.", "contact.name": "Izena *", "contact.email": "Emaila *", "contact.phone": "Telefonoa (aukerakoa)", "contact.message": "Zure mezua *", "contact.send": "Mezua bidali", "contact.sending": "Bidaltzen...", "contact.success": "Mezua bidalita! Laster erantzungo dizugu.", "contact.error": "Errorea mezua bidaltzean. Saiatu berriro.", "contact.address": "Helbidea", "contact.schedule": "Ordutegia", "contact.needAppt": "Hitzordua behar duzu?", "contact.useAssistant": "Erabili gure laguntzaile adimentsua mikrofono ikonoan.",
  "services.tag": "Gure zerbitzuak", "services.titlePrefix": "Zer", "services.titleAccent": "egiten dugun", "services.bookCta": "Erreserbatu", "services.consultCta": "Kontsultatu", "services.clickHint": "Egin klik kategoria batean espezialitate guztiak ikusteko",
  "explorer.tag": "Katalogoa", "explorer.title": "Esploratu", "explorer.titleAccent": "kategoriaka", "explorer.loading": "Katalogoa kargatzen…",
  "top.tag": "Nabarmendua", "top.title": "Zure ongizatea da gure", "top.titleAccent": "lehentasuna", "top.bookCta": "Hitzordua erreserbatu", "top.benefit1": "Minaren arintza eta mugikortasunaren berreskuratzea", "top.benefit2": "Ebidentzian oinarritutako tratamenduak", "top.benefit3": "Profesional kolegiatuek arreta pertsonalizatua", "top.fisioDesc": "Berreskuratu mugikortasuna eta ezabatu mina tratamendu terapeutiko profesionalekin.", "top.podoDesc": "Zaindu zure oinen osasuna tratamendu espezializatuekin eta teknologia aurreratuarekin.", "top.nutriDesc": "Nutrizio plan pertsonalizatuak zure osasun helburuak lortzeko.",
  "cta.title": "Prest zaude zure osasuna zaintzeko?", "cta.subtitle": "Gure profesional taldea prest dago laguntzeko. Erreserbatu zure hitzordua edo erabili gure laguntzaile adimentsua.",
  "testimonials.tag": "Iritziak", "testimonials.titlePrefix": "Gure", "testimonials.titleAccent": "pazienteek diote", "testimonials.avgLabel": "batez besteko balorazioa", "testimonials.satisfiedPatients": "paziente asebeteak", "testimonials.badge1": "Profesional kolegiatuak", "testimonials.badge2": "Arreta pertsonalizatua", "testimonials.badge3": "Azken belaunaldiko ekipamendua", "testimonials.ctaText": "Clínica Baluarteko pazientea zara? Sartu zure panelean iritzia uzteko.", "testimonials.ctaButton": "Nire panelera sartu", "testimonials.anonymous": "Pazientea",
  "booking.categoryTitle": "Zer tratamendu mota bilatzen duzu?", "booking.loading": "Tratamendu aukerak kargatzen...", "booking.retry": "Berriro saiatu", "booking.noCategories": "Oraingoz ez dago kategoriarik eskuragarri.", "booking.refresh": "Eguneratu", "booking.servicesCount": "zerbitzu", "booking.servicesOf": "-ren zerbitzuak", "booking.chooseService": "Aukeratu nahiago duzun tratamendua", "booking.perSession": "saioko", "booking.chooseProfessional": "Aukeratu zure profesionala", "booking.whichProfessional": "Norekin nahiago duzu hitzordua?", "booking.noPref": "Profesional hobespen gabe", "booking.chooseDate": "Aukeratu data bat", "booking.chooseTime": "Aukeratu ordu bat", "booking.availableSlots": "Ordu eskuragarriak", "booking.noSlots": "Ez dago ordu eskuragarririk.", "booking.otherDate": "Beste data bat", "booking.confirmTitle": "Berretsi zure hitzordua", "booking.fullName": "Izen osoa *", "booking.namePlaceholder": "Zure izena", "booking.emailLabel": "Emaila *", "booking.phoneLabel": "Telefonoa *", "booking.phonePlaceholder": "+34 600 000 000", "booking.confirming": "Berresten...", "booking.confirmCta": "Hitzordua berretsi", "booking.successTitle": "Hitzordua eskatuta!", "booking.withProfessional": "-rekin", "booking.onDate": "", "booking.atTime": "-etan", "booking.emailConfirmation": "Email bidez berretsiko dizugu hemen:", "booking.bookAnother": "Beste hitzordu bat erreserbatu beste norbaiterako", "booking.goHome": "Hasierara itzuli", "booking.stepCategory": "Kategoria", "booking.stepService": "Zerbitzua", "booking.stepProfessional": "Profesionala", "booking.stepDate": "Data", "booking.stepTime": "Ordua", "booking.stepInfo": "Datuak", "booking.loadingProfessionals": "Kargatzen...",
  "auth.login": "Saioa hasi", "auth.register": "Kontua sortu", "auth.welcome": "Ongi etorri", "auth.loading": "Kargatzen...", "auth.emailLabel": "Emaila", "auth.passwordLabel": "Pasahitza", "auth.nameLabel": "Izen osoa", "auth.phoneLabel": "Telefonoa", "auth.forgotPassword": "Pasahitza ahaztu duzu?", "auth.noAccount": "Ez duzu konturik?", "auth.hasAccount": "Dagoeneko kontu bat duzu?", "auth.registerCta": "Erregistratu", "auth.loginCta": "Hasi saioa", "auth.processing": "Prozesatzen...", "auth.enter": "Sartu", "auth.registerBtn": "Erregistratu", "auth.loginSubtitle": "Sartu zure paziente panelera", "auth.registerSubtitle": "Erregistratu zure hitzorduak kudeatzeko", "auth.checkEmail": "Begiratu zure emaila", "auth.checkEmailDesc": "Baieztapen esteka bidali dizugu. Egin klik kontua aktibatzeko.", "auth.backHome": "Hasierara itzuli", "auth.benefit1": "Erreserbatu eta kudeatu hitzorduak online", "auth.benefit2": "Sartu zure tratamendu historialera", "auth.benefit3": "Partekatu zure iritzia gure zerbitzuei buruz", "auth.withAccount": "Zure kontuarekin:", "auth.accountBenefits": "Kontuaren onurak:",
  "forgot.title": "Pasahitza berreskuratu", "forgot.desc": "Sartu zure emaila eta pasahitza berrezartzeko esteka bidaliko dizugu.", "forgot.sending": "Bidaltzen...", "forgot.sendLink": "Esteka bidali", "forgot.sentTitle": "Esteka bidalita", "forgot.sentDesc": "Email horrekin kontua badago, pasahitza berrezartzeko esteka jasoko duzu.", "forgot.checkSpam": "Begiratu sarrera-ontzia eta spam karpeta. Estekak ordu 1ean iraungitzen du.", "forgot.backLogin": "Loginera itzuli",
  "reset.title": "Pasahitz berria", "reset.desc": "Sartu zure pasahitz berria.", "reset.newPassword": "Pasahitz berria", "reset.confirmPassword": "Berretsi pasahitza", "reset.saving": "Gordetzen...", "reset.save": "Pasahitza gorde", "reset.successTitle": "Pasahitza eguneratuta!", "reset.successDesc": "Orain saioa has dezakezu pasahitz berriarekin.", "reset.goLogin": "Saioa hastera joan", "reset.invalidLink": "Esteka baliogabea", "reset.invalidDesc": "Berreskuratze esteka hau baliogabea da edo iraungi da.", "reset.mismatch": "Pasahitzak ez datoz bat.", "reset.tooShort": "Pasahitzak gutxienez 6 karaktere izan behar ditu.",
  "client.title": "Nire Panela", "client.profile": "Nire profila", "client.appointments": "Nire hitzorduak", "client.noAppointments": "Ez dituzu hitzordurik erregistratuta.", "client.bookFirst": "Nire lehen hitzordua erreserbatu", "client.upcoming": "Hurrengo", "client.past": "Historiala", "client.payments": "Ordainketak eta fakturak", "client.packages": "Nire bonuak", "client.feedback": "Balorazioak", "client.opinion": "Zure iritzia", "client.dataExport": "Nire datuak (DBEO)", "client.insurance": "Osasun asegurua", "client.newAppt": "Hitzordu berria", "client.reschedule": "Berrantolatu", "client.cancel": "Bertan behera utzi", "client.bookNow": "Orain erreserbatu", "client.noUpcoming": "Ez daukazu hurrengo hitzordurik", "client.noHistory": "Ez dago historialik", "client.edit": "Editatu", "client.save": "Gorde", "client.fullName": "Izen osoa", "client.email": "Emaila", "client.phone": "Telefonoa", "client.address": "Helbidea (aukerakoa)", "client.notRegistered": "Erregistratu gabe", "client.notRegisteredAddr": "Erregistratu gabe", "client.logout": "Saioa itxi", "client.cancelTitle": "Hitzordu hau bertan behera utzi?", "client.cancelConfirm": "Bai, bertan behera utzi", "client.cancelling": "Bertan behera uzten...", "client.cancelled": "Hitzordua bertan behera utzita", "client.cancelledDesc": "Zure hitzordua behar bezala bertan behera utzi da.", "client.close": "Itxi", "client.back": "Atzera", "client.rescheduleTitle": "Hitzordua berrantolatu", "client.chooseNewDate": "Aukeratu data berria", "client.slotsFor": "Ordu eskuragarriak honetarako:", "client.loadingSlots": "Orduak kargatzen...", "client.noSlotsDay": "Ez dago ordu eskuragarririk egun honetarako.", "client.cancelBtn": "Utzi", "client.confirmNewDate": "Data berria berretsi", "client.rescheduling": "Berrantolatzen...", "client.reviewTitle": "Eman zure iritzia", "client.reviewSubtitle": "Zure esperientziak beste pazienteei laguntzen die. Iritziak berrikuspenaren ondoren argitaratzen dira.", "client.reviewSent": "Iritzia bidalita!", "client.reviewSentDesc": "Argitaratu aurretik berrikusiko da.", "client.sendAnother": "Beste iritzi bat bidali", "client.rating": "Balorazioa", "client.comment": "Zure iruzkina", "client.commentPlaceholder": "Kontaiguzu zure esperientzia Clínica Baluarten...", "client.displayName": "Erakusteko izena (aukerakoa)", "client.sendReview": "Iritzia bidali", "client.sendingReview": "Bidaltzen...", "client.dataUpdated": "Datuak eguneratuta", "client.saveError": "Errorea gordetzean", "client.rescheduleError": "Errorea berrantolatzean", "client.rescheduled": "Hitzordua arrakastaz berrantolatuta", "client.reviewThanks": "Eskerrik asko zure iritziagatik!", "client.reviewThanksDesc": "Zure iritzia gure taldeak egiaztatuko du argitaratu aurretik.", "client.reviewError": "Errorea iritzia bidaltzean",
  "admin.title": "Kontrol panela", "admin.panelTitle": "Administrazio Panela", "admin.todayAppts": "Gaurko hitzorduak", "admin.activeAppts": "Hitzordu aktiboak", "admin.activeServices": "Zerbitzu aktiboak", "admin.messages": "Mezuak", "admin.backToSite": "Gunera itzuli", "admin.logout": "Saioa itxi",
  "admin.groupMain": "Nagusia", "admin.groupBusiness": "Negozioa", "admin.groupCRM": "CRM eta Marketina", "admin.groupFinance": "Finantzak", "admin.groupComm": "Komunikazioa", "admin.groupContent": "Edukia", "admin.groupSystem": "Sistema",
  "admin.panel": "Panela", "admin.analytics": "Analitikak", "admin.calendar": "Egutegia", "admin.appointments": "Hitzorduak", "admin.services": "Zerbitzuak", "admin.professionals": "Profesionalak", "admin.packages": "Bonuak", "admin.hours": "Ordutegia", "admin.crm": "CRM Bezeroak", "admin.campaigns": "Kanpainak", "admin.loyalty": "Fidelizazioa", "admin.automations": "Automatizazioak", "admin.paymentsNav": "Ordainketak", "admin.invoices": "Fakturak", "admin.quotes": "Aurrekontuak", "admin.taxes": "Zergak", "admin.exports": "Esportazioak", "admin.waitlist": "Itxaron zerrenda", "admin.reminders": "Oroigarriak", "admin.calSync": "Egutegiak", "admin.staffMsg": "Talde mezuak", "admin.messagesNav": "Mezuak", "admin.reviews": "Iritziak", "admin.blog": "Bloga", "admin.settings": "Konfigurazioa", "admin.audit": "Auditoria",
  "chat.title": "Zentro Adimentsua", "chat.placeholder": "Idatzi zure kontsulta...", "chat.reset": "Elkarrizketa berrabiarazi", "chat.close": "Txata itxi", "chat.send": "Bidali", "chat.expand": "Zabaldu", "chat.introText": "Ez dakizu zein tratamendu aukeratu? Galdetu hemen. Xehetasunak eta prezioak ere kontsulta ditzakezu.", "chat.errorMsg": "Barkatu, errore bat gertatu da. Saiatu berriro segundo batzuen buruan.",
  "voice.title": "Ahots Laguntzailea", "voice.greeting": "Kaixo, Clínica Baluarteren laguntzaile birtuala naiz. Hitzordua erreserbatu, berrantolatu edo bertan behera utzi dezaket. Sakatu mikrofonoa esateko zer behar duzun.", "voice.initialGreeting": "Kaixo, Clínica Baluarteren laguntzaile birtuala naiz. Zertan lagundu dezaket?", "voice.error": "Barkatu, errore bat gertatu da. Saiatu berriro.", "voice.noSupport": "Zure nabigatzaileak ez du ahots-ezagutza onartzen. Erabili Chrome edo Edge.", "voice.book": "Hitzordua erreserbatu", "voice.reschedule": "Hitzordua berrantolatu", "voice.cancel": "Hitzordua bertan behera utzi", "voice.openLabel": "Ahots laguntzailea ireki", "voice.tapMic": "Sakatu mikrofonoa hitz egiteko", "voice.idle": "Sakatu mikrofonoa hitz egiteko", "voice.listening": "Entzuten...", "voice.processing": "Prozesatzen...", "voice.speaking": "Hitz egiten...", "voice.stopAudio": "Audioa gelditu", "voice.mute": "Isilarazi", "voice.unmute": "Ahotsa aktibatu", "voice.resetConv": "Elkarrizketa berrabiarazi", "voice.browserFallback": "Ahotsa ez dago eskuragarri. Nabigatzailearen ahotsa erabiltzen.", "voice.blockedUntil": "Ahotsa ez dago eskuragarri. Berriro saiatuko gara orduan:", "voice.textPlaceholder": "Idatzi zure mezua edo emaila...", "voice.play": "Erreproduzitu", "voice.wantBook": "Hitzordua erreserbatu nahi dut", "voice.wantReschedule": "Hitzordua berrantolatu nahi dut", "voice.wantCancel": "Hitzordua bertan behera utzi nahi dut",
  "chip.fisio": "Zer fisioterapia zerbitzu eskaintzen dituzue?", "chip.backPain": "Bizkarreko mina daukat: zer gomendatzen didazue?", "chip.podo": "Zertan datza podologia?", "chip.nutri": "Nire elikadura hobetu nahi dut: aukerak?", "chip.activity": "Zer jarduera fisiko mota dituzue?", "chip.prices": "Zeintzuk dira zuen prezioak?",
  "val.nameRequired": "Izena derrigorrezkoa da", "val.maxChars": "Gehienez {n} karaktere", "val.invalidEmail": "Email baliogabea", "val.messageRequired": "Mezua derrigorrezkoa da", "val.invalidService": "Zerbitzu baliogabea", "val.invalidProfessional": "Profesional baliogabea", "val.invalidDate": "Data baliogabea", "val.invalidTime": "Ordu baliogabea", "val.nameBooking": "Izena derrigorrezkoa da", "val.writeComment": "Idatzi iruzkin bat", "val.campaignName": "Izena derrigorrezkoa da",
  "status.confirmed": "Berretsia", "status.rescheduled": "Berrantolatuta", "status.cancelled_by_client": "Bertan behera utzita", "status.cancelled_by_admin": "Adminek bertan behera utzita", "status.completed": "Burututa", "status.attended": "Bertaratu zen", "status.no_show": "Ez zen agertu", "status.pending": "Zain",
  "catDesc.Fisioterapia": "Berreskuratze eta birgaitze profesionala", "catDesc.Podología": "Zure oinen osasuna eta ongizatea", "catDesc.Nutrición": "Nutrizio plan pertsonalizatuak", "catDesc.Actividad Física": "Ariketa terapeutiko indibidualizatua",
  "catDescLong.Fisioterapia": "Prebentzio, berreskuratzea eta birgaitzea tratamendu terapeutikoen bidez, gorputzaren funtzionamendu egokia berrezartzera zuzenduta.", "catDescLong.Podología": "Zure oinak zure gorputzaren oinarria dira. Tratamendu espezializatuak osasuntsu eta minik gabe mantentzeko.", "catDescLong.Nutrición": "Nutrizio plan pertsonalizatuak zure ongizatea hobetzeko eta zure osasun helburuak lortzeko.", "catDescLong.Actividad Física": "Profesionalek gidatutako ariketa terapeutiko indibidualizatuko saioak zure bizi-kalitatea hobetzeko.",

  // ── ScrollScrub Hero ──
  "scrubHero.clinic": "Clínica", "scrubHero.name": "Baluarte", "scrubHero.subtitle": "Iruñearen bihotzean mugimenduan dagoen espazioa", "scrubHero.categories": "Fisioterapia · Podologia · Nutrizioa · Jarduera Fisikoa", "scrubHero.cta": "Erreserbatu Hitzordua", "scrubHero.explore": "Gure zerbitzuak",
  "ins.title": "Osasun asegurua", "ins.toggle": "Asegurua daukat", "ins.company": "Aseguratzailea", "ins.companyPlaceholder": "Hautatu aseguratzailea", "ins.policyNumber": "Poliza zenbakia", "ins.policyPlaceholder": "Poliza zenbakia", "ins.document": "Poliza (dokumentua)", "ins.uploaded": "Poliza igota", "ins.view": "Ikusi", "ins.validated": "Poliza klinikak balioztatuta", "ins.pendingValidation": "Balioztatze zain", "ins.uploadHint": "Igo zure poliza (PDF, JPG edo PNG, geh. 10MB)", "ins.uploading": "Igotzen...", "ins.analyzing": "Poliza IA-rekin aztertzen...", "ins.aiExtracting": "IAk zure polizaren datuak automatikoki ateratzen ari da...", "ins.policyAnalyzed": "✅ Poliza aztertuta", "ins.dataExtracted": "{company}-ren datuak ondo atereak.", "ins.viewerTitle": "Aseguru poliza", "ins.saveError": "Errorea gordetzean", "ins.dataUpdated": "Aseguru datuak eguneratuta", "ins.fileTooLarge": "Fitxategia handiegia", "ins.maxSize": "Gehienez 10MB", "ins.unsupportedFormat": "Formatu ez onartua", "ins.useFormats": "Erabili PDF, JPG edo PNG", "ins.uploadError": "Errorea fitxategia igotzean",
  "fin.payments": "Ordainketak", "fin.invoices": "Fakturak", "fin.noPayments": "Ez dago ordainketarik.", "fin.noInvoices": "Ez dago fakturarik.", "fin.pending": "Zain", "fin.completed": "Burututa", "fin.failed": "Huts eginda", "fin.refunded": "Itzulita", "fin.draft": "Zirriborroa", "fin.sent": "Bidalita", "fin.paid": "Ordainduta", "fin.noPackages": "Ez duzu pakete aktiborik.", "fin.package": "Paketea", "fin.used": "Erabilitakoak", "fin.remaining": "Geratzen direnak", "fin.expires": "Iraungitzen", "fin.active": "Aktiboa", "fin.expired": "Iraungita", "fin.exhausted": "Agortua",
  "fb.pendingTitle": "Balorazioak zain", "fb.pendingDesc": "Kontaiguzu nolakoa izan zen zure esperientzia azken bisitaren ondoren.", "fb.rate": "Baloratu", "fb.overallRating": "Balorazio orokorra", "fb.serviceQuality": "Zerbitzu kalitatea", "fb.staffAttention": "Profesionalaren arreta", "fb.commentOptional": "Iruzkina (aukerakoa)", "fb.commentPlaceholder": "Nolakoa izan zen zure bisita?", "fb.sending": "Bidaltzen...", "fb.sendRating": "Balorazioa bidali", "fb.cancelRating": "Utzi", "fb.thankYou": "Eskerrik asko zure balorazioarengatik!", "fb.errorSending": "Errorea balorazioa bidaltzean", "fb.sentTitle": "Bidalitako balorazioak", "fb.service": "Zerbitzua", "fb.noPending": "Ez duzu balorazio pendenterik.", "fb.afterAppt": "Buruturiko hitzordu bakoitzaren ondoren feedback eskera jasoko duzu.",
  "gdpr.title": "Zure datu pertsonalak", "gdpr.desc": "DBEO-arekin bat, zure datu pertsonal guztien kopia deskargatu dezakezu.", "gdpr.exportJSON": "JSON gisa esportatu", "gdpr.jsonDesc": "Formatu oso eta egituratua", "gdpr.exportCSV": "CSV gisa esportatu", "gdpr.csvDesc": "Excel / kalkulu-orriekin bateragarria", "gdpr.gathering": "Zure datuak biltzen...", "gdpr.exportedJSON": "Datuak JSON-en esportatuak", "gdpr.exportedCSV": "Datuak CSV-n esportatuak", "gdpr.exportError": "Errorea datuak esportatzean", "gdpr.deleteTitle": "Datuen ezabaketa eskatu", "gdpr.deleteDesc": "Zure kontuaren eta datu pertsonalen ezabaketa osoa eska dezakezu. Administratzaile batek zure eskera berrikusiko du.", "gdpr.deleteCta": "Ezabaketa eskatu", "gdpr.deleteDialogTitle": "Datuen ezabaketa eskatu", "gdpr.deleteDialogDesc": "Ekintza hau itzulezina da. Administratzaile batek zure eskera DBEO araudiaren arabera prozesatuko du.", "gdpr.reasonPlaceholder": "Arrazoia (aukerakoa)", "gdpr.cancel": "Utzi", "gdpr.sending": "Bidaltzen...", "gdpr.confirmDelete": "Eskera berretsi", "gdpr.deleteSent": "Ezabaketa eskera bidalita. Laster jarriko gara harremanetan.", "gdpr.deleteError": "Errorea eskera bidaltzean",
  "authUpload.viewAuth": "Ikusi baimena", "authUpload.viewAuthShort": "Baim.", "authUpload.dialogTitle": "Baimena", "authUpload.deleted": "Baimena ezabatuta", "authUpload.uploaded": "Baimena ondo igota", "authUpload.saveError": "Errorea baimena gordetzean", "authUpload.uploadError": "Errorea igotzean", "authUpload.fileTooLarge": "Fitxategia handiegia", "authUpload.maxSize": "Gehienez 10MB", "authUpload.uploading": "Igotzen...", "authUpload.uploadShort": "Igo baim.", "authUpload.upload": "Baimena igo",
  "booking.pageTitle": "Erreserbatu Hitzordua", "booking.errorValidation": "Balidazio errorea", "booking.invalidData": "Datu baliogabeak", "booking.loadError": "Ezin izan ditugu tratamenduak kargatu. Sakatu berriro saiatzeko.", "booking.bookError": "Ezin izan da hitzordua antolatu.",
  "catName.Fisioterapia": "Fisioterapia", "catName.Podología": "Podologia", "catName.Nutrición": "Nutrizioa", "catName.Actividad Física": "Jarduera Fisikoa",

  "adm.loading": "Kargatzen...", "adm.saving": "Gordetzen...", "adm.save": "Gorde", "adm.cancel": "Utzi", "adm.delete": "Ezabatu", "adm.edit": "Editatu", "adm.create": "Sortu", "adm.new": "Berria", "adm.active": "Aktiboa", "adm.inactive": "Inaktiboa", "adm.noData": "Daturik ez", "adm.search": "Bilatu izen edo email bidez...", "adm.all": "Guztiak", "adm.name": "Izena", "adm.email": "Emaila", "adm.phone": "Telefonoa", "adm.address": "Helbidea", "adm.description": "Deskribapena", "adm.notes": "Oharrak", "adm.date": "Data", "adm.status": "Egoera", "adm.actions": "Ekintzak", "adm.close": "Itxi", "adm.confirm": "Berretsi", "adm.send": "Bidali", "adm.reply": "Erantzun", "adm.export": "Esportatu", "adm.refresh": "Eguneratu", "adm.add": "Gehitu", "adm.remove": "Kendu", "adm.back": "Atzera", "adm.yes": "Bai", "adm.no": "Ez", "adm.open": "Irekita", "adm.closed": "Itxita", "adm.from": "Nondik", "adm.to": "Nora", "adm.reason": "Arrazoia", "adm.optional": "aukerakoa", "adm.required": "derrigorrezkoa", "adm.noResults": "Ez da emaitzarik aurkitu", "adm.errorSaving": "Errorea gordetzean", "adm.errorLoading": "Errorea kargatzean", "adm.updated": "Eguneratua", "adm.created": "Sortua", "adm.deleted": "Ezabatua",

  // ── Appointments ──
  "adm.appts.title": "Hitzorduak", "adm.appts.upcoming": "Hurrengoak", "adm.appts.past": "Iraganekoak", "adm.appts.cancelled": "Ezeztatuak", "adm.appts.attended": "Bertaratua", "adm.appts.noShow": "Ez da agertu", "adm.appts.cancelAppt": "Ezeztatu", "adm.appts.noAppts": "Ez dago hitzordurik iragazki honekin.", "adm.appts.authUploaded": "Baimena igota", "adm.appts.noAuth": "Baimenik ez", "adm.appts.viewPolicy": "Poliza ikusi", "adm.appts.validated": "Balioztatua", "adm.appts.validatePolicy": "Poliza balioztatu", "adm.appts.insured": "Aseguratua", "adm.appts.policyOk": "Poliza balioztatuta ✅", "adm.appts.validationRemoved": "Balioztapena kenduta", "adm.appts.updateError": "Errorea eguneratzean", "adm.appts.deleteConfirm": "Hitzordu hau ezeztatu?", "adm.appts.sendSurvey": "Inkesta bidali",

  // ── Services ──
  "adm.svc.title": "Zerbitzuak", "adm.svc.new": "Zerbitzu berria", "adm.svc.edit": "Zerbitzua editatu", "adm.svc.duration": "Iraupena (minutuak)", "adm.svc.price": "Prezioa (€)", "adm.svc.category": "Kategoria", "adm.svc.noServices": "Ez dago zerbitzurik. Sortu lehenengoa.", "adm.svc.updated": "Zerbitzua eguneratuta", "adm.svc.created": "Zerbitzua sortuta", "adm.svc.deactivated": "Zerbitzua desaktibatuta", "adm.svc.deleteConfirm": "Zerbitzu hau ezabatu?",

  // ── Messages ──
  "adm.msg.title": "Kontaktu mezuak", "adm.msg.noMessages": "Ez dago mezurik oraindik", "adm.msg.replyTo": "Erantzun honi:", "adm.msg.replyPlaceholder": "Idatzi zure erantzuna...", "adm.msg.sendReply": "Erantzuna bidali", "adm.msg.sending": "Bidaltzen...", "adm.msg.sent": "Erantzuna bidalita", "adm.msg.sentTo": "Emaila bidali da hona:", "adm.msg.sendError": "Errorea bidaltzean",

  // ── Professionals ──
  "adm.prof.title": "Profesionalak", "adm.prof.subtitle": "Kudeatu taldea, zerbitzuak eta ordutegiak", "adm.prof.add": "Profesionala gehitu", "adm.prof.edit": "Profesionala editatu", "adm.prof.new": "Profesional berria", "adm.prof.noProfessionals": "Ez dago profesionalik oraindik.", "adm.prof.addFirst": "Gehitu lehenengoa", "adm.prof.role": "Rola / Titulua", "adm.prof.specialties": "Espezialitateak (komaz bereizita)", "adm.prof.bio": "Bio", "adm.prof.bioPlaceholder": "Deskribapen profesional laburra...", "adm.prof.assignedServices": "Esleitutako zerbitzuak", "adm.prof.weeklySchedule": "Asteko ordutegia", "adm.prof.addSlot": "Tartexka gehitu", "adm.prof.updated": "Profesionala eguneratuta", "adm.prof.created": "Profesionala sortuta", "adm.prof.deleted": "Profesionala ezabatuta", "adm.prof.deleteConfirm": "Profesional hau ezabatu?", "adm.prof.nameRequired": "Izena derrigorrezkoa da",

  // ── Calendar ──
  "adm.cal.title": "Egutegia", "adm.cal.blockTime": "Ordutegia blokeatu", "adm.cal.blocked": "Blokeatuak", "adm.cal.appointments": "Hitzorduak", "adm.cal.noAppts": "Ez dago hitzordurik egun honetarako.", "adm.cal.blockAdded": "Blokea gehituta", "adm.cal.blockRemoved": "Blokea ezabatuta", "adm.cal.cancelConfirm": "Hitzordu hau ezeztatu?", "adm.cal.cancelled": "Hitzordua ezeztatuta", "adm.cal.confirmed": "Berretsia", "adm.cal.pending": "Zain",

  // ── Business Hours ──
  "adm.hours.title": "Asteko ordutegia", "adm.hours.saved": "Ordutegiak gordeta", "adm.hours.saveCta": "Ordutegiak gorde",
  "adm.day.0": "Igandea", "adm.day.1": "Astelehena", "adm.day.2": "Asteartea", "adm.day.3": "Asteazkena", "adm.day.4": "Osteguna", "adm.day.5": "Ostirala", "adm.day.6": "Larunbata",

  // ── Invoices ──
  "adm.inv.title": "Fakturak", "adm.inv.new": "Faktura berria", "adm.inv.noInvoices": "Ez dago fakturarik.", "adm.inv.clientName": "Bezeroaren izena", "adm.inv.clientEmail": "Bezeroaren emaila", "adm.inv.clientFiscalId": "Bezeroaren IFK", "adm.inv.clientAddress": "Bezeroaren helbide fiskala", "adm.inv.subtotal": "Azpitotala", "adm.inv.tax": "BEZ", "adm.inv.total": "Guztira", "adm.inv.issued": "Igorrita", "adm.inv.created": "Faktura sortuta", "adm.inv.createError": "Errorea faktura sortzean", "adm.inv.sendCta": "Bidali", "adm.inv.markPaid": "Ordaindutzat jo", "adm.inv.draft": "Zirriborroa", "adm.inv.sent": "Bidalita", "adm.inv.paid": "Ordainduta", "adm.inv.overdue": "Epemugatuta", "adm.inv.cancelled": "Ezeztatuta", "adm.inv.emitterInfo": "Igorlearen datuak (konfiguraziotik kargatuta)", "adm.inv.items": "Faktura-lerroak", "adm.inv.addItem": "Lerroa gehitu", "adm.inv.description": "Deskribapena", "adm.inv.qty": "Kop.", "adm.inv.unitPrice": "Prezio unitarioa", "adm.inv.lineTotal": "Lerro totala", "adm.inv.removeItem": "Kendu", "adm.inv.notes": "Oharrak", "adm.inv.type": "Faktura mota", "adm.inv.typeDirect": "Zuzena (bezeroa)", "adm.inv.typeInsurance": "Aseguratzailea", "adm.inv.insurerName": "Aseguratzailearen izena", "adm.inv.pricesIncludeVat": "Zerbitzuen prezioek BEZ barne dute", "adm.inv.services": "Zerbitzuak", "adm.inv.thisMonth": "Hilabete hau", "adm.inv.thisWeek": "Aste hau", "adm.inv.createInvoice": "Faktura sortu",
  "adm.set.fiscal": "Datu fiskalak", "adm.set.fiscalDesc": "Datu hauek fakturetan igorle gisa agertuko dira", "adm.set.fiscalName": "Izen soziala", "adm.set.fiscalId": "IFK", "adm.set.fiscalAddress": "Helbide fiskala",

  // ── Payments ──
  "adm.pay.title": "Ordainketak", "adm.pay.revenueToday": "Gaurko diru-sarrerak", "adm.pay.revenueMonth": "Hilabete honetako diru-sarrerak", "adm.pay.pending": "Zain dauden ordainketak", "adm.pay.deposits": "Biltako fidantzak", "adm.pay.refundsIssued": "Emandako itzulketak", "adm.pay.payments": "Ordainketak", "adm.pay.refunds": "Itzulketak", "adm.pay.noPayments": "Ez dago ordainketarik erregistratuta. Stripe konektatzean agertuko dira hemen.", "adm.pay.noRefunds": "Ez dago itzulketarik erregistratuta.", "adm.pay.deposit": "Fidantza", "adm.pay.noReason": "Arrazoirik gabe", "adm.pay.pPending": "Zain", "adm.pay.pCompleted": "Osatua", "adm.pay.pFailed": "Huts egina", "adm.pay.pRefunded": "Itzulita", "adm.pay.pPartial": "Itzulketa partziala", "adm.pay.processed": "Prozesatua",

  // ── Reviews ──
  "adm.rev.title": "Pazienteen iritziak", "adm.rev.pending": "Zain", "adm.rev.approved": "Onartuak", "adm.rev.rejected": "Baztertuak", "adm.rev.all": "Guztiak", "adm.rev.approve": "Onartu", "adm.rev.reject": "Baztertu", "adm.rev.disapprove": "Ez onartu", "adm.rev.deleteReview": "Ezabatu", "adm.rev.noReviews": "Ez dago iritzirik", "adm.rev.anonymous": "Anonimoa", "adm.rev.approvedLabel": "Onartua", "adm.rev.rejectedLabel": "Baztertua", "adm.rev.pendingLabel": "Zain", "adm.rev.reviewApproved": "Iritzia onartuta", "adm.rev.reviewRejected": "Iritzia baztertuta", "adm.rev.reviewDeleted": "Iritzia ezabatuta", "adm.rev.updateError": "Errorea eguneratzean", "adm.rev.deleteError": "Errorea ezabatzean",
  "adm.quot.pricesIncludeVat": "Prezioek BEZa barne dute",

  // ── Waitlist ──
  "adm.wait.title": "Itxaron zerrenda", "adm.wait.waiting": "itxaroten", "adm.wait.noEntries": "Ez dago inor itxaron zerrendan.", "adm.wait.noEntriesHint": "Bezeroek bat egin dezakete tokirik ez dagoenean.", "adm.wait.notify": "Jakinarazi", "adm.wait.book": "Erreserbatu", "adm.wait.preference": "Hobespena", "adm.wait.registered": "Erregistratua", "adm.wait.statusUpdated": "Egoera eguneratuta", "adm.wait.wWaiting": "Itxaroten", "adm.wait.wNotified": "Jakinarazia", "adm.wait.wBooked": "Erreserbatua", "adm.wait.wExpired": "Iraungia", "adm.wait.wCancelled": "Ezeztatua",

  // ── Reminders ──
  "adm.rem.title": "Oroigarriak", "adm.rem.subtitle": "Konfiguratu hitzorduen oroigarri automatikoak", "adm.rem.new": "Berria", "adm.rem.noReminders": "Ez dago oroigarririk konfiguratuta.", "adm.rem.noRemindersHint": "Konfiguratu email oroigarriak hitzordua baino 2 ordu, 24 ordu edo 48 ordu lehenago.", "adm.rem.channel": "Kanala", "adm.rem.hoursBefore": "Ordu lehenago", "adm.rem.subject": "Emailaren gaia", "adm.rem.body": "Mezuaren gorputza", "adm.rem.bodyPlaceholder": "Kaixo {name}, {service} hitzordua gogorarazten dizugu {date} egunean {time} orduan.", "adm.rem.subjectPlaceholder": "Zure hitzorduaren oroigarria", "adm.rem.created": "Oroigarria konfiguratuta", "adm.rem.deleted": "Oroigarria ezabatuta", "adm.rem.createCta": "Oroigarria sortu", "adm.rem.smsFuture": "SMS (laster)", "adm.rem.whatsappFuture": "WhatsApp (laster)",

  // ── Campaigns ──
  "adm.camp.title": "Marketin Kanpainak", "adm.camp.subtitle": "Kudeatu email, SMS eta berrabiarazte kanpainak", "adm.camp.new": "Kanpaina berria", "adm.camp.create": "Kanpaina sortu", "adm.camp.noResults": "Ez dago kanpainarik sortuta", "adm.camp.campaignName": "Kanpainaren izena", "adm.camp.subject": "Emailaren gaia", "adm.camp.content": "Mezuaren edukia (HTML)...", "adm.camp.totalCampaigns": "Guztira kanpainak", "adm.camp.sentCampaigns": "Bidalitakoak", "adm.camp.drafts": "Zirriborroak", "adm.camp.scheduled": "Programatuak", "adm.camp.campaign": "Kanpaina", "adm.camp.type": "Mota", "adm.camp.sentCount": "Bidalita", "adm.camp.openedCount": "Irekita", "adm.camp.sending": "Bidaltzen...", "adm.camp.sendCta": "Bidali", "adm.camp.created": "Kanpaina sortuta", "adm.camp.sent": "Kanpaina bidalita", "adm.camp.createError": "Errorea kanpaina sortzean", "adm.camp.smsSoon": "SMS (laster)", "adm.camp.whatsappSoon": "WhatsApp (laster)", "adm.camp.autoReactivation": "Berrabiarazte automatikoa",
  "adm.camp.recipients": "Hartzaileak", "adm.camp.allClients": "Bezero guztiak", "adm.camp.byTag": "Etiketaren arabera", "adm.camp.selectTag": "Etiketa aukeratu", "adm.camp.selectedCount": "hautatutako hartzaileak", "adm.camp.preview": "Aurrebista", "adm.camp.editor": "Editorea", "adm.camp.addBlock": "Blokea gehitu", "adm.camp.blockHeading": "Izenburua", "adm.camp.blockText": "Testua", "adm.camp.blockImage": "Irudia", "adm.camp.blockButton": "Botoia", "adm.camp.blockDivider": "Bereizlea", "adm.camp.btnText": "Botoiaren testua", "adm.camp.btnUrl": "Botoiaren URLa", "adm.camp.imgUrl": "Irudiaren URLa", "adm.camp.imgAlt": "Testu alternatiboa", "adm.camp.headingText": "Izenburuaren testua", "adm.camp.paragraphText": "Idatzi zure testua hemen...", "adm.camp.deleteBlock": "Blokea ezabatu", "adm.camp.moveUp": "Igo", "adm.camp.moveDown": "Jaitsi", "adm.camp.confirmSend": "Kanpaina hau {n} hartzaileri bidali?", "adm.camp.noRecipients": "Ez dago hartzailerik kanpaina honetarako", "adm.camp.editCampaign": "Kanpaina editatu", "adm.camp.recipientsSummary": "{n} bezerori bidaliko zaie",

  // ── Loyalty ──
  "adm.loy.title": "Fidelizazioa eta Erreferentziak", "adm.loy.subtitle": "Puntu programa, erreferentziak eta iritziak", "adm.loy.programActive": "Programa aktiboa", "adm.loy.pointsIssued": "Emandako puntuak", "adm.loy.pointsRedeemed": "Trukatu diren puntuak", "adm.loy.references": "Erreferentziak", "adm.loy.feedbackReceived": "Jasotako iritziak", "adm.loy.points": "Puntuak", "adm.loy.referrals": "Erreferentziak", "adm.loy.feedback": "Iritzia", "adm.loy.config": "Konfigurazioa", "adm.loy.source": "Iturria", "adm.loy.code": "Kodea", "adm.loy.referredEmail": "Erreferentziako emaila", "adm.loy.rewardPoints": "Puntuak", "adm.loy.rating": "Balorazioa", "adm.loy.serviceRating": "Zerbitzua", "adm.loy.staffRating": "Taldea", "adm.loy.comment": "Iruzkina", "adm.loy.noPoints": "Ez dago puntu mugimendurik", "adm.loy.noReferrals": "Ez dago erreferentziarik", "adm.loy.noFeedback": "Ez dago iritzirik", "adm.loy.configTitle": "Programaren konfigurazioa", "adm.loy.perBooking": "Puntuak erreserba bakoitzeko", "adm.loy.perEuro": "Puntuak gastatutako € bakoitzeko", "adm.loy.perReferral": "Puntuak erreferentzia bakoitzeko", "adm.loy.redemptionRate": "Trukaketa balioa (€/puntu)", "adm.loy.configUpdated": "Konfigurazioa eguneratuta", "adm.loy.saveConfig": "Konfigurazioa gorde",

  // ── Quotes ──
  "adm.quot.title": "Aurrekontuak", "adm.quot.new": "Aurrekontu berria", "adm.quot.noQuotes": "Ez dago aurrekonturik. Sortu lehenengoa.", "adm.quot.validUntil": "Baliozkoa arte", "adm.quot.sendCta": "Bidali", "adm.quot.accept": "Onartu", "adm.quot.validity": "Baliozkotasuna (egunak)", "adm.quot.services": "Zerbitzuak", "adm.quot.created": "Aurrekontua sortuta", "adm.quot.createError": "Errorea aurrekontua sortzean", "adm.quot.draft": "Zirriborroa", "adm.quot.sent": "Bidalita", "adm.quot.viewed": "Ikusita", "adm.quot.accepted": "Onartuta", "adm.quot.expired": "Iraungita", "adm.quot.rejected": "Baztertuta", "adm.quot.totalQuotes": "Aurrekontu guztira", "adm.quot.pending": "Zain", "adm.quot.conversion": "Bihurtzea", "adm.quot.thisMonth": "Hilabete hau", "adm.quot.thisWeek": "Aste hau", "adm.quot.remaining": "geratzen dira", "adm.quot.sendQuote": "Aurrekontua bidali",

  // ── Packages ──
  "adm.pkg.title": "Bonuak", "adm.pkg.new": "Bonu berria", "adm.pkg.edit": "Bonua editatu", "adm.pkg.packages": "Bonuak", "adm.pkg.purchases": "Erosketak", "adm.pkg.noPackages": "Ez dago bonurik sortuta. Sortu lehenengoa.", "adm.pkg.noPurchases": "Ez dago bonu erosketarik.", "adm.pkg.sessions": "Saioak", "adm.pkg.validityDays": "Baliozkotasuna (egunak)", "adm.pkg.validFor": "Baliozkoa", "adm.pkg.days": "egun", "adm.pkg.used": "Erabilitakoak", "adm.pkg.remaining": "Gainerakoak", "adm.pkg.deactivate": "Desaktibatu", "adm.pkg.activate": "Aktibatu", "adm.pkg.updated": "Bonua eguneratuta", "adm.pkg.created": "Bonua sortuta", "adm.pkg.saveChanges": "Aldaketak gorde", "adm.pkg.createPkg": "Bonua sortu", "adm.pkg.active": "Aktiboa", "adm.pkg.expired": "Iraungia", "adm.pkg.exhausted": "Agortuta",

  // ── Automation ──
  "adm.auto.title": "Automatizazioak", "adm.auto.subtitle": "Negozio gertaeretan oinarritutako arau automatikoak", "adm.auto.runNow": "Exekutatu orain", "adm.auto.running": "Exekutatzen...", "adm.auto.newRule": "Arau berria", "adm.auto.createRule": "Automatizazioa sortu", "adm.auto.ruleName": "Arauaren izena", "adm.auto.trigger": "Gertaera abiarazlea", "adm.auto.action": "Exekutatu beharreko ekintza", "adm.auto.activeRules": "Arau aktiboak", "adm.auto.totalExecs": "Exekuzioak guztira", "adm.auto.todayLogs": "Gaurko erregistroak", "adm.auto.rules": "Arauak", "adm.auto.log": "Historiala", "adm.auto.executions": "Exekuzioak", "adm.auto.noRules": "Ez dago automatizazio araulik", "adm.auto.noLogs": "Ez dago exekuzio erregistrorik", "adm.auto.destination": "Helmugakoa", "adm.auto.created": "Automatizazioa sortuta", "adm.auto.createError": "Errorea automatizazioa sortzean", "adm.auto.executed": "Automatizazioak behar bezala exekutatu dira",
  "adm.auto.tApptCompleted": "Hitzordua osatuta", "adm.auto.tApptCancelled": "Hitzordua ezeztatuta", "adm.auto.tNoShow": "Ez da agertu", "adm.auto.tQuoteSent": "Aurrekontua bidalita", "adm.auto.tQuoteNotAccepted": "Aurrekontua onartu gabe (X egun)", "adm.auto.tQuoteExpiring": "Aurrekontua iraungitzear", "adm.auto.tNoBooking": "Erreserbarik gabe X egunetan", "adm.auto.tPkgLow": "Bonua saio gutxirekin",
  "adm.auto.aSendEmail": "Emaila bidali", "adm.auto.aReviewReq": "Iritzia eskatu", "adm.auto.aReactivation": "Berrabiaraztea bidali", "adm.auto.aNextSlot": "Hurrengo tartea eskaini", "adm.auto.aRenewal": "Bonua berritzeko iradoki", "adm.auto.aTimeline": "Timeline-an erregistratu",

  // ── Exports ──
  "adm.exp.title": "Esportazioak", "adm.exp.subtitle": "Esportatu sistemako datuak CSV, Excel edo PDF formatuan", "adm.exp.bookings": "Erreserbak", "adm.exp.bookingsDesc": "Hitzorduen eta erreserben historiala", "adm.exp.clients": "Bezeroak", "adm.exp.clientsDesc": "Bezeroen datu-basea", "adm.exp.revenue": "Diru-sarrerak", "adm.exp.revenueDesc": "Ordainketen eta diru-sarreren txostena", "adm.exp.services": "Zerbitzuak", "adm.exp.servicesDesc": "Katalogoa eta zerbitzuen errendimendua", "adm.exp.reviews": "Iritziak", "adm.exp.reviewsDesc": "Bezeroen balorazioak", "adm.exp.noDataExport": "Ez dago daturik esportatzeko", "adm.exp.exported": "Esportatuta {n} erregistro", "adm.exp.error": "Errorea esportatzean", "adm.exp.configExport": "Esportazioa konfiguratu", "adm.exp.dateRange": "Data-tartea", "adm.exp.custom": "Pertsonalizatua", "adm.exp.from": "Noiztik", "adm.exp.to": "Noiz arte", "adm.exp.preview": "Aurrebista", "adm.exp.previewTitle": "Aurrebista", "adm.exp.rows": "erregistro", "adm.exp.rowsExported": "erregistro esportatuta", "adm.exp.showingFirst": "Lehenak erakusten",

  // ── Analytics ──
  "adm.an.title": "Analytics", "adm.an.subtitle": "Negozioaren errendimendu metrikak", "adm.an.last7": "Azken 7 egunak", "adm.an.last30": "Azken 30 egunak", "adm.an.last90": "Azken 90 egunak", "adm.an.lastYear": "Azken urtea", "adm.an.healthScore": "Business Health Score", "adm.an.healthDesc": "Bolumena, ezeztatzeak, ez agertzeak eta gogobetetasunean oinarrituta", "adm.an.excellent": "Bikaina", "adm.an.good": "Ona", "adm.an.needsAttention": "Arreta behar du",
  "adm.an.bookings": "Erreserbak", "adm.an.completed": "Osatuak", "adm.an.revenue": "Diru-sarrerak", "adm.an.today": "Gaur", "adm.an.cancRate": "% Ezeztatzea", "adm.an.rating": "Balorazioa",
  "adm.an.tabBookings": "Erreserbak", "adm.an.tabRevenue": "Diru-sarrerak", "adm.an.tabOps": "Eragiketak", "adm.an.tabSatisfaction": "Gogobetetasuna", "adm.an.tabClients": "Bezeroak", "adm.an.tabInsights": "IA Insights", "adm.an.tabAutomation": "Automatizazioa",
  "adm.an.bookingsPerDay": "Erreserbak eguneko", "adm.an.bookingsPerService": "Erreserbak zerbitzuko", "adm.an.bookingsPerProf": "Erreserbak profesionaleko", "adm.an.revenuePerService": "Diru-sarrerak zerbitzuko", "adm.an.peakHours": "Puntako orduak", "adm.an.apptStatus": "Hitzorduen egoera", "adm.an.completedLabel": "Osatuak", "adm.an.cancelledLabel": "Ezeztatuak", "adm.an.pendingLabel": "Zain",
  "adm.an.satByService": "Gogobetetasuna zerbitzuko", "adm.an.satByProf": "Gogobetetasuna profesionaleko", "adm.an.ratingSummary": "Balorazioen laburpena", "adm.an.byService": "Zerbitzuko", "adm.an.byProf": "Profesionaleko", "adm.an.noSatData": "Ez dago gogobetetasun daturik", "adm.an.generalRating": "Balorazio orokorra", "adm.an.serviceRating": "Zerbitzuaren balorazioa", "adm.an.profRating": "Profesionalaren balorazioa",
  "adm.an.totalClients": "Guztira bezeroak", "adm.an.riskClients": "Arriskuan dauden bezeroak", "adm.an.churnRisk": "Uzteen arriskua", "adm.an.noShowGlobal": "Ez agertzeen tasa globala", "adm.an.churnDetail": "Abandonatzeko arriskua", "adm.an.clients": "bezero",
  "adm.an.aiAnalysis": "IAk sortutako analisia azken 90 egunetako datuetan oinarrituta", "adm.an.regenerate": "Birsorkuntza", "adm.an.regenerating": "Insights-ak birsortzen...", "adm.an.analyzing": "Negozioaren datuak aztertzen...", "adm.an.insights": "Eragin daitezkeen insights-ak", "adm.an.topServices": "🔝 Zerbitzurik errentagarrienak", "adm.an.underperforming": "⚠️ Arreta behar duten zerbitzuak", "adm.an.allGood": "Zerbitzu guztiek ongi funtzionatzen dute", "adm.an.predictions": "Iragarpenak eta gomendioak", "adm.an.busyPeriods": "Aurreikusitako lanpetutako garaiak", "adm.an.revenueTrend": "Diru-sarreren joera", "adm.an.recCampaigns": "Gomendatutako kanpainak", "adm.an.noInsights": "Ezin izan dira insights-ak sortu. Sakatu \"Birsorkuntza\" berriro saiatzeko.",
  "adm.an.aiUsage": "IA eta automatizazioaren erabilera", "adm.an.noAiData": "Ez dago IAren erabilera daturik epe honetan", "adm.an.autoMetrics": "Automatizazio metrikak", "adm.an.aiConvs": "IA elkarrizketak", "adm.an.voiceConvs": "Ahots elkarrizketak", "adm.an.autoEmails": "Email automatizatuak", "adm.an.quotesGen": "Sortutako aurrekontuak", "adm.an.noServiceLabel": "Zerbitzurik gabe", "adm.an.unassigned": "Esleitu gabe",

  // ── CRM ──
  "adm.crm.title": "CRM — Bezeroak", "adm.crm.registered": "erregistratutako bezeroak", "adm.crm.segment": "Segmentua", "adm.crm.tag": "Etiketa", "adm.crm.allTags": "Guztiak", "adm.crm.vip": "VIP (10+ bisita)", "adm.crm.new": "Berriak", "adm.crm.risky": "Arriskua", "adm.crm.noName": "Izenik gabe", "adm.crm.riskLabel": "Arriskua", "adm.crm.appts": "hitzorduak", "adm.crm.noClients": "Ez da bezerorik aurkitu", "adm.crm.selectClient": "Aukeratu bezero bat profila ikusteko",
  "adm.crm.tabProfile": "Profila", "adm.crm.tabTimeline": "Timeline", "adm.crm.tabAppts": "Hitzorduak", "adm.crm.tabPayments": "Ordainketak", "adm.crm.tabNotes": "Oharrak",
  "adm.crm.emailLabel": "Emaila:", "adm.crm.phoneLabel": "Telefonoa:", "adm.crm.addressLabel": "Helbidea:", "adm.crm.insuranceLabel": "Asegurua:", "adm.crm.apptsLabel": "Hitzorduak", "adm.crm.completedLabel": "Osatuak", "adm.crm.revenueLabel": "Diru-sarrerak",
  "adm.crm.noTimeline": "Ez dago gertaerarik timeline-an", "adm.crm.noAppts": "Ez dago hitzordurik", "adm.crm.noPayments": "Ez dago ordainketarik", "adm.crm.amount": "Zenbatekoa", "adm.crm.method": "Metodoa", "adm.crm.service": "Zerbitzua", "adm.crm.professional": "Profesionala",
  "adm.crm.writeNote": "Idatzi barne ohar bat...", "adm.crm.addNote": "Gehitu", "adm.crm.noteAdded": "Oharra gehituta", "adm.crm.noteError": "Errorea oharra gehitzean",

  // ── Settings ──
  "adm.set.title": "Konfigurazioa", "adm.set.subtitle": "Kudeatu negozioaren konfigurazio orokorra",
  "adm.set.tabGeneral": "Orokorra", "adm.set.tabBranding": "Marka", "adm.set.tabProviders": "Hornitzaileak", "adm.set.tabPlan": "Plana", "adm.set.tabAudit": "Auditoria",
  "adm.set.businessInfo": "Negozioaren informazioa", "adm.set.web": "Webgunea", "adm.set.timezone": "Ordu-eremua", "adm.set.currency": "Moneta", "adm.set.languages": "Hizkuntzak",
  "adm.set.branding": "White-label / Marka", "adm.set.brandingDesc": "Pertsonalizatu negozioaren itxura", "adm.set.logoUrl": "Logoaren URLa", "adm.set.primaryColor": "Kolore nagusia", "adm.set.secondaryColor": "Bigarren mailako kolorea",
  "adm.set.providers": "Zerbitzu hornitzaileak", "adm.set.providersDesc": "Konfiguratu IA, email, ahots eta automatizazio hornitzaileak", "adm.set.aiMain": "IA Nagusia", "adm.set.aiMainDesc": "Adimen artifizialeko hornitzailea", "adm.set.aiFallback": "IA Fallback", "adm.set.aiFallbackDesc": "Ordezko IA hornitzailea", "adm.set.emailProv": "Emaila", "adm.set.emailProvDesc": "Emailak bidaltzeko hornitzailea", "adm.set.voiceProv": "Ahotsa", "adm.set.voiceProvDesc": "Text-to-speech hornitzailea", "adm.set.smsProv": "SMS", "adm.set.smsProvDesc": "SMS mezu hornitzailea", "adm.set.calProv": "Egutegia", "adm.set.calProvDesc": "Kanpoko egutegiekin sinkronizazioa", "adm.set.provActive": "Aktiboa", "adm.set.provNotConfigured": "Konfiguratu gabe", "adm.set.usage": "Erabilera",
  "adm.set.planTitle": "Plana eta mugak", "adm.set.professionals": "Profesionalak", "adm.set.locations": "Kokalekuak", "adm.set.services": "Zerbitzuak", "adm.set.bookingsMonth": "Erreserbak/hilabete", "adm.set.aiCallsMonth": "IA deiak/hilabete", "adm.set.emailsMonth": "Emailak/hilabete", "adm.set.noPlan": "Ez dago planik konfiguratuta. Lehenetsitako mugak aplikatuko dira.",
  "adm.set.auditTitle": "Auditoria erregistroa", "adm.set.auditDesc": "Azken 50 ekintza administratiboak", "adm.set.noAudit": "Ez dago erregistrorik oraindik", "adm.set.updated": "Konfigurazioa eguneratuta",

  // ── Blog ──
  "adm.blog.title": "Bloga", "adm.blog.subtitle": "Kudeatu artikuluak eta SEO edukia", "adm.blog.new": "Artikulu berria", "adm.blog.edit": "Editatu artikulua", "adm.blog.noArticles": "Ez dago artikulurik oraindik", "adm.blog.titleLabel": "Izenburua", "adm.blog.slug": "Sluga", "adm.blog.excerpt": "Laburpena", "adm.blog.content": "Edukia (Markdown)", "adm.blog.author": "Egilea", "adm.blog.tags": "Etiketak (komaz bereizita)", "adm.blog.coverImage": "Azaleko irudiaren URLa", "adm.blog.metaTitle": "SEO meta izenburua", "adm.blog.metaDesc": "SEO meta deskribapena", "adm.blog.draft": "Zirriborroa", "adm.blog.published": "Argitaratua", "adm.blog.updated": "Artikulua eguneratua", "adm.blog.created": "Artikulua sortua", "adm.blog.deleted": "Artikulua ezabatua", "adm.blog.saveError": "Errorea gordetzean",

  "adm.staff.title": "Barne mezuak", "adm.staff.unread": "irakurri gabe", "adm.staff.new": "Mezu berria", "adm.staff.sendToTeam": "Mezua taldeari bidali", "adm.staff.subject": "Gaia", "adm.staff.message": "Mezua...", "adm.staff.send": "Bidali", "adm.staff.sent": "Mezua bidalita", "adm.staff.sendError": "Errorea mezua bidaltzean", "adm.staff.noSubject": "Gairik gabe", "adm.staff.newBadge": "Berria", "adm.staff.noMessages": "Ez dago mezurik", "adm.staff.compose": "Idatzi", "adm.staff.inbox": "Jasotakoak", "adm.staff.sentTab": "Bidalitakoak", "adm.staff.allRead": "Egunean", "adm.staff.recipient": "Hartzailea", "adm.staff.allTeam": "Talde osoa", "adm.staff.admin": "Administrazioa", "adm.staff.reception": "Harrera", "adm.staff.teamMember": "Taldekidea", "adm.staff.you": "zu", "adm.staff.to": "Nori", "adm.staff.read": "Irakurrita", "adm.staff.backToMessages": "Mezuetara itzuli", "adm.staff.reply": "Erantzun", "adm.staff.replyAll": "Erantzun guztiei", "adm.staff.forward": "Birbidali", "adm.staff.originalMessage": "Jatorrizko mezua", "adm.staff.fwdPrefix": "BB: ", "adm.staff.rePrefix": "ER: ", "adm.staff.fwdFrom": "Birbidalia hemendik", "adm.staff.attach": "Erantsi", "adm.staff.attachments": "Eranskinak", "adm.staff.fileTooLarge": "Fitxategia handiegia da (gehienez 20 MB)", "adm.staff.downloadError": "Errorea fitxategia deskargatzean", "adm.staff.sending": "Bidaltzen...",
  "adm.tax.title": "Zergak", "adm.tax.subtitle": "Konfiguratu zerga tasak fakturetarako eta aurrekontuetarako", "adm.tax.new": "Zerga berria", "adm.tax.noTaxes": "Ez dago zergarik konfiguratuta.", "adm.tax.noTaxesHint": "Sortu zerga tasa bat, hala nola BEZ %21 edo IGIC %7.", "adm.tax.name": "Izena", "adm.tax.rate": "Ehunekoa (%)", "adm.tax.region": "Eskualdea (aukerakoa)", "adm.tax.default": "Lehenetsita", "adm.tax.setDefault": "Lehenetsi gisa erabili", "adm.tax.created": "Zerga konfiguratuta", "adm.tax.defaultSet": "Zerga lehenetsitakotzat jarrita", "adm.tax.deleted": "Zerga ezabatuta", "adm.tax.create": "Zerga sortu",
  "adm.calsync.title": "Egutegien sinkronizazioa", "adm.calsync.subtitle": "Kanpoko egutegiak konektatu erreserbak bikoiztea ekiditeko", "adm.calsync.connections": "konexioak", "adm.calsync.connect": "Konektatu (laster)", "adm.calsync.activeTitle": "Konexio aktiboak", "adm.calsync.noConnections": "Ez dago egutegirik konektatuta.", "adm.calsync.noConnectionsHint": "Profesional bakoitzak bere Google Calendar, iCal edo Outlook konekta dezake.", "adm.calsync.active": "Aktiboa", "adm.calsync.paused": "Geldituta", "adm.calsync.lastSync": "Azken sinkronizazioa",
  "adm.auditlog.title": "Auditoria erregistroa", "adm.auditlog.subtitle": "Ekintza administratiboen historiala", "adm.auditlog.search": "Bilatu...", "adm.auditlog.all": "Guztiak", "adm.auditlog.create": "Sortu", "adm.auditlog.update": "Eguneratu", "adm.auditlog.deleteAction": "Ezabatu", "adm.auditlog.exportAction": "Esportatu", "adm.auditlog.roleChange": "Rol aldaketa", "adm.auditlog.loading": "Kargatzen...", "adm.auditlog.noLogs": "Erregistrorik ez",
};

const fr: TranslationDict = {
  "nav.services": "Services", "nav.contact": "Contact", "nav.book": "Prendre rendez-vous", "nav.myAccount": "Mon compte", "nav.logout": "Déconnexion", "nav.panel": "Mon tableau de bord",
  "hero.tag": "Esthétique Intégrale Avancée", "hero.subtitle": "Nous prenons soin de votre peau et de votre bien-être avec des techniques avancées et une approche personnalisée.", "hero.cta": "Prendre rendez-vous", "hero.explore": "Explorer les traitements",
  "footer.schedule": "Horaires", "footer.address": "Adresse", "footer.contact": "Contact", "footer.rights": "© 2026 Clínica Baluarte. Tous droits réservés.", "footer.weekdays": "Du lundi au vendredi", "footer.privacy": "Politique de confidentialité", "footer.terms": "Conditions générales", "footer.cookies": "Politique de cookies", "footer.designedBy": "Conçu par",
  "cookie.title": "Votre vie privée compte", "cookie.desc": "Nous utilisons des cookies essentiels pour le fonctionnement du site. Les cookies analytiques et marketing sont optionnels.", "cookie.accept": "Tout accepter", "cookie.reject": "Refuser les optionnels", "cookie.manage": "Gérer les préférences", "cookie.save": "Enregistrer les préférences", "cookie.essential": "Essentiels (obligatoires)", "cookie.analytics": "Analytiques", "cookie.marketing": "Marketing",
  "privacy.title": "Politique de confidentialité", "terms.title": "Conditions générales", "cookies.title": "Politique de cookies",
  "blog.title": "Blog", "blog.readMore": "Lire la suite", "blog.defaultAuthor": "Clínica Baluarte",
  "common.loading": "Chargement...", "pub.loadingServices": "Chargement des services...", "pub.catalogue": "Catalogue", "pub.ourServices": "Nos Services", "pub.minutesShort": "min", "pub.serviceNotFound": "Service introuvable", "pub.professionalNotFound": "Professionnel introuvable", "pub.locationNotFound": "Centre introuvable", "pub.articleNotFound": "Article introuvable", "pub.viewAllServices": "Voir tous les services", "pub.backToBlog": "Retour au blog", "pub.back": "Retour", "pub.schedule": "Horaires", "pub.closed": "Fermé", "pub.bookService": "Réserver ce service", "pub.bookWith": "Réserver avec {name}", "pub.bookIn": "Réserver à {name}", "pub.serviceSeoDesc": "Service {name} à Clínica Baluarte Pampelune", "pub.professionalSeoDesc": "{name}, {role} à Clínica Baluarte Pampelune", "pub.locationSeoDesc": "Visitez notre centre {name}. {address}", "cita.loading": "Traitement de votre demande...", "cita.confirmedTitle": "Rendez-vous confirmé !", "cita.confirmedDesc": "Merci pour votre confirmation. Nous vous attendons demain chez Doixa.", "cita.cancelledTitle": "Rendez-vous annulé", "cita.cancelledDesc": "Votre rendez-vous a été annulé. Vous pouvez en réserver un nouveau quand vous voulez.", "cita.alreadyTitle": "Rendez-vous déjà traité", "cita.alreadyDesc": "Ce rendez-vous a déjà été modifié et ne peut plus être changé.", "cita.errorTitle": "Erreur", "cita.errorDesc": "Impossible de traiter la demande. Le lien peut être invalide ou expiré.", "cita.bookNew": "Réserver un nouveau rendez-vous", "cita.home": "Aller à l'accueil",
  "settings.title": "Paramètres", "export.csv": "Exporter CSV", "export.excel": "Exporter Excel", "export.pdf": "Exporter PDF",
  "contact.tag": "Parlons-en", "contact.title": "Nous sommes", "contact.titleAccent": "proches", "contact.subtitle": "Conseil personnalisé pour trouver le traitement parfait pour vous.", "contact.formTitle": "Écrivez-nous", "contact.formSubtitle": "Nous répondons en moins de 24h.", "contact.name": "Nom *", "contact.email": "Email *", "contact.phone": "Téléphone (optionnel)", "contact.message": "Votre message *", "contact.send": "Envoyer le message", "contact.sending": "Envoi en cours...", "contact.success": "Message envoyé ! Nous vous répondrons bientôt.", "contact.error": "Erreur lors de l'envoi. Veuillez réessayer.", "contact.address": "Adresse", "contact.schedule": "Horaires", "contact.needAppt": "Besoin d'un rendez-vous ?", "contact.useAssistant": "Utilisez notre assistant intelligent via l'icône du microphone.",
  "services.tag": "Nos services", "services.titlePrefix": "Ce que nous", "services.titleAccent": "faisons", "services.bookCta": "Prendre rendez-vous", "services.consultCta": "Consulter", "services.clickHint": "Cliquez sur une catégorie pour voir toutes les spécialités",
  "explorer.tag": "Catalogue", "explorer.title": "Explorer par", "explorer.titleAccent": "catégorie", "explorer.loading": "Chargement du catalogue…",
  "top.tag": "En vedette", "top.title": "Votre bien-être est notre", "top.titleAccent": "priorité", "top.bookCta": "Prendre rendez-vous", "top.benefit1": "Soulagement de la douleur et récupération de la mobilité", "top.benefit2": "Traitements fondés sur des preuves scientifiques", "top.benefit3": "Soins personnalisés par des professionnels certifiés", "top.fisioDesc": "Récupérez votre mobilité et éliminez la douleur avec des traitements thérapeutiques professionnels.", "top.podoDesc": "Prenez soin de vos pieds avec des traitements spécialisés et une technologie avancée.", "top.nutriDesc": "Plans nutritionnels personnalisés pour atteindre vos objectifs de santé.",
  "cta.title": "Prêt à prendre soin de votre santé ?", "cta.subtitle": "Notre équipe de professionnels est prête à vous aider. Prenez rendez-vous ou utilisez notre assistant intelligent.",
  "testimonials.tag": "Avis", "testimonials.titlePrefix": "Ce que disent nos", "testimonials.titleAccent": "patients", "testimonials.avgLabel": "note moyenne", "testimonials.satisfiedPatients": "patients satisfaits", "testimonials.badge1": "Professionnels certifiés", "testimonials.badge2": "Soins personnalisés", "testimonials.badge3": "Équipement de dernière génération", "testimonials.ctaText": "Êtes-vous patient de Clínica Baluarte ? Accédez à votre tableau de bord pour laisser votre avis.", "testimonials.ctaButton": "Accéder à mon tableau de bord", "testimonials.anonymous": "Patient",
  "booking.categoryTitle": "Quel type de traitement recherchez-vous ?", "booking.loading": "Chargement des options de traitement...", "booking.retry": "Réessayer", "booking.noCategories": "Aucune catégorie disponible pour le moment.", "booking.refresh": "Actualiser", "booking.servicesCount": "services", "booking.servicesOf": "Services de", "booking.chooseService": "Choisissez le traitement que vous préférez", "booking.perSession": "par séance", "booking.chooseProfessional": "Choisissez votre professionnel", "booking.whichProfessional": "Avec qui préférez-vous votre rendez-vous ?", "booking.noPref": "Pas de préférence de professionnel", "booking.chooseDate": "Choisissez une date", "booking.chooseTime": "Choisissez une heure", "booking.availableSlots": "Horaires disponibles", "booking.noSlots": "Aucun horaire disponible.", "booking.otherDate": "Autre date", "booking.confirmTitle": "Confirmez votre rendez-vous", "booking.fullName": "Nom complet *", "booking.namePlaceholder": "Votre nom", "booking.emailLabel": "Email *", "booking.phoneLabel": "Téléphone *", "booking.phonePlaceholder": "+34 600 000 000", "booking.confirming": "Confirmation...", "booking.confirmCta": "Confirmer le rendez-vous", "booking.successTitle": "Rendez-vous demandé !", "booking.withProfessional": "Avec", "booking.onDate": "Le", "booking.atTime": "à", "booking.emailConfirmation": "Nous vous confirmerons par email à", "booking.bookAnother": "Réserver un autre rendez-vous pour quelqu'un d'autre", "booking.goHome": "Retour à l'accueil", "booking.stepCategory": "Catégorie", "booking.stepService": "Service", "booking.stepProfessional": "Professionnel", "booking.stepDate": "Date", "booking.stepTime": "Heure", "booking.stepInfo": "Détails", "booking.loadingProfessionals": "Chargement...",
  "auth.login": "Se connecter", "auth.register": "Créer un compte", "auth.welcome": "Bienvenue", "auth.loading": "Chargement...", "auth.emailLabel": "Email", "auth.passwordLabel": "Mot de passe", "auth.nameLabel": "Nom complet", "auth.phoneLabel": "Téléphone", "auth.forgotPassword": "Mot de passe oublié ?", "auth.noAccount": "Pas de compte ?", "auth.hasAccount": "Déjà un compte ?", "auth.registerCta": "S'inscrire", "auth.loginCta": "Se connecter", "auth.processing": "Traitement...", "auth.enter": "Se connecter", "auth.registerBtn": "S'inscrire", "auth.loginSubtitle": "Accédez à votre tableau de bord patient", "auth.registerSubtitle": "Inscrivez-vous pour gérer vos rendez-vous et plus", "auth.checkEmail": "Vérifiez votre email", "auth.checkEmailDesc": "Nous vous avons envoyé un lien de confirmation. Cliquez dessus pour activer votre compte.", "auth.backHome": "Retour à l'accueil", "auth.benefit1": "Réservez et gérez vos rendez-vous en ligne", "auth.benefit2": "Accédez à votre historique de traitements", "auth.benefit3": "Partagez votre avis sur nos services", "auth.withAccount": "Avec votre compte vous pouvez :", "auth.accountBenefits": "Avantages du compte :",
  "forgot.title": "Récupérer le mot de passe", "forgot.desc": "Entrez votre email et nous vous enverrons un lien pour réinitialiser votre mot de passe.", "forgot.sending": "Envoi...", "forgot.sendLink": "Envoyer le lien", "forgot.sentTitle": "Lien envoyé", "forgot.sentDesc": "Si un compte avec cet email existe, vous recevrez un lien de réinitialisation.", "forgot.checkSpam": "Vérifiez votre boîte de réception et le dossier spam. Le lien expire dans 1 heure.", "forgot.backLogin": "Retour à la connexion",
  "reset.title": "Nouveau mot de passe", "reset.desc": "Entrez votre nouveau mot de passe.", "reset.newPassword": "Nouveau mot de passe", "reset.confirmPassword": "Confirmer le mot de passe", "reset.saving": "Enregistrement...", "reset.save": "Enregistrer le mot de passe", "reset.successTitle": "Mot de passe mis à jour !", "reset.successDesc": "Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.", "reset.goLogin": "Aller à la connexion", "reset.invalidLink": "Lien invalide", "reset.invalidDesc": "Ce lien de récupération est invalide ou a expiré.", "reset.mismatch": "Les mots de passe ne correspondent pas.", "reset.tooShort": "Le mot de passe doit comporter au moins 6 caractères.",
  "client.title": "Mon Tableau de bord", "client.profile": "Mon profil", "client.appointments": "Mes rendez-vous", "client.noAppointments": "Vous n'avez pas de rendez-vous enregistrés.", "client.bookFirst": "Réserver mon premier rendez-vous", "client.upcoming": "À venir", "client.past": "Historique", "client.payments": "Paiements et factures", "client.packages": "Mes forfaits", "client.feedback": "Évaluations", "client.opinion": "Votre avis", "client.dataExport": "Mes données (RGPD)", "client.insurance": "Assurance santé", "client.newAppt": "Nouveau rendez-vous", "client.reschedule": "Reprogrammer", "client.cancel": "Annuler", "client.bookNow": "Réserver maintenant", "client.noUpcoming": "Pas de rendez-vous à venir", "client.noHistory": "Pas d'historique", "client.edit": "Modifier", "client.save": "Enregistrer", "client.fullName": "Nom complet", "client.email": "Email", "client.phone": "Téléphone", "client.address": "Adresse (optionnel)", "client.notRegistered": "Non enregistré", "client.notRegisteredAddr": "Non enregistrée", "client.logout": "Déconnexion", "client.cancelTitle": "Annuler ce rendez-vous ?", "client.cancelConfirm": "Oui, annuler", "client.cancelling": "Annulation...", "client.cancelled": "Rendez-vous annulé", "client.cancelledDesc": "Votre rendez-vous a été annulé avec succès.", "client.close": "Fermer", "client.back": "Retour", "client.rescheduleTitle": "Reprogrammer le rendez-vous", "client.chooseNewDate": "Choisir une nouvelle date", "client.slotsFor": "Horaires disponibles pour", "client.loadingSlots": "Chargement des horaires...", "client.noSlotsDay": "Aucun horaire disponible pour ce jour.", "client.cancelBtn": "Annuler", "client.confirmNewDate": "Confirmer la nouvelle date", "client.rescheduling": "Reprogrammation...", "client.reviewTitle": "Donnez votre avis", "client.reviewSubtitle": "Votre expérience aide d'autres patients. Les avis sont publiés après vérification.", "client.reviewSent": "Avis envoyé !", "client.reviewSentDesc": "Il sera vérifié avant publication.", "client.sendAnother": "Envoyer un autre avis", "client.rating": "Note", "client.comment": "Votre commentaire", "client.commentPlaceholder": "Racontez-nous votre expérience à Clínica Baluarte...", "client.displayName": "Nom affiché (optionnel)", "client.sendReview": "Envoyer l'avis", "client.sendingReview": "Envoi...", "client.dataUpdated": "Données mises à jour", "client.saveError": "Erreur de sauvegarde", "client.rescheduleError": "Erreur de reprogrammation", "client.rescheduled": "Rendez-vous reprogrammé avec succès", "client.reviewThanks": "Merci pour votre avis !", "client.reviewThanksDesc": "Votre avis sera vérifié par notre équipe avant publication.", "client.reviewError": "Erreur lors de l'envoi de l'avis",
  "admin.title": "Tableau de bord", "admin.panelTitle": "Panneau d'administration", "admin.todayAppts": "Rendez-vous aujourd'hui", "admin.activeAppts": "Rendez-vous actifs", "admin.activeServices": "Services actifs", "admin.messages": "Messages", "admin.backToSite": "Retour au site", "admin.logout": "Déconnexion",
  "admin.groupMain": "Principal", "admin.groupBusiness": "Activité", "admin.groupCRM": "CRM et Marketing", "admin.groupFinance": "Finances", "admin.groupComm": "Communication", "admin.groupContent": "Contenu", "admin.groupSystem": "Système",
  "admin.panel": "Tableau de bord", "admin.analytics": "Analytiques", "admin.calendar": "Calendrier", "admin.appointments": "Rendez-vous", "admin.services": "Services", "admin.professionals": "Professionnels", "admin.packages": "Forfaits", "admin.hours": "Horaires", "admin.crm": "CRM Clients", "admin.campaigns": "Campagnes", "admin.loyalty": "Fidélisation", "admin.automations": "Automatisations", "admin.paymentsNav": "Paiements", "admin.invoices": "Factures", "admin.quotes": "Devis", "admin.taxes": "Taxes", "admin.exports": "Exportations", "admin.waitlist": "Liste d'attente", "admin.reminders": "Rappels", "admin.calSync": "Calendriers", "admin.staffMsg": "Messages équipe", "admin.messagesNav": "Messages", "admin.reviews": "Avis", "admin.blog": "Blog", "admin.settings": "Paramètres", "admin.audit": "Audit",
  "chat.title": "Centre Intelligent", "chat.placeholder": "Tapez votre question...", "chat.reset": "Réinitialiser la conversation", "chat.close": "Fermer le chat", "chat.send": "Envoyer", "chat.expand": "Développer", "chat.introText": "Vous ne savez pas quel traitement choisir ? Demandez ici. Vous pouvez aussi consulter les détails et les prix.", "chat.errorMsg": "Désolé, une erreur s'est produite. Veuillez réessayer dans quelques secondes.",
  "voice.title": "Assistant Vocal", "voice.greeting": "Bonjour, je suis l'assistant virtuel de Clínica Baluarte. Je peux vous aider à réserver, reprogrammer ou annuler un rendez-vous. Appuyez sur le microphone pour me dire ce dont vous avez besoin.", "voice.initialGreeting": "Bonjour, je suis l'assistant virtuel de Clínica Baluarte. Comment puis-je vous aider ?", "voice.error": "Désolé, une erreur s'est produite. Veuillez réessayer.", "voice.noSupport": "Votre navigateur ne prend pas en charge la reconnaissance vocale. Utilisez Chrome ou Edge.", "voice.book": "Réserver un rendez-vous", "voice.reschedule": "Reprogrammer un rendez-vous", "voice.cancel": "Annuler un rendez-vous", "voice.openLabel": "Ouvrir l'assistant vocal", "voice.tapMic": "Appuyez sur le microphone pour parler", "voice.idle": "Appuyez sur le microphone pour parler", "voice.listening": "Écoute...", "voice.processing": "Traitement...", "voice.speaking": "Parle...", "voice.stopAudio": "Arrêter l'audio", "voice.mute": "Couper le son", "voice.unmute": "Activer le son", "voice.resetConv": "Réinitialiser la conversation", "voice.browserFallback": "Voix indisponible. Utilisation de la voix du navigateur.", "voice.blockedUntil": "Voix indisponible. Nouvelle tentative à", "voice.textPlaceholder": "Tapez votre message ou email...", "voice.play": "Lire", "voice.wantBook": "Je veux réserver un rendez-vous", "voice.wantReschedule": "Je veux reprogrammer un rendez-vous", "voice.wantCancel": "Je veux annuler un rendez-vous",
  "chip.fisio": "Quels services de kinésithérapie proposez-vous ?", "chip.backPain": "J'ai mal au dos : que recommandez-vous ?", "chip.podo": "En quoi consiste la podologie ?", "chip.nutri": "Je veux améliorer mon alimentation : options ?", "chip.activity": "Quels types d'activité physique avez-vous ?", "chip.prices": "Quels sont vos tarifs ?",
  "val.nameRequired": "Le nom est obligatoire", "val.maxChars": "Maximum {n} caractères", "val.invalidEmail": "Email invalide", "val.messageRequired": "Le message est obligatoire", "val.invalidService": "Service invalide", "val.invalidProfessional": "Professionnel invalide", "val.invalidDate": "Date invalide", "val.invalidTime": "Heure invalide", "val.nameBooking": "Nom obligatoire", "val.writeComment": "Écrivez un commentaire", "val.campaignName": "Nom obligatoire",
  "status.confirmed": "Confirmé", "status.rescheduled": "Reprogrammé", "status.cancelled_by_client": "Annulé", "status.cancelled_by_admin": "Annulé par admin", "status.completed": "Terminé", "status.attended": "Présent", "status.no_show": "Absent", "status.pending": "En attente",
  "catDesc.Fisioterapia": "Récupération et rééducation professionnelle", "catDesc.Podología": "Santé et bien-être de vos pieds", "catDesc.Nutrición": "Plans nutritionnels personnalisés", "catDesc.Actividad Física": "Exercice thérapeutique individualisé",
  "catDescLong.Fisioterapia": "Prévention, récupération et rééducation par des traitements thérapeutiques visant à rétablir le bon fonctionnement corporel.", "catDescLong.Podología": "Vos pieds sont la base de votre corps. Traitements spécialisés pour les maintenir en bonne santé et sans douleur.", "catDescLong.Nutrición": "Plans nutritionnels personnalisés pour améliorer votre bien-être et atteindre vos objectifs de santé.", "catDescLong.Actividad Física": "Séances d'exercice thérapeutique individualisées guidées par des professionnels pour améliorer votre qualité de vie.",

  // ── ScrollScrub Hero ──
  "scrubHero.clinic": "Clinique", "scrubHero.name": "Baluarte", "scrubHero.subtitle": "Un espace en mouvement au cœur de Pampelune", "scrubHero.categories": "Kinésithérapie · Podologie · Nutrition · Activité Physique", "scrubHero.cta": "Prendre rendez-vous", "scrubHero.explore": "Nos services",
  "ins.title": "Assurance santé", "ins.toggle": "J'ai une assurance", "ins.company": "Assureur", "ins.companyPlaceholder": "Sélectionner assureur", "ins.policyNumber": "N° de police", "ins.policyPlaceholder": "Numéro de police", "ins.document": "Police (document)", "ins.uploaded": "Police téléchargée", "ins.view": "Voir", "ins.validated": "Police validée par la clinique", "ins.pendingValidation": "En attente de validation", "ins.uploadHint": "Téléchargez votre police (PDF, JPG ou PNG, max 10Mo)", "ins.uploading": "Envoi...", "ins.analyzing": "Analyse de la police par IA...", "ins.aiExtracting": "L'IA extrait automatiquement les données de votre police...", "ins.policyAnalyzed": "✅ Police analysée", "ins.dataExtracted": "Données de {company} extraites avec succès.", "ins.viewerTitle": "Police d'assurance", "ins.saveError": "Erreur d'enregistrement", "ins.dataUpdated": "Données d'assurance mises à jour", "ins.fileTooLarge": "Fichier trop volumineux", "ins.maxSize": "Maximum 10Mo", "ins.unsupportedFormat": "Format non pris en charge", "ins.useFormats": "Utilisez PDF, JPG ou PNG", "ins.uploadError": "Erreur d'envoi du fichier",
  "fin.payments": "Paiements", "fin.invoices": "Factures", "fin.noPayments": "Aucun paiement enregistré.", "fin.noInvoices": "Aucune facture.", "fin.pending": "En attente", "fin.completed": "Terminé", "fin.failed": "Échoué", "fin.refunded": "Remboursé", "fin.draft": "Brouillon", "fin.sent": "Envoyée", "fin.paid": "Payée", "fin.noPackages": "Vous n'avez aucun forfait actif.", "fin.package": "Forfait", "fin.used": "Utilisées", "fin.remaining": "Restantes", "fin.expires": "Expire", "fin.active": "Actif", "fin.expired": "Expiré", "fin.exhausted": "Épuisé",
  "fb.pendingTitle": "Évaluations en attente", "fb.pendingDesc": "Dites-nous comment s'est passée votre expérience après votre dernière visite.", "fb.rate": "Évaluer", "fb.overallRating": "Évaluation générale", "fb.serviceQuality": "Qualité du service", "fb.staffAttention": "Attention du professionnel", "fb.commentOptional": "Commentaire (optionnel)", "fb.commentPlaceholder": "Comment s'est passée votre visite ?", "fb.sending": "Envoi...", "fb.sendRating": "Envoyer l'évaluation", "fb.cancelRating": "Annuler", "fb.thankYou": "Merci pour votre évaluation !", "fb.errorSending": "Erreur d'envoi de l'évaluation", "fb.sentTitle": "Évaluations envoyées", "fb.service": "Service", "fb.noPending": "Vous n'avez aucune évaluation en attente.", "fb.afterAppt": "Après chaque rendez-vous terminé, vous recevrez une demande de feedback.",
  "gdpr.title": "Vos données personnelles", "gdpr.desc": "Conformément au RGPD, vous pouvez télécharger une copie de toutes vos données personnelles stockées.", "gdpr.exportJSON": "Exporter en JSON", "gdpr.jsonDesc": "Format complet et structuré", "gdpr.exportCSV": "Exporter en CSV", "gdpr.csvDesc": "Compatible avec Excel / tableurs", "gdpr.gathering": "Collecte de vos données...", "gdpr.exportedJSON": "Données exportées en JSON", "gdpr.exportedCSV": "Données exportées en CSV", "gdpr.exportError": "Erreur d'exportation des données", "gdpr.deleteTitle": "Demander la suppression des données", "gdpr.deleteDesc": "Vous pouvez demander la suppression complète de votre compte et de vos données personnelles. Un administrateur examinera votre demande.", "gdpr.deleteCta": "Demander la suppression", "gdpr.deleteDialogTitle": "Demander la suppression des données", "gdpr.deleteDialogDesc": "Cette action est irréversible. Un administrateur traitera votre demande conformément au RGPD.", "gdpr.reasonPlaceholder": "Motif (optionnel)", "gdpr.cancel": "Annuler", "gdpr.sending": "Envoi...", "gdpr.confirmDelete": "Confirmer la demande", "gdpr.deleteSent": "Demande de suppression envoyée. Nous vous contacterons prochainement.", "gdpr.deleteError": "Erreur d'envoi de la demande",
  "authUpload.viewAuth": "Voir l'autorisation", "authUpload.viewAuthShort": "Autoris.", "authUpload.dialogTitle": "Autorisation", "authUpload.deleted": "Autorisation supprimée", "authUpload.uploaded": "Autorisation téléchargée avec succès", "authUpload.saveError": "Erreur d'enregistrement de l'autorisation", "authUpload.uploadError": "Erreur d'envoi", "authUpload.fileTooLarge": "Fichier trop volumineux", "authUpload.maxSize": "Maximum 10Mo", "authUpload.uploading": "Envoi...", "authUpload.uploadShort": "Envoyer autoris.", "authUpload.upload": "Envoyer l'autorisation",
  "booking.pageTitle": "Prendre rendez-vous", "booking.errorValidation": "Erreur de validation", "booking.invalidData": "Données invalides", "booking.loadError": "Impossible de charger les traitements. Appuyez sur réessayer.", "booking.bookError": "Impossible de prendre le rendez-vous.",
  "catName.Fisioterapia": "Kinésithérapie", "catName.Podología": "Podologie", "catName.Nutrición": "Nutrition", "catName.Actividad Física": "Activité Physique",

  "adm.loading": "Chargement...", "adm.saving": "Enregistrement...", "adm.save": "Enregistrer", "adm.cancel": "Annuler", "adm.delete": "Supprimer", "adm.edit": "Modifier", "adm.create": "Créer", "adm.new": "Nouveau", "adm.active": "Actif", "adm.inactive": "Inactif", "adm.noData": "Pas de données", "adm.search": "Rechercher par nom ou email...", "adm.all": "Tous", "adm.name": "Nom", "adm.email": "Email", "adm.phone": "Téléphone", "adm.address": "Adresse", "adm.description": "Description", "adm.notes": "Notes", "adm.date": "Date", "adm.status": "Statut", "adm.actions": "Actions", "adm.close": "Fermer", "adm.confirm": "Confirmer", "adm.send": "Envoyer", "adm.reply": "Répondre", "adm.export": "Exporter", "adm.refresh": "Actualiser", "adm.add": "Ajouter", "adm.remove": "Retirer", "adm.back": "Retour", "adm.yes": "Oui", "adm.no": "Non", "adm.open": "Ouvert", "adm.closed": "Fermé", "adm.from": "De", "adm.to": "À", "adm.reason": "Motif", "adm.optional": "optionnel", "adm.required": "obligatoire", "adm.noResults": "Aucun résultat", "adm.errorSaving": "Erreur d'enregistrement", "adm.errorLoading": "Erreur de chargement", "adm.updated": "Mis à jour", "adm.created": "Créé", "adm.deleted": "Supprimé",

  // ── Appointments ──
  "adm.appts.title": "Rendez-vous", "adm.appts.upcoming": "À venir", "adm.appts.past": "Passés", "adm.appts.cancelled": "Annulés", "adm.appts.attended": "Présent", "adm.appts.noShow": "Absent", "adm.appts.cancelAppt": "Annuler", "adm.appts.noAppts": "Aucun rendez-vous avec ce filtre.", "adm.appts.authUploaded": "Autorisation téléchargée", "adm.appts.noAuth": "Pas d'autorisation", "adm.appts.viewPolicy": "Voir police", "adm.appts.validated": "Validée", "adm.appts.validatePolicy": "Valider police", "adm.appts.insured": "Assuré", "adm.appts.policyOk": "Police validée ✅", "adm.appts.validationRemoved": "Validation retirée", "adm.appts.updateError": "Erreur de mise à jour", "adm.appts.deleteConfirm": "Annuler ce rendez-vous ?", "adm.appts.sendSurvey": "Envoyer enquête",

  // ── Services ──
  "adm.svc.title": "Services", "adm.svc.new": "Nouveau service", "adm.svc.edit": "Modifier service", "adm.svc.duration": "Durée (minutes)", "adm.svc.price": "Prix (€)", "adm.svc.category": "Catégorie", "adm.svc.noServices": "Aucun service. Créez le premier.", "adm.svc.updated": "Service mis à jour", "adm.svc.created": "Service créé", "adm.svc.deactivated": "Service désactivé", "adm.svc.deleteConfirm": "Supprimer ce service ?",

  // ── Messages ──
  "adm.msg.title": "Messages de contact", "adm.msg.noMessages": "Aucun message pour l'instant", "adm.msg.replyTo": "Répondre à", "adm.msg.replyPlaceholder": "Tapez votre réponse...", "adm.msg.sendReply": "Envoyer réponse", "adm.msg.sending": "Envoi...", "adm.msg.sent": "Réponse envoyée", "adm.msg.sentTo": "Email envoyé à", "adm.msg.sendError": "Erreur d'envoi",

  // ── Professionals ──
  "adm.prof.title": "Professionnels", "adm.prof.subtitle": "Gérez l'équipe, les services et les horaires", "adm.prof.add": "Ajouter professionnel", "adm.prof.edit": "Modifier professionnel", "adm.prof.new": "Nouveau professionnel", "adm.prof.noProfessionals": "Aucun professionnel pour l'instant.", "adm.prof.addFirst": "Ajouter le premier", "adm.prof.role": "Rôle / Titre", "adm.prof.specialties": "Spécialités (séparées par virgule)", "adm.prof.bio": "Bio", "adm.prof.bioPlaceholder": "Brève description professionnelle...", "adm.prof.assignedServices": "Services assignés", "adm.prof.weeklySchedule": "Horaire hebdomadaire", "adm.prof.addSlot": "Ajouter créneau", "adm.prof.updated": "Professionnel mis à jour", "adm.prof.created": "Professionnel créé", "adm.prof.deleted": "Professionnel supprimé", "adm.prof.deleteConfirm": "Supprimer ce professionnel ?", "adm.prof.nameRequired": "Le nom est obligatoire",

  // ── Calendar ──
  "adm.cal.title": "Calendrier", "adm.cal.blockTime": "Bloquer horaire", "adm.cal.blocked": "Bloqués", "adm.cal.appointments": "Rendez-vous", "adm.cal.noAppts": "Aucun rendez-vous pour ce jour.", "adm.cal.blockAdded": "Blocage ajouté", "adm.cal.blockRemoved": "Blocage supprimé", "adm.cal.cancelConfirm": "Annuler ce rendez-vous ?", "adm.cal.cancelled": "Rendez-vous annulé", "adm.cal.confirmed": "Confirmé", "adm.cal.pending": "En attente",

  // ── Business Hours ──
  "adm.hours.title": "Horaire hebdomadaire", "adm.hours.saved": "Horaires enregistrés", "adm.hours.saveCta": "Enregistrer horaires",
  "adm.day.0": "Dimanche", "adm.day.1": "Lundi", "adm.day.2": "Mardi", "adm.day.3": "Mercredi", "adm.day.4": "Jeudi", "adm.day.5": "Vendredi", "adm.day.6": "Samedi",

  // ── Invoices ──
  "adm.inv.title": "Factures", "adm.inv.new": "Nouvelle facture", "adm.inv.noInvoices": "Aucune facture.", "adm.inv.clientName": "Nom du client", "adm.inv.clientEmail": "Email du client", "adm.inv.clientFiscalId": "N° fiscal du client", "adm.inv.clientAddress": "Adresse fiscale du client", "adm.inv.subtotal": "Sous-total", "adm.inv.tax": "TVA", "adm.inv.total": "Total", "adm.inv.issued": "Émise", "adm.inv.created": "Facture créée", "adm.inv.createError": "Erreur lors de la création de la facture", "adm.inv.sendCta": "Envoyer", "adm.inv.markPaid": "Marquer payée", "adm.inv.draft": "Brouillon", "adm.inv.sent": "Envoyée", "adm.inv.paid": "Payée", "adm.inv.overdue": "En retard", "adm.inv.cancelled": "Annulée", "adm.inv.emitterInfo": "Données de l'émetteur (chargées depuis les paramètres)", "adm.inv.items": "Lignes de facture", "adm.inv.addItem": "Ajouter une ligne", "adm.inv.description": "Description", "adm.inv.qty": "Qté", "adm.inv.unitPrice": "Prix unitaire", "adm.inv.lineTotal": "Total ligne", "adm.inv.removeItem": "Supprimer", "adm.inv.notes": "Notes", "adm.inv.type": "Type de facture", "adm.inv.typeDirect": "Directe (client)", "adm.inv.typeInsurance": "Assurance", "adm.inv.insurerName": "Nom de l'assureur", "adm.inv.pricesIncludeVat": "Les prix des services incluent déjà la TVA", "adm.inv.services": "Services", "adm.inv.thisMonth": "Ce mois-ci", "adm.inv.thisWeek": "Cette semaine", "adm.inv.createInvoice": "Créer facture",
  "adm.set.fiscal": "Données fiscales", "adm.set.fiscalDesc": "Ces données apparaîtront comme émetteur sur les factures", "adm.set.fiscalName": "Raison sociale", "adm.set.fiscalId": "N° fiscal", "adm.set.fiscalAddress": "Adresse fiscale",

  // ── Payments ──
  "adm.pay.title": "Paiements", "adm.pay.revenueToday": "Revenus aujourd'hui", "adm.pay.revenueMonth": "Revenus ce mois", "adm.pay.pending": "Paiements en attente", "adm.pay.deposits": "Acomptes perçus", "adm.pay.refundsIssued": "Remboursements émis", "adm.pay.payments": "Paiements", "adm.pay.refunds": "Remboursements", "adm.pay.noPayments": "Aucun paiement enregistré. Les paiements apparaîtront ici lorsque Stripe sera connecté.", "adm.pay.noRefunds": "Aucun remboursement enregistré.", "adm.pay.deposit": "Acompte", "adm.pay.noReason": "Sans motif", "adm.pay.pPending": "En attente", "adm.pay.pCompleted": "Terminé", "adm.pay.pFailed": "Échoué", "adm.pay.pRefunded": "Remboursé", "adm.pay.pPartial": "Remb. partiel", "adm.pay.processed": "Traité",

  // ── Reviews ──
  "adm.rev.title": "Avis des patients", "adm.rev.pending": "En attente", "adm.rev.approved": "Approuvés", "adm.rev.rejected": "Rejetés", "adm.rev.all": "Tous", "adm.rev.approve": "Approuver", "adm.rev.reject": "Rejeter", "adm.rev.disapprove": "Désapprouver", "adm.rev.deleteReview": "Supprimer", "adm.rev.noReviews": "Aucun avis", "adm.rev.anonymous": "Anonyme", "adm.rev.approvedLabel": "Approuvé", "adm.rev.rejectedLabel": "Rejeté", "adm.rev.pendingLabel": "En attente", "adm.rev.reviewApproved": "Avis approuvé", "adm.rev.reviewRejected": "Avis rejeté", "adm.rev.reviewDeleted": "Avis supprimé", "adm.rev.updateError": "Erreur de mise à jour", "adm.rev.deleteError": "Erreur de suppression",
  "adm.quot.pricesIncludeVat": "Les prix incluent déjà la TVA",

  // ── Waitlist ──
  "adm.wait.title": "Liste d'attente", "adm.wait.waiting": "en attente", "adm.wait.noEntries": "Aucune entrée sur la liste d'attente.", "adm.wait.noEntriesHint": "Les clients peuvent s'inscrire lorsqu'il n'y a pas de disponibilité.", "adm.wait.notify": "Notifier", "adm.wait.book": "Réserver", "adm.wait.preference": "Préférence", "adm.wait.registered": "Inscrit", "adm.wait.statusUpdated": "Statut mis à jour", "adm.wait.wWaiting": "En attente", "adm.wait.wNotified": "Notifié", "adm.wait.wBooked": "Réservé", "adm.wait.wExpired": "Expiré", "adm.wait.wCancelled": "Annulé",

  // ── Reminders ──
  "adm.rem.title": "Rappels", "adm.rem.subtitle": "Configurez des rappels automatiques pour les rendez-vous", "adm.rem.new": "Nouveau", "adm.rem.noReminders": "Aucun rappel configuré.", "adm.rem.noRemindersHint": "Configurez des rappels par email 2h, 24h ou 48h avant le rendez-vous.", "adm.rem.channel": "Canal", "adm.rem.hoursBefore": "Heures avant", "adm.rem.subject": "Sujet de l'email", "adm.rem.body": "Corps du message", "adm.rem.bodyPlaceholder": "Bonjour {name}, nous vous rappelons votre rendez-vous de {service} le {date} à {time}.", "adm.rem.subjectPlaceholder": "Rappel de votre rendez-vous", "adm.rem.created": "Rappel configuré", "adm.rem.deleted": "Rappel supprimé", "adm.rem.createCta": "Créer rappel", "adm.rem.smsFuture": "SMS (à venir)", "adm.rem.whatsappFuture": "WhatsApp (à venir)",

  // ── Campaigns ──
  "adm.camp.title": "Campagnes Marketing", "adm.camp.subtitle": "Gérez les campagnes d'email, SMS et réactivation", "adm.camp.new": "Nouvelle campagne", "adm.camp.create": "Créer campagne", "adm.camp.noResults": "Aucune campagne créée", "adm.camp.campaignName": "Nom de la campagne", "adm.camp.subject": "Sujet de l'email", "adm.camp.content": "Contenu du message (HTML)...", "adm.camp.totalCampaigns": "Total campagnes", "adm.camp.sentCampaigns": "Envoyées", "adm.camp.drafts": "Brouillons", "adm.camp.scheduled": "Programmées", "adm.camp.campaign": "Campagne", "adm.camp.type": "Type", "adm.camp.sentCount": "Envoyés", "adm.camp.openedCount": "Ouverts", "adm.camp.sending": "Envoi...", "adm.camp.sendCta": "Envoyer", "adm.camp.created": "Campagne créée", "adm.camp.sent": "Campagne envoyée", "adm.camp.createError": "Erreur lors de la création", "adm.camp.smsSoon": "SMS (prochainement)", "adm.camp.whatsappSoon": "WhatsApp (prochainement)", "adm.camp.autoReactivation": "Réactivation automatique",
  "adm.camp.recipients": "Destinataires", "adm.camp.allClients": "Tous les clients", "adm.camp.byTag": "Par étiquette", "adm.camp.selectTag": "Sélectionner étiquette", "adm.camp.selectedCount": "destinataires sélectionnés", "adm.camp.preview": "Aperçu", "adm.camp.editor": "Éditeur", "adm.camp.addBlock": "Ajouter bloc", "adm.camp.blockHeading": "En-tête", "adm.camp.blockText": "Texte", "adm.camp.blockImage": "Image", "adm.camp.blockButton": "Bouton", "adm.camp.blockDivider": "Séparateur", "adm.camp.btnText": "Texte du bouton", "adm.camp.btnUrl": "URL du bouton", "adm.camp.imgUrl": "URL de l'image", "adm.camp.imgAlt": "Texte alternatif", "adm.camp.headingText": "Texte de l'en-tête", "adm.camp.paragraphText": "Écrivez votre texte ici...", "adm.camp.deleteBlock": "Supprimer bloc", "adm.camp.moveUp": "Monter", "adm.camp.moveDown": "Descendre", "adm.camp.confirmSend": "Envoyer cette campagne à {n} destinataires ?", "adm.camp.noRecipients": "Aucun destinataire pour cette campagne", "adm.camp.editCampaign": "Modifier campagne", "adm.camp.recipientsSummary": "Sera envoyé à {n} clients",

  // ── Loyalty ──
  "adm.loy.title": "Fidélisation et Parrainage", "adm.loy.subtitle": "Programme de points, parrainages et avis", "adm.loy.programActive": "Programme actif", "adm.loy.pointsIssued": "Points émis", "adm.loy.pointsRedeemed": "Points échangés", "adm.loy.references": "Parrainages", "adm.loy.feedbackReceived": "Avis reçus", "adm.loy.points": "Points", "adm.loy.referrals": "Parrainages", "adm.loy.feedback": "Avis", "adm.loy.config": "Configuration", "adm.loy.source": "Source", "adm.loy.code": "Code", "adm.loy.referredEmail": "Email parrainé", "adm.loy.rewardPoints": "Points", "adm.loy.rating": "Note", "adm.loy.serviceRating": "Service", "adm.loy.staffRating": "Personnel", "adm.loy.comment": "Commentaire", "adm.loy.noPoints": "Aucun mouvement de points", "adm.loy.noReferrals": "Aucun parrainage", "adm.loy.noFeedback": "Aucun avis", "adm.loy.configTitle": "Configuration du programme", "adm.loy.perBooking": "Points par réservation", "adm.loy.perEuro": "Points par € dépensé", "adm.loy.perReferral": "Points par parrainage", "adm.loy.redemptionRate": "Valeur d'échange (€/point)", "adm.loy.configUpdated": "Configuration mise à jour", "adm.loy.saveConfig": "Enregistrer la configuration",

  // ── Quotes ──
  "adm.quot.title": "Devis", "adm.quot.new": "Nouveau devis", "adm.quot.noQuotes": "Aucun devis. Créez le premier.", "adm.quot.validUntil": "Valable jusqu'au", "adm.quot.sendCta": "Envoyer", "adm.quot.accept": "Accepter", "adm.quot.validity": "Validité (jours)", "adm.quot.services": "Services", "adm.quot.created": "Devis créé", "adm.quot.createError": "Erreur lors de la création du devis", "adm.quot.draft": "Brouillon", "adm.quot.sent": "Envoyé", "adm.quot.viewed": "Vu", "adm.quot.accepted": "Accepté", "adm.quot.expired": "Expiré", "adm.quot.rejected": "Rejeté", "adm.quot.totalQuotes": "Total devis", "adm.quot.pending": "En attente", "adm.quot.conversion": "Conversion", "adm.quot.thisMonth": "Ce mois", "adm.quot.thisWeek": "Cette semaine", "adm.quot.remaining": "restants", "adm.quot.sendQuote": "Envoyer devis",

  // ── Packages ──
  "adm.pkg.title": "Forfaits", "adm.pkg.new": "Nouveau forfait", "adm.pkg.edit": "Modifier forfait", "adm.pkg.packages": "Forfaits", "adm.pkg.purchases": "Achats", "adm.pkg.noPackages": "Aucun forfait créé. Créez le premier.", "adm.pkg.noPurchases": "Aucun achat de forfait.", "adm.pkg.sessions": "Séances", "adm.pkg.validityDays": "Validité (jours)", "adm.pkg.validFor": "Valable", "adm.pkg.days": "jours", "adm.pkg.used": "Utilisées", "adm.pkg.remaining": "Restantes", "adm.pkg.deactivate": "Désactiver", "adm.pkg.activate": "Activer", "adm.pkg.updated": "Forfait mis à jour", "adm.pkg.created": "Forfait créé", "adm.pkg.saveChanges": "Enregistrer les modifications", "adm.pkg.createPkg": "Créer forfait", "adm.pkg.active": "Actif", "adm.pkg.expired": "Expiré", "adm.pkg.exhausted": "Épuisé",

  // ── Automation ──
  "adm.auto.title": "Automatisations", "adm.auto.subtitle": "Règles automatiques basées sur les événements de l'entreprise", "adm.auto.runNow": "Exécuter maintenant", "adm.auto.running": "Exécution...", "adm.auto.newRule": "Nouvelle règle", "adm.auto.createRule": "Créer automatisation", "adm.auto.ruleName": "Nom de la règle", "adm.auto.trigger": "Événement déclencheur", "adm.auto.action": "Action à exécuter", "adm.auto.activeRules": "Règles actives", "adm.auto.totalExecs": "Exécutions totales", "adm.auto.todayLogs": "Journaux d'aujourd'hui", "adm.auto.rules": "Règles", "adm.auto.log": "Historique", "adm.auto.executions": "Exécutions", "adm.auto.noRules": "Aucune règle d'automatisation", "adm.auto.noLogs": "Aucun journal d'exécution", "adm.auto.destination": "Destination", "adm.auto.created": "Automatisation créée", "adm.auto.createError": "Erreur lors de la création", "adm.auto.executed": "Automatisations exécutées avec succès",
  "adm.auto.tApptCompleted": "Rendez-vous terminé", "adm.auto.tApptCancelled": "Rendez-vous annulé", "adm.auto.tNoShow": "Non-présentation", "adm.auto.tQuoteSent": "Devis envoyé", "adm.auto.tQuoteNotAccepted": "Devis non accepté (X jours)", "adm.auto.tQuoteExpiring": "Devis bientôt expiré", "adm.auto.tNoBooking": "Pas de réservation (X jours)", "adm.auto.tPkgLow": "Forfait bientôt épuisé",
  "adm.auto.aSendEmail": "Envoyer email", "adm.auto.aReviewReq": "Demander un avis", "adm.auto.aReactivation": "Envoyer réactivation", "adm.auto.aNextSlot": "Proposer prochain créneau", "adm.auto.aRenewal": "Suggérer renouvellement", "adm.auto.aTimeline": "Enregistrer dans l'historique",

  // ── Exports ──
  "adm.exp.title": "Exportations", "adm.exp.subtitle": "Exportez les données du système en CSV, Excel ou PDF", "adm.exp.bookings": "Réservations", "adm.exp.bookingsDesc": "Historique des rendez-vous et réservations", "adm.exp.clients": "Clients", "adm.exp.clientsDesc": "Base de données clients", "adm.exp.revenue": "Revenus", "adm.exp.revenueDesc": "Rapport des paiements et revenus", "adm.exp.services": "Services", "adm.exp.servicesDesc": "Catalogue et performances des services", "adm.exp.reviews": "Avis", "adm.exp.reviewsDesc": "Évaluations des clients", "adm.exp.noDataExport": "Aucune donnée à exporter", "adm.exp.exported": "{n} enregistrements exportés", "adm.exp.error": "Erreur lors de l'exportation", "adm.exp.configExport": "Configurer l'exportation", "adm.exp.dateRange": "Plage de dates", "adm.exp.custom": "Personnalisé", "adm.exp.from": "Du", "adm.exp.to": "Au", "adm.exp.preview": "Aperçu", "adm.exp.previewTitle": "Aperçu", "adm.exp.rows": "enregistrements", "adm.exp.rowsExported": "enregistrements exportés", "adm.exp.showingFirst": "Affichage des premiers",

  // ── Analytics ──
  "adm.an.title": "Analytiques", "adm.an.subtitle": "Indicateurs de performance de l'entreprise", "adm.an.last7": "7 derniers jours", "adm.an.last30": "30 derniers jours", "adm.an.last90": "90 derniers jours", "adm.an.lastYear": "Dernière année", "adm.an.healthScore": "Business Health Score", "adm.an.healthDesc": "Basé sur le volume, les annulations, les absences et la satisfaction", "adm.an.excellent": "Excellent", "adm.an.good": "Bon", "adm.an.needsAttention": "Nécessite attention",
  "adm.an.bookings": "Réservations", "adm.an.completed": "Terminées", "adm.an.revenue": "Revenus", "adm.an.today": "Aujourd'hui", "adm.an.cancRate": "% Annulation", "adm.an.rating": "Évaluation",
  "adm.an.tabBookings": "Réservations", "adm.an.tabRevenue": "Revenus", "adm.an.tabOps": "Opérations", "adm.an.tabSatisfaction": "Satisfaction", "adm.an.tabClients": "Clients", "adm.an.tabInsights": "IA Insights", "adm.an.tabAutomation": "Automatisation",
  "adm.an.bookingsPerDay": "Réservations par jour", "adm.an.bookingsPerService": "Réservations par service", "adm.an.bookingsPerProf": "Réservations par professionnel", "adm.an.revenuePerService": "Revenus par service", "adm.an.peakHours": "Heures de pointe", "adm.an.apptStatus": "Statut des rendez-vous", "adm.an.completedLabel": "Terminés", "adm.an.cancelledLabel": "Annulés", "adm.an.pendingLabel": "En attente",
  "adm.an.satByService": "Satisfaction par service", "adm.an.satByProf": "Satisfaction par professionnel", "adm.an.ratingSummary": "Résumé des évaluations", "adm.an.byService": "Par service", "adm.an.byProf": "Par professionnel", "adm.an.noSatData": "Aucune donnée de satisfaction", "adm.an.generalRating": "Évaluation générale", "adm.an.serviceRating": "Évaluation service", "adm.an.profRating": "Évaluation professionnel",
  "adm.an.totalClients": "Total clients", "adm.an.riskClients": "Clients à risque", "adm.an.churnRisk": "Risque de départ", "adm.an.noShowGlobal": "Taux d'absence global", "adm.an.churnDetail": "Risque d'abandon", "adm.an.clients": "clients",
  "adm.an.aiAnalysis": "Analyse générée par IA sur les 90 derniers jours", "adm.an.regenerate": "Régénérer", "adm.an.regenerating": "Régénération des insights...", "adm.an.analyzing": "Analyse des données...", "adm.an.insights": "Insights exploitables", "adm.an.topServices": "🔝 Services les plus rentables", "adm.an.underperforming": "⚠️ Services nécessitant attention", "adm.an.allGood": "Tous les services performent bien", "adm.an.predictions": "Prédictions et recommandations", "adm.an.busyPeriods": "Périodes d'affluence prévues", "adm.an.revenueTrend": "Tendance des revenus", "adm.an.recCampaigns": "Campagnes recommandées", "adm.an.noInsights": "Impossible de générer les insights. Cliquez sur \"Régénérer\" pour réessayer.",
  "adm.an.aiUsage": "Utilisation IA et automatisation", "adm.an.noAiData": "Aucune donnée d'utilisation IA pour cette période", "adm.an.autoMetrics": "Indicateurs d'automatisation", "adm.an.aiConvs": "Conversations IA", "adm.an.voiceConvs": "Conversations vocales", "adm.an.autoEmails": "Emails automatisés", "adm.an.quotesGen": "Devis générés", "adm.an.noServiceLabel": "Sans service", "adm.an.unassigned": "Non assigné",

  // ── CRM ──
  "adm.crm.title": "CRM — Clients", "adm.crm.registered": "clients enregistrés", "adm.crm.segment": "Segment", "adm.crm.tag": "Étiquette", "adm.crm.allTags": "Toutes", "adm.crm.vip": "VIP (10+ visites)", "adm.crm.new": "Nouveaux", "adm.crm.risky": "À risque", "adm.crm.noName": "Sans nom", "adm.crm.riskLabel": "Risque", "adm.crm.appts": "rendez-vous", "adm.crm.noClients": "Aucun client trouvé", "adm.crm.selectClient": "Sélectionnez un client pour voir son profil",
  "adm.crm.tabProfile": "Profil", "adm.crm.tabTimeline": "Historique", "adm.crm.tabAppts": "Rendez-vous", "adm.crm.tabPayments": "Paiements", "adm.crm.tabNotes": "Notes",
  "adm.crm.emailLabel": "Email :", "adm.crm.phoneLabel": "Téléphone :", "adm.crm.addressLabel": "Adresse :", "adm.crm.insuranceLabel": "Assurance :", "adm.crm.apptsLabel": "Rendez-vous", "adm.crm.completedLabel": "Terminés", "adm.crm.revenueLabel": "Revenus",
  "adm.crm.noTimeline": "Aucun événement dans l'historique", "adm.crm.noAppts": "Aucun rendez-vous", "adm.crm.noPayments": "Aucun paiement", "adm.crm.amount": "Montant", "adm.crm.method": "Méthode", "adm.crm.service": "Service", "adm.crm.professional": "Professionnel",
  "adm.crm.writeNote": "Rédiger une note interne...", "adm.crm.addNote": "Ajouter", "adm.crm.noteAdded": "Note ajoutée", "adm.crm.noteError": "Erreur d'ajout de note",

  // ── Settings ──
  "adm.set.title": "Paramètres", "adm.set.subtitle": "Gérez la configuration générale de l'entreprise",
  "adm.set.tabGeneral": "Général", "adm.set.tabBranding": "Marque", "adm.set.tabProviders": "Fournisseurs", "adm.set.tabPlan": "Plan", "adm.set.tabAudit": "Audit",
  "adm.set.businessInfo": "Informations de l'entreprise", "adm.set.web": "Site Web", "adm.set.timezone": "Fuseau horaire", "adm.set.currency": "Devise", "adm.set.languages": "Langues",
  "adm.set.branding": "Marque blanche / Branding", "adm.set.brandingDesc": "Personnalisez l'apparence de l'entreprise", "adm.set.logoUrl": "URL du logo", "adm.set.primaryColor": "Couleur principale", "adm.set.secondaryColor": "Couleur secondaire",
  "adm.set.providers": "Fournisseurs de services", "adm.set.providersDesc": "Configurez les fournisseurs IA, email, voix et automatisation", "adm.set.aiMain": "IA Principale", "adm.set.aiMainDesc": "Fournisseur d'intelligence artificielle", "adm.set.aiFallback": "IA de secours", "adm.set.aiFallbackDesc": "Fournisseur d'IA alternatif", "adm.set.emailProv": "Email", "adm.set.emailProvDesc": "Fournisseur d'envoi d'emails", "adm.set.voiceProv": "Voix", "adm.set.voiceProvDesc": "Fournisseur Text-to-Speech", "adm.set.smsProv": "SMS", "adm.set.smsProvDesc": "Fournisseur de messages SMS", "adm.set.calProv": "Calendrier", "adm.set.calProvDesc": "Synchronisation des calendriers externes", "adm.set.provActive": "Actif", "adm.set.provNotConfigured": "Non configuré", "adm.set.usage": "Utilisation",
  "adm.set.planTitle": "Plan et limites", "adm.set.professionals": "Professionnels", "adm.set.locations": "Lieux", "adm.set.services": "Services", "adm.set.bookingsMonth": "Réservations/mois", "adm.set.aiCallsMonth": "Appels IA/mois", "adm.set.emailsMonth": "Emails/mois", "adm.set.noPlan": "Aucun plan configuré. Les limites par défaut s'appliqueront.",
  "adm.set.auditTitle": "Journal d'audit", "adm.set.auditDesc": "50 dernières actions administratives", "adm.set.noAudit": "Aucun journal pour l'instant", "adm.set.updated": "Paramètres mis à jour",

  // ── Blog ──
  "adm.blog.title": "Blog", "adm.blog.subtitle": "Gérez les articles et le contenu SEO", "adm.blog.new": "Nouvel article", "adm.blog.edit": "Modifier l'article", "adm.blog.noArticles": "Aucun article pour l'instant", "adm.blog.titleLabel": "Titre", "adm.blog.slug": "Slug", "adm.blog.excerpt": "Extrait", "adm.blog.content": "Contenu (Markdown)", "adm.blog.author": "Auteur", "adm.blog.tags": "Tags (séparés par des virgules)", "adm.blog.coverImage": "URL de l'image de couverture", "adm.blog.metaTitle": "Méta-titre SEO", "adm.blog.metaDesc": "Méta-description SEO", "adm.blog.draft": "Brouillon", "adm.blog.published": "Publié", "adm.blog.updated": "Article mis à jour", "adm.blog.created": "Article créé", "adm.blog.deleted": "Article supprimé", "adm.blog.saveError": "Erreur d'enregistrement",

  "adm.staff.title": "Messages internes", "adm.staff.unread": "non lus", "adm.staff.new": "Nouveau message", "adm.staff.sendToTeam": "Envoyer un message à l'équipe", "adm.staff.subject": "Sujet", "adm.staff.message": "Message...", "adm.staff.send": "Envoyer", "adm.staff.sent": "Message envoyé", "adm.staff.sendError": "Erreur d'envoi du message", "adm.staff.noSubject": "Sans sujet", "adm.staff.newBadge": "Nouveau", "adm.staff.noMessages": "Aucun message", "adm.staff.compose": "Rédiger", "adm.staff.inbox": "Reçus", "adm.staff.sentTab": "Envoyés", "adm.staff.allRead": "Tout est à jour", "adm.staff.recipient": "Destinataire", "adm.staff.allTeam": "Toute l'équipe", "adm.staff.admin": "Administration", "adm.staff.reception": "Réception", "adm.staff.teamMember": "Membre de l'équipe", "adm.staff.you": "vous", "adm.staff.to": "À", "adm.staff.read": "Lu", "adm.staff.backToMessages": "Retour aux messages", "adm.staff.reply": "Répondre", "adm.staff.replyAll": "Répondre à tous", "adm.staff.forward": "Transférer", "adm.staff.originalMessage": "Message original", "adm.staff.fwdPrefix": "TR: ", "adm.staff.rePrefix": "RE: ", "adm.staff.fwdFrom": "Transféré de", "adm.staff.attach": "Joindre", "adm.staff.attachments": "Pièces jointes", "adm.staff.fileTooLarge": "Fichier trop volumineux (max 20 Mo)", "adm.staff.downloadError": "Erreur de téléchargement", "adm.staff.sending": "Envoi en cours...",
  "adm.tax.title": "Taxes", "adm.tax.subtitle": "Configurez les taux d'imposition pour les factures et devis", "adm.tax.new": "Nouvelle taxe", "adm.tax.noTaxes": "Aucune taxe configurée.", "adm.tax.noTaxesHint": "Créez un taux d'imposition comme TVA 21% ou IGIC 7%.", "adm.tax.name": "Nom", "adm.tax.rate": "Pourcentage (%)", "adm.tax.region": "Région (optionnel)", "adm.tax.default": "Par défaut", "adm.tax.setDefault": "Définir par défaut", "adm.tax.created": "Taxe configurée", "adm.tax.defaultSet": "Taxe définie par défaut", "adm.tax.deleted": "Taxe supprimée", "adm.tax.create": "Créer taxe",
  "adm.calsync.title": "Synchronisation des calendriers", "adm.calsync.subtitle": "Connectez des calendriers externes pour éviter les doubles réservations", "adm.calsync.connections": "connexions", "adm.calsync.connect": "Connecter (prochainement)", "adm.calsync.activeTitle": "Connexions actives", "adm.calsync.noConnections": "Aucun calendrier connecté.", "adm.calsync.noConnectionsHint": "Chaque professionnel peut connecter son Google Calendar, iCal ou Outlook.", "adm.calsync.active": "Actif", "adm.calsync.paused": "En pause", "adm.calsync.lastSync": "Dernière sync",
  "adm.auditlog.title": "Journal d'audit", "adm.auditlog.subtitle": "Historique des actions administratives", "adm.auditlog.search": "Rechercher...", "adm.auditlog.all": "Toutes", "adm.auditlog.create": "Créer", "adm.auditlog.update": "Mettre à jour", "adm.auditlog.deleteAction": "Supprimer", "adm.auditlog.exportAction": "Exporter", "adm.auditlog.roleChange": "Changement de rôle", "adm.auditlog.loading": "Chargement...", "adm.auditlog.noLogs": "Aucun journal",
};

const translations: Record<Locale, TranslationDict> = { es, en, eu, fr };

// ── Runtime ──

const DEFAULT_LOCALE: Locale = "es";

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && SUPPORTED_LOCALES.some((loc) => loc.code === value);
}

let currentLocale: Locale = DEFAULT_LOCALE;

if (typeof window !== "undefined") {
  const stored = window.localStorage?.getItem("locale");
  if (isLocale(stored)) {
    currentLocale = stored;
  }
}

export function getLocale(): Locale {
  return currentLocale;
}

export function setLocale(l: Locale) {
  currentLocale = l;
  if (typeof window !== "undefined") {
    window.localStorage?.setItem("locale", l);
    window.dispatchEvent(new CustomEvent("locale-change", { detail: l }));
  }
}

export function t(key: string, vars?: Record<string, string | number>): string {
  let str = translations[currentLocale]?.[key] ?? translations.es[key] ?? key;
  if (vars) Object.entries(vars).forEach(([k, v]) => { str = str.replace(`{${k}}`, String(v)); });
  return str;
}

/** Translate appointment status */
export function tStatus(status: string): string {
  return t(`status.${status}`);
}
