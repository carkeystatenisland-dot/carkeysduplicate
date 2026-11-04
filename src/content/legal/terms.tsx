import { SITE } from '@/lib/constants'
import type { Locale } from '@/lib/i18n'
import { LegalCallout, LegalContacts, type LegalDoc } from '@/components/pages/LegalPage'
import { Scale, UserCheck, CreditCard, Clock, Wrench, AlertTriangle, BadgeCheck, ShieldAlert, Mail, HelpCircle, ShieldCheck, Ban, Phone } from 'lucide-react'

const site = SITE.url.replace('https://', '')

export const TERMS: Record<Locale, LegalDoc> = {
  en: {
    badgeIcon: Scale, badge: 'Legal Agreement', h1: 'Terms of Service',
    intro: 'Please read these terms carefully before requesting mobile locksmith services or key duplication in New York City.',
    dateLine: 'Last Updated: May 17, 2026',
    toc: [
      { id: 'agreement', label: '1. Service Agreement' },
      { id: 'eligibility', label: '2. Customer Eligibility' },
      { id: 'identity-verification', label: '3. Mandatory Ownership Verification' },
      { id: 'mobile-services', label: '4. Mobile Dispatches & Service Rates' },
      { id: 'cancellation', label: '5. Cancellation Policy' },
      { id: 'payments', label: '6. Payment Terms' },
      { id: 'limitations', label: '7. Pre-Existing Damage & Liability' },
      { id: 'warranties', label: '8. Key Warranties & Exclusions' },
      { id: 'indemnification', label: '9. Indemnification' },
      { id: 'governing-law', label: '10. Governing Law' },
    ],
    sections: [
      { id: 'agreement', icon: Scale, title: '1. Service Agreement', body: (<>
        <p>These Terms of Service (the &quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between you (&quot;Customer&quot;, &quot;User&quot;, &quot;you&quot;) and <strong>{SITE.name}</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), governing your access to and use of our website (<a href={SITE.url} target="_blank" rel="noopener noreferrer">{site}</a>) and any dispatch or physical mobile locksmith, key duplication, key programming, lock rekeying, or vehicle lockout emergency services we provide.</p>
        <p>By browsing our site, filling out a contact, quote, or booking form, calling our dispatch phone numbers, or authorizing our technicians to perform work, you agree to comply with and be bound by these Terms. If you do not accept these Terms in their entirety, you are strictly prohibited from utilizing our site and requesting our services.</p>
      </>) },
      { id: 'eligibility', icon: ShieldCheck, title: '2. Customer Eligibility & Authority', body: (<>
        <p>To request our mobile services or hire a technician, you must:</p>
        <ul>
          <li>Be at least eighteen (18) years of age or older.</li>
          <li>Possess the legal capacity and authority to enter into a binding contractual agreement.</li>
          <li>Be the absolute registered owner of the vehicle or property for which services are requested, OR be a fully authorized agent of the registered owner (possessing signed, notarized written authorization along with a copy of the owner&apos;s valid ID).</li>
        </ul>
        <p>You agree that all information you provide to us (including your name, contact phone number, vehicle location, vehicle make/model/year/VIN, and ownership documents) is completely accurate, current, and truthful.</p>
      </>) },
      { id: 'identity-verification', icon: UserCheck, title: '3. Mandatory Ownership Verification', body: (<>
        <p>Because locksmith and key duplication services involve granting access to high-value personal property, <strong>{SITE.name}</strong> operates in strict compliance with public safety standards to prevent grand theft auto, unlawful entry, and criminal activity.</p>
        <LegalCallout icon={ShieldAlert} title="No Identification, No Key — No Exceptions" tone="danger">
          <p>Before our technicians will cut a key blade, connect a programming diagnostic computer to your vehicle&apos;s OBD-II port, or unlock a door, you MUST present:<br /><strong>1. A valid, government-issued photo ID</strong> (e.g., state driver&apos;s license, passport, military ID).<br /><strong>2. Proof of ownership</strong> matching the ID presented (e.g., current active vehicle registration, vehicle title, official rental car contract under your name, or insurance card).</p>
        </LegalCallout>
        <p>If the vehicle registration is locked inside the car, the technician will first unlock the vehicle to retrieve the document. If, upon opening the vehicle, the registration name does not match your photo ID or you cannot present a valid registration, the technician will immediately stop work, secure the vehicle, and charge a standard <strong>Service Call / Dispatch Fee</strong> as outlined in Section 5. We also reserve the right to report suspicious lock or key requests to local law enforcement.</p>
      </>) },
      { id: 'mobile-services', icon: Wrench, title: '4. Mobile Dispatches & Service Rates', body: (<>
        <p>We operate entirely as a mobile locksmith service. This means our technicians drive fully stocked, self-contained workshop vehicles directly to your requested location across Brooklyn, Queens, Manhattan, the Bronx, and Staten Island.</p>
        <ul>
          <li><strong>Service Call / Dispatch Fee:</strong> A base dispatch fee (varying depending on the borough, traffic conditions, time of day, and weather) is charged to cover transit, gas, and the technician&apos;s time to travel to your exact GPS coordinates. This dispatch fee is earned once our technician is en route.</li>
          <li><strong>Service Estimates vs. Final Price:</strong> Quotes provided over the phone, email, or chat are initial estimates based entirely on the information provided by the customer. The final cost of service is calculated on-site by our technician after evaluating the condition of your vehicle&apos;s lock cylinders, ignition switch, on-board computer module (ECU/immobilizer), and security system.</li>
          <li><strong>Additional On-site Complexities:</strong> If a vehicle has a damaged lock cylinder, aftermarket alarm systems, corrupted computer modules, or a pre-existing broken key inside the cylinder, extra labor fees may apply. The technician will present a finalized written or verbal quote on-site before commencing any work.</li>
        </ul>
      </>) },
      { id: 'cancellation', icon: Clock, title: '5. Cancellation Policy', body: (<>
        <p>Because we dispatch mobile technicians immediately to ensure prompt roadside response, cancellation fees apply to protect our overhead and team schedule:</p>
        <ul>
          <li><strong>Grace Window:</strong> You may cancel your booking request without penalty within ten (10) minutes of initial dispatch confirmation by calling our dispatch center directly.</li>
          <li><strong>Late Cancellations:</strong> If you cancel your request more than 10 minutes after confirmation, or if you cancel after the technician has already arrived at your location, you agree to pay the standard <strong>Service Call / Dispatch Fee (starting at $49)</strong> to cover travel overhead.</li>
          <li><strong>Failed Verification Cancellations:</strong> If the technician arrives and you are unable to provide the mandatory government ID and vehicle ownership/registration documentation, or if you refuse to show them, the job will be cancelled, and you will be held liable for the standard Service Call/Dispatch Fee.</li>
        </ul>
      </>) },
      { id: 'payments', icon: CreditCard, title: '6. Payment Terms & Security', body: (<>
        <p>All billing charges and invoice sums are due immediately upon the completion of locksmith services.</p>
        <ul>
          <li><strong>Accepted Payment Methods:</strong> We accept major credit cards (Visa, MasterCard, American Express, Discover), secure debit cards, cash, and authorized digital mobile payments. We do not accept personal checks.</li>
          <li><strong>Payment Security:</strong> Credit card transactions are processed securely through licensed, PCI-DSS compliant point-of-sale systems. We do not store cardholder credentials on our systems or share them with unauthorized parties.</li>
          <li><strong>Unpaid Invoices & Refusal of Payment:</strong> If a customer refuses to pay upon service completion, or if a credit card transaction is declined and alternative payment cannot be provided immediately, the customer agrees that we reserve the right to retain possession of any newly cut/programmed keys or fobs until payment is cleared in full. Unpaid balances will be sent to collections, and we reserve all legal rights to file mechanic&apos;s liens or civil claims to recover costs.</li>
        </ul>
      </>) },
      { id: 'limitations', icon: AlertTriangle, title: '7. Pre-Existing Damage & Liability Waivers', body: (<>
        <p>Vehicle lockouts, transponder programming, and key extractions are technical procedures that require interacting with delicate mechanical parts, automotive electronics, and weathered components.</p>
        <ul>
          <li><strong>Pre-Existing Conditions:</strong> We are not responsible for any damage caused by pre-existing conditions of your vehicle. This includes worn door linkages, rusted lock cylinders, brittle door trim, failing ignition switches, already damaged wiring, or corrupted vehicle computer modules (ECUs/BCMs/immobilizers).</li>
          <li><strong>Lockout Procedures:</strong> In emergency lockouts, we utilize professional tools (e.g., air wedges, lock picks, reach tools). While our technicians use extreme care, minor cosmetic paint scuffs, weatherstripping compression, or lock cylinder scratches can occur, especially on older or previously damaged doors. By requesting service, you waive any liability against the Company for minor wear-and-tear or cosmetic anomalies occurring during emergency access.</li>
          <li><strong>Limitation of Liability:</strong> To the absolute maximum extent permitted by New York State law, the total collective liability of <strong>{SITE.name}</strong>, its directors, officers, employees, contractors, and affiliates for any claims, damages, losses, or expenses arising from our services is strictly limited to <strong>the actual dollar amount paid by you to us</strong> for the specific service call in question. We shall not be liable for any indirect, incidental, special, exemplary, or consequential damages, including but not limited to loss of business, alternate transportation expenses, towing charges, or lost wages.</li>
        </ul>
      </>) },
      { id: 'warranties', icon: BadgeCheck, title: '8. Key Warranties & Exclusions', body: (<>
        <p>We take pride in our workmanship. We stand behind our keys and fobs with a standard <strong>90-day limited functional warranty</strong> starting from the service date.</p>
        <p><strong>What is Covered:</strong> If a key blade we cut fails to turn, or a transponder chip/fob remote we provided and programmed stops communicating with your vehicle due to normal wear and tear or manufacturing defect, we will repair, reprogram, or replace it free of charge.</p>
        <LegalCallout icon={Ban} title="Strict Exclusions to Key Warranties" tone="danger">
          <p><strong>1. Customer-Supplied Key Blanks & Fobs:</strong> We do NOT warrant key blanks, remote fobs, or smart keys purchased online by the customer (e.g., from eBay, Amazon, or discount sites). While we will cut and attempt to program customer-provided keys, if the chip fails to program, stops working, or the key blade breaks, you are still fully responsible for the full labor and service call fee. No warranty is provided.<br /><strong>2. Physical & Environmental Abuse:</strong> The warranty is immediately voided if the key or fob shows signs of drop damage, cracked casing, heavy physical abuse, water submersion, or modifications.<br /><strong>3. Vehicle-Side Failure:</strong> If the key stops working because your vehicle&apos;s alternator died, battery is flat, computer module is corrupted, or receiver antenna failed, our warranty does not apply.</p>
        </LegalCallout>
      </>) },
      { id: 'indemnification', icon: ShieldAlert, title: '9. Indemnification', body: (<>
        <p>You agree to indemnify, defend, and hold harmless <strong>{SITE.name}</strong>, its parent company, directors, officers, employees, independent contractors, and agents from and against any and all claims, demands, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or in connection with:</p>
        <ul>
          <li>Your breach of this Agreement, or any violation of local, state, or federal laws.</li>
          <li>Your request for locksmith services, lockout entry, or key programming for any vehicle or property that you do not own or are not fully authorized to access.</li>
          <li>Any disputes regarding the true legal ownership or possession of the vehicle or property being serviced.</li>
        </ul>
      </>) },
      { id: 'governing-law', icon: HelpCircle, title: '10. Governing Law & Dispute Resolution', body: (<>
        <p>These Terms of Service and any service dispute or claim arising out of or related to our website or mobile locksmith actions shall be governed by, construed, and enforced in accordance with the laws of the <strong>State of New York</strong>, without regard to conflict of law principles.</p>
        <p>Any legal action, lawsuit, arbitration, or proceeding arising under or in relation to this Agreement shall be brought exclusively in the state or federal courts located in the City of New York (Queens County or Richmond County, depending on headquarters operations). You and the Company explicitly consent to the personal jurisdiction and venue of these courts.</p>
        <p>If you have any questions or require clarification regarding these Terms of Service, please contact us prior to authorizing service:</p>
        <LegalContacts items={[
          { icon: Phone, label: 'Customer Support Hotline', value: <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a> },
          { icon: Mail, label: 'Legal Operations Email', value: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> },
        ]} />
      </>) },
    ],
    ctaTitle: 'Need professional automotive locksmith services?',
    ctaSubtitle: 'Our mobile technicians are licensed, bonded, insured, and fully equipped. Get a fast, accurate on-site quote now.',
  },
  es: {
    badgeIcon: Scale, badge: 'Acuerdo legal', h1: 'Términos de servicio',
    intro: 'Lea estos términos con atención antes de solicitar servicios de cerrajería móvil o copia de llaves en la ciudad de Nueva York.',
    dateLine: 'Última actualización: 17 de mayo de 2026',
    toc: [
      { id: 'agreement', label: '1. Acuerdo de servicio' },
      { id: 'eligibility', label: '2. Elegibilidad del cliente' },
      { id: 'identity-verification', label: '3. Verificación obligatoria de propiedad' },
      { id: 'mobile-services', label: '4. Despachos móviles y tarifas' },
      { id: 'cancellation', label: '5. Política de cancelación' },
      { id: 'payments', label: '6. Condiciones de pago' },
      { id: 'limitations', label: '7. Daños preexistentes y responsabilidad' },
      { id: 'warranties', label: '8. Garantías de llaves y exclusiones' },
      { id: 'indemnification', label: '9. Indemnización' },
      { id: 'governing-law', label: '10. Ley aplicable' },
    ],
    sections: [
      { id: 'agreement', icon: Scale, title: '1. Acuerdo de servicio', body: (<>
        <p>Estos Términos de servicio (los &quot;Términos&quot;, el &quot;Acuerdo&quot;) constituyen un acuerdo legalmente vinculante entre usted (&quot;Cliente&quot;, &quot;Usuario&quot;, &quot;usted&quot;) y <strong>{SITE.name}</strong> (la &quot;Empresa&quot;, &quot;nosotros&quot;, &quot;nuestro&quot;), que rige su acceso y uso de nuestro sitio web (<a href={SITE.url} target="_blank" rel="noopener noreferrer">{site}</a>) y de cualquier servicio de despacho o cerrajería móvil física, copia de llaves, programación de llaves, cambio de combinación de cerraduras o apertura de emergencia de vehículos que prestemos.</p>
        <p>Al navegar en nuestro sitio, completar un formulario de contacto, cotización o reserva, llamar a nuestros números de despacho o autorizar a nuestros técnicos a realizar trabajos, usted acepta cumplir y quedar obligado por estos Términos. Si no acepta estos Términos en su totalidad, tiene estrictamente prohibido usar nuestro sitio y solicitar nuestros servicios.</p>
      </>) },
      { id: 'eligibility', icon: ShieldCheck, title: '2. Elegibilidad y autoridad del cliente', body: (<>
        <p>Para solicitar nuestros servicios móviles o contratar a un técnico, usted debe:</p>
        <ul>
          <li>Tener al menos dieciocho (18) años de edad.</li>
          <li>Tener la capacidad legal y la autoridad para celebrar un acuerdo contractual vinculante.</li>
          <li>Ser el dueño registrado absoluto del vehículo o propiedad para la que se solicitan los servicios, O ser un agente plenamente autorizado del dueño registrado (con autorización escrita firmada y notariada junto con una copia de la identificación vigente del dueño).</li>
        </ul>
        <p>Usted acepta que toda la información que nos proporciona (incluidos su nombre, teléfono de contacto, ubicación del vehículo, marca/modelo/año/VIN del vehículo y documentos de propiedad) es completamente exacta, actual y veraz.</p>
      </>) },
      { id: 'identity-verification', icon: UserCheck, title: '3. Verificación obligatoria de propiedad', body: (<>
        <p>Dado que los servicios de cerrajería y copia de llaves implican dar acceso a bienes personales de alto valor, <strong>{SITE.name}</strong> opera en estricto cumplimiento de las normas de seguridad pública para prevenir el robo de vehículos, el ingreso ilegal y la actividad delictiva.</p>
        <LegalCallout icon={ShieldAlert} title="Sin identificación no hay llave — sin excepciones" tone="danger">
          <p>Antes de que nuestros técnicos corten una hoja de llave, conecten una computadora de diagnóstico de programación al puerto OBD-II de su vehículo o abran una puerta, usted DEBE presentar:<br /><strong>1. Una identificación oficial con foto vigente</strong> (por ejemplo, licencia de conducir estatal, pasaporte, identificación militar).<br /><strong>2. Prueba de propiedad</strong> que coincida con la identificación presentada (por ejemplo, registración vigente del vehículo, título del vehículo, contrato oficial de alquiler de carro a su nombre o tarjeta del seguro).</p>
        </LegalCallout>
        <p>Si la registración del vehículo está encerrada dentro del carro, el técnico primero abrirá el vehículo para recuperar el documento. Si, al abrir el vehículo, el nombre de la registración no coincide con su identificación con foto o no puede presentar una registración válida, el técnico detendrá el trabajo de inmediato, asegurará el vehículo y cobrará la <strong>tarifa estándar de visita / despacho</strong> descrita en la Sección 5. También nos reservamos el derecho de reportar solicitudes sospechosas de llaves o cerraduras a las autoridades locales.</p>
      </>) },
      { id: 'mobile-services', icon: Wrench, title: '4. Despachos móviles y tarifas de servicio', body: (<>
        <p>Operamos completamente como un servicio de cerrajería móvil. Esto significa que nuestros técnicos conducen vehículos-taller totalmente equipados y autónomos directamente hasta la ubicación que usted solicite en Brooklyn, Queens, Manhattan, El Bronx y Staten Island.</p>
        <ul>
          <li><strong>Tarifa de visita / despacho:</strong> se cobra una tarifa base de despacho (que varía según el condado, las condiciones del tráfico, la hora del día y el clima) para cubrir el traslado, la gasolina y el tiempo del técnico para llegar a sus coordenadas GPS exactas. Esta tarifa de despacho se devenga una vez que nuestro técnico está en camino.</li>
          <li><strong>Estimados de servicio vs. precio final:</strong> las cotizaciones dadas por teléfono, correo electrónico o chat son estimados iniciales basados por completo en la información proporcionada por el cliente. El costo final del servicio lo calcula nuestro técnico en el lugar tras evaluar el estado de los cilindros de las cerraduras, el interruptor de ignición, el módulo de computadora a bordo (ECU/inmovilizador) y el sistema de seguridad de su vehículo.</li>
          <li><strong>Complicaciones adicionales en el lugar:</strong> si un vehículo tiene un cilindro de cerradura dañado, sistemas de alarma no originales, módulos de computadora corruptos o una llave rota preexistente dentro del cilindro, pueden aplicarse cargos adicionales de mano de obra. El técnico presentará una cotización final por escrito o verbal en el lugar antes de comenzar cualquier trabajo.</li>
        </ul>
      </>) },
      { id: 'cancellation', icon: Clock, title: '5. Política de cancelación', body: (<>
        <p>Como despachamos técnicos móviles de inmediato para garantizar una respuesta rápida en carretera, se aplican cargos de cancelación para proteger nuestros costos operativos y la agenda del equipo:</p>
        <ul>
          <li><strong>Periodo de gracia:</strong> puede cancelar su solicitud de reserva sin penalización dentro de los diez (10) minutos posteriores a la confirmación inicial del despacho llamando directamente a nuestro centro de despacho.</li>
          <li><strong>Cancelaciones tardías:</strong> si cancela su solicitud más de 10 minutos después de la confirmación, o si cancela después de que el técnico ya llegó a su ubicación, usted acepta pagar la <strong>tarifa estándar de visita / despacho (desde $49)</strong> para cubrir los costos de traslado.</li>
          <li><strong>Cancelaciones por verificación fallida:</strong> si el técnico llega y usted no puede presentar la identificación oficial obligatoria y la documentación de propiedad/registración del vehículo, o se niega a mostrarlas, el trabajo se cancelará y usted será responsable de la tarifa estándar de visita/despacho.</li>
        </ul>
      </>) },
      { id: 'payments', icon: CreditCard, title: '6. Condiciones de pago y seguridad', body: (<>
        <p>Todos los cargos de facturación y montos de factura vencen inmediatamente al completarse los servicios de cerrajería.</p>
        <ul>
          <li><strong>Métodos de pago aceptados:</strong> aceptamos las principales tarjetas de crédito (Visa, MasterCard, American Express, Discover), tarjetas de débito seguras, efectivo y pagos móviles digitales autorizados. No aceptamos cheques personales.</li>
          <li><strong>Seguridad de los pagos:</strong> las transacciones con tarjeta de crédito se procesan de forma segura a través de sistemas de punto de venta con licencia que cumplen con PCI-DSS. No almacenamos las credenciales del titular de la tarjeta en nuestros sistemas ni las compartimos con partes no autorizadas.</li>
          <li><strong>Facturas impagas y negativa de pago:</strong> si un cliente se niega a pagar al completarse el servicio, o si una transacción con tarjeta es rechazada y no puede proporcionarse un pago alternativo de inmediato, el cliente acepta que nos reservamos el derecho de conservar cualquier llave o control recién cortado/programado hasta que el pago se liquide por completo. Los saldos impagos se enviarán a cobranza y nos reservamos todos los derechos legales para presentar gravámenes de mecánico o reclamaciones civiles para recuperar los costos.</li>
        </ul>
      </>) },
      { id: 'limitations', icon: AlertTriangle, title: '7. Daños preexistentes y exenciones de responsabilidad', body: (<>
        <p>Las aperturas de vehículos, la programación de chips y la extracción de llaves son procedimientos técnicos que requieren interactuar con piezas mecánicas delicadas, electrónica automotriz y componentes desgastados por el clima.</p>
        <ul>
          <li><strong>Condiciones preexistentes:</strong> no somos responsables de ningún daño causado por condiciones preexistentes de su vehículo. Esto incluye varillajes de puerta desgastados, cilindros de cerradura oxidados, molduras de puerta frágiles, interruptores de ignición defectuosos, cableado ya dañado o módulos de computadora del vehículo corruptos (ECU/BCM/inmovilizadores).</li>
          <li><strong>Procedimientos de apertura:</strong> en aperturas de emergencia usamos herramientas profesionales (por ejemplo, cuñas de aire, ganzúas, herramientas de alcance). Aunque nuestros técnicos trabajan con extremo cuidado, pueden producirse raspones cosméticos menores en la pintura, compresión de los burletes o rayones en el cilindro, especialmente en puertas antiguas o previamente dañadas. Al solicitar el servicio, usted renuncia a cualquier responsabilidad contra la Empresa por desgaste menor o anomalías cosméticas que ocurran durante el acceso de emergencia.</li>
          <li><strong>Limitación de responsabilidad:</strong> en la máxima medida permitida por la ley del Estado de Nueva York, la responsabilidad total colectiva de <strong>{SITE.name}</strong>, sus directores, funcionarios, empleados, contratistas y afiliados por cualquier reclamación, daño, pérdida o gasto derivado de nuestros servicios se limita estrictamente al <strong>monto real pagado por usted a nosotros</strong> por la visita de servicio específica en cuestión. No seremos responsables de ningún daño indirecto, incidental, especial, ejemplar o consecuente, incluidos, entre otros, pérdida de negocio, gastos de transporte alternativo, cargos de grúa o salarios perdidos.</li>
        </ul>
      </>) },
      { id: 'warranties', icon: BadgeCheck, title: '8. Garantías de llaves y exclusiones', body: (<>
        <p>Nos enorgullece nuestro trabajo. Respaldamos nuestras llaves y controles con una <strong>garantía funcional limitada estándar de 90 días</strong> a partir de la fecha del servicio.</p>
        <p><strong>Qué cubre:</strong> si una hoja de llave que cortamos no gira, o un chip transponder/control remoto que suministramos y programamos deja de comunicarse con su vehículo por desgaste normal o defecto de fabricación, lo repararemos, reprogramaremos o reemplazaremos sin costo.</p>
        <LegalCallout icon={Ban} title="Exclusiones estrictas de las garantías de llaves" tone="danger">
          <p><strong>1. Llaves y controles suministrados por el cliente:</strong> NO garantizamos llaves en blanco, controles remotos ni llaves inteligentes compradas en línea por el cliente (por ejemplo, en eBay, Amazon o sitios de descuento). Aunque cortaremos e intentaremos programar las llaves proporcionadas por el cliente, si el chip no se programa, deja de funcionar o la hoja se rompe, usted sigue siendo totalmente responsable del costo completo de mano de obra y de la tarifa de visita. No se ofrece garantía.<br /><strong>2. Abuso físico y ambiental:</strong> la garantía queda anulada de inmediato si la llave o el control muestra señales de daño por caída, carcasa agrietada, abuso físico severo, inmersión en agua o modificaciones.<br /><strong>3. Falla del lado del vehículo:</strong> si la llave deja de funcionar porque el alternador de su vehículo falló, la batería está descargada, el módulo de computadora está corrupto o la antena receptora falló, nuestra garantía no aplica.</p>
        </LegalCallout>
      </>) },
      { id: 'indemnification', icon: ShieldAlert, title: '9. Indemnización', body: (<>
        <p>Usted acepta indemnizar, defender y eximir de responsabilidad a <strong>{SITE.name}</strong>, su empresa matriz, directores, funcionarios, empleados, contratistas independientes y agentes de y contra todas las reclamaciones, demandas, responsabilidades, daños, pérdidas, costos y gastos (incluidos honorarios razonables de abogados) que surjan de o en relación con:</p>
        <ul>
          <li>Su incumplimiento de este Acuerdo o cualquier violación de leyes locales, estatales o federales.</li>
          <li>Su solicitud de servicios de cerrajería, apertura o programación de llaves para cualquier vehículo o propiedad que no le pertenezca o al que no esté plenamente autorizado a acceder.</li>
          <li>Cualquier disputa sobre la verdadera propiedad legal o posesión del vehículo o propiedad atendida.</li>
        </ul>
      </>) },
      { id: 'governing-law', icon: HelpCircle, title: '10. Ley aplicable y resolución de disputas', body: (<>
        <p>Estos Términos de servicio y cualquier disputa o reclamación de servicio que surja de o esté relacionada con nuestro sitio web o nuestras acciones de cerrajería móvil se regirán, interpretarán y harán cumplir de acuerdo con las leyes del <strong>Estado de Nueva York</strong>, sin considerar los principios de conflicto de leyes.</p>
        <p>Cualquier acción legal, demanda, arbitraje o procedimiento que surja de este Acuerdo o en relación con él se presentará exclusivamente ante los tribunales estatales o federales ubicados en la ciudad de Nueva York (condado de Queens o condado de Richmond, según las operaciones de la sede). Usted y la Empresa consienten expresamente la jurisdicción personal y la competencia de estos tribunales.</p>
        <p>Si tiene preguntas o necesita aclaraciones sobre estos Términos de servicio, contáctenos antes de autorizar el servicio:</p>
        <LegalContacts items={[
          { icon: Phone, label: 'Línea de atención al cliente', value: <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a> },
          { icon: Mail, label: 'Correo de operaciones legales', value: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> },
        ]} />
      </>) },
    ],
    ctaTitle: '¿Necesita servicios profesionales de cerrajería automotriz?',
    ctaSubtitle: 'Nuestros técnicos móviles tienen licencia, fianza y seguro, y están totalmente equipados. Obtenga ahora una cotización rápida y precisa en el lugar.',
  },
}
