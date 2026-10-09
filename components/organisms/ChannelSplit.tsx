import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { TowelArt } from '@/components/atoms/TowelArt'
import { ArrowIcon, ArrowUpRightIcon } from '@/components/atoms/Icons'
import { Spotlight } from '@/components/effects/Interactive'
import { contactHref, type Locale } from '@/lib/i18n'
import type { HomeContent } from '@/content/home'

interface ChannelSplitProps {
  locale: Locale
  content: HomeContent['channels']
}

/** Toptan (kurumsal) ve perakende (mağaza) satış kanalları. */
export function ChannelSplit({ locale, content }: ChannelSplitProps) {
  const { wholesale, retail } = content

  return (
    <section className="py-20 sm:py-28">
      <div className="container-x grid gap-4 lg:grid-cols-12">
        {/* Toptan — koyu, imleci izleyen ışık */}
        <Spotlight className="on-dark reveal overflow-hidden rounded-[2rem] bg-ink text-paper lg:col-span-7">
          <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-12 lg:min-h-[40rem]">
            <TowelArt
              variant="stack"
              tone="clay"
              accent="cream"
              className="pointer-events-none absolute -right-10 -top-8 hidden h-72 w-72 opacity-90 md:block"
            />
            <div className="relative">
              <p className="kicker">{wholesale.kicker}</p>
              <h2 className="display-md mt-6 max-w-md text-paper">{wholesale.title}</h2>
              <p className="mt-6 max-w-lg leading-relaxed text-charcoal-300">{wholesale.text}</p>
            </div>
            <div className="relative mt-12">
              <ul className="border-t border-line-dark">
                {wholesale.links.map((l) => (
                  <li key={l.href} className="border-b border-line-dark">
                    <Link
                      href={l.href}
                      className="group flex items-center justify-between py-4 text-[1.0625rem] transition-[color,padding] duration-500 hover:pl-3 hover:text-orange-400"
                    >
                      {l.label}
                      <ArrowUpRightIcon className="h-4 w-4 opacity-50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={contactHref(locale)} className="btn btn-primary mt-8">
                {wholesale.cta}
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </Spotlight>

        {/* Perakende — açık, mağaza bilgisi */}
        <div className="reveal relative flex flex-col overflow-hidden rounded-[2rem] bg-beige-100 lg:col-span-5">
          <div className="relative grid h-64 place-items-center overflow-hidden sm:h-72">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-3xl"
            />
            <TowelArt
              variant="hanging"
              tone="cream"
              className="relative h-60 w-60 sm:h-64 sm:w-64"
            />
          </div>
          <div className="flex flex-1 flex-col p-7 sm:p-10">
            <p className="kicker">{retail.kicker}</p>
            <h2 className="display-md mt-6">{retail.title}</h2>
            <p className="mt-5 leading-relaxed text-charcoal-600">{retail.text}</p>
            <dl className="mt-8 grid gap-6 text-[0.9375rem] sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="text-caption font-semibold">{retail.addressLabel}</dt>
                <dd className="mt-1.5 leading-relaxed text-charcoal-600">
                  {SITE_CONFIG.address.fullDisplay}
                </dd>
              </div>
              <div>
                <dt className="text-caption font-semibold">{retail.hoursLabel}</dt>
                {retail.hours.map((h) => (
                  <dd
                    key={h}
                    className="mt-1.5 whitespace-nowrap leading-relaxed text-charcoal-600"
                  >
                    {h}
                  </dd>
                ))}
              </div>
            </dl>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-sm"
              >
                {retail.directions}
                <ArrowUpRightIcon />
              </a>
              <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="btn btn-outline btn-sm">
                {retail.call}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
