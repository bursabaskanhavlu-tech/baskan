import { SITE_CONFIG } from '@/lib/config/site'
import { MediaFrame } from '@/components/atoms/MediaFrame'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { InstagramIcon } from '@/components/atoms/Icons'
import type { ArtTone, TowelVariant } from '@/components/atoms/TowelArt'
import type { MediaSlot } from '@/content/media'
import type { HomeContent } from '@/content/home'
import { cn } from '@/lib/utils'

const tiles: {
  slot: MediaSlot
  art: TowelVariant
  tone: ArtTone
  accent?: ArtTone
  dark?: boolean
}[] = [
  { slot: 'instagram-1', art: 'stack', tone: 'white', accent: 'clay' },
  { slot: 'instagram-2', art: 'robe', tone: 'clay', dark: true },
  { slot: 'instagram-3', art: 'roll', tone: 'cream', accent: 'stone' },
  { slot: 'instagram-4', art: 'monogram', tone: 'sand', dark: true },
  { slot: 'instagram-5', art: 'hanging', tone: 'white' },
  { slot: 'instagram-6', art: 'stack', tone: 'stone', accent: 'cream', dark: true },
]

/** @bursahavlusu Instagram hesabına yönlendiren ızgara. */
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
        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {tiles.map((tile, i) => (
            <li key={tile.slot} className={cn('reveal', i % 2 === 1 && 'lg:translate-y-10')}>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Instagram"
                aria-label={`${content.follow}: @bursahavlusu`}
                className="group relative block overflow-hidden rounded-[1.5rem]"
              >
                <MediaFrame
                  slot={tile.slot}
                  art={tile.art}
                  artTone={tile.tone}
                  artAccent={tile.accent}
                  dark={tile.dark}
                  ratio="4 / 5"
                  animate={false}
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                />
                <span className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-ink/80 py-2 text-xs font-medium text-paper opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <InstagramIcon className="h-3.5 w-3.5" />
                  @bursahavlusu
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
