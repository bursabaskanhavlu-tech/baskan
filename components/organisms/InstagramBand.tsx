import { SITE_CONFIG } from '@/lib/config/site'
import { MediaFrame, type SwatchTone } from '@/components/atoms/MediaFrame'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { ArrowUpRightIcon, InstagramIcon } from '@/components/atoms/Icons'
import type { MediaSlot } from '@/content/media'
import type { HomeContent } from '@/content/home'

const tiles: { slot: MediaSlot; tone: SwatchTone }[] = [
  { slot: 'instagram-1', tone: 'cream' },
  { slot: 'instagram-2', tone: 'clay' },
  { slot: 'instagram-3', tone: 'stone' },
  { slot: 'instagram-4', tone: 'charcoal' },
  { slot: 'instagram-5', tone: 'white' },
  { slot: 'instagram-6', tone: 'sand' },
]

/** @bursahavlusu Instagram hesabına yönlendiren görsel ızgarası. */
export function InstagramBand({ content }: { content: HomeContent['instagram'] }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          kicker={content.kicker}
          title={content.title}
          text={content.text}
          action={
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-sm"
            >
              <InstagramIcon />
              @bursahavlusu
            </a>
          }
        />
        <ul className="mt-14 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {tiles.map((tile) => (
            <li key={tile.slot} className="reveal">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${content.follow}: @bursahavlusu`}
                className="group relative block"
              >
                <MediaFrame
                  slot={tile.slot}
                  tone={tile.tone}
                  ratio="1 / 1"
                  plain
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="transition-transform duration-700 ease-out-soft group-hover:scale-[0.98]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-paper opacity-0 transition-all duration-500 group-hover:bg-ink/35 group-hover:opacity-100">
                  <ArrowUpRightIcon className="h-6 w-6" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
