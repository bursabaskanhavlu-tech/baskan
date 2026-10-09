import { SITE_CONFIG } from '@/lib/config/site'
import { SplitText } from '@/components/effects/SplitText'

/**
 * Oturum başına bir kez gösterilen "kumaş perdesi" açılışı (~2,5 sn):
 * "Başkan Havlu" harf harf yükselir, ince çizgi ve %0→100 sayacı dolar;
 * ardından koyu paneller sırayla kalkar, turuncu paneller dalga gibi
 * takip eder ve siteyi açar.
 *
 * Tamamen CSS ile çalışır; görünürlüğü perdenin hemen ardından gelen küçük
 * betik (`INTRO_SCRIPT`) perde öğesine `data-show` ekleyerek açar. Durum
 * <html> üzerinde tutulmaz: React 19 hydration sırasında <html>/<body>
 * niteliklerini sıfırladığı için oradaki bir sınıf anında silinirdi.
 *  - İçerik perdenin arkasında ilk boyamada hazırdır (LCP gecikmez).
 *  - JS çalıştırmayan botlar / tarayıcılar perdeyi hiç görmez.
 *  - Hareket azaltma tercihi olan kullanıcılarda perde gösterilmez.
 *  - Tıklama veya Escape ile anında atlanır.
 */
const INTRO_SCRIPT = `(function(){var el=document.getElementById('intro');if(!el)return;try{if(matchMedia('(prefers-reduced-motion: reduce)').matches||sessionStorage.getItem('bh-intro'))return;sessionStorage.setItem('bh-intro','1');el.setAttribute('data-show','');var end=function(){el.removeAttribute('data-show')};setTimeout(end,2700);el.addEventListener('click',end);document.addEventListener('keydown',function(e){if(e.key==='Escape')end()})}catch(e){}})();`

const PANELS = [0, 1, 2, 3, 4]

export function IntroCurtain() {
  return (
    <>
      <div id="intro" className="intro" aria-hidden="true">
        <div className="intro-panels is-back">
          {PANELS.map((i) => (
            <span key={i} style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>
        <div className="intro-panels is-front">
          {PANELS.map((i) => (
            <span key={i} style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>
        <div className="intro-content">
          <p className="intro-kicker">Bursa · Havlucular Çarşısı · {SITE_CONFIG.founded}</p>
          <p className="intro-word">
            <SplitText text="Başkan" stagger={0.045} />{' '}
            <em>
              <SplitText text="Havlu" delay={0.25} stagger={0.045} />
            </em>
          </p>
          <div className="intro-meter">
            <span className="intro-bar" />
            <span className="intro-count" />
          </div>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
    </>
  )
}
