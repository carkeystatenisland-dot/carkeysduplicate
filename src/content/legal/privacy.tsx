import { SITE } from '@/lib/constants'
import type { Locale } from '@/lib/i18n'
import { LegalCallout, LegalContacts, type LegalDoc } from '@/components/pages/LegalPage'
import { Shield, Lock, UserCheck, MessageSquare, Eye, Mail, Phone, MapPin, FileText, LockKeyhole, Database, Users, CheckCircle2 } from 'lucide-react'

const site = SITE.url.replace('https://', '')

export const PRIVACY: Record<Locale, LegalDoc> = {
  en: {
    badgeIcon: Shield, badge: 'Security & Trust', h1: 'Privacy Policy',
    intro: `How ${SITE.name} collects, protects, and handles your personal and vehicle verification data.`,
    dateLine: 'Effective Date: May 17, 2026',
    toc: [
      { id: 'introduction', label: '1. Introduction & Scope' },
      { id: 'information-collected', label: '2. Information We Collect' },
      { id: 'cookies-analytics', label: '3. Cookies & Tracking Technologies' },
      { id: 'how-we-use', label: '4. How We Use Information' },
      { id: 'verification-security', label: '5. Verification & Anti-Theft Policy' },
      { id: 'sms-policy', label: '6. SMS & Mobile Privacy' },
      { id: 'data-retention', label: '7. Data Retention & Deletion' },
      { id: 'third-party-sharing', label: '8. Third-Party Disclosures' },
      { id: 'your-rights', label: '9. Your Privacy Rights' },
      { id: 'contact-us', label: '10. Contact Information' },
    ],
    sections: [
      { id: 'introduction', icon: Eye, title: '1. Introduction & Scope', body: (<>
        <p>At <strong>{SITE.name}</strong>, we are committed to protecting the privacy, confidentiality, and security of our clients, website users, and service requesters. This Privacy Policy describes how we collect, use, store, process, and protect your personal information when you visit our website (<a href={SITE.url} target="_blank" rel="noopener noreferrer">{site}</a>) or hire our mobile automotive locksmith services in the New York City metropolitan area.</p>
        <p>By accessing our website or requesting our mobile key duplication and automotive lock services, you agree to the collection and use of information in accordance with this policy. If you do not agree with any terms in this policy, please do not use our website or request our services.</p>
      </>) },
      { id: 'information-collected', icon: FileText, title: '2. Information We Collect', body: (<>
        <p>We collect personal information that you voluntarily provide to us when you request a service quote, book a technician, contact us, or interact with our online booking system. The types of personal information we collect include:</p>
        <ul>
          <li><strong>Contact Information:</strong> Name, phone number, email address, and billing/mailing address.</li>
          <li><strong>Service Location Details:</strong> The physical address, GPS coordinates, or cross streets where you require mobile roadside or residential key duplication.</li>
          <li><strong>Vehicle Information:</strong> Year, make, model, trim, and Vehicle Identification Number (VIN) of the automobile requiring service. This is necessary to ensure we cut and program the correct transponder, remote fob, or smart key blank.</li>
          <li><strong>Identity Verification Records:</strong> Digital photos or physical copies of government-issued identification (e.g., driver&apos;s license) and proof of vehicle ownership/registration. (See Section 5).</li>
          <li><strong>Billing and Transaction Details:</strong> Payment card details (processed securely via PCI-compliant payment gateways; we never store your full credit card details on our local servers), billing history, and payment status.</li>
        </ul>
      </>) },
      { id: 'cookies-analytics', icon: Database, title: '3. Cookies & Tracking Technologies', body: (<>
        <p>Like most modern web platforms, our site uses cookies, web beacons, and other tracking technologies to automatically collect specific technical and behavioral details about your visit. This includes:</p>
        <ul>
          <li><strong>Technical Data:</strong> Your IP address, browser type and version, operating system, internet service provider, and device type.</li>
          <li><strong>Site Usage Data:</strong> The pages you visit, time spent on pages, buttons clicked, forms submitted, and traffic sources that led you to our site.</li>
          <li><strong>Google Analytics:</strong> We use Google Analytics to analyze website traffic, help optimize page layouts, and monitor marketing campaigns. Google Analytics collects anonymized tracking data.</li>
          <li><strong>Microsoft Clarity:</strong> We utilize Microsoft Clarity to understand how you interact with our website through heatmaps, session recordings, and click-tracking. This information helps us resolve user experience issues and bugs in real-time.</li>
        </ul>
        <p>You can manage or disable cookies through your web browser settings. However, disabling cookies may impact your ability to utilize our instant online booking and quote forms.</p>
      </>) },
      { id: 'how-we-use', icon: CheckCircle2, title: '4. How We Use Your Information', body: (<>
        <p>We process your personal information to fulfill our service commitments, secure our business, and comply with state and local laws. Specifically, your data is used to:</p>
        <ul>
          <li><strong>Deliver Locksmith Services:</strong> Schedule, dispatch, and coordinate mobile locksmith technicians to your exact location to perform key cutting, transponder programming, lockouts, or fob cloning.</li>
          <li><strong>Formulate Quotes:</strong> Calculate exact, transparent quotes based on your specific car make, model, year, location, and key type.</li>
          <li><strong>Verify Customer Authority:</strong> Confirm you are the legal owner or authorized operator of the vehicle or property being accessed (crucial to prevent car theft and trespassing).</li>
          <li><strong>Process Payments:</strong> Finalize invoice charges securely using licensed credit/debit card processing terminals.</li>
          <li><strong>Customer Support:</strong> Address service inquiries, follow up on feedback, send booking confirmations, and provide warranty/technical support for programmed keys.</li>
          <li><strong>Website Maintenance:</strong> Diagnose server problems, fix bugs, and continuously improve site navigation and responsiveness.</li>
        </ul>
      </>) },
      { id: 'verification-security', icon: UserCheck, title: '5. Verification & Anti-Theft Policy', body: (<>
        <p>To prevent vehicle theft, fraudulent key duplication, and criminal trespassing, <strong>{SITE.name}</strong> operates a strict verification standard. Before any mobile key cutting or transponder programming can begin, the on-site client must present:</p>
        <ol>
          <li>A valid, government-issued photo identification (e.g., Driver&apos;s License or Passport).</li>
          <li>A current vehicle registration, title, lease, or notarized power of attorney establishing legal ownership or authorization to operate the vehicle.</li>
        </ol>
        <LegalCallout icon={LockKeyhole} title="Mandatory Locksmith Anti-Theft Verification">
          <p>To protect the community, we do not duplicate keys for individuals who cannot prove legal ownership or authorized access to a vehicle. Our technicians are trained to check vehicle registrations against photo IDs. We reserve the absolute right to refuse dispatch or service on-site if ownership cannot be clearly established.</p>
        </LegalCallout>
        <p>Photos or records of these verification documents may be temporarily stored by our systems to prove compliance with local security laws and insurance requirements, and are strictly purged as described in Section 7.</p>
      </>) },
      { id: 'sms-policy', icon: MessageSquare, title: '6. SMS & Mobile Privacy', body: (<>
        <p>By providing your mobile telephone number on our forms, when booking a service, or calling our dispatch center, you explicitly consent to receive transactional and operational SMS text messages from us. These messages are critical for updating you on booking requests, confirming job slots, sending technician ETA tracking links, and issuing digital invoices.</p>
        <LegalCallout icon={Shield} title="A2P 10DLC Mobile Privacy Guarantee">
          <p><strong>No Sharing for Marketing:</strong> Your mobile phone number, SMS consent data, and opt-in status are treated with absolute confidentiality. We will <strong>NEVER</strong> share, sell, lease, or rent your mobile numbers or SMS consent information to third parties, partners, affiliates, or advertising networks for marketing or promotional purposes under any circumstances.</p>
        </LegalCallout>
        <p><strong>Opt-Out Options:</strong> You may opt-out of SMS communications at any time. To unsubscribe from text updates, simply reply <strong>&quot;STOP&quot;</strong> to any SMS message sent by our system. After replying &quot;STOP&quot;, you will receive a single final confirmation text, and no further text messages will be sent unless you re-initiate booking services.</p>
      </>) },
      { id: 'data-retention', icon: Lock, title: '7. Data Retention & Deletion', body: (<>
        <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, tax, or reporting requirements.</p>
        <ul>
          <li><strong>Service Records:</strong> Standard invoicing data, including name, car make/model, services performed, and total paid, are retained in our accounting records for tax and warranty compliance (e.g., to honor our 90-day key warranty).</li>
          <li><strong>Identity Verification Records:</strong> Digital photos of driver&apos;s licenses and vehicle registrations captured by our dispatch or on-site technicians are stored in an encrypted, access-restricted database and are <strong>automatically and permanently deleted after thirty (30) days</strong> from the service date.</li>
        </ul>
      </>) },
      { id: 'third-party-sharing', icon: Users, title: '8. Third-Party Disclosures', body: (<>
        <p>We do not sell, trade, rent, or lease your personal information to third parties. We only share your data with trusted third parties in the following limited scenarios:</p>
        <ul>
          <li><strong>Authorized Contractors & Technicians:</strong> We share your name, phone number, car model, and address with the specific mobile locksmith technician or trusted sub-contractor dispatched to cut and program your key. These parties are strictly bound to keep your data confidential.</li>
          <li><strong>Payment Gateways:</strong> We securely transmit payment details to licensed merchant service providers (e.g., Stripe, Square, or PayPal) to complete your transaction in real-time.</li>
          <li><strong>Legal Compliance:</strong> We may disclose information if required to do so by law, court order, search warrant, or subpoena, or if we believe in good faith that such action is necessary to protect the life, safety, or property of our staff or the public.</li>
        </ul>
      </>) },
      { id: 'your-rights', icon: Shield, title: '9. Your Privacy Rights', body: (<>
        <p>Depending on your location and regional laws (such as consumer protection standards), you may hold the following rights regarding the personal data we maintain:</p>
        <ul>
          <li><strong>Right to Access:</strong> You can request a copy of the specific personal data we hold about you.</li>
          <li><strong>Right to Correction:</strong> You can request that we update or correct inaccurate or incomplete contact details.</li>
          <li><strong>Right to Deletion:</strong> You can request that we delete your personal information from our databases (subject to certain legal, auditing, and outstanding invoice exceptions).</li>
          <li><strong>Right to Opt-Out:</strong> You can withdraw consent for any non-essential cookies, email newsletters, or text dispatch messages.</li>
        </ul>
        <p>To exercise any of these rights, please contact our privacy compliance team using the contact channels listed below.</p>
      </>) },
      { id: 'contact-us', icon: Mail, title: '10. Contact Information', body: (<>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy, our data handling procedures, or your rights, please reach out to us directly:</p>
        <LegalContacts items={[
          { icon: Phone, label: 'Phone', value: <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a> },
          { icon: Mail, label: 'Email', value: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> },
          { icon: MapPin, label: 'Headquarters', value: <span>{SITE.address.split(',')[0]}, NYC</span> },
        ]} />
      </>) },
    ],
    ctaTitle: 'Lost your keys? Keep a secure backup copy.',
    ctaSubtitle: 'Get a second car key cut and programmed today to avoid emergency towing costs. We come directly to you anywhere in NYC.',
  },
  es: {
    badgeIcon: Shield, badge: 'Seguridad y confianza', h1: 'Política de privacidad',
    intro: `Cómo ${SITE.name} recopila, protege y maneja sus datos personales y de verificación del vehículo.`,
    dateLine: 'Fecha de vigencia: 17 de mayo de 2026',
    toc: [
      { id: 'introduction', label: '1. Introducción y alcance' },
      { id: 'information-collected', label: '2. Información que recopilamos' },
      { id: 'cookies-analytics', label: '3. Cookies y tecnologías de seguimiento' },
      { id: 'how-we-use', label: '4. Cómo usamos la información' },
      { id: 'verification-security', label: '5. Política de verificación y antirrobo' },
      { id: 'sms-policy', label: '6. Privacidad de SMS y móvil' },
      { id: 'data-retention', label: '7. Retención y eliminación de datos' },
      { id: 'third-party-sharing', label: '8. Divulgación a terceros' },
      { id: 'your-rights', label: '9. Sus derechos de privacidad' },
      { id: 'contact-us', label: '10. Información de contacto' },
    ],
    sections: [
      { id: 'introduction', icon: Eye, title: '1. Introducción y alcance', body: (<>
        <p>En <strong>{SITE.name}</strong> estamos comprometidos con proteger la privacidad, la confidencialidad y la seguridad de nuestros clientes, usuarios del sitio web y solicitantes de servicio. Esta Política de privacidad describe cómo recopilamos, usamos, almacenamos, procesamos y protegemos su información personal cuando visita nuestro sitio web (<a href={SITE.url} target="_blank" rel="noopener noreferrer">{site}</a>) o contrata nuestros servicios de cerrajería automotriz móvil en el área metropolitana de la ciudad de Nueva York.</p>
        <p>Al acceder a nuestro sitio web o solicitar nuestros servicios de copia de llaves a domicilio y cerrajería automotriz, usted acepta la recopilación y el uso de información de acuerdo con esta política. Si no está de acuerdo con algún término de esta política, por favor no use nuestro sitio web ni solicite nuestros servicios.</p>
      </>) },
      { id: 'information-collected', icon: FileText, title: '2. Información que recopilamos', body: (<>
        <p>Recopilamos la información personal que usted nos proporciona voluntariamente cuando solicita una cotización, reserva un técnico, nos contacta o interactúa con nuestro sistema de reservas en línea. Los tipos de información personal que recopilamos incluyen:</p>
        <ul>
          <li><strong>Información de contacto:</strong> nombre, número de teléfono, correo electrónico y dirección de facturación/postal.</li>
          <li><strong>Detalles de la ubicación del servicio:</strong> la dirección física, coordenadas GPS o cruce de calles donde requiere la copia de llaves a domicilio o en la carretera.</li>
          <li><strong>Información del vehículo:</strong> año, marca, modelo, versión y número de identificación del vehículo (VIN) del automóvil que requiere servicio. Esto es necesario para asegurar que cortemos y programemos la llave con chip, el control remoto o la llave inteligente correctos.</li>
          <li><strong>Registros de verificación de identidad:</strong> fotos digitales o copias físicas de una identificación oficial (por ejemplo, licencia de conducir) y prueba de propiedad/registración del vehículo. (Ver la Sección 5).</li>
          <li><strong>Detalles de facturación y transacción:</strong> datos de la tarjeta de pago (procesados de forma segura a través de pasarelas de pago que cumplen con PCI; nunca almacenamos los datos completos de su tarjeta de crédito en nuestros servidores locales), historial de facturación y estado del pago.</li>
        </ul>
      </>) },
      { id: 'cookies-analytics', icon: Database, title: '3. Cookies y tecnologías de seguimiento', body: (<>
        <p>Como la mayoría de las plataformas web modernas, nuestro sitio usa cookies, balizas web y otras tecnologías de seguimiento para recopilar automáticamente ciertos detalles técnicos y de comportamiento sobre su visita. Esto incluye:</p>
        <ul>
          <li><strong>Datos técnicos:</strong> su dirección IP, tipo y versión del navegador, sistema operativo, proveedor de internet y tipo de dispositivo.</li>
          <li><strong>Datos de uso del sitio:</strong> las páginas que visita, el tiempo en cada página, los botones en los que hace clic, los formularios enviados y las fuentes de tráfico que lo trajeron a nuestro sitio.</li>
          <li><strong>Google Analytics:</strong> usamos Google Analytics para analizar el tráfico del sitio, ayudar a optimizar el diseño de las páginas y monitorear campañas de marketing. Google Analytics recopila datos de seguimiento anonimizados.</li>
          <li><strong>Microsoft Clarity:</strong> usamos Microsoft Clarity para entender cómo interactúa con nuestro sitio mediante mapas de calor, grabaciones de sesión y seguimiento de clics. Esta información nos ayuda a resolver problemas de experiencia de usuario y errores en tiempo real.</li>
        </ul>
        <p>Puede administrar o desactivar las cookies en la configuración de su navegador. Sin embargo, desactivar las cookies puede afectar su capacidad de usar nuestros formularios instantáneos de reserva y cotización en línea.</p>
      </>) },
      { id: 'how-we-use', icon: CheckCircle2, title: '4. Cómo usamos su información', body: (<>
        <p>Procesamos su información personal para cumplir con nuestros compromisos de servicio, proteger nuestro negocio y cumplir con las leyes estatales y locales. Específicamente, sus datos se usan para:</p>
        <ul>
          <li><strong>Prestar servicios de cerrajería:</strong> programar, despachar y coordinar técnicos cerrajeros móviles a su ubicación exacta para cortar llaves, programar chips, abrir vehículos o clonar controles.</li>
          <li><strong>Elaborar cotizaciones:</strong> calcular cotizaciones exactas y transparentes según la marca, modelo, año, ubicación y tipo de llave de su carro.</li>
          <li><strong>Verificar la autoridad del cliente:</strong> confirmar que usted es el dueño legal u operador autorizado del vehículo o propiedad a la que se accede (fundamental para prevenir robos de vehículos y allanamientos).</li>
          <li><strong>Procesar pagos:</strong> finalizar los cargos de la factura de forma segura usando terminales con licencia para tarjetas de crédito/débito.</li>
          <li><strong>Atención al cliente:</strong> atender consultas de servicio, dar seguimiento a comentarios, enviar confirmaciones de reserva y brindar soporte técnico y de garantía para las llaves programadas.</li>
          <li><strong>Mantenimiento del sitio web:</strong> diagnosticar problemas del servidor, corregir errores y mejorar continuamente la navegación y la capacidad de respuesta del sitio.</li>
        </ul>
      </>) },
      { id: 'verification-security', icon: UserCheck, title: '5. Política de verificación y antirrobo', body: (<>
        <p>Para prevenir el robo de vehículos, la copia fraudulenta de llaves y el allanamiento, <strong>{SITE.name}</strong> aplica un estándar estricto de verificación. Antes de que pueda comenzar cualquier corte de llave o programación de chip a domicilio, el cliente en el lugar debe presentar:</p>
        <ol>
          <li>Una identificación oficial con foto vigente (por ejemplo, licencia de conducir o pasaporte).</li>
          <li>Una registración vigente del vehículo, título, contrato de arrendamiento (lease) o poder notarial que establezca la propiedad legal o la autorización para operar el vehículo.</li>
        </ol>
        <LegalCallout icon={LockKeyhole} title="Verificación antirrobo obligatoria del cerrajero">
          <p>Para proteger a la comunidad, no copiamos llaves para personas que no puedan demostrar la propiedad legal o el acceso autorizado a un vehículo. Nuestros técnicos están entrenados para cotejar la registración del vehículo con la identificación con foto. Nos reservamos el derecho absoluto de rechazar el despacho o el servicio en el lugar si la propiedad no puede establecerse claramente.</p>
        </LegalCallout>
        <p>Las fotos o registros de estos documentos de verificación pueden almacenarse temporalmente en nuestros sistemas para demostrar el cumplimiento de las leyes de seguridad locales y los requisitos de seguro, y se eliminan estrictamente como se describe en la Sección 7.</p>
      </>) },
      { id: 'sms-policy', icon: MessageSquare, title: '6. Privacidad de SMS y móvil', body: (<>
        <p>Al proporcionar su número de teléfono móvil en nuestros formularios, al reservar un servicio o al llamar a nuestro centro de despacho, usted consiente expresamente recibir mensajes de texto SMS transaccionales y operativos de nuestra parte. Estos mensajes son fundamentales para informarle sobre solicitudes de reserva, confirmar horarios de trabajo, enviar enlaces de seguimiento de la llegada del técnico y emitir facturas digitales.</p>
        <LegalCallout icon={Shield} title="Garantía de privacidad móvil A2P 10DLC">
          <p><strong>Sin uso para marketing:</strong> su número de teléfono móvil, los datos de consentimiento de SMS y su estado de suscripción se tratan con absoluta confidencialidad. <strong>NUNCA</strong> compartiremos, venderemos, arrendaremos ni alquilaremos sus números móviles o la información de consentimiento de SMS a terceros, socios, afiliados o redes publicitarias con fines de marketing o promoción, bajo ninguna circunstancia.</p>
        </LegalCallout>
        <p><strong>Opciones para darse de baja:</strong> puede cancelar las comunicaciones por SMS en cualquier momento. Para cancelar la suscripción a las actualizaciones por texto, simplemente responda <strong>&quot;STOP&quot;</strong> a cualquier SMS enviado por nuestro sistema. Después de responder &quot;STOP&quot;, recibirá un único mensaje final de confirmación y no se enviarán más mensajes de texto a menos que vuelva a iniciar un servicio de reserva.</p>
      </>) },
      { id: 'data-retention', icon: Lock, title: '7. Retención y eliminación de datos', body: (<>
        <p>Conservamos su información personal solo durante el tiempo necesario para cumplir los fines para los que fue recopilada, incluido el cumplimiento de cualquier requisito legal, contable, fiscal o de reporte.</p>
        <ul>
          <li><strong>Registros de servicio:</strong> los datos estándar de facturación, incluidos nombre, marca/modelo del carro, servicios realizados y total pagado, se conservan en nuestros registros contables para cumplir con obligaciones fiscales y de garantía (por ejemplo, para honrar nuestra garantía de llaves de 90 días).</li>
          <li><strong>Registros de verificación de identidad:</strong> las fotos digitales de licencias de conducir y registraciones de vehículos capturadas por nuestro despacho o por los técnicos en el lugar se almacenan en una base de datos encriptada y de acceso restringido, y se <strong>eliminan automática y permanentemente después de treinta (30) días</strong> a partir de la fecha del servicio.</li>
        </ul>
      </>) },
      { id: 'third-party-sharing', icon: Users, title: '8. Divulgación a terceros', body: (<>
        <p>No vendemos, intercambiamos, alquilamos ni arrendamos su información personal a terceros. Solo compartimos sus datos con terceros de confianza en los siguientes escenarios limitados:</p>
        <ul>
          <li><strong>Contratistas y técnicos autorizados:</strong> compartimos su nombre, número de teléfono, modelo del carro y dirección con el técnico cerrajero móvil específico o subcontratista de confianza despachado para cortar y programar su llave. Estas partes están estrictamente obligadas a mantener la confidencialidad de sus datos.</li>
          <li><strong>Pasarelas de pago:</strong> transmitimos de forma segura los datos de pago a proveedores de servicios comerciales con licencia (por ejemplo, Stripe, Square o PayPal) para completar su transacción en tiempo real.</li>
          <li><strong>Cumplimiento legal:</strong> podemos divulgar información si la ley, una orden judicial, una orden de registro o una citación lo exigen, o si creemos de buena fe que dicha acción es necesaria para proteger la vida, la seguridad o la propiedad de nuestro personal o del público.</li>
        </ul>
      </>) },
      { id: 'your-rights', icon: Shield, title: '9. Sus derechos de privacidad', body: (<>
        <p>Según su ubicación y las leyes regionales (como las normas de protección al consumidor), usted puede tener los siguientes derechos sobre los datos personales que conservamos:</p>
        <ul>
          <li><strong>Derecho de acceso:</strong> puede solicitar una copia de los datos personales específicos que tenemos sobre usted.</li>
          <li><strong>Derecho de corrección:</strong> puede solicitar que actualicemos o corrijamos datos de contacto inexactos o incompletos.</li>
          <li><strong>Derecho de eliminación:</strong> puede solicitar que eliminemos su información personal de nuestras bases de datos (sujeto a ciertas excepciones legales, de auditoría y de facturas pendientes).</li>
          <li><strong>Derecho a darse de baja:</strong> puede retirar su consentimiento para cookies no esenciales, boletines por correo electrónico o mensajes de texto de despacho.</li>
        </ul>
        <p>Para ejercer cualquiera de estos derechos, contacte a nuestro equipo de cumplimiento de privacidad a través de los canales de contacto indicados a continuación.</p>
      </>) },
      { id: 'contact-us', icon: Mail, title: '10. Información de contacto', body: (<>
        <p>Si tiene preguntas, inquietudes o solicitudes sobre esta Política de privacidad, nuestros procedimientos de manejo de datos o sus derechos, contáctenos directamente:</p>
        <LegalContacts items={[
          { icon: Phone, label: 'Teléfono', value: <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a> },
          { icon: Mail, label: 'Correo electrónico', value: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> },
          { icon: MapPin, label: 'Sede', value: <span>{SITE.address.split(',')[0]}, NYC</span> },
        ]} />
      </>) },
    ],
    ctaTitle: '¿Perdió sus llaves? Tenga una copia de respaldo segura.',
    ctaSubtitle: 'Haga cortar y programar una segunda llave de carro hoy para evitar costos de grúa de emergencia. Vamos directamente hasta usted en cualquier parte de NYC.',
  },
}
