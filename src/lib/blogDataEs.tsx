import type { BlogPostData } from './blogData'
import { COST_ES } from './blog-es/cost'
import { DEALER_ES } from './blog-es/dealer'
import { TRANSPONDER_ES } from './blog-es/transponder'
import { SCAMS_ES } from './blog-es/scams'
import { ONE_KEY_ES } from './blog-es/one-key'

/** Spanish blog posts, keyed by their Spanish slug (see BLOG_SLUG_ES in i18n.ts). */
export const BLOG_POSTS_DATA_ES: Record<string, BlogPostData> = {
  'cuanto-cuesta-copiar-llave-de-carro-nyc': COST_ES,
  'dealer-vs-cerrajero-llaves-de-carro-nyc': DEALER_ES,
  'se-puede-copiar-una-llave-con-chip': TRANSPONDER_ES,
  'como-evitar-estafas-de-cerrajeros-nyc': SCAMS_ES,
  'que-pasa-si-solo-tienes-una-llave-de-carro': ONE_KEY_ES,
}
